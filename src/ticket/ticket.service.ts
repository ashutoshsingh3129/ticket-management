import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './entities/ticket.entity';
import { CreateTicketDto, UpdateTicketDto } from './dto/ticket.dto';
import { AblyService } from '../services/ably.service';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket) private repo: Repository<Ticket>,
    private ablyService: AblyService,
  ) {}

  
 
  async create(dto: CreateTicketDto) {
    try {
      const ticket = this.repo.create(dto);
      await this.repo.save(ticket);
      await this.ablyService.publish('ticket_created', ticket);
      return { data: ticket, message: 'Ticket created successfully', statusCode: 201 };
    } catch (error) {
      throw new InternalServerErrorException({
        data: null,
        message: `Error creating ticket: ${error.message}`,
        statusCode: 500,
      });
    }
  }


  async findAll(status?: string, priority?: string) {
    const filters: any = {};
  
    if (status) {
      filters.status = status;
    }
  
    if (priority) {
      filters.priority = priority;
    }
  
    const tickets = await this.repo.find({ where: filters });
  
    return {
      data: tickets,
      message: 'Success',
      statusCode: 200,
    };
  }
  


  async findOne(id: string) {
    try {
      const ticket = await this.repo.findOne({ where: { id } });
      if (!ticket) {
        throw new NotFoundException({ data: null, message: `Ticket with ID ${id} not found`, statusCode: 404 });
      }
      return { data: ticket, message: 'Ticket fetched successfully', statusCode: 200 };
    } catch (error) {
      throw new InternalServerErrorException({
        data: null,
        message: `Error finding ticket: ${error.message}`,
        statusCode: 500,
      });
    }
  }

 
  async update(id: string, dto: UpdateTicketDto) {
    try {
      const existingTicket = await this.findOne(id);
      if (!existingTicket.data) {
        throw new NotFoundException({ data: null, message: `Ticket with ID ${id} not found`, statusCode: 404 });
      }
      await this.repo.update(id, dto);
      const updatedTicket = await this.findOne(id);
      await this.ablyService.publish('ticket_updated', updatedTicket);
      return { data: updatedTicket, message: 'Ticket updated successfully', statusCode: 200 };
    } catch (error) {
      throw new InternalServerErrorException({
        data: null,
        message: `Error updating ticket: ${error.message}`,
        statusCode: 500,
      });
    }
  }

 
  async delete(id: string) {
    try {
      const existingTicket = await this.findOne(id);
      if (!existingTicket.data) {
        throw new NotFoundException({ data: null, message: `Ticket with ID ${id} not found`, statusCode: 404 });
      }
      await this.repo.delete(id);
      await this.ablyService.publish('ticket_deleted', { id });
      return { data: null, message: 'Ticket deleted successfully', statusCode: 200 };
    } catch (error) {
      throw new InternalServerErrorException({
        data: null,
        message: `Error deleting ticket: ${error.message}`,
        statusCode: 500,
      });
    }
  }
}

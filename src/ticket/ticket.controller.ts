import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto, UpdateTicketDto } from './dto/ticket.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
@ApiTags('Tickets')
@Controller('api/tickets')
export class TicketController {
  constructor(private readonly service: TicketService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new ticket' })
  @ApiResponse({ status: 201, description: 'Ticket created successfully' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  create(@Body() dto: CreateTicketDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tickets' })
  @ApiQuery({ name: 'status', required: false, example: 'open', description: 'Filter by ticket status' })
  @ApiQuery({ name: 'priority', required: false, example: 'high', description: 'Filter by ticket priority' })
  @ApiResponse({ status: 200, description: 'Tickets fetched successfully' })
  findAll(
    @Query('status') status?: string,
    @Query('priority') priority?: string,
  ) {
    return this.service.findAll(status, priority);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a ticket by ID' })
  @ApiResponse({ status: 200, description: 'Ticket fetched successfully' })
  @ApiResponse({ status: 404, description: 'Ticket not found' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a ticket' })
  @ApiResponse({ status: 200, description: 'Ticket updated successfully' })
  @ApiResponse({ status: 404, description: 'Ticket not found' })
  update(@Param('id') id: string, @Body() dto: UpdateTicketDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a ticket' })
  @ApiResponse({ status: 200, description: 'Ticket deleted successfully' })
  @ApiResponse({ status: 404, description: 'Ticket not found' })
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}

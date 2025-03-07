import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agent } from './entities/agent.entity';

@Injectable()
export class AgentService {
  constructor(@InjectRepository(Agent) private repo: Repository<Agent>) {}

  
  async create(name: string, email: string) {
    try {
      const agent = this.repo.create({ name, email });
      await this.repo.save(agent);
      return { data: agent, message: 'Agent created successfully', statusCode: 201 };
    } catch (error) {
      throw new InternalServerErrorException({
        data: null,
        message: `Error creating agent: ${error.message}`,
        statusCode: 500,
      });
    }
  }

  
  async findAll() {
    try {
      const agents = await this.repo.find();
      return { data: agents, message: 'Agents fetched successfully', statusCode: 200 };
    } catch (error) {
      throw new InternalServerErrorException({
        data: null,
        message: `Error fetching agents: ${error.message}`,
        statusCode: 500,
      });
    }
  }
}

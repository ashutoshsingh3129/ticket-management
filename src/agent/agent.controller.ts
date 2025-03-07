import { Controller, Get, Post, Body } from '@nestjs/common';
import { AgentService } from './agent.service';
import { CreateAgentDto } from './dto/agent.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Agents')
@Controller('api/agents')
export class AgentController {
  constructor(private readonly service: AgentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new agent' })
  @ApiResponse({ status: 201, description: 'Agent created successfully' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  create(@Body() body: CreateAgentDto) {
    return this.service.create(body.name, body.email);
  }

  @Get()
  @ApiOperation({ summary: 'Get all agents' })
  @ApiResponse({ status: 200, description: 'Agents fetched successfully' })
  findAll() {
    return this.service.findAll();
  }
}

import { Module } from '@nestjs/common';
import { AgentController } from './agent.controller';
import { AgentService } from './agent.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agent } from './entities/agent.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([Agent])
    ],
  controllers: [AgentController],
  providers: [AgentService],
  exports: [TypeOrmModule],
})
export class AgentModule {}

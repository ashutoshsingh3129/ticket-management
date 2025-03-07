import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from './ticket/ticket.module';
import { AgentModule } from './agent/agent.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './ticket/entities/ticket.entity';
import { Agent } from './agent/entities/agent.entity';

@Module({
  imports: [ ConfigModule.forRoot({ isGlobal: true }),
      TypeOrmModule.forRoot({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: [Agent,Ticket],
        synchronize: true,
      }),
    
    TicketModule, AgentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

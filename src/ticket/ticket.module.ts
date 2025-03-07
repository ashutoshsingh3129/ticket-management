import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { Agent } from 'http';
import { AblyService } from 'src/services/ably.service';

@Module({
  imports: [
    
    TypeOrmModule.forFeature([Ticket])
  ],
  providers: [TicketService,AblyService],
  controllers: [TicketController]
})
export class TicketModule {}

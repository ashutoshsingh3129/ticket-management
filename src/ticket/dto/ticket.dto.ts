import { ApiProperty } from '@nestjs/swagger';

export class CreateTicketDto {
  @ApiProperty({ example: 'Server Down', description: 'Title of the ticket' })
  title: string;

  @ApiProperty({ example: 'The production server is not responding', description: 'Detailed issue description' })
  description: string;
}

export class UpdateTicketDto {
  @ApiProperty({ example: 'Server is slow', description: 'Updated title of the ticket', required: false })
  title?: string;

  @ApiProperty({ example: 'The server response time is slow after recent deployment', description: 'Updated description', required: false })
  description?: string;
}

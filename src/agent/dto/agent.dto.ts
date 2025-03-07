import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAgentDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the agent' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the agent' })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class UpdateAgentDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the agent', required: false })
  @IsString()
  name?: string;

  @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the agent', required: false })
  @IsEmail()
  email?: string;
}

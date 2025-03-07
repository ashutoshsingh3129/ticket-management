import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import * as Ably from 'ably';

@Injectable()
export class AblyService implements OnModuleInit, OnModuleDestroy {
  private ably: Ably.Realtime;
  private channel: Ably.RealtimeChannel;

  constructor() {
    this.ably = new Ably.Realtime(process.env.ABLY_API_KEY);
    this.channel = this.ably.channels.get('tickets'); // Channel name
  }

  async publish(event: string, data: any) {
    await this.channel.publish(event, data);
  }

  async onModuleInit() {
    console.log('AblyService initialized');
  }

  async onModuleDestroy() {
    this.ably.close();
    console.log('AblyService closed');
  }
}

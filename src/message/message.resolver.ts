import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';
import { Message } from '../graphql';
import { MessageService } from './message.service';

@Resolver('Message')
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}

  @Query() // Same name as messages.graphql
  getMessages(): Message[] {
    return this.messageService.findAll();
  }

  @Query('message')
  findOneById(@Args('id', ParseIntPipe) id: number): Message {
    return this.messageService.findOneById(id);
  }

  @Mutation()
  createMessage(@Args('description') description: string): Message {
    return this.messageService.create(description);
  }
}

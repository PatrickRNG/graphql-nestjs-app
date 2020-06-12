import { Injectable } from '@nestjs/common';
import { Message } from '../graphql';

@Injectable()
export class MessageService {
  private readonly messages: Message[] = [
    { id: 0, description: 'The message' },
    { id: 1, description: 'The second message' },
  ];

  create(description: string) : Message {
    const newMessage: Message = { id: this.messages.length + 1, description };
    this.messages.push(newMessage);
    return newMessage;
  }

  findAll(): Message[] {
    return this.messages;
  }

  findOneById(id: number): Message {
    return this.messages.find(message => message.id === id)
  }
  
}

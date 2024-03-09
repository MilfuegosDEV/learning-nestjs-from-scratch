import { Injectable } from '@nestjs/common';
import { UserDto } from './dto';

@Injectable()
export default class UserService {
  async getUser(id: string): Promise<UserDto> {
    const user = { id, username: 'as', email: 'as', password: 'asd' };
    return user;
  }
}

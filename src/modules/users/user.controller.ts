import { Controller, Get, Param } from '@nestjs/common';
import { UserDto } from './dto';
import UserService from './user.service';

@Controller('user')
export default class {
  constructor(private userService: UserService) {}

  @Get('/:id')
  async getUser(@Param('id') id: string): Promise<UserDto> {
    console.log('id', id);
    return await this.userService.getUser(id);
  }
}

import {
  Controller,
  Post,
  Put,
  Body,
  Param,
  Delete,
  Get,
  HttpCode,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from '../../shared/dtos/users';
import { UserDocument } from '../../domain/documents';
import { IUserController } from 'src/domain/interfaces/controllers';

@Controller('user')
export class UserController implements IUserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createUserDto: CreateUserDto): Promise<UserDocument> {
    // TODO: Add validation in case of the user already exists
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  async update(
    @Param('id') id,
    @Body() user: UpdateUserDto,
  ): Promise<UserDocument> {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<UserDocument> {
    return this.userService.delete(id);
  }

  @Get()
  async findAll(): Promise<UserDocument[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id): Promise<UserDocument> {
    return this.userService.findById(id);
  }

  @Get('email/:email')
  async findByEmail(@Param('email') email): Promise<UserDocument> {
    return this.userService.findByEmail(email);
  }

  @Get('username/:username')
  async findByUsername(@Param('username') username): Promise<UserDocument> {
    return this.userService.findByUsername(username);
  }
}

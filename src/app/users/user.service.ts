import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/mongo/repositories';
import { IUserService } from '../../domain/interfaces/services';
import { CreateUserDto, UpdateUserDto } from '../../shared/dtos/users';
import { UserDocument } from 'src/domain/documents';

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(user: CreateUserDto): Promise<UserDocument> {
    return this.userRepository.create(user);
  }

  update(id: string, user: UpdateUserDto): Promise<UserDocument> {
    return this.userRepository.update(id, user);
  }

  delete(id: string): Promise<UserDocument> {
    return this.userRepository.delete(id);
  }

  findById(id: string): Promise<UserDocument> {
    return this.userRepository.findById(id);
  }

  findByEmail(email: string): Promise<UserDocument> {
    return this.userRepository.findByEmail(email);
  }

  findByUsername(username: string): Promise<UserDocument> {
    return this.userRepository.findByUsername(username);
  }

  findAll(): Promise<UserDocument[]> {
    return this.userRepository.findAll();
  }
}

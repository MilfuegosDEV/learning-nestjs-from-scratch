import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from '../../../domain/documents';
import { CreateUserDto, UpdateUserDto } from '../../../shared/dtos/users';
import { IUserRepository } from '../../../domain/interfaces/repositories';

@Injectable()
export default class UserRepository implements IUserRepository {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}
  async create(user: CreateUserDto): Promise<UserDocument> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }
  async update(id: string, user: UpdateUserDto): Promise<UserDocument> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }
  async delete(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }
  async findById(id: string) {
    return this.userModel.findById(id).exec();
  }
  async findByUsername(username: string): Promise<UserDocument> {
    return this.userModel.findOne({ username }).exec();
  }
  async findByEmail(email: string): Promise<UserDocument> {
    return this.userModel.findOne({ email }).exec();
  }
  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }
}

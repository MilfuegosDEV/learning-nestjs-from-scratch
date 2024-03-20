import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from '../../infrastructure/mongo/repositories'; // Import the missing UserRepository class
import { UserSchema } from '../../infrastructure/mongo/schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserRepository, UserService],
})
export default class UserModule {}

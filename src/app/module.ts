import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), UserModule],
})
export class AppModule {}

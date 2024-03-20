import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserEntity } from '../../../domain/entities';

@Schema()
export class User extends UserEntity {
  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true, unique: true, lowercase: true })
  username: string;

  @Prop({ required: true, unique: true, lowercase: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, default: false })
  is_verified: boolean;
}

export default SchemaFactory.createForClass(User);

import { UserEntity } from '../entities';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<UserEntity>;

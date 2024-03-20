import { IUserService } from '../services';

export interface IUserController extends IUserService {
  // Add additional methods here
  // Example:
  // findByEmail(email: string): Promise<UserDocument>;
  // findByUsername(username: string): Promise<UserDocument>;
  // findAll(): Promise<UserDocument[]>;
  // findById(id: string): Promise<UserDocument>;
  // create(user: UserEntity): Promise<UserDocument>;
  // update(id: string, user: UserEntity): Promise<UserDocument>;
  // delete(id: string): Promise<UserDocument>;
}

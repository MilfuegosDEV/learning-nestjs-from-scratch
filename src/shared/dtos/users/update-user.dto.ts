import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export default class UpdateUserDto {
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  first_name: string;
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  last_name: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  username: string;
}

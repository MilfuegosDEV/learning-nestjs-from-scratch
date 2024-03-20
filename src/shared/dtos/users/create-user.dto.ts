import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export default class CreateUserDto {
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

  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

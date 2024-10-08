import { IsEmail, IsNotEmpty, IsString, Min, MinLength } from 'class-validator';

export class SigninDTO {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}

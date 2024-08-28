import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  
  name: string; 

  @IsNotEmpty() 
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsBoolean()
  @IsNotEmpty() 
  acceptedPolicy: boolean;

  
}

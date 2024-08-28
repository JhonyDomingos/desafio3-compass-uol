import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ValidateAuthRequest } from '../interface/validateAuth.interface';
import { UsersRepository } from 'src/modules/users/repositories/users.repository';
import { compare } from 'bcrypt';
import { User } from '@prisma/client';
@Injectable()
export class AuthUserService {
  constructor(private readonly userRepo: UsersRepository) {}

  async execute({ email, password }: ValidateAuthRequest) {
    const user = await this.userRepo.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Incorrect Email or Password !');
    }
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException('Incorrect Email or Password !');
    }

    console.log(user);
 
    return user;
  }
}

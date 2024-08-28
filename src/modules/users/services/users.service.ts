import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';
import { Users } from '../entities/users.entity';
import {
  CreateUsersRequest,
  type UserReturn,
} from '../interface/users.interface';
import { hashSync } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UsersRepository) {}

  async createUsers({
    name,
    email,
    password,
    acceptedPolicy,
    role,
  }: CreateUsersRequest): Promise<UserReturn> {
    const user = new Users({
      
      name,
      email,
      password: hashSync(password, 10),
      acceptedPolicy,
      role,
    });
    this.userRepo.create(user);
    return user;
  }

  async findByEmail(email: string): Promise<Users | null> {
    return this.userRepo.findByEmail(email);
  } 

  async findById(id: number): Promise<Users | null> {
    return this.userRepo.findById(id);
  }
}

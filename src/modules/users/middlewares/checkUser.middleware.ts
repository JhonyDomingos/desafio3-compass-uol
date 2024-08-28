import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import type { UsersService } from '../services/users.service';


@Injectable()
export class CheckUserMiddleware implements NestMiddleware {
  constructor(private readonly usersService: UsersService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { email, id } = req.body;

    if (email) {
      const existingUserByEmail = await this.usersService.findByEmail(email);
      if (existingUserByEmail) {
        throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
      }
    }

    if (id) {
      const existingUserById = await this.usersService.findById(id);
      if (existingUserById) {
        throw new HttpException('ID already exists', HttpStatus.BAD_REQUEST);
      }
    }

    next();
  }
}

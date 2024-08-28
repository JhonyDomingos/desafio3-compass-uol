import {
  BadRequestException,
  Injectable,
  type NestMiddleware,
} from '@nestjs/common';
import type { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '../dto/create-user.dto';
import { validate } from 'class-validator';

@Injectable()
export class UserValidatorMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, NextFunction: NextFunction) {
    const { name, email, password, acceptedPolicy } = req.body;

    const createUserBody = new CreateUserDto();

    createUserBody.name = name;
    createUserBody.email = email;
    createUserBody.password = password;
    createUserBody.acceptedPolicy = acceptedPolicy;

    const validation = await validate(createUserBody);

    if (validation.length) {
      throw new BadRequestException(validation);
    }

    return NextFunction();
  }
}

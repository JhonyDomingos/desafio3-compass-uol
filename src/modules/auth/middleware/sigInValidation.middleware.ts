import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import type { NextFunction, Request, Response } from 'express';
import { SigninDTO } from '../dtos/Signin.dto';
import { validate } from 'class-validator';

@Injectable()
export class SigninValidationMiddleware implements NestMiddleware {
  async use(
    req: Request,
    _: Response,
    NextFunction: NextFunction,
  ): Promise<void> {
    const { email, password } = req.body;

    const signinBody = new SigninDTO();

    signinBody.email = email;
    signinBody.password = password;

    const validation = await validate(signinBody); 

    if (validation.length) {
      throw new BadRequestException(validation);
    }

    return NextFunction();
  } 
}

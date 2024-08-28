import { Injectable } from '@nestjs/common';
import {
  SigninServiceRequest,
  UserPayload,
} from '../interface/validateAuth.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JWTService {
  constructor(private readonly jwtService: JwtService) {}

  async executeJWT({ user }: SigninServiceRequest) {
    const payloadJWT: UserPayload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      acceptedPolicy: user.acceptedPolicy,
      createdAt: user.createdAt,
    };

    return this.jwtService.sign(payloadJWT);
  }
}

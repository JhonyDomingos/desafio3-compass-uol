import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthUserService } from './services/auth.service';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private  authService: AuthUserService) {
    super({usernameField: 'email'});
  }

  async validate(email: string, password: string) {
    return await this.authService.execute({ email, password });
    
  }
}

import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthRequestModel } from '../models/authRequest.model';
import { JWTService } from '../services/jwt.service';
import { Public } from '../decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly jwtService: JWTService) {}

  @Post('signin')
  @Public()
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('local'))
  async signin(@Request() request: AuthRequestModel) {
    const access_token = await this.jwtService.executeJWT({
      user: request.user,
    });

    return { access_token };
  }

  @Get('authenticated')
  @UseGuards(AuthGuard('jwt'))
  async test(@Request() request: AuthRequestModel) {
    return request.user;
  }
}

import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { LocalStrategy } from './local.strategy';
import { AuthUserService } from './services/auth.service';
import { PrismaModule } from 'src/infra/database/prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { SigninValidationMiddleware } from './middleware/sigInValidation.middleware';
import { JwtModule } from '@nestjs/jwt';
import { JWTService } from './services/jwt.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    JwtModule.register({
      secret:process.env.SECRET_KEY!,
      signOptions: { expiresIn: String(process.env.JWT_EXPIRES_IN!) },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthUserService, JwtStrategy, LocalStrategy, JWTService],
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SigninValidationMiddleware).forRoutes('auth/signin');
  }
}

import { Module, type MiddlewareConsumer } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { PrismaModule } from 'src/infra/database/prisma/prisma.module';
import { UserValidatorMiddleware } from './middlewares/userValidator.middleware';
import { CheckUserMiddleware } from './middlewares/checkUser.middleware';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], 
})
export class UsersModule {}
 
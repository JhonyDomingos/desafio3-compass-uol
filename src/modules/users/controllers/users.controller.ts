import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserView } from '../View/user.view';
import { Users } from '../entities/users.entity';
import { Public } from 'src/modules/auth/decorators/public.decorator';
import type { UserReturn } from '../interface/users.interface';

@Controller('auth/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  @Public()
  @UsePipes(ValidationPipe)
  async createUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.createUsers(createUserDto);
    return UserView.httpResponse(user as Users);
  }
  @Public()
  @Get('/find/:id')
  async findById(id: number): Promise<UserReturn | null> { 
    return await this.usersService.findById(id);
  }
}

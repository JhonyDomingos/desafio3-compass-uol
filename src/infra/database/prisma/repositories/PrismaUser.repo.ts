import { PrismaService } from '../prisma.service'; // Ajuste o caminho conforme necessário
import { UsersRepository } from 'src/modules/users/repositories/users.repository';
import { Users } from 'src/modules/users/entities/users.entity';
import { PrismaUserMapper } from '../mappers/PrismaUserMapper';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepo implements UsersRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(user: Users): Promise<Users> {
    const userCreate = PrismaUserMapper.toPersistence(user);
    const createdUser = await this.prisma.user.create({
      data: userCreate,
    });

    return PrismaUserMapper.toDomain(createdUser);
  }

  async findByEmail(email: string): Promise<Users | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) throw new Error('User not found');

    return PrismaUserMapper.toDomain(user);
  }

  async findById(id: string){
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) throw new Error('User not found');

    return PrismaUserMapper.toDomain(user);
  }
}

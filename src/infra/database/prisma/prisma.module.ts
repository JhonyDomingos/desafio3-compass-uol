import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaUserRepo } from './repositories/PrismaUser.repo'; // Certifique-se de que o caminho está correto
import { UsersRepository } from 'src/modules/users/repositories/users.repository'; // Certifique-se de que o caminho está correto

@Module({
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useClass: PrismaUserRepo,
    },
  ],
  exports: [PrismaService, UsersRepository],
})
export class PrismaModule {}

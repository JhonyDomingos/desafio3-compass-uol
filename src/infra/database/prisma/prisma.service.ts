import { Injectable, type OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    this.$connect()
      .then(() => {
        console.log('Database connection established');
      })
      .catch((error) => {
        console.error('Error connecting to database: ', error);
      });
  }
}

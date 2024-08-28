import { Users } from 'src/modules/users/entities/users.entity';
import { User } from '@prisma/client';
import { UsersRoleEnum } from 'src/modules/users/interface/users.interface';

export class PrismaUserMapper {
  static toPersistence({
    id,
    createdAt,
    email,
    name,
    password,
    acceptedPolicy,
    role,
    updatedAt,
  }: Users): User {
    return {
      id,
      createdAt,
      email,
      name,
      password,
      acceptedPolicy,
      role,
      updatedAt,
    };
  }
  static toDomain({   
    createdAt,
    email,
    name,
    password,
    acceptedPolicy,
    role,
    updatedAt,
  }: User): Users {
    return new Users({
      createdAt,
      email,
      name,
      password,
      acceptedPolicy,
      role: role! as UsersRoleEnum,
      updatedAt: updatedAt!,
    });
  }
}

import type { Users } from '../../entities/users.entity';
import { UsersRepository } from '../../repositories/users.repository';

export class UsersRepositoryInMemory implements UsersRepository {
  public users: Users[] = [];

  async create(user: Users): Promise<Users> {
    this.users.push(user);

    return user;
  }

  findByEmail(email: string): Promise<Users | null> {
    const user = this.users.find((user) => user.email === email);
    return Promise.resolve(user || null);
  }

  findById(id: number): Promise<Users | null> {
    const user = this.users.find((user) => user.id === id);
    return Promise.resolve(user || null);
  }
}

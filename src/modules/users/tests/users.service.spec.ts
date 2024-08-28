import { UsersRoleEnum } from '../interface/users.interface';
import { UsersService } from '../services/users.service';
import { UsersRepositoryInMemory } from './repositories/users.test.repositoryInMemory';
import { hashSync } from 'bcrypt';

let service: UsersService;
let repository: UsersRepositoryInMemory;

describe('Creating User', () => {
  beforeEach(async () => {
    repository = new UsersRepositoryInMemory();
    service = new UsersService(repository);
  });

  it('should create a user', async () => {
    // Verifica que não há usuários inicialmente
    expect(repository.users).toEqual([]);

    const user = await service.createUsers({
      name: 'jonh',
      email: 'email@email.com',
      password: '123123',
      role: UsersRoleEnum.SUPER_ADMIN,
      acceptedPolicy: true,
    });

    // Verifica se o usuário foi criado corretamente sem a senha
    expect(user).toHaveProperty('name', 'jonh');
    expect(user).toHaveProperty('email', 'email@email.com');
    expect(user).toHaveProperty('role', UsersRoleEnum.SUPER_ADMIN);
    expect(user).toHaveProperty('createdAt');
    expect(user).toHaveProperty('updatedAt');
    expect(user).toHaveProperty('accetedPolicy', true);

    // Verifica se o repositório contém o usuário criado
    expect(repository.users).toHaveLength(1);
    expect(repository.users[0].toUserReturnPayload()).toMatchObject(user);
  });

  it('should create a user with a hashed password', async () => {
    const password = '123123323232323@';
    const hashedPassword = hashSync(password, 10);

    // Criar um usuário com senha
    const user = await service.createUsers({
      name: 'jonh',
      email: 'email@email.com',
      password: password,
      role: UsersRoleEnum.CUSTOMER,
      acceptedPolicy: true,
    });

    // Verifica que a senha foi hashada
   
    expect(repository.users[0].password).toMatch(/^\$2[ayb]\$.{56}$/); // Verifica o formato do hash bcrypt
  });
});

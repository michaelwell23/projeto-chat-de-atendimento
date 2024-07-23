import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

interface IUserCreate {
  name: string;
  email: string;
}

export class UsersService {
  async create({ name, email }: IUserCreate) {
    const usersRepository = getCustomRepository(UsersRepository);

    const userExists = await usersRepository.findOne({
      email,
    });

    if (userExists) {
      return userExists;
    }

    const user = usersRepository.create({ name, email });

    return user;
  }
}

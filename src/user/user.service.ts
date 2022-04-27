import { Injectable, NotFoundException } from '@nestjs/common';

const users = [
  {
    id: 1,
    name: 'Jhon',
  },
  {
    id: 2,
    name: 'Jane',
  },
];

@Injectable()
export class UserService {
  getAll() {
    return users;
  }

  getUserById(id: number) {
    const foundUser = users.find((u) => u.id === id);

    if (!foundUser) {
      throw new NotFoundException('User not found');
    }

    return foundUser;
  }

  getUserByName(name: string) {
    const foundUser = users.find((u) => u.name === name);

    if (!foundUser) {
      throw new NotFoundException('User not found');
    }

    return foundUser;
  }
}

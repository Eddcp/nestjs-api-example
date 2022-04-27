import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { UserEntity } from './models/user.entity';
import { UserI } from './models/user.interface';

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
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  add(user: UserI): Observable<UserI> {
    return from(this.userRepository.save(user));
  }

  getAll(): Observable<UserI[]> {
    return from(this.userRepository.find());
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

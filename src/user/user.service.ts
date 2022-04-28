import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { UserEntity } from './models/user.entity';
import { UserI } from './models/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  add(user: UserI): Observable<UserI> {
    return from(this.userRepository.save(user));
  }

  delete(id: string) {
    return this.userRepository.delete(id);
  }

  getAll(): Observable<UserI[]> {
    return from(this.userRepository.find());
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  getUserByName(name: string): Observable<UserI[]> {
    return from(this.userRepository.find({ where: { name } }));
  }

  update(id: string, user: UserI) {
    return this.userRepository.update(id, user);
  }
}

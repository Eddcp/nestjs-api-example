import { Controller, Get, Post, Redirect, Version } from '@nestjs/common';
import { UserService } from './user.service';

@Controller({
  path: 'user',
})
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @Version('1')
  @Redirect('http://localhost:3000/v2/user', 302)
  getUser() {
    return this.userService.getUser();
  }

  @Get()
  @Version('2')
  getUserV2() {
    return 'Redirected successfully';
  }

  @Post()
  saveUser() {
    return 'Created';
  }
}

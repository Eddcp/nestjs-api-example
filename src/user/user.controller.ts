import {
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  Version,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller({
  path: 'user',
})
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.userService.getUserById(Number(id));
  }

  @Get()
  @Version('1')
  @Redirect('http://localhost:3000/v2/user', 302)
  getUsers() {
    return this.userService.getUsers();
  }

  @Get()
  @Version('2')
  getUsersV2() {
    return 'Redirected successfully';
  }

  @Post()
  saveUser() {
    return 'Created';
  }
}

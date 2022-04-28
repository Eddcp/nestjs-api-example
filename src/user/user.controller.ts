import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Redirect,
  Version,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import UserSearchDTO from './models/user-search.dto';
import UserDTO from './models/user.dto';
import { UserI } from './models/user.interface';
import { UserService } from './user.service';

@Controller({
  path: 'user',
})
@ApiTags('User')
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
    return this.userService.getAll();
  }

  @Get()
  @Version('2')
  getUsersV2(@Query() params: UserSearchDTO) {
    const { name } = params;

    if (name) {
      return this.userService.getUserByName(name);
    }
    return this.userService.getAll();
  }

  @Post()
  saveUser(@Body() user: UserDTO): Observable<UserI> {
    return this.userService.add(user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.delete(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: UserDTO) {
    return this.userService.update(id, user);
  }
}

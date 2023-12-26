import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, ValidationPipe, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { UserListDto, AddUserDto } from "./dto/userList.dto";
import { JwtService } from '@nestjs/jwt';
import { LoginGuard } from "../login.guard";
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Inject(JwtService)
  private readonly jwtService: JwtService;

  @Post('login')
  async login(@Body(ValidationPipe) user: LoginDto) {
    const foundUser = await this.userService.login(user);

    if (foundUser) {
      const token = await this.jwtService.signAsync({
        user: {
          id: foundUser.id,
          username: foundUser.username
        }
      })
      return {
        token: token
      };
    } else {
      return 'login fail';
    }
  }

  @Post('register')
  async register(@Body(ValidationPipe) user: RegisterDto) {
    return await this.userService.register(user);
  }

  @Post('list')
  // @UseGuards(LoginGuard)
  async getUserList(@Body(ValidationPipe) user: UserListDto) {
    return await this.userService.getUserList(user);
  }

  @Post('addUser')
  async addUser(@Body(ValidationPipe) user: AddUserDto) {
    return await this.userService.addUser(user);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, ValidationPipe,UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto"
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
  @UseGuards(LoginGuard)
  async register(@Body(ValidationPipe) user: RegisterDto) {
    return await this.userService.register(user);
  }
}

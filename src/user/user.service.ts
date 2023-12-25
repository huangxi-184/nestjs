import { RegisterDto } from './dto/register.dto';
import { LoginDto } from "./dto/login.dto";
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { UserListDto, AddUserDto } from "./dto/userList.dto";
import { User } from './entities/user.entity';
import * as crypto from 'crypto';

function md5(str) {
  const hash = crypto.createHash('md5');
  hash.update(str);
  return hash.digest('hex');
}

@Injectable()
export class UserService {

  private logger = new Logger();

  @InjectRepository(User)
  private userRepository: Repository<User>;

  async register(user: RegisterDto) {
    const foundUser = await this.userRepository.findOneBy({
      username: user.username
    });

    if (foundUser) {
      throw new HttpException('用户已存在', 200);
    }

    const newUser = new User();
    newUser.username = user.username;
    newUser.password = md5(user.password);

    try {
      await this.userRepository.save(newUser);
      return '注册成功';
    } catch (e) {
      this.logger.error(e, UserService);
      return '注册失败';
    }
  }

  async login(user: LoginDto) {
    const foundUser = await this.userRepository.findOneBy({
      username: user.username,
    });

    if (!foundUser) {
      throw new HttpException('用户名不存在', 200);
    }
    if (foundUser.password !== md5(user.password)) {
      throw new HttpException('密码错误', 200);
    }
    return foundUser;
  }

  async getUserList(user: UserListDto) {

    const [users, usersCount] = await this.userRepository.findAndCount({
      skip: user.pageSize * (user.pageNumber - 1),
      take: user.pageSize,
      where: {
        nickname: Like(`%${user.nickName}%`),
        username: Like(`%${user.account}%`)
      },
      order: {
        updateTime: "DESC",
      }
    });
    return {
      code: 200,
      msg: '查询成功',
      flag: true,
      data: {
        list: users,
        total: usersCount
      },
    }
  }

  async addUser(user: AddUserDto) {
    const oneUser = new User();
    oneUser.username = user.account;
    oneUser.password = md5(user.password);
    oneUser.nickname = user.nickname;
    oneUser.role = user.role;

    try {
      await this.userRepository.save(oneUser);
      return {
        code: 200,
        msg: '添加成功',
        flag: true,
        data: null
      };
    } catch (e) {
      return {
        code: 500,
        msg: '添加失败',
        flag: false,
        data: null
      };;
    }
  }
}

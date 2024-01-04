import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mysqlConfig } from './configuration'
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
// import { createClient } from 'redis';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(mysqlConfig as TypeOrmModuleOptions),
    JwtModule.register({
      global: true,
      secret: 'huangxi',
      signOptions: { expiresIn: '1d' }
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // redis 配置
    // {
    //   provide: 'REDIS_CLIENT',
    //   async useFactory() {
    //     const client = createClient({
    //       socket: {
    //         host: 'localhost',
    //         port: 6379
    //       }
    //     });
    //     await client.connect();
    //     return client;
    //   }
    // }
  ],
})
export class AppModule { }

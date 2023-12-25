import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "sh-cynosdbmysql-grp-rrgrxyr4.sql.tencentcdb.com",
      port: 20020,
      username: "root",
      password: "Huwenting520.520",
      database: "demo",
      synchronize: true,
      logging: true,
      entities: [User],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      }
    }),
    JwtModule.register({
      global: true,
      secret: 'huangxi',
      signOptions: { expiresIn: '1h' }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

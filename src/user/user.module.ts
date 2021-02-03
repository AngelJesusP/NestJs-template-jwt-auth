import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../Entity/User.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [UserService], /* agregamos el el usuario Service */
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}

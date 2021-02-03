import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../Entity/User.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity> 
    ){}

    
    setAddUser(userNew): Boolean {
        try {
            this.userRepository.insert(userNew);
            return true;
        } catch (error) {
            return false;
        }
    }

    /* Este metodo retorna un Ussuario Entity si se encuentra registrado */
    async findOneUser(username: string): Promise<UserEntity | undefined> {
        return this.userRepository.findOne({username});
    }

}

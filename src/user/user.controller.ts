import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from '../DTO/User.dto';

@Controller('user')
export class UserController {

    constructor(private userService:UserService){}

    @Post('add')
    setRegistarUsuario(@Body() userNew:UserDto): {} {
        console.log(userNew);
        const respuesta = this.userService.setAddUser(userNew);
        return (respuesta)? {"msg":"Completado"}: {"msg":"No se pudo completar"};
    }

}

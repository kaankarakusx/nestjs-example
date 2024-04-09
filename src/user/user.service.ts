import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {

    activeUsers(){
        return [
            {id:1,name:"kaan"},
            {id:2,name:"batuhan"}
        ]
    }

    createUser(createUserDto:CreateUserDto){
        return {message:"saved",createUserDto};
    }
}

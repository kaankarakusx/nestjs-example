import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Request } from 'express';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService){}

    @Get()
    activeUsers(){
      return this.userService.activeUsers();
    }

    @Post()
    createUser(@Body() body:CreateUserDto){
      return this.userService.createUser(body);
    } 
}

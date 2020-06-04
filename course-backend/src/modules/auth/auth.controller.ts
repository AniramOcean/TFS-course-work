import { Controller, Request, Post, UseGuards, Get, HttpException, HttpStatus, Body } from '@nestjs/common';
import {AuthService} from './auth.service';
import {LocalAuthGuard} from './local-auth.guard';
import {JwtAuthGuard} from './jwt-auth.guard';
import { RegistrationStatus } from './interface/RegistrationStatus';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    //
    // @UseGuards(LocalAuthGuard)
    // @Post('register')
    // async register(@Request() req) {
    //     return this.authService.register(req.user);
    // }

    @Post('register')
    public async register(@Body() createUserDto: CreateUserDto): Promise<RegistrationStatus> {
        const result: RegistrationStatus = await this.authService.register(
          createUserDto,
        );

        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        }

        return result;
    }
}

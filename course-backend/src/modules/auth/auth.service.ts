import {Injectable} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';
import { User } from '../users/user.entity';
import { RegistrationStatus } from './interface/RegistrationStatus';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {
    }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findByName(username);

        if (user && user.password === pass) {
            const { password, ...result } = user;

            return result;
        }

        return null;
    }

    async login(user: any) {
        const payload = {username: user.username, id: user.id};
        return {
            // eslint-disable-next-line @typescript-eslint/camelcase
            access_token: this.jwtService.sign(payload),
        };
    }

    //
    // async register(user: User):Promise<any> {
    //     return this.usersService.create(user);
    // }
    async register(userDto: CreateUserDto): Promise<RegistrationStatus> {
        let status: RegistrationStatus = {
            success: true,
            message: 'user registered',
        };

        try {
            await this.usersService.create(userDto);
        } catch (error) {
            status = {
                success: false,
                message: error,
            };
        }

        return status;
    }
}

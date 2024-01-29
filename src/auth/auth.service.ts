/* eslint-disable prettier/prettier */
import { Injectable} from '@nestjs/common';

@Injectable({})

export class AuthService {

    signup() {
        return {message: "I am signed up mtf"};
    }

    signin() {
        return {message: "I am signed in mtf"};
    }
}
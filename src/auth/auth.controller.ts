import { Body, Controller, Post } from '@nestjs/common';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { AuthForgetDTO } from './dto/auth-forget.dto';
import { AuthResetDTO } from './dto/auth-reset.dto';

@Controller('auth')
export class AuthController {
  @Post('login')
  async(@Body() body: AuthLoginDTO) {
    return body;
  }

  @Post('register')
  async register(@Body() body: AuthRegisterDTO) {
    return body;
  }

  @Post('forget')
  async forget(@Body() body: AuthForgetDTO) {
    return body;
  }

  @Post('reset')
  async reset(@Body() body: AuthResetDTO) {
    return body;
  }
}

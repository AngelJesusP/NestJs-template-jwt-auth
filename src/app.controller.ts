import { Controller, Get, Post, Render, Req, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Request, Response} from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}

  @Get('login')
  getHello(@Req() request: Request, @Res() response: Response) {
    response.render('login.html');
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Req() request: Request) {
    return request.user;
  }

  @UseGuards(LocalAuthGuard)
  @Post('jwt/login')
  async loginJwt(@Req() request: Request) {
    return this.authService.login(request.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() request: Request) {
    return request.user;
  }

}

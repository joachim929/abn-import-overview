import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

  constructor() {
  }

  canActivate(): boolean {
    // Logic/getToken/whatever you need the guard to guard...
    return true;
  }
}

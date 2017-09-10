import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {UserAuthority} from "../helper/user.authority";

@Injectable()
export class ClientGuard implements CanActivate {

  constructor() {

  }

  canActivate(): boolean {
    return UserAuthority.isCustomer();
  }

}
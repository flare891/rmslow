import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthState } from './+state/auth/auth.state';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate() {
    const isAuthenticated = this.store.selectSnapshot(
      AuthState.isAuthenticated
    );
    return isAuthenticated;
  }
}

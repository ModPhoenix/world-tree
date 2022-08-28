import { ACCESS_TOKEN_KEY } from 'settings';
import { Claims } from 'types';

import { parseJwt } from '../parseJwt';

export function getAccessToken(): string | null {
  return localStorage.getItem(ACCESS_TOKEN_KEY) || null;
}

export function saveAccessToken(accessToken: string) {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

export function removeAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function getClaims(token: string | null): Claims | null {
  if (!token) {
    return null;
  }

  return parseJwt(token);
}

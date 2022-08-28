import jwt_decode from 'jwt-decode';

import { Claims } from 'types';

export function parseJwt(token: string): Claims | null {
  try {
    return jwt_decode<Claims>(token);
  } catch (e) {
    return null;
  }
}

import { sign } from 'jsonwebtoken';
import { User } from '@/models/user';

export function createJWT(user: User) {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is not defined');
  }

  if (!user._id) {
    return false;
  }

  return sign(
    { userId: user._id.toString(), email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '72h' }
  );
}

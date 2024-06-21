// nextauth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";

interface IUser extends DefaultUser {
  /**
   * Roles del usuario
   */
  roles?: string[];
  token?: string;
  /**
   * Agregar cualquier otro campo que tu manejas
   */
}

declare module "next-auth" {
  interface User extends IUser {}

  interface Session {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      fullName: string;
      email: string;
      roles: string[];
    } & DefaultSession['user'];
  }
}
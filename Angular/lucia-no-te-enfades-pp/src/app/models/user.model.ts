import { Rol } from './rol.model';

export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    password: string;
    rol: Rol;
    firstName: string;
    lastName: string;
    token: string;
    
}
import { Team } from './team.model';
import { User } from './user.model';

export class Player{
    idPlayer: number;
    user: User;
    description: string;
    team: Team;
}
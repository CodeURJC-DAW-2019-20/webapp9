import { Team } from './team.model';
import { User } from './user.model';

export interface Player{
    idPlayer: number;
    user: User;
    description: string;
    team: Team;
}
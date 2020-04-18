import { Tournament } from './tournament.model';

export interface Game{
    idGame: number;
    id_game?:number;
    tournament: Tournament;
}
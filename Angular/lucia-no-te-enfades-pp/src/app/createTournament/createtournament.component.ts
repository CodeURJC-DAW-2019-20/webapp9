import { Component } from '@angular/core';

import { CreatetournamentService } from './createtournament.service';
import { TournamentService } from '../tournament/tournament.service';

import { Tournament } from '../models/tournament.model';

@Component({
    selector: 'createtournament',
    templateUrl:'./createtournament.component.html'
})

export class CreatetournamentComponent{
    tournament: Tournament;

    constructor(private createtournamentService: CreatetournamentService, private tournamentService: TournamentService){}

    createTournamentForm(){
        this.createtournamentService.addTournament(this.tournament).subscribe(
           tournament => {
               let data: any = tournament;
           },
           error => console.error('Error creating tournament ' + error)
        );
    
    }

    save(){
        this.createtournamentService.addTournament(this.tournament).subscribe(
            team => { 
                let data: any = team;
            },
            error => console.error('Error creating new Team: ' + error)
    }
}
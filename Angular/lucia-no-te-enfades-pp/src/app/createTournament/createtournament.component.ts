import { Component } from '@angular/core';

import { CreatetournamentService } from './createtournament.service';

import { Tournament } from '../models/tournament.model';

@Component({
    selector: 'createtournament',
    templateUrl:'./createtournament.component.html'
})

export class CreatetournamentComponent{
    tournament: Tournament;

    constructor(private createtournamentService: CreatetournamentService){}

    createTournamentForm(){
        this.createtournamentService.addTournament(this.tournament).subscribe(
           tournament => {
               let data: any = tournament;
           },
           error => console.error('Error creating tournament ' + error)
        );
    }
}
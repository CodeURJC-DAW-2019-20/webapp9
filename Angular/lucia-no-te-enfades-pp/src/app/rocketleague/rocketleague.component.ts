import { Component } from '@angular/core';

import { RocketleagueService } from './rocketleague.service';

import { Tournament } from '../tournament/tournament.model';

@Component({
    selector: 'rocketleague',
    templateUrl:'./rocketleague.component.html'
})

export class RocketleagueComponent{
    tournament: Tournament;

    constructor(private rocketleagueService: RocketleagueService){}

    tournamentsOnHtml(){
        this.rocketleagueService.getTournaments().subscribe(
           tournament => {
               let tournaments: any = tournament;
           },
           error => console.error('Error finding tournaments ' + error)
        );
    }
}
import { Component } from '@angular/core';

import { RocketleagueService } from './rocketleague.service';

import { Tournament } from '../tournament/tournament.model';

@Component({
    selector: 'rocketleague',
    templateUrl:'./rocketleague.component.html'
})

export class RocketleagueComponent{
    tournaments = new Array<Tournament>();

    constructor(private rocketleagueService: RocketleagueService){
       
    }
    ngOnInit(){
        this.tournamentsOnHtml(); 
    }
    
    tournamentsOnHtml(){
        this.rocketleagueService.getTournaments().subscribe(
            respuesta => { 
                let data: any = respuesta;
                for(var i = 0; i < data.length; i++){
                    this.tournaments.push(data[i]);
                }
            },
        )
       /* this.rocketleagueService.getTournaments().subscribe(
           tournaments => {
               let tournament: any = tournaments;
           },
           error => console.error('Error finding tournaments ' + error)
        );*/
    }
    
}
import { Component } from '@angular/core';

import { RocketleagueService } from '../login/rocketleague.service';

import { Tournament } from '../models/tournament.model';

@Component({
    selector: 'rocketleague',
    templateUrl:'./rocketleague.component.html',
    styleUrls: ['./landing-page.component.min.css']
})

export class RocketleagueComponent{
    tournaments = new Array<Tournament>();

    imgSteamIconUrl = "assets/steam-Icon.png";
    imgTwitchIconUrl = "assets/twitch-icon.png";
    imgInfoIconUrl = "assets/info-icon.png";
    imgDefaultTournamentUrl = "assets/defaultTournament.png";
    imgBackgroundUrl = "assets/bg-rocketLeague.jpg";


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
    }
    
}
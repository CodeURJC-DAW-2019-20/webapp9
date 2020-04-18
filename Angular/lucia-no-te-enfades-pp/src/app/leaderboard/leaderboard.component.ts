import { Component } from '@angular/core';

import { TeamsService } from '../_servicies/teams.service';

import { Team } from '../models/team.model';

declare var loaderLeaderboard: any;

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

@Component({
    selector: 'leaderboard',
    templateUrl: './leaderboard.component.html',
    styleUrls: ['./style.component.css']
})



export class LeaderboardComponent {

    teamsList = new Array<Team>();
    pageCounter=0;
    pos = 1;

    allShown = false;

    constructor(private teamsService: TeamsService){
        this.showMore();

    }

    showMore(){
        loaderLeaderboard.loadSpinner();
        this.teamsService.getTeams(this.pageCounter).subscribe(
            response => {
                
                this.teamsList = response;
                this.teamsList.forEach(element => {
                    if(element.elo!=0){
                        loaderLeaderboard.fn(this.pos++,element);
                    }
                });
                
                this.pageCounter++;
            },
            error => {
                this.allShown=true;
                console.error('Error getting teams: ' + error) 
                }
        )
        loaderLeaderboard.unloadSpinner();       
    }
    

}
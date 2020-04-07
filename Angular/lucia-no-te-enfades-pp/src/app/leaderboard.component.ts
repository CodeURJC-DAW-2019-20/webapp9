import { Component } from '@angular/core';

import { TeamsService } from './teams.service';

import { Team } from './team.model';

@Component({
    selector: 'leaderboard',
    templateUrl: './leaderboard.component.html'
})
export class LeaderboardComponent {

    teamsList = new Array<Team>();
    iniCont = 2;

    constructor(private teamsService: TeamsService){}

    getIniLeaderboard(){
        this.teamsService.getLeaderBoard().subscribe(
            team => { 
                let data: any = team;
                for(var i = 0; i < this.iniCont; i++){
                    this.teamsList.push(data[i]);
                }

            },
            error => console.error('Error finding initial leaderboard: ' + error)
        );
    }

    getAllLeaderboard(){
        this.teamsService.getLeaderBoard().subscribe(
            team => { 
                let data: any = team;
                for(var i = this.iniCont; i < data.length; i++){
                    this.teamsList.push(data[i]);
                }
            },
            error => console.error('Error finding leaderboard: ' + error)
        );
    }

}
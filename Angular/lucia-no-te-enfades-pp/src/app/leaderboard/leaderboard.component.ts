import { Component } from '@angular/core';

import { TeamsService } from '../team/teams.service';

import { Team } from '../team/team.model';

@Component({
    selector: 'leaderboard',
    templateUrl: './leaderboard.component.html',
    styleUrls: ['./style.component.css']
})
export class LeaderboardComponent {

    teamsList = new Array<Team>();
    teamsListShow = new Array<Team>();
    iniCont = 3;
    cont = 3;
    nextTop = 10;
    allNotShown = true;

    constructor(private teamsService: TeamsService){
        this.getIniLeaderboard();
        this.getAllLeaderboard();
    }

    getIniLeaderboard(){
        this.teamsService.getLeaderBoard().subscribe(
            team => { 
                let data: any = team;
                for(var i = 0; i < this.iniCont; i++){
                    data[i].pos = i + 1;
                    this.teamsListShow.push(data[i]);
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
                    data[i].pos = i + 1;
                    this.teamsList.push(data[i]);
                }
            },
            error => console.error('Error finding leaderboard: ' + error)
        );
    }

    showMore(){
        for(var i = this.cont; i < this.nextTop; i++){
            if(i < this.teamsList.length){
                this.teamsListShow.push(this.teamsList[i]);
            }else{
                this.allNotShown = false;
            }
        }
        this.cont = this.nextTop;
        this.nextTop = this.nextTop + 10;
    }

}
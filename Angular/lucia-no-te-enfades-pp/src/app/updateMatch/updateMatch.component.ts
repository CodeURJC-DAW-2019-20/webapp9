import { Component } from '@angular/core';

import { Play } from '../models/play.model';
import { MatchService, resultBody } from '../_servicies/match.service';
import { TournamentService } from '../_servicies/tournament.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamsService } from '../_servicies/teams.service';
import { HttpHeaders } from '@angular/common/http';
import { Game } from '../models/game.model';
import { Team } from '../models/team.model';

@Component({
    selector: 'updateMatch',
    templateUrl:'./updateMatch.component.html',
})

export class UpdateMatchComponent{
    idTournament:number;
    idPlay:number;
    play = new Play;
    resultArray = new Array<resultBody>();
    games:Array<Game>;
    id:Array<number>;
    team:Team;

    constructor(private matchservice: MatchService, private tournamentservice:TournamentService, private router: Router,
        activatedRoute: ActivatedRoute, private teamsservice:TeamsService){
        this.idTournament = activatedRoute.snapshot.params['idTournament'];
        this.idPlay = activatedRoute.snapshot.params['pos'];
        this.id=new Array();
    };

    ngOnInit(){
        this.resultArray[0]=new resultBody;
        this.resultArray[1]=new resultBody;
        this.tournamentservice.getPlays(this.idTournament).subscribe(
            response => {
                let data: any = response;
                this.play = data[this.idPlay-1];
            },
            error => console.error('Error finding plays' + error)
         );
    }
    updateGame(){        
        this.matchservice.getGames(this.idTournament).subscribe(
            response => {
                let data: any = response;
                this.games=response;
                this.tournamentservice.getPlays(this.idTournament).subscribe(
                    response => {
                        let data: any = response;
                        this.play = data[this.idPlay-1];
                        this.teamsservice.getTeambyName(this.play.name1).subscribe(
                            response => {
                                let data: any = response;
                                this.team = data;
                                this.id[0]=this.team.id;
                                this.teamsservice.getTeambyName(this.play.name2).subscribe(
                                    response => {
                                        let data: any = response;
                                        this.team = data;
                                        this.id[1]=this.team.id;

                                        if (this.play.nameWinner===this.play.name1){
                                            this.resultArray[0].winner=true;
                                            this.resultArray[1].winner=false;
                                        }
                                        else{
                                            this.resultArray[0].winner=false;
                                            this.resultArray[1].winner=true; 
                                        }                                   
                                        this.matchservice.updateMatch(this.games,this.idPlay, this.id ,this.resultArray);                                       
                                    },
                                    error => console.error('Error finding team'+ error)
                                );
                            },   
                        );
                    },
                    error => console.error('Error finding plays' + error)
                 );
            },
            error => console.error('Error finding plays' + error)
         );
    }
}
 


import { Component } from '@angular/core';

import { Play } from '../models/play.model';

import { TournamentService } from '../_servicies/tournament.service';
import { PlayersService } from '../_servicies/players.service';
import { Tournament } from '../models/tournament.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Team } from '../models/team.model';
import { UsersService } from '../_servicies/users.service';

const GOOGLE_API = "https://maps.googleapis.com/maps/api/js?sensor=false";
const GOOGLE_SCRIPT = "../assets/js/googleMap.js";

declare var loadMap: any;

@Component({
    selector: 'tournament',
    templateUrl:'./tournament.component.html',
    styleUrls: ['./diamonds-tournament-style.component.css']
})



export class TournamentComponent{
    play = new Play;
    tournament = new Tournament;
    idTournament:number;
    nameTournament: string;
    plays = new Array<Play>();
    team = new Team;
    username: string;

    loadAPI0: Promise<any>;
    loadAPI: Promise<any>;
    loadAPI2: Promise<any>;


    constructor(private usersService: UsersService, private tournamentService: TournamentService, private playersService: PlayersService, private router:Router, activatedRoute: ActivatedRoute){
        this.idTournament=activatedRoute.snapshot.params['idTournament'];
    }

    ngOnInit(){
        this.tournamentService.getPlays(this.idTournament).subscribe(
           play => {
               let data: any = play;
               for(var i = 0; i < data.length; i++){
                    data[i].pos = i + 1;
                    this.plays.push(data[i]);
                    console.log("pera");
               }
           },
           error => console.error('Error finding plays' + error)
        );

        this.getTournament(this.idTournament);

    }

    getTournament(id: number){
        this.tournamentService.getTournamentById(this.idTournament).subscribe(
            tournament => {
                let data: any = tournament;
                this.tournament.name = data.name;
                this.tournament.numTeams = data.numTeams;
                this.tournament.latitude = data.latitude;
                this.tournament.longitude = data.longitude;
                loadMap.func1(this.tournament.latitude, this.tournament.longitude);
            },
            error => console.error('Error finding tournament' + error)
        );
    }

    addTeamToTournament(){

        this.username = this.usersService.getActualUserName();

        this.usersService.getUserByUserName(this.username).subscribe(
            usr =>{
                this.playersService.getPlayerByUserId(usr.iduser).subscribe(
                    plyr =>{
                        this.team = plyr.team;
                        this.joinTournament();
                        
                    },
                    error => {
                        console.error('Error finding player' + error)
                    }
                )
            },
            error => {
                console.error('Error finding user' + error)
            }
        )

    }

    joinTournament(){
        this.tournamentService.joinTournament(this.idTournament, this.team).subscribe(
            _ => {
                window.location.reload();
            },
            error => console.error('Error joining tournament: ' + error)
        );
    }

}
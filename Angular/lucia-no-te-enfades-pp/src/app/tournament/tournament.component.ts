import { Component } from '@angular/core';

import { Play } from '../models/play.model';

import { TournamentService } from '../_servicies/tournament.service';
import { Tournament } from '../models/tournament.model';
import { Router, ActivatedRoute } from '@angular/router';

const GOOGLE_API = "https://maps.googleapis.com/maps/api/js?sensor=false";
const GOOGLE_SCRIPT = "../assets/js/googleMap.js";

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

    loadAPI0: Promise<any>;
    loadAPI: Promise<any>;
    loadAPI2: Promise<any>;

    constructor(private tournamentService: TournamentService, private router:Router, activatedRoute: ActivatedRoute){
        this.idTournament=activatedRoute.snapshot.params['idTournament'];
    }

    ngOnInit(){
        this.tournamentService.getPlays(this.idTournament).subscribe(
           play => {
               let data: any = play;
               for(var i = 0; i < data.length; i++){
                    data[i].pos = i + 1;
                    this.plays.push(data[i]);
               }
           },
           error => console.error('Error finding plays' + error)
        );

        this.getTournament(this.idTournament);
        this.nameTournament = this.tournament.name;

        this.script1();
        this.script2();
    }

    getTournament(){
        this.tournamentService.getTournamentById(this.idTournament).subscribe(
            tournament => {
                let data: any = tournament;
                this.tournament.name = data.name;
                this.tournament.numTeams = data.numTeams;
                this.tournament.latitude = data.latitude;
                this.tournament.longitude = data.longitude;
            },
            error => console.error('Error finding tournament' + error)
        );
    }

    addTeamToTournament(){
        
    }

    script1() {
        this.loadAPI = new Promise((resolve) => {
            console.log('resolving promise...');
            this.loadScript(GOOGLE_API);
        });
    }

    script2() {
        this.loadAPI2 = new Promise((resolve) => {
            console.log('resolving promise...');
            this.loadScript(GOOGLE_SCRIPT);
        });
    }

    loadScript(url: string) {
        console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }

}
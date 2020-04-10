import { Component } from '@angular/core';

import { TeamsService } from './teams.service';
import { UsersService } from '../user/users.service';
import { PlayersService } from '../player/players.service';

import { HttpClient } from '@angular/common/http';

import { Team } from './team.model';
import { Player } from '../player/player.model';
import { User } from '../profile/user.model';

const BASE_URL = 'https://127.0.0.1:8443/api/teams/';

@Component({
    selector: 'team',
    templateUrl: './team.component.html',
    styleUrls: ['./style.component.css', './teamCreation.component.css']
})
export class TeamComponent {
    team = new Team;
    player: Player;
    user1 = new User;
    user2 = new User;
    user3 = new User;

    constructor(private http: HttpClient ,private teamsService: TeamsService, private usersService: UsersService, private playersService: PlayersService){}

    save() {
        this.teamsService.addTeam(this.team).subscribe(
            team => { 
                let data: any = team;
                let idTeam = data.id;
                this.readUser(idTeam);
            },
            error => console.error('Error creating new Team: ' + error)
        );
        
    }

    readUser(idTeam: number){
        this.usersService.getUserByUserName(this.user1.username).subscribe(
            user => {
                let data: any = user;
                let idUser = data.iduser;
                this.changePlayerTeam(idUser);
            },
            error => console.error('Error finding user ' + error)
        );

        this.usersService.getUserByUserName(this.user2.username).subscribe(
            user => {
                let data: any = user;
                let idUser = data.iduser;
                this.changePlayerTeam(idUser);
            },
            error => console.error('Error finding user ' + error)
        );

        this.usersService.getUserByUserName(this.user3.username).subscribe(
            user => {
                let data: any = user;
                let idUser = data.iduser;
                this.changePlayerTeam(idUser);
            },
            error => console.error('Error finding user ' + error)
        );
    }

    changePlayerTeam(idUser: number){
        this.playersService.getPlayerByUserId(idUser).subscribe(
            player => {
                let data: any = player;
                let idPlayer = data.idPlayer;
                this.changeTeam(idPlayer, this.team);
            },
            error => console.error('Error finding player ' + error)
        );
    }

    changeTeam(idPlayer: number, team: Team){
        this.playersService.updatePlayerTeam(idPlayer, team).subscribe(
            player =>{},
            error => console.error('Error updating team ' + error)
        );
    }

}
import { Component } from '@angular/core';

import { TeamsService } from './teams.service';
import { UsersService } from './users.service';
import { PlayersService } from './players.service';

import { Team } from './team.model';
import { Player } from './player.model';
import { User } from './user.model';

@Component({
    selector: 'team',
    templateUrl: './pagina.component.html'
})
export class TeamComponent {
    team: Team;
    player: Player;
    user1: User;
    user2: User;
    user3: User;

    constructor(private teamsService: TeamsService, private usersService: UsersService, private playersService: PlayersService){}

    save() {
        this.teamsService.addTeam(this.team).subscribe(
            team => { 
                let data: any = team;
                let idTeam = data.idTeam;
                this.readUser(idTeam);
            },
            error => console.error('Error creating new Team: ' + error)
        );
    }

    readUser(idTeam: number){
        this.usersService.getUserByUserName(this.user1.userName).subscribe(
            user => {
                let data: any = user;
                let idUser = data.idUser;
                this.changePlayerTeam(idUser);
            },
            error => console.error('Error finding user ' + error)
        );

        this.usersService.getUserByUserName(this.user2.userName).subscribe(
            user => {
                let data: any = user;
                let idUser = data.idUser;
                this.changePlayerTeam(idUser);
            },
            error => console.error('Error finding user ' + error)
        );

        this.usersService.getUserByUserName(this.user3.userName).subscribe(
            user => {
                let data: any = user;
                let idUser = data.idUser;
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
                this.changeTeam(idPlayer, data);
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
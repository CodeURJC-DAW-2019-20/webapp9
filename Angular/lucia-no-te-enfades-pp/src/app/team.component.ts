import { Component } from '@angular/core';

import { TeamsService } from './teams.service';
import { Team } from './team.model';
import { Player } from './player.model';
import { User } from './user.model';

@Component({
    selector: 'team',
    templateUrl: './team.component.html'
})
export class TeamFormComponent {
    team: Team;
    player: Player;
    user1: User;
    user2: User;
    user3: User;

    constructor(private teamsService: TeamsService){}

    save() {
        this.teamsService.addTeam(this.team).subscribe(
            team => { 
                let data: any = team;
                let idTeam = data.idTeam;
                this.savePlayerTeam(idTeam);
            },
            error => console.error('Error creating new Team: ' + error)
        );
    }

    savePlayerTeam(idTeam: number){
        
    }

}
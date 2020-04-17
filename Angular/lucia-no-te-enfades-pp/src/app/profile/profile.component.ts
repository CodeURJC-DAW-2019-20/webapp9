import { Component } from '@angular/core';

import { ProfileService } from '../_servicies/profile.service';
import { Player } from '../models/player.model';

import { Router, ActivatedRoute } from '@angular/router';
import { PlayersService } from '../_servicies/players.service';
import { Team } from '../models/team.model';
import { UsersService } from '../_servicies/users.service';
import { User } from '../models/user.model';

const BASE_URL = '/api/player/';
declare var loadPie: any;

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent{
    id:number;
    player:Player;
    imgUrl:string;
    username:string;
    wins:number;
    losses:number;
    team:Team;

    constructor(private profileService:ProfileService,private router: Router,
        activatedRoute: ActivatedRoute, private usersService: UsersService, private playersService: PlayersService) {
        this.id = activatedRoute.snapshot.params['id'];
        this.imgUrl =  '/api/user/' + this.id + '/image';
        
    }
    ngOnInit(){
        //loadPie.fn(this.player.team.losses,this.player.team.wins);
        this.profileService.getPlayerByUserId(this.id).subscribe(
            response => {
                this.player = response;
                this.username= this.player.user.username;
                this.team= this.player.team;
                loadPie.fn(this.team.losses,this.team.wins);
            },
            error => console.error('Error')
        );

    }

    buildHtml(idUser:number){
        this.profileService.getPlayerByUserId(this.id).subscribe

    }


}

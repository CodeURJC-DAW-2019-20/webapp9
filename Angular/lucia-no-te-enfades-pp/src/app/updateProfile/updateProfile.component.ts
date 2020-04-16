import { Component } from '@angular/core';

import { Play } from '../models/play.model';
import { MatchService, resultBody } from '../_servicies/match.service';
import { TournamentService } from '../_servicies/tournament.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../_servicies/profile.service';
import { UsersService } from '../_servicies/users.service';
import { User } from '../models/user.model';
import { PlayersService } from '../_servicies/players.service';
import { Player }  from '../models/player.model'
import { UserPlayerWrapper } from '../models/upwrapper.model';
 
@Component({
    selector: 'updateProfile',
    templateUrl:'./updateProfile.component.html',
})

export class UpdateProfileComponent{
    user :User;
    player:Player;
    username:String;
    wrapper : UserPlayerWrapper;
    constructor( private playerService:PlayersService, private profileService: ProfileService, private usersService:UsersService){
            
    };

    ngOnInit(){
        this.username = this.usersService.getActualUserName();
        console.log(this.username);
        this.usersService.getUserByUserName(this.username).subscribe(
            usr =>{
                console.log(this.user.iduser);
                this.playerService.getPlayerByUserId(this.user.iduser).subscribe(
                    plyr =>{
                        this.player= plyr;
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
    updateProfile(name,username,description,pass:String){
        console.log(name);
        //this.profileService.updateProfile
    }

}
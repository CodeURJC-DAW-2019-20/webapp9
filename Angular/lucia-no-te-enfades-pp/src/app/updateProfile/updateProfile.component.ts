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
    styleUrls: ['../register/register.component.css']
})

export class UpdateProfileComponent{
    selectedFile:File;
    user :User;
    player:Player;
    username:String;
    wrapper = new UserPlayerWrapper;
    constructor( private playerService:PlayersService, private profileService: ProfileService, private usersService:UsersService){
            
    };

    ngOnInit(){
        this.username = this.usersService.getActualUserName();
        console.log(this.username);
        this.usersService.getUserByUserName(this.username).subscribe(
            usr =>{
                this.user = usr;
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
    upload(){
        const uploadData = new FormData();
        uploadData.append('image', this.selectedFile, this.selectedFile.name);
        this.profileService.uploadProfilePicture(uploadData,this.user.iduser).subscribe(
            error =>{
                console.error('Error finding player' + error); 
            }
        )
    }
    onFileChanged(event) {
        this.selectedFile = event.target.files[0]
      }
    updateProfile(name,username,description,pass:string){
        this.wrapper.user = this.user;
        this.wrapper.description = this.player.description;
        if (name != ""){
            this.wrapper.user.name = name;
        }
        if (username !=""){
            this.wrapper.user.username = username;
        }
        if (description !=""){
            this.wrapper.description = description;
        }
        if (pass !=""){
            this.wrapper.user.password= pass;
        }
        console.log(name);
        this.profileService.updateProfile(this.wrapper).subscribe(
            response =>{
                console.log("done");
            },
            error => {
                console.error("Error updating user")
            }

        )
    }

}
import { ProfileService } from '../_servicies/profile.service';
import { Player } from '../models/player.model';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayersService } from '../_servicies/players.service';

const BASE_URL = '/api/player/';

@Component({
    selector: 'profile-selector',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent{
    id:number;
    player:Player;
    imgUrl:string;
    constructor(private profileService:ProfileService,private router: Router,
        activatedRoute: ActivatedRoute) {
        this.id = activatedRoute.snapshot.params['id'];
        this.imgUrl =  '/api/user/' + this.id + '/image';
    }
    ngOnInit(){
        this.profileService.getPlayerByUserId(this.id).subscribe(
            response => {
                this.player = response;
            },
            error => console.error('Error')
        );
    }
    buildHtml(idUser:number){
        this.profileService.getPlayerByUserId(this.id).subscribe
        
    }


}
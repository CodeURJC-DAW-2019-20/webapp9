import { ProfileService } from './profile.service';
import { Player } from '../player/player.model';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayersService } from '../players.service';


@Component({
    selector: 'profile-selector',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent{
    id:number;
    player:Player;
    constructor(private profileService:ProfileService,private router: Router,
        activatedRoute: ActivatedRoute) {
        this.id = activatedRoute.snapshot.params['id'];
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
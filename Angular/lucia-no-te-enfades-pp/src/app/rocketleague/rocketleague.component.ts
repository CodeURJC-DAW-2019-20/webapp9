import { Component, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Tournament } from '../tournament/tournament.model';

@Component({
    selector: 'rocketleague',
    templateUrl:'./rocketleague.component.html'
})

export class RocketleagueComponent{
    this.http.get(url).suscribe(
        response => {
            let tournaments: any = response;
        },
        error => console.error(error)
    );

    @Input()
    name: string;
}
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  newdata: any;
  constructor(private _apiservice:ApiService){}

  ngOnInit(){
    this._apiservice.getdata().subscribe(res=>{
      this.newdata=res;
    })
  }
}

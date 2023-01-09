import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getdata(){

    let KEY_API = "d1a1f8467082acce3d9ea001e7404587";
    let city = "london";
    
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY_API}&units=metric`);
  }
}

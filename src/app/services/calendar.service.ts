import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CalendarService {

  //url of the rest service
  private eventsUrl = "http://localhost:3000/calendar/";

  constructor(private http: Http) { }

  //grab all the events from the service
  getCalendarEvents(){
    return this.http.get(this.eventsUrl).map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  }

  //this could be rewritten to log to a file or another service
  private handleError(error: Response){
    console.log(error);
    return Observable.throw(error);
  }
}

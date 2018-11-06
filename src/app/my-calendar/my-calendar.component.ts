import { Component, AfterViewInit} from '@angular/core';
import { CalendarService } from '../services/calendar.service';
declare var jQuery:any;

@Component({
  selector: 'app-my-calendar',
  templateUrl: './my-calendar.component.html',
  styleUrls: ['./my-calendar.component.css']
})
export class MyCalendarComponent implements AfterViewInit {
  events: any = [];
  calendarOptions: any = {};
  statusMessage: String;

  eventId: String;
  title: String;
  startTime: String;
  endTime: String;

  constructor(private service: CalendarService) { }

  ngAfterViewInit() {
    this.calendarOptions = {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,prevYear,nextYear'
      },
      defaultDate: '2017-12-01',
      editable: false,
      eventLimit: true,
      events: (start, end, timezone, callback) => {
        this.service.getCalendarEvents().subscribe(res => callback(res), 
        (error) => {
          this.title = "ERROR!";
          this.statusMessage = 'Problem encountered in retrieving events! Please try again later.'; 
          console.log(this.statusMessage);
          jQuery("#myModal").modal();
        });
      },
      eventClick: (event) => {
        var start = new Date(event.start);
        var end = new Date(event.end);
        this.eventId = event.id;
        this.title = event.title;
        this.startTime = this.formatDate(start.getUTCHours(), start.getUTCMinutes());
        this.endTime = this.formatDate(end.getUTCHours(), end.getUTCMinutes());
        jQuery("#myModal").modal();
      },
      nextDayThreshold: '00:00:00'
    }
  }

  refreshPage(): void {
    window.location.reload();
  }

  private formatDate(hour: number, minutes: number){
    var hourString = ((hour == 0) ? '12' : ((hour > 12) ? (hour - 12).toString() : hour.toString()));
    var minuteString = ((minutes < 10) ? ('0' + minutes.toString()) : minutes.toString());
    var ampm = ((hour < 12) ? 'AM' : 'PM');

    return hourString + ":" + minuteString + " " + ampm; 
  }

}

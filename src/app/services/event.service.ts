import { Injectable } from '@angular/core';
//import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NewEvent } from '../models/newEvent';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventService {
    //-----------------------properties--------------------
    rootUrl = 'http://localhost:1844';
    allAppointments : any[];
    //renderedAppointments : NewEvent[];
    

    //---------------------------helper methods---------------
  constructor(
      private httpClient : HttpClient,
      
  ) { }


  //----------------------http methods-------------------------

 public insertAppointment(
    
      title: string,
      start: string,
      end: string
    //   description: string
        ){
        var body = {
            appointmentTitle: title,
            appointmentStartDate: start,
            appointmentEndDate: end
            
        }
        return this.httpClient.post(this.rootUrl + '/api/InsertAppointmentData',body);
  }

  public getAllAppointments(){
      return this.httpClient.get(this.rootUrl + '/api/getAppointments');
    //   .subscribe(
    //       (data : any) => {
    //         //this.allAppointments = data;
    //         //this.renderedAppointments = {
    //         //}
    //         data = {
    //             let renderedAppointments: NewEvent = {

    //             }
    //         }
    //   });

    }

//   public getEvents(): Observable<any> {
//     const dateObj = new Date();
//     const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
//     let data: any = [{
//         title: 'All Day Event',
//         start: yearMonth + '-01'
//     },
//     {
//         title: 'Long Event',
//         start: yearMonth + '-07',
//         end: yearMonth + '-10'
//         //background-color:#FF0000
//     },
//     {
//         id: 999,
//         title: 'Repeating Event',
//         start: yearMonth + '-09T16:00:00',
//         backgroundColor: 'red'
//     },
//     {
//         id: 999,
//         title: 'Repeating Event',
//         start: yearMonth + '-16T16:00:00'
//     },
//     {
//         title: 'Conference',
//         start: yearMonth + '-11',
//         end: yearMonth + '-13'
//     },
//     {
//         title: 'Meeting',
//         start: yearMonth + '-12T10:30:00',
//         end: yearMonth + '-12T12:30:00'
//     },
//     {
//         title: 'Lunch',
//         start: yearMonth + '-12T12:00:00'
//     },
//     {
//         title: 'Meeting',
//         start: yearMonth + '-12T14:30:00'
//     },
//     {
//         title: 'Happy Hour',
//         start: yearMonth + '-12T17:30:00'
//     },
//     {
//         title: 'Dinner',
//         start: yearMonth + '-12T20:00:00'
//     },
//     {
//         title: 'Birthday Party',
//         start: yearMonth + '-13T07:00:00'
//     },
//     {
//         title: 'Click for Google',
//         url: 'http://google.com/',
//         start: yearMonth + '-28'
//     }];
//     //return Observable.of(data)
//     return of(data)
// }
}

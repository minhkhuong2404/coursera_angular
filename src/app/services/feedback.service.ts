import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, debounceTime, delay } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Feedback } from '../shared/feedback';

@Injectable({
    providedIn: 'root'
})
export class FeedbackService {

    constructor(private http: HttpClient,
        private processHTTPMsgService: ProcessHTTPMsgService) { }

    // getDishes(): Observable<Dish[]> {
    //     return this.http.get<Dish[]>(baseURL + 'dishes')
    //         .pipe(catchError(this.processHTTPMsgService.handleError));
    // }

    // getDish(id: number): Observable<Dish> {
    //     return this.http.get<Dish>(baseURL + 'dishes/' + id)
    //         .pipe(catchError(this.processHTTPMsgService.handleError));
    // }

    // getFeaturedDish(): Observable<Dish> {
    //     return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]))
    //         .pipe(catchError(this.processHTTPMsgService.handleError));
    // }

    // getDishIds(): Observable<number[] | any> {
    //     return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
    //         .pipe(catchError(error => error));
    // }

    submitFeedback(feedback: Feedback): Observable<Feedback> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post<Feedback>(baseURL + 'feedback/', feedback, httpOptions)
            .pipe(catchError(this.processHTTPMsgService.handleError), debounceTime(1000));

    }
}
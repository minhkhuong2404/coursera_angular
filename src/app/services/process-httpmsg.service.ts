import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Inject } from '@angular/core';

@Inject({
    providedIn: 'root'
})

export class ProcessHTTPMsgService {
    public handleError(error: HttpErrorResponse | any) {
        let errMsg: string;

        if (error.error instanceof ErrorEvent) {
            errMsg = error.error.message;
        } else {
            errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
        }

        return throwError(errMsg);
    }
}
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject,of} from 'rxjs';

@Injectable()
export class LoadingService {
    private loadingSubject = new BehaviorSubject<boolean>(false);

    loading$: Observable<boolean> = this.loadingSubject.asObservable();

    constructor() {
        console.log("Loading service created ...");
    }
}
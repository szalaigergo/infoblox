import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Server } from '../interfaces/server';
import { SERVERS } from '../util/data';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  private servers$$ = new BehaviorSubject<Server[]>([]);

  servers$ = this.servers$$.asObservable();
  constructor() {
    console.log("Download data...");
    const data = JSON.parse(SERVERS);
    this.servers$$.next(data);
  }

}

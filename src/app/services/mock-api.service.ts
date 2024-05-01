import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Server } from '../interfaces/server';
import { SERVERS, NATS } from '../util/data';
import { Nat } from '../interfaces/nat';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  private servers$$ = new BehaviorSubject<Server[]>([]);
  private nats$$ = new BehaviorSubject<Nat[]>([]);

  servers$ = this.servers$$.asObservable();
  nats$ = this.nats$$.asObservable();
  constructor() {
    console.log("Download data...");
    const servers = JSON.parse(SERVERS);
    const nats = JSON.parse(NATS);

    this.servers$$.next(servers);
    this.nats$$.next(nats);
  }

  save(newServer: Server) {
    const servers = [...this.servers$$.value, newServer]
    this.servers$$.next(servers)
  }
  remove(server: Server) {
    const newList = this.servers$$.value.filter(item => item !== server);
    this.servers$$.next(newList)
  }

}

import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Injectable()
export class CometService {
  constructor(private socket: Socket) {
  }

  listen() {
    return this.socket.fromEvent('events');
  }
}

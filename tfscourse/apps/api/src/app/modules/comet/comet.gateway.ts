import {
    ConnectedSocket,
    MessageBody, OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
} from '@nestjs/websockets';
import {Server, Socket} from 'socket.io';
import {Observable, of} from 'rxjs';
import {UpdateService} from '../update/update.service';

@WebSocketGateway(4000)
export class CometGateway implements OnGatewayInit {
    @WebSocketServer()
    server: Server;

    constructor(
        private updateService: UpdateService
    ) {
    }

    afterInit(server: any): any {
        this.updateService.subject.subscribe(() => {
            server.emit('events');
        });
    }

    @SubscribeMessage('events')
    findAll(
        @MessageBody() data: string,
        @ConnectedSocket() client: Socket
    ): Observable<WsResponse> {
        return of({event: 'events', data});
    }
}

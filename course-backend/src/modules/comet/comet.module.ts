import {Module} from '@nestjs/common';
import {CometGateway} from './comet.gateway';
import {UpdateModule} from '../update/update.module';

@Module({
    imports: [
        UpdateModule
    ],
    providers: [
        CometGateway
    ]
})
export class CometModule {
}

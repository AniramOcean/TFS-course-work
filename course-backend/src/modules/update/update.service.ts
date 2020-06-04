import {Injectable} from '@nestjs/common';
import {Subject} from 'rxjs';

@Injectable()
export class UpdateService {
    subject = new Subject<void>();
}

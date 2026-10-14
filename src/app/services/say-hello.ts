import { Injectable, Service } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class SayHelloService {
  constructor(
    private loggerService: LoggerService
  ) {}
  hello() {
    this.loggerService.logger('Hello :D');
  }
}

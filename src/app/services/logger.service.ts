import {   Service } from "@angular/core";

@Service()
export class LoggerService {
  logger(message: unknown): void {
    console.log({message});
  }
}

import { TestBed } from '@angular/core/testing';
import { SayHello } from './say-hello';

describe('SayHello', () => {
  let service: SayHello;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SayHello);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

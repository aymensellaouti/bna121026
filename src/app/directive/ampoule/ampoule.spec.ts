import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ampoule } from './ampoule';

describe('Ampoule', () => {
  let component: Ampoule;
  let fixture: ComponentFixture<Ampoule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ampoule],
    }).compileComponents();

    fixture = TestBed.createComponent(Ampoule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

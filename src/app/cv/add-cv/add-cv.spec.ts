import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCv } from './add-cv';

describe('AddCv', () => {
  let component: AddCv;
  let fixture: ComponentFixture<AddCv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCv],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

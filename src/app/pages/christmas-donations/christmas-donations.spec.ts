import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChristmasDonations } from './christmas-donations';

describe('ChristmasDonations', () => {
  let component: ChristmasDonations;
  let fixture: ComponentFixture<ChristmasDonations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChristmasDonations],
    }).compileComponents();

    fixture = TestBed.createComponent(ChristmasDonations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

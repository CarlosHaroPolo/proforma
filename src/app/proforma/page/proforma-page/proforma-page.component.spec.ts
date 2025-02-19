import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProformaPageComponent } from './proforma-page.component';

describe('ProformaPageComponent', () => {
  let component: ProformaPageComponent;
  let fixture: ComponentFixture<ProformaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProformaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProformaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

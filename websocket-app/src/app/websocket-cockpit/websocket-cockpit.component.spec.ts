import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketCockpitComponent } from './websocket-cockpit.component';

describe('WebsocketCockpitComponent', () => {
  let component: WebsocketCockpitComponent;
  let fixture: ComponentFixture<WebsocketCockpitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsocketCockpitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsocketCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

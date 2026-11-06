import { TestBed } from '@angular/core/testing';
import { Tvmaze } from './tvmaze';

describe('Tvmaze', () => {
  let service: Tvmaze;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tvmaze);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

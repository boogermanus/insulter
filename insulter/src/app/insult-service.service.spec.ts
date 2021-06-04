import { TestBed } from '@angular/core/testing';

import { InsultServiceService } from './insult-service.service';
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('InsultServiceService', () => {
  let service: InsultServiceService;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(InsultServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  describe('beginning', () => {
    it('should have property beginning to be defined', () => {
      expect(service.beginning).toBeDefined()
    });

    it('should have property beginning not empty', () => {
      expect(service.beginning.length).toBeGreaterThan(0);
    })
  });
});

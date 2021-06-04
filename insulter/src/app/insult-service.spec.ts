import { TestBed } from '@angular/core/testing';
import { InsultService } from './insult-service';

describe('InsultServiceService', () => {
  let service: InsultService;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
    });
    service = TestBed.inject(InsultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  describe('beginning', () => {
    it('should have property defined', () => {
      expect(service.beginning).toBeDefined()
    });

    it('should have property with length grater than 0', () => {
      expect(service.beginning.length).toBeGreaterThan(0);
    });
  });
  
  describe('middle', () => {
    it('should have property defined', () => {
      expect(service.middle).toBeDefined();
    });
    
    it('should have property with length grater than 0', () => {
      expect(service.middle.length).toBeGreaterThan(0);
    });
  });

  describe('end', () => {
    it('should have property defined', () => {
      expect(service.end).toBeDefined();
    });

    it('should have property with length grater than 0', () => {
      expect(service.end.length).toBeGreaterThan(0);
    });
  });
  
  describe('getInsult()', () => {
    it('should have method defined', () =>{
      expect(service.getInsult).toBeDefined();
    });
  });
});

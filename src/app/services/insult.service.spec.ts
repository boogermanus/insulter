import { TestBed } from '@angular/core/testing';
import { InsultService } from './insult.service';


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
      expect(service.beginning).toBeDefined();
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
    it('should have method defined', () => {
      expect(service.getInsult).toBeDefined();
    });

    it('should return an insult', () => {
      const insult = service.getInsult(false);
      expect(insult).not.toBeNull();
    });

    it('should return a non-empty insult', () => {
      const insult = service.getInsult(false);

      expect(insult.beginning).not.toEqual(' ');
      expect(insult.middle).not.toEqual(' ');
      expect(insult.end).not.toEqual(' ');
    });

    it('should generate sfw insult', () => {
      const insult = service.getInsult(true);

      expect(service.beginning.find(b => b.insult === insult.beginning)?.sfw).toEqual(true, 'beginning not found');
      expect(service.middle.find(b => b.insult === insult.middle)?.sfw).toEqual(true, 'middle not found');
      expect(service.end.find(b => b.insult === insult.end)?.sfw).toEqual(true, 'end not found');
    });
  });
});

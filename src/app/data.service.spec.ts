import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { User } from './user';

describe('DataService', () => {
  let injector: TestBed;
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    injector = getTestBed();
    service = injector.get(DataService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('#getUsers', () => {
    it('should return Observable<User[]>', () => {
      const dummyUsers = [
        new User(-1, '', '',  ''),
        new User(-2, '', '',  '')
      ];

      service.getUsers().subscribe(users => {
        expect(users.length).toBe(2);
        expect(users).toEqual(dummyUsers);
      });

      const reqExp = httpMock.expectOne(`${service.baseUri}/users`)
      expect(reqExp.request.method).toBe("GET");
      reqExp.flush(dummyUsers);
    });
  });
});

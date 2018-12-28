import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  readonly baseUri = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const uri = `${this.baseUri}/users`;
  
    return this.http.get<User[]>(uri);
  }

  getUser(userId: number): Observable<User> {
    const uri = `${this.baseUri}/users/${userId}`;
    
    return this.http.get<User>(uri);
  }

  getPosts(): Observable<Post[]> {
    const uri = `${this.baseUri}/posts`;
    return this.http.get<Post[]>(uri);
  }
}

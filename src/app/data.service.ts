import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUri = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUsers() {
    const uri = `${this.baseUri}/users`;
  
    return this.http.get(uri);
  }

  getUser(userId: any) {
    const uri = `${this.baseUri}/users/${userId}`;
    
    return this.http.get(uri); 
  }

  getPosts() {
    const uri = `${this.baseUri}/posts`;
    return this.http.get(uri);
  }
}

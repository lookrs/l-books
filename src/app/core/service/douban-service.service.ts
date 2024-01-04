import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class DoubanServiceService {
  private apiKey = '0ac44ae016490db2204ce0a042db2916';
  private reqJson = {
    apiKey: this.apiKey,
    q: '',
  };

  books: Array<Book> = [];

  constructor(private _http: HttpClient) {}

  searchbook(keyWord: string): Observable<any> {
    this.reqJson.q = keyWord;
    return this._http.post('/search', this.reqJson);
  }
}

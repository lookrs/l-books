import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoubanServiceService {
  private apiKey = '0ac44ae016490db2204ce0a042db2916';
  private reqJson = {
    apiKey: this.apiKey,
    q: '',
  };
  // private books!: Observable<any>;
  private books: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private _http: HttpClient) {}

  // 获取数据的方法，供组件订阅
  getBookInfo(): Observable<any> {
    return this.books.asObservable();
  }

  searchbook(keyWord: string) {
    console.log(`正在搜索${keyWord}`);
    this.reqJson.q = keyWord;
    this._http
      .post('/search', this.reqJson)
      .pipe(
        map((res: any) => {
          this.books.next(res.books);
        })
      )
      .subscribe();
  }
}

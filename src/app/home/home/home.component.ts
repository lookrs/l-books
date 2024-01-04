import { Component, OnInit } from '@angular/core';
import { DoubanServiceService } from '../../core/service/douban-service.service';
import { Book } from '../../core/models/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  books: Array<Book> = [];

  constructor(private _doubanService: DoubanServiceService) {}
  ngOnInit(): void {
    this._doubanService.getBookInfo().subscribe((res: any) => {
      this.books = res;
    });
  }

  toDouBanPage(url: string): void {
    window.open(url, '_blank');
  }

  get getBooks(): Array<Book> {
    return this.books;
  }
}

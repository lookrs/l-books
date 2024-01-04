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
    this._doubanService.searchbook('小王子').subscribe((data: any) => {
      this.books = data.books;
    });
  }
}

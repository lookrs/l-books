import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../core/models/book';

@Component({
  selector: 'book-introduction',
  templateUrl: './book-introduction-card.component.html',
  styleUrl: './book-introduction-card.component.css',
})
export class BookIntroductionCardComponent {
  @Input() bookInfo!: Book;

  @Output() toDouBan: EventEmitter<string> = new EventEmitter<string>();

  goDouBan(url: string): void {
    this.toDouBan.emit(this.bookInfo.alt);
  }

  getImageUrl(): string {
    return `http://localhost:3000/proxy?url=${this.bookInfo.images?.small}`;
  }
}

import { Component } from '@angular/core';
import { DoubanServiceService } from '../../core/service/douban-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  keyWord: string = '小王子';

  constructor(
    private _router: Router,
    private _doubanService: DoubanServiceService,
    private _snackBar: MatSnackBar
  ) {

    this.searchBook();
  }

  searchBook() {
    this._snackBar.open(`Searching for: ${this.keyWord}`, 'OK', {
      duration: 2000,
    });
    const currentRoute = this._router.url;
    if(currentRoute !== '/home'){
      this._router.navigate(['/home']);
    }
    this._doubanService.searchbook(this.keyWord);
  }
}

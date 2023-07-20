import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private loadingCount = 0;

  constructor(private spinner: NgxSpinnerService) {}

  show(): void {
    if (this.loadingCount === 0) {
      this.spinner.show();
    }
    this.loadingCount++;
  }

  hide(): void {
    if (this.loadingCount > 0) {
      this.loadingCount--;
    }
    if (this.loadingCount === 0) {
      this.spinner.hide();
    }
  }

  isLoading(): boolean {
    return this.loadingCount > 0;
  }
}

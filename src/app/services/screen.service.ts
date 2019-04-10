import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ScreenService {
  
  public getDevice(): string {
    const size: number = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if(767 >= size) {
      return 'mobile'
    } else if(size >= 768 && 1023 >= size) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }
}
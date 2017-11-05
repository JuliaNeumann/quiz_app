import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  shuffle(myArray: any[]) : any[] {
    let j, x, i;
    for (i = myArray.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = myArray[i - 1];
      myArray[i - 1] = myArray[j];
      myArray[j] = x;
    }
    return myArray;
  }

}

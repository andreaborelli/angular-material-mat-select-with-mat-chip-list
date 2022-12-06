import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/** @title Select with multiple selection */
@Component({
  selector: 'select-multiple-example',
  templateUrl: 'select-multiple-example.html',
  styleUrls: ['select-multiple-example.css'],
})
export class SelectMultipleExample {
  chipsControl = new FormControl([]);

  chipSelectList: any[] = [
    {name: 'Chip 1' },
    {name: 'Chip 2' },
    {name: 'Chip 3' },
    {name: 'Chip 4' },
  ];

  onChipRemoved(chip: string) {
    const chipsSelected = this.chipsControl.value as string[];
    this.removeFirst(chipsSelected, chip);
    this.chipsControl.setValue(chipsSelected); // To trigger change detection
  }

  idsToNames(ids: number[]): string[] {
    return ids.map((name) => {
      return this.chipSelectList.find((t) => t.name == name)?.name;
    });
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

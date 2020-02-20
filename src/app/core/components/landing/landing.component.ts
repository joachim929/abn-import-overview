import {Component, OnInit} from '@angular/core';
import {ImportService} from '../../../import/services/import.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  file: File;

  constructor(
    private importService: ImportService
  ) {
  }

  ngOnInit(): void {
    this.importService.test();
  }


  incomingFile(event) {
    this.file = event.target.files[0];
  }

  test() {
    this.importService.test();
  }

  upload() {
    this.importService.xlsToJson(this.file);
  }

}

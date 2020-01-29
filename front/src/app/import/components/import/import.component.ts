import {Component, OnInit} from '@angular/core';
import {ImportService} from '../../services/import.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {
  file: File;

  constructor(
    private importService: ImportService
  ) {
  }

  ngOnInit() {
  }

  incomingFile(event) {
    this.file = event.target.files[0];
  }

  upload() {
    this.importService.xlsToJson(this.file);
  }
}

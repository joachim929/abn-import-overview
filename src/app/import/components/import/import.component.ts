import {Component, OnInit} from '@angular/core';
import {ImportService} from '../../services/import.service';
import {DUMMYDATA} from '../../dummy-data';
import {DataParseService, FormattedData} from '../../services/data-parse.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {
  dummyData = DUMMYDATA;
  file: File;
  get formattedData(): FormattedData[] {
    return this.dataParseService.formattedData;
  }

  constructor(
    private importService: ImportService,
    private dataParseService: DataParseService
  ) {
  }

  ngOnInit() {
    this.dataParseService.formatData(this.dummyData);
  }

  incomingFile(event) {
    this.file = event.target.files[0];
  }

  upload() {
    this.importService.xlsToJson(this.file);
  }
}

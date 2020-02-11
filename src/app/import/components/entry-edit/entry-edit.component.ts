import {Component, OnInit} from '@angular/core';
import {DataParseService, FormattedData} from '../../services/data-parse.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'app-entry-edit',
  templateUrl: './entry-edit.component.html',
  styleUrls: ['./entry-edit.component.scss']
})
export class EntryEditComponent implements OnInit {
  entry$: Observable<FormattedData>;

  constructor(
    private route: ActivatedRoute,
    private dataParseService: DataParseService,
    private location: Location
  ) {
  }

  ngOnInit() {
    const index = this.route.snapshot.paramMap.get('index');
    this.entry$ = this.dataParseService.formattedData[index];
  }

  back() {
    this.location.back();
  }
}

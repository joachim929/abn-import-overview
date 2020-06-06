import {Component, Input, OnInit} from '@angular/core';
import {TransferConditionDto} from '../../../swagger/models/transfer-condition-dto';

@Component({
  selector: 'app-rule-detail',
  templateUrl: './rule-detail.component.html',
  styleUrls: ['./rule-detail.component.scss']
})
export class RuleDetailComponent implements OnInit {
  @Input() rule: TransferConditionDto;

  constructor() {
  }

  ngOnInit(): void {
  }

}

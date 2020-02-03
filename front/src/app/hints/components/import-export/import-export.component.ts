import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {RuleService} from '../../../core/services/rule.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.scss']
})
export class ImportExportComponent implements OnInit {
  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  };

  constructor(
    private ruleService: RuleService
  ) {
  }

  ngOnInit() {
  }

  importRules(fileInput) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();

      let file: string;
      reader.onload = ((e) => {
        file = e.target['result'];
        if (this.ruleService.validateImport(JSON.parse(file))) {
          this.ruleService.rules = JSON.parse(file);
        } else {
          // todo: Show user it failed
        }
      });
      reader.readAsBinaryString(fileInput.target.files[0]);
    }
  }

  downloadJson() {
    this.getRulesToDownload().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'Rules.json',
        text: JSON.stringify(res)
      });
    });
  }


  private getRulesToDownload() {
    return of(this.ruleService.rules);
  }

  private dyanmicDownloadByHtmlTag(arg: {
    fileName: string,
    text: string
  }) {
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement('a');
    }
    const element = this.setting.element.dynamicDownload;
    const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
    element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
    element.setAttribute('download', arg.fileName);

    const event = new MouseEvent('click');
    element.dispatchEvent(event);
  }
}

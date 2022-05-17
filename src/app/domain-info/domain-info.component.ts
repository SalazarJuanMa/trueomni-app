import { Component, OnInit } from '@angular/core';
import { TrueOmniRequest } from '../interface/trueOmniRequest';
import { TrueOmniResponse } from '../interface/trueOmniResponse';
import { TrueOmniService } from '../services/true-omni.service';

@Component({
  selector: 'app-domain-info',
  templateUrl: './domain-info.component.html',
  styleUrls: ['./domain-info.component.css']
})

export class DomainInfoComponent implements OnInit {
  trueOmniResponse: TrueOmniResponse[] = [];
  columns: number = 0;
  width: number = 700;
  height: number = 1000;

  constructor(
    public trueOmniService: TrueOmniService
  ) { }

  ngOnInit(): void {
    const reqObject: TrueOmniRequest = {
      option: '',
      value: '',
      enValue: ''
    };
    this.trueOmniService.getDomainsPost(reqObject).subscribe(trueOmniResponse => {
      this.trueOmniResponse = trueOmniResponse;
      if (this.trueOmniResponse.length > 30) {
        this.columns = 3;
        this.width = 700;
        this.height = 1000;
      }
      else {
        this.columns = 4;
        this.width = 1000;
        this.height = 700;
      }
      ////console.log(this.trueOmniResponse);
    });
  } 
  
  resizePanel(){    
    if (this.trueOmniResponse.length > 30) {
      this.columns = 3;
      this.width = 700;
      this.height = 1000;
    }
    else {
      this.columns = 4;
      this.width = 1000;
      this.height = 700;
    }
  }
}

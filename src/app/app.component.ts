import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrueOmniRequest } from './interface/trueOmniRequest';
import { TrueOmniResponse } from './interface/trueOmniResponse';
import { TrueOmniService } from './services/true-omni.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'true-omni';

  constructor(
    public trueOmniService: TrueOmniService
  ) { }


  public ngOnInit(): void { 
  }
}

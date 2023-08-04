import { Component } from '@angular/core';
import * as configcat from 'configcat-js-ssr';
import { IConfigCatClient, LogLevel, PollingMode } from 'configcat-js-ssr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'configcat-demo';
}

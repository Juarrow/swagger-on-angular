import { Component, OnInit } from '@angular/core';
import SwaggerUI from 'swagger-ui';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'swaggy';

  ngOnInit() {
    SwaggerUI({
      domNode: document.getElementById('swaggy-item'),
      url: 'https://petstore3.swagger.io/api/v3/openapi.json'
    });
  }
}

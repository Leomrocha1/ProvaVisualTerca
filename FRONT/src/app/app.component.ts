import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    console.log("Evendo executado na inicialização do componente.");
  }

}

import { Component, OnInit, OnDestroy,AfterViewInit  } from '@angular/core';

@Component({
    selector: 'componets-example',
    templateUrl: './compo.component.html',
    styleUrls: ['./compo.css']
})
export class CompoComponent {
    ngOnInit() {
        console.log("OnInit started");
    }
    ngOnDestroy() {
        console.log("OnDestroy called");
    }
    ngAfterViewInit() {
        console.log("AfterViewInit called");
    }
}

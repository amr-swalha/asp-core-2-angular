import { Component } from '@angular/core';

@Component({
    selector: 'test',
    templateUrl: './test.component.html'
})
export class TestComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}

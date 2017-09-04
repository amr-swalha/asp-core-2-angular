import { Component } from '@angular/core';

@Component({
    selector: 'databinding',
    templateUrl: './databinding.component.html'
})
export class DatabindingComponent {
    public Attribute: any = "test value";
    public UserName: any = "";
    public ChangeTitle() {
        this.Attribute = "new title";
    }
    public ChangeUserName() {
        this.UserName = "changed!";
    }
    public ReadUserName() {
        console.log(`Username value: ${this.UserName}`);
    }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBinding';
  name = "Pawan";
  showMe: boolean = false
doToggle() {
this.showMe = !this.showMe
}
  newPost='NO CONTENT';
  onAddPost(){
    this.newPost='Hello from Pawan';
  
  }


}


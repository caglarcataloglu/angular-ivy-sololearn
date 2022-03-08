import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  

  prefix= "I am a ";
  name= "star student";

  speak(){
    const sentence=this.prefix+this.name
    return sentence;
  }
}

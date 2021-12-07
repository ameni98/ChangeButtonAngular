import { Component } from '@angular/core';
import{Glyphicons}from './glyphicons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  glyphicons=Glyphicons;
  title = 'exercice7';
  styles=[
    "default","primary",'success',"info","warning","danger","link"
  ];
  valeur="Okay";
  style;
  Gly;
  etat;
  selectStyle(ev)
  {
    this.style="btn btn-"+ev['style'];
  }
  selectGly(val)
  {this.Gly="bi-"+val["Gly"];
    console.log(val['Gly']);
  }
  eventCheck(ev)
  {
    console.log(ev.name);
    this.etat=ev.name;
   /* if(ev.name=="active"){this.etat=false;}
    else if(ev.name=="disabled"){this.etat=true;}*/
    
  }
}

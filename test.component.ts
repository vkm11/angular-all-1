import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',

  // the Name is Static
  // template:`
  //   <h2>
  //     Welcome Vijaykumar
  //   </h2>
  // `,


  // Interpolation / Codevolution demo:-
  // to create dynamic
  template:`
    <h2>
      Welcome {{name}}
    </h2>

// Interpolation - 5 

    // <h2>{{2+2}}</h2>
    // <h2>{{"Welcome" + name}}</h2>
    // <h2>{{name.length}}</h2>
    // <h2>{{name.toUpperCase()}}</h2>

    // <h2>{{greetUser()}}</h2>
    
  

//Property-Binding - 6 

    <input [id]="myId" type="text" value="Vijaykumar">
    <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Vijaykumar">

    //Class binding - 7
    <h2 class="text-success">Codevolution</h2>
    <h2 [class]="successClass">Codevolution</h2>

    <h2 class="text-special" [class]="successClass">Codevolution</h2>
    <h2 [class.text-danger]="hasError">Codevolution</h2>

  <h2 [ngClass]="messageClasses">Codevolution</h2>

//Style- Binding - 8
  // <h2 [style.color]="'orange'">Style Binding</h2>

  <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>

  <h2 [style.color]="highlightColor">Style Binding 2 </h2>

<h2 [ngStyle]="titleStyles">Style Binding 3</h2>


//Event Binding - 9
<button (click)="onClick()">Greet</button><br>
<button (click)="greeting='welcome vijaykumar'">Greet</button>
{{greeting}}

<br><br>
// template-reference - 10
<input #myInput type ="text"><br>
<button (click)="logMessage(myInput)">Log</button>

<br><br>
// Two way Binding - 11

<input [(ngModel)]="name" type="text">
{{name}}

  `,
  // styleUrls: ['./test.component.css']
  styles:[`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic;
    }
  `]
})
export class TestComponent implements OnInit {

  // Property
// public name ="Codevolution";
//   two-way Binding
  public name ="";
public successClass = "text-success";
public hasError = true;
public isSpecial = true;

public highlightColor = "orange";

public titleStyles ={
  color:"blue",
  fontStyle: "italic"
}

public greeting = "";

public messageClasses ={
  "text-success": !this.hasError,
  "text-danger": this.hasError,
  "text-special": this.isSpecial
}

public myId ="testId";
public isDisabled = true;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    // onClick(event){
    // alert("welcome to codevolution")
    console.log("welcome to codevolution")
    // console.log(event);
    this.greeting = "welcome to itwinetech";
    // this.greeting = event.type;
  }
  
//  Error: src/app/test/test.component.ts:28:14 - error TS7006: Parameter 'value' implicitly has an 'any' type.
// Then you can edit this code in :- tsconfig.json

  // "noImplicitReturns": true,
//     "noImplicitAny": false,
   logMessage(value){
    console.log(value);
  }
  greetUser(){
    return "Hello--"+  this.name;
  }

}

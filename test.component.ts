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
//ex:- value={{name}}
// it will only work string and number

    // <h2>{{2+2}}</h2>
    // <h2>{{"Welcome" + name}}</h2>
    // <h2>{{name.length}}</h2>
    // <h2>{{name.toUpperCase()}}</h2>

    // <h2>{{greetUser()}}</h2>
    


// diffrence between Interpolation and Property-Binding

// app.component.html
<h1>{{title}}</h1>
<!-- Interpolation -->

<!-- it will only work string and number -->
<!-- it will take string values thats why it will not show  -->
<label for="">Interpolation</label>
<input type="text" name="user-name" value={{name}} disabled={{disable}} />
<br><br>

<!-- Property-Binding -->

<!-- it will work boolean values -->
<!-- it will show -->
<!-- to better we all use property binding -->
<label for="">Property-Binding</label>
<input type="text" name="user-name" [value]=name [disabled]=disable />


// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_binding_all';
  name="vijay";
  disable=false
}



//Property-Binding - 6
 //ex:- [value]=name
 //:- input values change or html values change
//:- it is used to properties and attributs change or update purpose using this property binding.
//:- it will work only boolean values- true or false
//it will work boolean values,string,numeric

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

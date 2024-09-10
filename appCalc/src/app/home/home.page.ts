import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  topDisplay = '';
  display = "0";
  memory:any=[];
  valueOne = 0;
  operator='';

  constructor() {}

  pressKey(valueKey:any){
    if(valueKey=='DEL'){
      this.memory.pop();
    }
    else{
      this.memory.push(valueKey);
    }
    
    this.display = this.memory.join('');
    this.topDisplay=this.topDisplay+(valueKey);
    
  }

  clearScreen(){
    this.display= '0';
    this.memory = [];
    this.topDisplay='';
  }


  mathFunction(operator:any){
    this.valueOne= Number(this.display);
    this.memory=[];
    this.operator= operator;
    this.topDisplay=this.topDisplay+(operator);
  }

  inverter(){
    this.valueOne= Number(this.display);
    this.display=String(1/this.valueOne);
  }

  senFunction(){
    this.valueOne= Number(this.display);
    this.display=String(Math.round(Math.sin(this.valueOne)));
  }

  cosFunction(){
    this.valueOne= Number(this.display);
    this.display=String(Math.round(Math.cos(this.valueOne)));
  }

  tanFunction(){
    this.valueOne= Number(this.display);
    this.display=String((Math.round(Math.sin(this.valueOne)))/(Math.round(Math.cos(this.valueOne))));
  }

  showResult(){
    if(this.operator==='+'){
      this.display=String(this.valueOne + Number(this.display));
      this.topDisplay=this.display;
    }
    else if(this.operator==='-'){
      this.display=String(this.valueOne - Number(this.display));
      this.topDisplay=this.display;
    }
    else if(this.operator==='X'){
      this.display=String(this.valueOne * Number(this.display));
      this.topDisplay=this.display;
    }
    else if(this.operator==='/'){
      this.display=String(this.valueOne / Number(this.display));
      this.topDisplay=this.display;
    }
    else if(this.operator==='%'){
      this.display=String((this.valueOne * Number(this.display))/100);
      this.topDisplay=this.display;
      
    }

   
    
    
  }

}

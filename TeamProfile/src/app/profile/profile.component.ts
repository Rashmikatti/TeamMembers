import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  tempArr=[null,null,null,null];
  generate=false;
  arr=[
    {
      "name":"K L Rahul",
      "hobbies":"Dance, A good dancer",
      "image":'../../assets/rahul.jpg'
    },
    {
      "name":"Virat",
      "hobbies":"Captain , Not so cool! ",
      "image":'../../assets/virat.jpg'
    },
    {
      "name":"AB Develliers",
      "hobbies":"RCB Saviour",
      "image":'../../assets/abd.jpg'
    },
    {
      "name":"Pollard", 
      "hobbies":"Dance, A good Speaker",
      "image":'../../assets/polard.jpg'
    },
    {
      "name":"Devdutt",
      "hobbies":"Hockey , Singer",
      "image":'../../assets/devdutt.jpg'
    },
    {
      "name":"Siraj",
      "hobbies":"Bowler, Kathak Dancer",
      "image":'../../assets/siraj.jpg'
    },
    {
      "name":"Sakariya",
      "hobbies":"Raising Player",
      "image":'../../assets/sakariya.jpg'
    },
    {
      "name":"Rohit ",
      "hobbies":"Hitman",
      "image":'../../assets/rohit.jpg'
    }
  ]
  randomNum=[];
  
  constructor() { }

  ngOnInit(): void {
    this.getRandom(this.arr,3)
  }

   getRandom(arr, limit) {
    this.generate=true
     /**
      * result    - Array of 4 items 
      * Arrlength - Length of the TeamMember Array
      * taken     - Array of original length
      */
    var result = new Array(limit),
        Arrlength = arr.length,
        result=[]

    // Taking elements within limit i.e, 4 
    let temp=[]
    while (limit>=0) {
        var x = Math.floor(Math.random() * Arrlength);
        if(!this.tempArr.includes(x) && !temp.includes(x)){
          temp.push(x)
          limit= limit-1;
        }
    }
    this.tempArr=temp;
    this.tempArr.forEach(element => {
      result.push(arr[element])
    });

    setTimeout(() => {
      let limit=0;
      if(this.arr.length>4){
      if(this.arr.length-this.tempArr.length>=4) limit=3
      else limit= this.arr.length-this.tempArr.length-1;
      }
      this.getRandom(this.arr,limit)
    }, 5000);

    this.randomNum=result
    return this.randomNum
}
}
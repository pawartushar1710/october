

//parent class or super class 

class car{

    engine="";
    seats="";
    price="";
    airbags="";
    
    constructor(engine,seats,price,airbags){
    
    this.engine=engine;
    this.seats=seats;
    this.price=price;
    this.airbags=airbags;
    
    }
    drive(){
    
        console.log("driving started");
    }
    built(){
        console.log("building simple car");
    }
    }


    class familycar extends car{

        comfortlevel = "";
        childsafety = "";
        
        constructor(engine,seats,price,airbags,comfortlevel,childsafety){
            super(engine,seats,price,airbags)
            this.comfortlevel = comfortlevel;
            this.childsafety = childsafety;

        }
        drivesafe(){
            console.log("drive safe");
        };

        built(){
            super.built();
            console.log("building better entrntainment");

        }
        

    }

 var fcar = new familycar("tata",5,4,55559,7,true)

fcar.drive();
fcar.built()


//derived class or child class

class sportscar extends car{

    speedlimit="";
    hp="";
    nitro="";
    constructor(engine,seats,airbags,price,speedlimit,hp,nitro){
 super(engine,seats,price,airbags)
  this.speedlimit = speedlimit;
  this.hp = hp;
  this.nitro = nitro;

    }

    race(){
        console.log("racing starts");
    }
// overridden a parent class function/method
    built(){
        console.log("built a sport car");
    }

}

var scar = new sportscar("tata",4,2,55555,150,100,true)
 
scar.race();
scar.drive();
scar.built();
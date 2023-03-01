

//creating a blueprint of customer for programme to understand who is customer

class Customer{
   //properties 

    name="";
    age="";
    address="";
    userid="";
    mobile="";
    Email="";

    constructor(name, age, address, userid, mobile, Email){

         this.name=name;
         this.age=age;
         this.address=address;
         this.userid=userid;
         this.mobile=mobile;
         this.Email=Email;
         
    }
    // Methods (is function without function key word)

    placeOrder(){
     this.trackOrder()
console.log("order placed for "+this.name)
    }

    trackOrder(){
console.log("order tracking for "+this.name,this.age)
    }

    Search(){
console.log("search for phone "+this.name)
    }

}

//to create objects
//objects are real-->

//creating an object using customer blue print

var customer1 = new Customer("tushar",25,"latur",77,686969,"tt");


customer1.placeOrder();
customer1.Search();

var customer2 = new Customer("pawar",35,"pune",77,686969,"tt");


customer2.placeOrder();
customer2.Search();
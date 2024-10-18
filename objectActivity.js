let car = {
    type: " Sedan",
    model: "Camry",
    color: "Silver"
  };

  console.log(car) // the output is: { type: ' Sedan', model: 'Camry', color: 'Silver' }
  console.log(typeof car); // yhe output is: Object
  
  
  car.type = "Toyota";
  console.log(`Updated car object:`, car); // the output is: Updated car object: { type: 'Toyota', model: 'Camry', color: 'Silver' }
  
 
  car.wheels = 4;
  console.log(`New property:`, car); // the output is: Updated car object: { type: 'Toyota', model: 'Camry', color: 'Silver', wheels: 4 }

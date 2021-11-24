/**
 * storing today's forcast temperature in kelvin
 */
 const kelvin = 3;

 /**
  * storing today's forcast temperature in celsius
  */
 const celsius = kelvin - 273;
 
 /**
  * storing today's forcast temperature in fahrenheit
  */
 let fahrenheit = celsius * (9 / 5) + 32;
 
 /**
  * temperature in fahrenheit rounded down to integer
  */
 fahrenheit = Math.floor(fahrenheit);
 
 console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
 
 /**
  * storing today's forcast temperature in newton
  */
 let newton = celsius * (33 / 100);
 
 /**
  * temperature in newton rounded down to integer
  */
 newton = Math.floor(newton);
 
 console.log(`The temperature is ${newton} degrees newton.`);
 
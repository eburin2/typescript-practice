const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

//annotation for empty initialized 2 dimennsional array

// const carsByMake = string[][] = [];

//help with inference when extracting values

const ford = carMakers[0];

const myCar = carMakers.pop();

//prevent incompatible values

carMakers.push(100);

//help with 'map'

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//flexible types

const importantDates: (Date | string)[] = [new Date()];
importantDates.push(new Date());
importantDates.push('2030-10-10');

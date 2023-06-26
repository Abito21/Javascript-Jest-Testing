// Function splice (to find) value
const cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }
];

const car = {
    "color": "red",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    'capacity': 2
};
cars.splice(4, 0, car);
console.log(cars);

const ages = [3, 10, 18, 20];
const age18 = ages.find((ages == 18));
console.log(age18);


const jsonString = `
  {
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);
const listFirst = data.list[0];
const listSecond = data.list[1];

const result = {
  list:[
    {
     name:listFirst.name,
     age:listFirst.age,
     prof:listFirst.prof,
    },
    {
     name:listSecond.name,
     age:listSecond.age,
     prof:listSecond.prof
    }
  ]
};

console.log(result);
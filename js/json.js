const shop = {
  ceo: "ami",
  tikana: {
    street: "jani na",
    city: "sylhet",
    desh: "buli gesi",
  },
  kita_ase: ['murgi', 'murga', 'hambba', 'duck'],
  isReal:true,
  amount:100000000
};
// console.log(shop);
const shopJson=JSON.stringify(shop)
console.log(shopJson);
const shopObj=JSON.parse(shopJson)
console.log(shopObj);
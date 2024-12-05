
// to string
console.log(typeof(String(null)));
console.log(typeof(String(4)));
// ------------------
console.log(typeof(true+''));

const num=5;
console.log('https://vk.com/catalog/'+num);
const fontSize=26+'px';
// --------------------
//to Number
console.log(typeof(Number('4')));
// -------------------------
console.log(typeof(Number(+'5')));
// ----------------------------
console.log(typeof(Number('15px',10)));
// ---------------------------

//to Boolean
0,'', null, undefined, Nan //это все false
// ----------------------------

console.log(typeof(Boolean('4')));
// -----------------------
console.log(typeof(!!'dfvdv'));
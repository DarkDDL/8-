let objects = [
{ name: 'Слава', surname: 'Ветрянной' },
{ name: 'Даша',surname: 'Ивлеева' },
{ name: 'Иван',surname: 'Синичкин' }
];
function sercPlace(objects, key, value) {
  const result = [];
  for (let i = 0; i < objects.length; i++) {
    const obj = objects[i];
    if (obj[key] === value) result.push(obj);
  }
  return result;
}
const filteredArray = sercPlace(objects, 'name', 'Иван'); 
console.log(filteredArray);
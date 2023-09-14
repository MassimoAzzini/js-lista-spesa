// 1.
const listaSpesa = [
  'banane',
  'insalata',
  'acqua',
  'pomodori',
  'mozzarella',
  'yogurt',
  'formaggio',
  'carne',
  'pesce',
  'uova',
]

// 2.
const outputLi = document.getElementById('output-list');

// 3.
let i = 0;

while(i < listaSpesa.length){

  // 4.
  const listItem = document.createElement('li');

  // 5.
  listItem.innerHTML = listaSpesa[i];
  
  // 6.
  outputLi.append(listItem);

  // 7.
  i++;
}


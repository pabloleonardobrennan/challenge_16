let numbers_list = [];
let number;



const addNumber = () =>{
    number = Number(prompt('Ingrese número: '));
    if(!isNaN(number)){
      numbers_list.push(number);
    }else{
      alert('Número no válido');
    }
}

const getNumbers = () =>{
  alert(`${numbers_list.join('')}`);
  numbers_list.splice(0,numbers_list.length);
}


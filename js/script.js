const firstDiv = document.querySelector('.firstStep');
const secondDiv = document.querySelector('.secondStep');
const finalDiv = document.querySelector('.finalStep');

function go (currentStep, nextStep) {
  let dNone, dBlock;
  if(currentStep == 1){
    dNone = firstDiv;
  }
  else if (currentStep == 2){
    dNone = secondDiv;
  }
  else{
    dNone = finalDiv;
  }
  dNone.style.display = 'none';


  if(nextStep == 1){
    dBlock = firstDiv;
  }
  else if (nextStep == 2){
    dBlock = secondDiv;
  }
  else{
    dBlock = finalDiv;
  }
  dBlock.style.display = 'block';
}

function validate (){
  const peso = document.querySelector('#peso');
  const altura = document.querySelector('#altura');



  

  
      // Obtém o valor atual do campo de entrada
      var valor = altura.value;

      // Remove ponto e vírgula do valor
      valor = valor.replace(/[\.;]/g, '');

      // Atualiza o valor do campo de entrada
      altura.value = valor;
  




  peso.style.border = 'none';
  altura.style.border = 'none';
  let h4 = document.querySelector('h4');
  
  if(!peso.value || !altura.value){
        if(!peso.value && !altura.value){
          h4.innerHTML = 'Digite o peso e altura';
          peso.style.border = '1px solid rgb(219,155,25)'
          altura.style.border = '1px solid rgb(219,155,25)'
        }
        else if (!peso.value){
          h4.innerHTML = 'Digite o peso';
          peso.style.border = '1px solid rgb(219,155,25)'
        }
        else{
          h4.innerHTML = 'Digite a altura';
          altura.style.border = '1px solid rgb(219,155,25)'
        }
  }
      else
      {
        
        let imc =  peso.value / (altura.value / 100 * altura.value / 100);
        const result = document.querySelector('#resultado');
        
        if(imc < 18.5){
          result.innerHTML = `Magreza | Obesidade : 0 | IMC = ${imc.toFixed(2)}`;
          h4.style.display = 'none'
          result.style.color = "yellow";
        }
        else if (imc >= 18.5 && imc <25) {
          result.innerHTML = `Normal | Obesidade : 0 | IMC = ${imc.toFixed(2)}`;
          h4.style.display = 'none'
          result.style.color = "green";
        }
        else if (imc >= 25 && imc <30) {
          result.innerHTML = `Sobrepeso | Obesidade : I | IMC = ${imc.toFixed(2)}`;
          h4.style.display = 'none'
          result.style.color = "yellow";
        }
        else if (imc >= 30 && imc <= 39.9) {
          result.innerHTML = `Obesidade | Obesidade : II | IMC = ${imc.toFixed(2)}`;
          h4.style.display = 'none'
          result.style.color = "red";
        }
        else {
          result.innerHTML = `Obesidade | Obesidade : III | IMC = ${imc.toFixed(2)}`;
          h4.style.display = 'none'
          result.style.color = "red";
        }
        go(2,3);
  
      }
}

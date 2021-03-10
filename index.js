/**
 * Responsável por atualizar o label quando muda o input range.
 */
$('input[type=range]').on('input', function () {
  $(this).trigger('change')
  $('#label').html($(this).val())
})

function updateRangeInput(val) {
  document.getElementById('label').length = val
}

const letters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const simbol = '*/-+.,%&#@!$'

/**
 * Pega os valores dos input's checkbox.
 */
const inputRange = document.getElementById('range')
const hasCapital = document.getElementById('hasCapital')
const hasNumber = document.getElementById('hasNumber')
const hasSpecialCharacter = document.getElementById('hasSpecialCharacter')

document.getElementById('btn-submit').onclick = function () {
  if (!hasCapital.checked && !hasNumber.checked && !hasSpecialCharacter.checked) {
    /**
     * Caso não tenha nenhum filtro.
     */
    
    let randomPass = '';
    for (let i = 0; i < inputRange.value; i++) {
      randomPass += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return document.getElementById('passworsValue').value = randomPass;
  }

  if (hasCapital.checked && !hasNumber.checked && !hasSpecialCharacter.checked) {
    /**
     * Para letras maiusculas.
     */
    let pass = letters + letters.toUpperCase()
    let randomPass = '';
    for (let i = 0; i < inputRange.value; i++) {
      randomPass += pass.charAt(Math.floor(Math.random() * pass.length));
    }
    return document.getElementById('passworsValue').value = randomPass;
  } 

  if(!hasCapital.checked && hasNumber.checked && !hasSpecialCharacter.checked) {
    /**
     * Para números.
     */
    const pass = numbers + letters
    let randomPass = '';
    for (let i = 0; i < inputRange.value; i++) {
      randomPass += pass.charAt((Math.random() * pass.length));
    }
    return document.getElementById('passworsValue').value = randomPass;
  }
  
  if (!hasCapital.checked && !hasNumber.checked && hasSpecialCharacter.checked){
    /**
     * Para simbolos.
     */
    const pass = simbol + letters
    let randomPass = '';
    for (let i = 0; i < inputRange.value; i++) {
      randomPass += pass.charAt((Math.random() * pass.length));
    }
    return document.getElementById('passworsValue').value = randomPass;
  } 
  
  if (hasCapital.checked && hasNumber.checked && hasSpecialCharacter.checked) {
    /**
     * Todos os inputs selecionados.
     */
    const pass = simbol + letters + letters.toUpperCase() + numbers;
    randomPass = ''
    for (let i = 0; i < inputRange.value; i++) {
      randomPass += pass.charAt((Math.random() * pass.length));
    }
    return document.getElementById('passworsValue').value = randomPass
  }

  if (hasCapital.checked && hasNumber.checked && !hasSpecialCharacter.checked) {
    /**
     * Para letras maiusculas e números. 
     */
    const pass = letters + letters.toUpperCase() + numbers;
    randomPass = ''
    for (let i = 0; i < inputRange.value; i++) {
      randomPass += pass.charAt((Math.random() * pass.length));
    }
    return document.getElementById('passworsValue').value = randomPass
  }

  if (!hasCapital.checked && hasNumber.checked && hasSpecialCharacter.checked) {
    /**
     * Para números e símbolos. 
     */
    const pass = letters + numbers + simbol;
    randomPass = ''
    for (let i = 0; i < inputRange.value; i++) {
      randomPass += pass.charAt((Math.random() * pass.length));
    }
    return document.getElementById('passworsValue').value = randomPass
  }

  if (hasCapital.checked && !hasNumber.checked && hasSpecialCharacter.checked) {
    /**
     * Para letras maiusculas e símbolos. 
     */
    const pass = letters + letters.toUpperCase() + simbol;
    randomPass = ''
    for (let i = 0; i < inputRange.value; i++) {
      randomPass += pass.charAt((Math.random() * pass.length));
    }
    return document.getElementById('passworsValue').value = randomPass
  }
}

function copyValue(){
  const copyText = document.getElementById("passworsValue");

   /**
   * Seleciona o campo.
   */
  copyText.select();

  /**
   * Copia a senha. 
   */  
  document.execCommand("copy");
}

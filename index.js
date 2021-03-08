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

const simbol = '*/-+.,%&#@!$'
/**
 * Pega os valores dos input's checkbox.
 */
const inputRange = document.getElementById('range')
const checkBox0 = document.getElementById('checkBox0')
const checkBox1 = document.getElementById('checkBox1')
const checkBox2 = document.getElementById('checkBox2')

document.getElementById('btn-submit').onclick = function () {
  if (checkBox0.checked && !checkBox1.checked && !checkBox2.checked) {
    /**
     * Para letras maiusculas.
     */
    let randomPass = '';
    for (let i = 0; i < inputRange.value; i++) {
      randomPass += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return document.getElementById('passworsValue').value = randomPass.toUpperCase();
  } else if(!checkBox0.checked && checkBox1.checked && !checkBox2.checked) {
    /**
     * Para números.
     */
     const randomPass = (Math.random().toString(16).substr(2, inputRange.value))
     document.getElementById('passworsValue').value = randomPass
  }else if (!checkBox0.checked && !checkBox1.checked && checkBox2.checked){
    /**
     * Para simbolos.
     */
    let randomPass = '';
    for (let i = 0; i < inputRange.value; i++) {
      randomPass += simbol.charAt(Math.floor(Math.random() * simbol.length));
    }
    return document.getElementById('passworsValue').value = randomPass.toUpperCase();
  }else if (checkBox0.checked && checkBox1.checked && checkBox2.checked) {
    console.log('aqui4');
  }
}

function copyValue(){
  const copyText = document.getElementById("passworsValue");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  alert('Sua senha foi copiada: ' + copyText.value)
}


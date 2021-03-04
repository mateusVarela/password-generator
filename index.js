/**
 * Responsável por atualizar o label quando muda o input range.
 */
$('input[type=range]').on('input', function () {
  $(this).trigger('change')
  $('#label').html($(this).val())
})

function updateRangeInput(val) {
  document.getElementById('label').length = val
  console.log()
}

/**
 * Pega os valores dos input's checkbox.
 */
const inputRange = document.getElementById('range')
const checkBox0 = document.getElementById('checkBox0')
const checkBox1 = document.getElementById('checkBox1')
const checkBox2 = document.getElementById('checkBox2')

document.getElementById('btn-enviar').onclick = function () {
  if (checkBox0.checked && !checkBox1.checked && !checkBox2.checked) {
    console.log('aqui1')
  } else if(!checkBox0.checked && checkBox1.checked && !checkBox2.checked) {
     const randomPass = (Math.random().toString(36).substr(-inputRange.value))
     document.getElementById('passworsValue').innerHTML= randomPass
  }else if (!checkBox0.checked && !checkBox1.checked && checkBox2.checked){
    console.log('aqui3');
  }else if (checkBox0.checked && checkBox1.checked && checkBox2.checked) {
    console.log('aqui4');
  }
  console.log($('#passworsValue').text());
}

function copyValue(){
   /* Get the text field */
   const a = $('#passworsValue').text()
   var copyText = a;

   /* Copy the text inside the text field */
   document.execCommand("copy");
 
   /* Alert the copied text */
   alert("Senha copiada: " + copyText)
}


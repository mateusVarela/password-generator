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

function updateCheckInput() {
  const a = document.querySelectorAll(':checked')
  console.log(a)
  for (var i = 0; i < a.lenght; i++) {
    if (a[i] == true) {
      console.log('acept')
    } else {
      console.log('aqui')
    }
  }
}

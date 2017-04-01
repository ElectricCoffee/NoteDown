document.querySelector('#text-field').addEventListener('keydown', function (event) {
  if (event.keyCode === 9) {
    let start = this.selectionStart;
    let end   = this.selectionEnd;

    let target = event.target;
    let value  = target.value;

    target.value = value.substring(0, start) + '    ' + value.substring(end)

    event.preventDefault()
  }
}, false)

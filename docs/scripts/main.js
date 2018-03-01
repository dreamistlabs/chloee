function updateTextAndBorderColorBasedOn(color) {
  if (color < 'bbbbbb') {
    $('#Chloee').addClass('font--light');
    $('input').addClass('border--light');
    $('input').removeClass('border--dark');
  } else {
    $('#Chloee').removeClass('font--light');
    $('input').removeClass('border--light');
    $('input').addClass('border--dark');
  }
}

// focus handlers
$('#hex-input, #rgb-input').focus(function() {
  $(this).parent('.input-group').addClass('active');
});

$('#hex-input, #rgb-input').focusout(function() {
  $(this).parent('.input-group').removeClass('active');
});

// capture input changes
$('#hex-input').change(function() {
  const HEXFormat = new RegExp(/^#*[0-9a-f]{6}$/, 'i');

  if (this.value.match(HEXFormat)) {
    const rgbCode = chloee(this.value);
    $('#rgb-input').val(`rgb(${rgbCode})`);
    $('#Chloee').css("background-color", `rgb(${rgbCode})`);

    updateTextAndBorderColorBasedOn(this.value);
  }
});

$('#rgb-input').change(function() {
  const RANGE = '([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
  const RGB_FORMAT = new RegExp(`^(${RANGE}[,\s]+){2}${RANGE}{1,3}$`)

  if (this.value.match(RGB_FORMAT)) {
    const hexCode = chloee(this.value);
    $('#hex-input').val(`#${hexCode}`);
    $('#Chloee').css("background-color", `#${hexCode}`);

    updateTextAndBorderColorBasedOn(hexCode);
  }
});
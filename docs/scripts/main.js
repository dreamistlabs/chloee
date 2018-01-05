// focus handlers
$('#hex-input, #rgb-input').focus(function() {
  $(this).parent('.input-group').addClass('active');
});

$('#hex-input, #rgb-input').focusout(function() {
  $(this).parent('.input-group').removeClass('active');
});

// capture input changes
$('#hex-input').change(function() {
  const HEXFormat = new RegExp(/^#*[0-9abcdef]{6}/, 'i');

  if (this.value.match(HEXFormat)) {
    const rgbCode = new Chloee(this.value).convert();
    $('#rgb-input').val(rgbCode);
    $('#Chloee').css("background-color", `rgb(${rgbCode})`);
  }
});

$('#rgb-input').change(function() {
  const RGBRange = '([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
  const RGBFormat = new RegExp(`^(${RGBRange}[,\s]+){2}${RGBRange}{1,3}`);

  if (this.value.match(RGBFormat)) {
    const hexCode = new Chloee(this.value).convert();
    $('#hex-input').val(hexCode);
    $('#Chloee').css("background-color", `#${hexCode}`);
  }
});

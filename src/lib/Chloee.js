class Chloee {

  constructor(color) {
    [this._color, this._isRGB, this._isHEX, this._code] = [color, false, false, {
      "a": 10,
      "b": 11,
      "c": 12,
      "d": 13,
      "e": 14,
      "f": 15
    }];

    this.validateAndIdentify(this._color);
  }

  validateAndIdentify(color) {
    const RGBRange = '([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
    const HEXFormat = new RegExp(/^#*[0-9abcdef]{6}/, 'i');
    const RGBFormat = new RegExp(`^(${RGBRange}[,\s]+){2}${RGBRange}{1,3}`);

    if (color === undefined) {
      throw new TypeError('Oops! Looks like you forgot to pass in a HEX or RGB value. Chloee requires a valid argument');
    } 
    else if (typeof color !== 'string') {
      throw new TypeError(`Argument must be a string. You passed in ${color}`);
    } 
    else if (!this._color.match(HEXFormat) && !this._color.match(RGBFormat)) {
      throw new Error(`Format Error! Argument must be a HEX code (e.g. #c470ee) or RGB value (e.g. 196,112,238). You entered ${color}`);
    }

    color.match(HEXFormat) ? this._isHEX = true : this._isRGB = true;
  }

  convert() {
    /* istanbul ignore else */
    if (this._isRGB) {
      return this.convertTo('hex', this._color);
    } else if (this._isHEX) {
      return this.convertTo('rgb', this._color);
    }
  }

  convertToLetter(number) {
    for (var key in this._code) {
      if (this._code[key] === number) {
        return key;
      }
    }
  }

  convertTo(type, color) {
    let result = [];

    /* istanbul ignore else */
    if (type === 'hex') {
      let converted_rgb = [];
      color.split(',').map((char) => {
        let value = Number(char);
        converted_rgb.push(Math.floor(value / 16));
        converted_rgb.push(value % 16);
      });

      // console.log(converted_rgb);
      for (let i=0; i<converted_rgb.length; i++) {

        converted_rgb[i] > 9
        ? result.push(this.convertToLetter(converted_rgb[i]))
        : result.push(converted_rgb[i]);

      }
      return result.join('');

    } else if (type === 'rgb') {
      let converted_hex = color.split('').map((char) => {
        return char.match(/[abcdef]/i) ? this._code[char] : Number(char);
      });
      // console.log(converted_hex);

      for (let i=0; i<6; i=i+2) {
       result.push((converted_hex[i] * 16) + converted_hex[i+1]);
      }
      return result.join(',');
    }
  }

}

module.exports = Chloee;

function getHue() {
  try {
    var rangeSlider = document.getElementById("color-picker");
    return rangeSlider.value;
  } catch {
    return 180;
  }
}
module.exports = {
  // hue: rangeSlider.value,
  hue: getHue(),
};

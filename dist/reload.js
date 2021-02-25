var sass = new Sass("./dist/sass.worker.js");
const rangeSlider = document.getElementById("color-picker");
// rangeSlider.addEventListener("mousemove", handleUpdate);
rangeSlider.addEventListener("change", handleUpdate);

function handleUpdate() {
  console.log(Sass);
  var scss = "$someVar: 123px; .some-selector { width: $someVar; }";
  sass.compile(scss, function (result) {
    console.log(result);
  });
  // sass.compileFile("./src/styles.scss", function (result) {
  //   console.log(result);
  // });
}

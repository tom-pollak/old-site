var sass = new Sass("dist/sass.worker.js");
// var sass = new Sass();
const rangeSlider = document.getElementById("color-picker");
// rangeSlider.addEventListener("mousemove", handleUpdate);
rangeSlider.addEventListener("change", handleUpdate);

function handleUpdate() {
  // console.log(sass);
  var scss = "$someVar: 123px; p { color: red; }";
  // sass.compile(scss, function callback(result) {
  //   console.log(result);
  // });
  sass.compileFile("./src/styles.scss", function callback(result) {
    console.log(result);
  });
  console.log("handleUpdate");
  // var a = sass.compileFile("./src/styles.scss");
  // console.log(a);
}

// import Sass from "./sass.worker.js";

const rangeSlider = document.getElementById("color-picker");
// rangeSlider.addEventListener("mousemove", handleUpdate);
rangeSlider.addEventListener("change", handleUpdate);

function handleUpdate() {
  // var scss = "$someVar: 123px; p { color: red; }";
  // Sass.compile(scss, function callback(result) {
  //   console.log(result);
  // });
  //
  Sass.writeFile("test.scss", "$someVar: 123px; p { color: red; }");
  Sass.compileFile("./styles.scss", function callback(result) {
    console.log(result);
  });
}

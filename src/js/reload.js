Sass.preloadFiles(
  "./src/sass/",
  "",
  ["styles.scss", "colors.scss", "hue.scss"],
  function callback() {}
);

const rangeSlider = document.getElementById("color-picker");
// rangeSlider.addEventListener("mousemove", handleUpdate);
rangeSlider.addEventListener("change", handleUpdate);

function handleUpdate() {
  var scss = "$hue: " + this.value + ";";
  // Sass.readFile("colors.scss", function callback(content) {
  //   scss += content;
  // });
  // console.log(scss);
  // Sass.readFile("styles.scss", function callback(content) {
  //   console.log(content);
  //   scss += content;
  // });

  Sass.writeFile("hue.scss", scss);
  Sass.readFile("hue.scss", function callback(content) {
    console.log(content);
  });
  Sass.readFile("styles.scss", function callback(content) {
    console.log(content);
  });
  Sass.compileFile("styles.scss", function callback(result) {
    console.log(result.text);
    Sass.writeFile("styles.scss", result.text);
  });
}

import "./colors.scss";
import "./styles.scss";
import "./theme.js";

const rangeSlider = document.getElementById("color-picker");
// rangeSlider.addEventListener("change", handleUpdate);
rangeSlider.addEventListener("mousemove", reloadCss);

// const hello = document.getElementById("hello");
function handleUpdate() {
  // sass.render({ file: "styles.scss" });
  // rangeSlider.dataset.value = this.value;
  // hello.style.setProperty("--color-hue", this.value);
  // console.log(hello.style.getPropertyValue("--color-hue"));
}

function reloadCss() {
  console.log("reloadCss");
  var links = document.getElementsByTagName("link");
  for (var cl in links) {
    var link = links[cl];
    if (link.rel === "stylesheet") link.href += "";
  }
}

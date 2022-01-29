const web = document.getElementById("webSize");
const mobile = document.getElementById("mobileSize");

const output = document.getElementById("display");

const DesktopSize = 1200/100
const MobileSize = 325/100

function myFunction() {
  let b = ((web.value - mobile.value) / (DesktopSize - MobileSize)).toFixed(3);
  let a = ((web.value - DesktopSize * b) / 16).toFixed(3);
  output.value = `clamp(${mobile.value/16}rem, ${a}rem + ${b}vw, ${web.value/16}rem)`;
}

function copyText() {
  /* Get the text field */
  var copyText = document.getElementById("display");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

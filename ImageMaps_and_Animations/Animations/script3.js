var end = 0;
function down() {
  ti = setInterval(function () {
    if (end > 500) {
      clearInterval(ti);
      up();
    } else {
      end = end + 10;
      document.getElementById("ball").style.marginLeft = end + "px";
      document.getElementById("ball").style.top = end + "px";
    }
  }, 15);
}
function up() {
  let l = 500;
  ti = setInterval(function () {
    if (end == 0) {
      clearInterval(ti);
    } else {
      l = l + 10;
      end = end - 10;
      document.getElementById("ball").style.marginLeft = l + "px";
      document.getElementById("ball").style.marginTop = end + "px";
    }
  }, 105);
}
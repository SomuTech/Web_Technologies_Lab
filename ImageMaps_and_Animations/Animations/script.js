function change() {
    let id = null;
    const elem = document.getElementById("ball");
    let posLeft = 0;
    let posRight = 0;
    let posTop = 0;
    let posBottom = 0;
    clearInterval(id);
    id = setInterval(loop1, 5);
   // id = setInterval(loop2,5);
    function loop() {
      if (posLeft == 500 && posRight == 500) {
        clearInterval(id);
      }
    }
    function loop1() {
        if (posTop < 500) {
            posTop++;
            elem.style.top = posTop + "px";
        }
        else
            loop2();
      }
      function loop2() {
        if (posTop == 500 && posLeft < 100) {
            posLeft++;
            elem.style.left = posLeft + "px";
          }
          else
            loop3();
      }
      function loop3() {
        if ( posTop > 0) {
            posTop--;
            elem.style.top = posTop + "px";
          }
        else
        console.log("end");
      }
    }
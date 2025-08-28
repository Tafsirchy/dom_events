console.log('External file')

// Option 1: to handle event 

    function makeYellow() {
        document.body.style.backgroundColor = "yellow";
    }
    function makeRed() {
        document.body.style.backgroundColor = "red";
    }

// option 2: get element by id and then set onclick event

const btnMakeBlue = document.getElementById("btn-make-blue");
    // console.log(btnMakeBlue);
    btnMakeBlue.onclick = function makeBlue() {
        document.body.style.backgroundColor = "blue";
    };

// option 3: differenm version 

      const btnMakePurple = document.getElementById("btn-make-purple");
      console.log(btnMakePurple);
      // just write function name
      btnMakePurple.onclick = makePurple;

      function makePurple() {
        document.body.style.backgroundColor = "purple";
      }
      
// option 4: add event listener
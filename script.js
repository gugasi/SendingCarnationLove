(function () {
  const numOfFlowers = 4;
  const growGarden = () => {
    function getRandomArbitrary(min, max) {
      return Math.round(Math.random() * (max - min)) + min;
    }

    let positions = [];

    function getNum() {
      let pos = getRandomArbitrary(0, 100);
      for (let x = 0; x < positions.length; x++) {
        if (pos > positions[x] - 3 && pos < positions[x] + 3) {
          return false;
        }
      }
      positions.push(pos);
    }

    while (positions.length < numOfFlowers) {
      getNum();
    }

    let flowerIndex = 0; // Track flower count
    let more = setInterval(function () {
      let flwr = document.createElement("div");
      let dim = getRandomArbitrary(30, 80);
      let leftPos = positions[0];
      positions.shift();

      flwr.classList.add("carnation");
      
      // Ensure first flower has all elements by adding a delay
      setTimeout(() => {
        flwr.innerHTML = `
          <div class="carnation__leaf--left"></div>
          <div class="carnation__leaf--right"></div>
          <div class="carnation__stem"></div>
          <div class="carnation__center"></div>
          <div class="carnation__petal carnation__petal--1"></div>
          <div class="carnation__petal carnation__petal--2"></div>
          <div class="carnation__petal carnation__petal--3"></div>
          <div class="carnation__petal carnation__petal--4"></div>
          <div class="carnation__petal carnation__petal--5"></div>
          <div class="carnation__petal carnation__petal--6"></div>
          <div class="carnation__petal carnation__petal--7"></div>
          <div class="carnation__petal carnation__petal--8"></div>
          <div class="carnation__petal carnation__petal--9"></div>
          <div class="carnation__petal carnation__petal--10"></div>
          <div class="carnation__petal carnation__petal--11"></div>
          <div class="carnation__petal carnation__petal--12"></div>`;
      }, flowerIndex === 0 ? 100 : 0);
      
      flwr.style.left = `${leftPos}vw`;
      flwr.style.height = `${dim}vmin`;
      flwr.style.width = `${dim}vmin`;
      flwr.style.zIndex = 100 - dim;
      flwr.style.filter = `saturate(${getRandomArbitrary(70, 100)}%) brightness(${getRandomArbitrary(80, 150)}%)`;
      document.querySelector("body").appendChild(flwr);
      
      flowerIndex++; // Increment flower count
    }, 150);

    setTimeout(function () {
      window.clearInterval(more);
    }, numOfFlowers * 150);
  };

  document.body.addEventListener("click", () => {
    growGarden();
  });
})();

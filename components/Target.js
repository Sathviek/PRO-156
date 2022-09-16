// Registering component in Target.js

AFRAME.registerComponent("target-coins", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `coin${i}`;

      //position variables
      var posX = Math.random() * 3000 + (-1000);      
      var posY = Math.random() * 2 + (-1);
      var posZ = Math.random() * 3000 + -1000;

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.createCoins(id, position);
    }
  },

  createRings: function(id,position) {
    var terrainEl = document.querySelector("#terrain");
    var coinEl = document.createElement("a-entity");

    coinEl.setAttribute("id",id);
    coinEl.setAttribute("material","color","#ff9100");
    coinEL.setAttribute("position",position);
    coinEL.setAttribute("geometry",{ primitive: "torus",radius: 8 });   
    coinEL.setAttribute("static-body" , {
      shape:"sphere",
      sphereRadius:2
    })
    coinEL.setAttribute("game-play" , {
      elementId:`#${id}`
    })
        
    terrainEl.appendChild(coinEL);
  }
});
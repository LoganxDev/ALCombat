
var andrewSprite  = document.getElementById('andrewDiv');
var loganSprite = document.getElementById('loganDiv')

//  if (isFireballColision()) {
//           $fireball.classList.add('explode').removeClass('moving').css('marginLeft','+=22px'); 
//           clearInterval(explodeIfColision);
//           setTimeout(function() { $fireball.remove(); }, 500); 
//         }
  
//       }, 50);
  
//       setTimeout(function() { $fireball.classList.add('moving'); }, 20);
              
//       setTimeout(function() { 
//           $fireball.remove(); 
//           clearInterval(explodeIfColision);
//       }, 3020);
  
//   }, (250));
// };

/* Andrew movement functions */

var walkLeftAndrew = function(){
  var margin;
  margin = andrewSprite.style.marginLeft.slice(0,-2);
  numMargin = parseInt(margin);
  numMargin += -20;
  andrewSprite.style.marginLeft = numMargin + 'px';
};

var walkRightAndrew = function(){
  var margin;
  margin = andrewSprite.style.marginLeft.slice(0,-2);
  numMargin = parseInt(margin);
  numMargin += 20;
  andrewSprite.style.marginLeft = numMargin + 'px';
};

var jumpAndrew = function(){
  andrewSprite.classList.add('jump');
  setTimeout(function() { andrewSprite.classList.add('down'); }, 500); 
  setTimeout(function() { andrewSprite.removeClass('jump down'); }, 1000); 
};
var kneelAndrew = function(){
  andrewSprite.src = 'images/kneelingA.png';
  setTimeout(function() { andrewSprite.src = 'images/standA.png'; }, 250);
};

var punchAndrew = function(){
  andrewSprite.src = 'images/punchA.png';
  setTimeout(function() { andrewSprite.src = 'images/standA.png'; }, 150);
};

var kickAndrew = function(){
  andrewSprite.src = 'images/kick1A.png';
  setTimeout(function() { andrewSprite.src = 'images/standA.png'; }, 200);
};


/* Logan movement functions */

var walkLeftLogan = function(){
  var margin;
  margin = loganSprite.style.marginLeft.slice(0,-2);
  numMargin = parseInt(margin);
  numMargin += -20;
  loganSprite.style.marginLeft = numMargin + 'px';
};

var walkRightLogan = function(){
  var margin;
  margin = loganSprite.style.marginLeft.slice(0,-2);
  numMargin = parseInt(margin);
  numMargin += 20;
  loganSprite.style.marginLeft = numMargin + 'px';
};

var jumpLogan = function(){
  loganSprite.classList.add('jump');
  setTimeout(function() { loganSprite.classList.add('down'); }, 500); 
  setTimeout(function() { loganSprite.removeClass('jump down'); }, 1000); 
};

var kneelLogan = function(){
  loganSprite.src = 'images/kneelingL.png';
  setTimeout(function() { loganSprite.src = 'images/standL.png'; }, 250);
};

var punchLogan = function(){
  loganSprite.src = 'images/punchL.png';
  setTimeout(function() { loganSprite.src = 'images/standL.png'; }, 150);
};

var kickLogan = function(){
  loganSprite.src = 'images/kick1L.png';
  setTimeout(function() { loganSprite.src = 'images/standL.png'; }, 200);
};

document.addEventListener('keyup', function (e) {
	console.log(e.keyCode);
	return true;
});

document.addEventListener('keydown', function(e) {
    if (e.type == 'keydown') {
    	console.log(e.keyCode);

    	/* Check for Andrew's inputs */

    	// T - jump
        if (e.keyCode == 84 
            && !loganDiv.hasClass('jump') 
            && !loganDiv.hasClass('kick') 
        ) { 
            jump();
        }

        // G - kneel
        if (e.keyCode == 71 
        ) { 
            kneelAndrew();
        }

        // F - Left
		if (e.keyCode == 70) { walkLeftAndrew(); }
		// H - Right
		if (e.keyCode == 72) { walkRightAndrew(); }

		// A - punch
		if (e.keyCode == 65 
		    && !andrewSprite.classList.contains('punchA') 
		) { 
		    punchAndrew(); 
		}

		// // s - kick
		// if (e.keyCode == 83 
		//     && !$ken.hasClass('kick') 
		// ) { 
		//     kick(); 
		// }

		// // d - projectile
		// if (e.keyCode == 68
		//     && !$ken.hasClass('punch') 
		//     && !$ken.hasClass('kick') 
		//     && !$ken.hasClass('jump')
		// ) { 
		//     projectile();
		// }

		/* Check for Logan's inputs */

		// up - jump
        if (e.keyCode == 38 
            && !loganDiv.hasClass('jump') 
            && !loganDiv.hasClass('kick') 
        ) { 
            jump();
        }

        // down - kneel
        if (e.keyCode == 40 
            && !loganDiv.hasClass('kneel') 
            && !loganDiv.hasClass('jump') 
            && !loganDiv.hasClass('kick') 
        ) { 
            kneel();
        }

		if (e.keyCode == 37) { walkLeftLogan(); }
		if (e.keyCode == 39) { walkRightLogan(); }

		// m - punch
		if (e.keyCode == 77 
		    && !loganSprite.classList.contains('punchL')
		) { 
		    punchLogan(); 
		}

		// // < - kick
		// if (e.keyCode == 77
		//     && !$ken.hasClass('kick') 
		// ) { 
		//     kick(); 
		// }

		// // > - projectile
		// if (e.keyCode == 188
		//     && !$ken.hasClass('punch') 
		//     && !$ken.hasClass('kick') 
		//     && !$ken.hasClass('jump')
		// ) { 
		//     projectile();
		// }

	} else { // keyup
	    // $ken.removeClass('walk kneel');
	}
	return false;
    console.log(e.keyCode);
});

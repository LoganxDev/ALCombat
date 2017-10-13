
var andrewSprite  = document.getElementById('andrewDiv');
var loganSprite = document.getElementById('loganDiv')

//  if (isFireballColision()) {
//           $fireball.addClass('explode').removeClass('moving').css('marginLeft','+=22px'); 
//           clearInterval(explodeIfColision);
//           setTimeout(function() { $fireball.remove(); }, 500); 
//         }
  
//       }, 50);
  
//       setTimeout(function() { $fireball.addClass('moving'); }, 20);
              
//       setTimeout(function() { 
//           $fireball.remove(); 
//           clearInterval(explodeIfColision);
//       }, 3020);
  
//   }, (250));
// };

/* Andrew movement functions */

var walkLeftAndrew = function(){
  andrewSprite.addClass('walk').css({ marginLeft:'-=10px' });
};

var walkRightAndrew = function(){
  andrewSprite.addClass('walk').css({ marginLeft:'+=10px' });
};

var jumpAndrew = function(){
  andrewSprite.addClass('jump');
  setTimeout(function() { andrewSprite.addClass('down'); }, 500); 
  setTimeout(function() { andrewSprite.removeClass('jump down'); }, 1000); 
};
var kneelAndrew = function(){
  andrewSprite.addClass('kneel');
};

var punchAndrew = function(){
  andrewSprite.addClass('punch'); 
  setTimeout(function() { andrewSprite.removeClass('punch'); }, 150);
};
var kickAndrew = function(){
  andrewSprite.addClass('kick');
  setTimeout(function() { andrewSprite.removeClass('kick'); }, 500);
};


/* Logan movement functions */

var walkLeftLogan = function(){
  loganSprite.addClass('walk').css({ marginLeft:'-=10px' });
};

var walkRightLogan = function(){
  loganSprite.addClass('walk').css({ marginLeft:'+=10px' });
};

var jumpLogan = function(){
  loganSprite.addClass('jump');
  setTimeout(function() { loganSprite.addClass('down'); }, 500); 
  setTimeout(function() { loganSprite.removeClass('jump down'); }, 1000); 
};

var kneelLogan = function(){
  loganSprite.addClass('kneel');
};

var punchLogan = function(){
  loganSprite.addClass('punch'); 
  setTimeout(function() { loganSprite.removeClass('punch'); }, 150);
};

var kickLogan = function(){
  loganSprite.addClass('kick');
  setTimeout(function() { loganSprite.removeClass('kick'); }, 500);
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
        if (e.keyCode == 84 
            && !loganDiv.hasClass('kneel') 
            && !loganDiv.hasClass('jump') 
            && !loganDiv.hasClass('kick') 
        ) { 
            kneel();
        }

        // F - Left
		if (e.keyCode == 70) { walkLeftAndrew(); }
		// H - Right
		if (e.keyCode == 72) { walkRightAndrew(); }

		// a - punch
		// if (e.keyCode == 65 
		//     && !$ken.hasClass('punch') 
		// ) { 
		//     punch(); 
		// }

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
		// if (e.keyCode == 78 
		//     && !$ken.hasClass('punch') 
		// ) { 
		//     punch(); 
		// }

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



 if (isFireballColision()) {
              $fireball.addClass('explode').removeClass('moving').css('marginLeft','+=22px'); 
              clearInterval(explodeIfColision);
              setTimeout(function() { $fireball.remove(); }, 500); 
          }
  
      }, 50);
  
      setTimeout(function() { $fireball.addClass('moving'); }, 20);
              
      setTimeout(function() { 
          $fireball.remove(); 
          clearInterval(explodeIfColision);
      }, 3020);
  
  }, (250));
};

var walkLeft = function(){
  $ken.addClass('walk').css({ marginLeft:'-=10px' });
};

var walkRight = function(){
  $ken.addClass('walk').css({ marginLeft:'+=10px' });
};

var jump = function(){
  $ken.addClass('jump');
  setTimeout(function() { $ken.addClass('down'); }, 500); 
  setTimeout(function() { $ken.removeClass('jump down'); }, 1000); 
};
var kneel = function(){
  $ken.addClass('kneel');
};
var walkLeft = function(){
  $ken.addClass('walk').css({ marginLeft:'-=10px' });
};
var walkRight = function(){
  $ken.addClass('walk').css({ marginLeft:'+=10px' });
};

document.addEventListener('keydown', function(e) {
    if (e.type == 'keydown') {
    	// console.log(e.keyCode);

    	// T - 84 up
    	// F - 70 left
    	// G - 84 down
    	// H - 72 right

		// button events
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

		// up - jump
        if (e.keyCode == 38 
            && !$ken.hasClass('jump') 
            && !$ken.hasClass('kick') 
        ) { 
            jump();
        }

        // down - kneel
        if (e.keyCode == 40 
            && !$ken.hasClass('kneel') 
            && !$ken.hasClass('jump') 
            && !$ken.hasClass('kick') 
        ) { 
            kneel();
        }

		if (e.keyCode == 37) { walkLeft(); }
		if (e.keyCode == 39) { walkRight(); }

	} else { // keyup
	    // $ken.removeClass('walk kneel');
	}
	return false;
    console.log(e.keyCode);
});

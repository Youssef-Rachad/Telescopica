const imageLieu = "jour/";
var actuel = new Date();
var nombreimage = actuel.getDay();
var image = [];

var jour = actuel.getDate();
var mois = actuel.getMonth();

image[0] = "dimanche.jpg";
image[1] = "lundi.jpg";
image[2] = "mardi.jpg";
image[3] = "mercredi.jpg";
image[4] = "jeudi.jpg";
image[5] = "vendredi.jpg";
image[6] = "samedi.jpg";

document.write('<img src="'+ imageLieu + image[nombreimage] +'" height="40px" width="150px" style="float:right;">');

//<p style="float:right;margin:50px 0 0 0;" '+ jour + "/" + mois +'</p> 


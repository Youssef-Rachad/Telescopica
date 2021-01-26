var scoreJoueur = 0;
var scoreOrdinateur = 0;
var scoreJoueur_span = document.getElementById("joueur");
var scoreOrdinateur_span = document.getElementById("ordinateur");
var resultat = document.getElementById("resultat");

const terrien_div = document.getElementById("T");
const martien_div = document.getElementById("M");
const robot_div = document.getElementById("R");

function reponseOrdinateur(){
	const choix = ['T','M','R'];
	const choixOrdinateur = Math.floor((Math.random)*3);
	return choix[choixOrdinateur];
}

function match(choixJoueur){
	const choixOrdinateur = reponseOrdinateur();
	switch (choixOrdinateur + choixJoueur) {
		case "TR":
		case "RM":
		case "MT":
			//perdre
			scoreOrdinateur_span.innerHTML = ++scoreOrdinateur;
			resultat.innerHTML= "C'est raté. L'Ordinateur a marqué.";
			break;
		case "TT":
		case "RR":
		case "MM":
			//egal
			resultat.innerHTML = "Égalité. Essaie encore!";
			break;
		case "TM":
		case "MR":
		case "RT":
			//gagner
			scoreJoueur_span.innerHTML = ++scoreJoueur;
			resultat.innerHTML = "Bravo! Tu as gagné un point.";
			break;
		default :
			alert('Oups, il y a eu une erreur');
	}

}
function jeu(){
	terrien_div.addEventListener('click',function() {
		match("T");
		console.log("tno");
	})
	martien_div.addEventListener('click',function() {
		match("M");
	})
	robot_div.addEventListener('click',function() {
		match("R");
	})
}


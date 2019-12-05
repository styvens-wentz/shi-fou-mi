const pierre = document.getElementById('pierre');
const papier = document.getElementById('papier');
const ciseaux = document.getElementById('ciseaux');
const alChoix = [pierre, papier, ciseaux];
const choix_advers = document.getElementById('choix_adversaire');
const choix_joueur = document.getElementById('choix_joueur');
let vic = parseInt(document.getElementById('nbVictoire'));
let def = parseInt(document.getElementById('nbDefaite'));
let scor = parseInt(document.getElementById('nbScore'));
const choisir = document.getElementById('choisir');
const cont_quit = document.getElementById('cont_quit');
let titre_choix = document.getElementById('choix');
const continuer = document.getElementById('continuer');
const quitter = document.getElementById('quitter');
let nom = document.getElementById('nom_joueur');

vic = 0;
def = 0;

pierre.addEventListener("click", function () {
    const alRobot = alChoix [Math.floor(Math.random() * alChoix.length)];
    const Robot = alRobot.cloneNode();
    const choix_pierre = pierre.cloneNode();
    choix_pierre.style.border = 'none';
    choix_pierre.style.height = '290px';
    choix_pierre.style.width = '290px';
    choix_pierre.style.cursor = 'initial';
    choix_joueur.appendChild(choix_pierre);
    Robot.style.border = 'none';
    Robot.style.height = '290px';
    Robot.style.width = '290px';
    Robot.style.filter = 'none';
    choix_advers.appendChild(Robot);
    choisir.style.display = 'none';
    cont_quit.style.display = 'flex';
    if (alRobot === pierre) {
        titre_choix.innerHTML = 'Égalité'
    } else if (alRobot === papier) {
        def++;
        document.getElementById('nbDefaite').innerHTML = def;
        titre_choix.innerHTML ='Perdu';
        titre_choix.style.color = 'red';
    } else if (alRobot === ciseaux) {
        vic++;
        document.getElementById('nbVictoire').innerHTML = vic;
        titre_choix.innerHTML ='Gagner';
        titre_choix.style.color = 'green';
    }
    scor = vic - def;
    document.getElementById('nbScore').innerHTML = scor;

    continuer.addEventListener("click", function () {
        choix_advers.removeChild(Robot);
        choix_joueur.removeChild(choix_pierre);
        papier.style.filter = 'none';
        ciseaux.style.filter = 'none';
        ciseaux.style.filter = 'none';
        choisir.style.display = 'flex';
        cont_quit.style.display = 'none';
    });
});

papier.addEventListener("click", function () {
    const alRobot = alChoix [Math.floor(Math.random() * alChoix.length)];
    const Robot = alRobot.cloneNode();
    const choix_papier = papier.cloneNode();
    choix_papier.style.border = 'none';
    choix_papier.style.height = '290px';
    choix_papier.style.width = '290px';
    choix_papier.style.cursor = 'initial';
    choix_joueur.appendChild(choix_papier);
    Robot.style.border = 'none';
    Robot.style.height = '290px';
    Robot.style.width = '290px';
    Robot.style.filter = 'none';
    choix_advers.appendChild(Robot);
    choisir.style.display = 'none';
    cont_quit.style.display = 'flex';
    if (alRobot === papier) {
        titre_choix.innerHTML = 'Égalité'
    } else if (alRobot === ciseaux) {
        def++;
        document.getElementById('nbDefaite').innerHTML = def;
        titre_choix.innerHTML ='Perdu';
        titre_choix.style.color = 'red';
    } else if (alRobot === pierre) {
        vic++;
        document.getElementById('nbVictoire').innerHTML = vic;
        titre_choix.innerHTML ='Gagner';
        titre_choix.style.color = 'green';
    }
    scor = vic - def;
    document.getElementById('nbScore').innerHTML = scor;

    continuer.addEventListener("click", function () {
        choix_advers.removeChild(Robot);
        choix_joueur.removeChild(choix_papier);
        papier.style.filter = 'none';
        ciseaux.style.filter = 'none';
        ciseaux.style.filter = 'none';
        choisir.style.display = 'flex';
        cont_quit.style.display = 'none';
    });
});

ciseaux.addEventListener("click", function () {
    const alRobot = alChoix [Math.floor(Math.random() * alChoix.length)];
    const Robot = alRobot.cloneNode();
    const choix_ciseaux = ciseaux.cloneNode();
    choix_ciseaux.style.border = 'none';
    choix_ciseaux.style.height = '290px';
    choix_ciseaux.style.width = '290px';
    choix_ciseaux.style.cursor = 'initial';
    choix_joueur.appendChild(choix_ciseaux);
    Robot.style.border = 'none';
    Robot.style.height = '290px';
    Robot.style.width = '290px';
    Robot.style.filter = 'none';
    choix_advers.appendChild(Robot);
    choisir.style.display = 'none';
    cont_quit.style.display = 'flex';
    if (alRobot === ciseaux) {
        titre_choix.innerHTML = 'Égalité'
    } else if (alRobot === pierre) {
        def++;
        document.getElementById('nbDefaite').innerHTML = def;
        titre_choix.innerHTML ='Perdu';
        titre_choix.style.color = 'red';
    } else if (alRobot === papier) {
        vic++;
        document.getElementById('nbVictoire').innerHTML = vic;
        titre_choix.innerHTML ='Gagner';
        titre_choix.style.color = 'green';
    }
    scor = vic - def;
    document.getElementById('nbScore').innerHTML = scor;

    continuer.addEventListener("click", function () {
        choix_advers.removeChild(Robot);
        choix_joueur.removeChild(choix_ciseaux);
        papier.style.filter = 'none';
        ciseaux.style.filter = 'none';
        ciseaux.style.filter = 'none';
        choisir.style.display = 'flex';
        cont_quit.style.display = 'none';
    });
});

document.getElementById('valider').addEventListener("click", function () {
    document.getElementById('jouer').style.display = 'none';
    document.getElementById('jeux').style.display = 'block';
    nom.innerHTML = document.getElementById('champ_nom').value
});

quitter.addEventListener("click", function () {
    opener=self;
    self.close();
});

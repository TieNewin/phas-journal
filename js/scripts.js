//Declaring components within modal
let ghostName = document.getElementById('modal-title');
let description = document.getElementById('description');
let strength = document.getElementById('strength');
let weakness = document.getElementById('weakness');
let ghostEvidence = document.getElementById('ghost-evidence');

//Declaring ghost info buttons
let spiritInfo = document.getElementById('spirit-info');
spiritInfo.addEventListener('click', showSpiritInfo);
let wraithInfo = document.getElementById('wraith-info');
wraithInfo.addEventListener('click', showWraithInfo);
let phantomInfo = document.getElementById('phantom-info');
phantomInfo.addEventListener('click', showPhantomInfo);
let poltergeistInfo = document.getElementById('poltergeist-info');
poltergeistInfo.addEventListener('click', showPoltergeistInfo);
let bansheeInfo = document.getElementById('banshee-info');
bansheeInfo.addEventListener('click', showBansheeInfo);
let jinnInfo = document.getElementById('jinn-info');
jinnInfo.addEventListener('click', showJinnInfo);
let mareInfo = document.getElementById('mare-info');
mareInfo.addEventListener('click', showMareInfo);
let revenantInfo = document.getElementById('revenant-info');
revenantInfo.addEventListener('click', showRevenantInfo);
let shadeInfo = document.getElementById('shade-info');
shadeInfo.addEventListener('click', showShadeInfo);
let demonInfo = document.getElementById('demon-info');
demonInfo.addEventListener('click', showDemonInfo);
let yureiInfo = document.getElementById('yurei-info');
yureiInfo.addEventListener('click', showYureiInfo);
let oniInfo = document.getElementById('oni-info');
oniInfo.addEventListener('click', showOniInfo);
let yokaiInfo = document.getElementById('yokai-info');
yokaiInfo.addEventListener('click', showYokaiInfo);
let hantuInfo = document.getElementById('hantu-info');
hantuInfo.addEventListener('click', showHantuInfo);
let goryoInfo = document.getElementById('goryo-info');
goryoInfo.addEventListener('click', showGoryoInfo);
let mylingInfo = document.getElementById('myling-info');
mylingInfo.addEventListener('click', showMylingInfo);
let onryoInfo = document.getElementById('onryo-info');
onryoInfo.addEventListener('click', showOnryoInfo);
let twinsInfo = document.getElementById('twins-info');
twinsInfo.addEventListener('click', showTwinsInfo);
let raijuInfo = document.getElementById('raiju-info');
raijuInfo.addEventListener('click', showRaijuInfo);
let obakeInfo = document.getElementById('obake-info');
obakeInfo.addEventListener('click', showObakeInfo);
let mimicInfo = document.getElementById('mimic-info');
mimicInfo.addEventListener('click', showMimicInfo);
let moroiInfo = document.getElementById('moroi-info');
moroiInfo.addEventListener('click', showMoroiInfo);
let deogenInfo = document.getElementById('deogen-info');
deogenInfo.addEventListener('click', showDeogenInfo);
let thayeInfo = document.getElementById('thaye-info');
thayeInfo.addEventListener('click', showThayeInfo);

//Functions that populate content into ghost info modal on button click
function showSpiritInfo () {
    ghostName.innerText = 'Spirit';
    description.innerHTML = 'Spirits are very common ghosts. they are<br>very powerful, but passive, only attacking<br>when they need to. They defend their<br>place of death to the utmost degree,<br>killing anyone that is caught overstaying<br>their welcome.';
    strength.innerHTML = '';
    weakness.innerHTML = 'Weakness: A spirit can be temporarily<br>stopped by burning Smudge Sticks near<br>them.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>EMF Level 5<br>Spirit Box<br>Ghost Writing';
}

function showWraithInfo () {
    ghostName.innerText = 'Wraith';
    description.innerHTML = 'Wraiths are one of the most dangerous<br>ghosts you will find. It is also the only<br>known ghost that has the ability of flight<br>and has sometimes been known to travel<br>through walls.';
    strength.innerHTML = 'Strength: Wraiths almost never touch the<br>ground, meaning it can\'t be tracked by<br>footsteps.';
    weakness.innerHTML = 'Weakness: Wraiths are afraid of salt<br>and will actively avoid it.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>EMF Level 5<br>Spirit Box<br>D.O.T.S Projector';
}

function showPhantomInfo () {
    ghostName.innerText = 'Phantom';
    description.innerHTML = 'A Phantom is a ghost that can possess<br>the living, inducing fear into those around<br>it. They are most commonly summoned<br>from Ouija Boards.';
    strength.innerHTML = 'Strength: Looking at a Phantom will drop<br>your sanity considerably faster.';
    weakness.innerHTML = 'Weakness: Taking a photo of the Phantom<br>will make it temporarily disappear.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>Spirit Box<br>Fingerprints<br>D.O.T.S Projector';
}

function showPoltergeistInfo () {
    ghostName.innerText = 'Poltergeist';
    description.innerHTML = 'One of the most famous ghosts, the<br>Poltergeist. Known to manipulate objects<br>around it to spread fear into its victims.';
    strength.innerHTML = 'Strength: Poltergeists can throw multiple<br>objects at once, and with great force.';
    weakness.innerHTML = 'Weakness: With nothing to throw,<br>Poltergeists become powerless.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>Spirit Box<br>Fingerprints<br>Ghost Writing';
}

function showBansheeInfo () {
    ghostName.innerText = 'Banshee';
    description.innerHTML = 'The singing siren, known for attracting its<br>victims through song. It has been known<br>to single out its prey before making a<br>killing blow.';
    strength.innerHTML = 'Strength: Banshee will weaken their target<br>before striking.';
    weakness.innerHTML = 'Weakness: Banshees can sometimes be<br>heard screaming with a parabolic<br>microphone.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>Fingerprints<br>Ghost Orb<br>D.O.T.S Projector';
}

function showJinnInfo () {
    ghostName.innerText = 'Jinn';
    description.innerHTML = 'A Jinn is a territorial ghost that will<br>attack when threatened. It has also been<br>known to be able to travel at significant<br>speed.';
    strength.innerHTML = 'Strength: A Jinn will travel at a faster<br>speed if its victim is far away.';
    weakness.innerHTML = 'Weakness: Turning off the location\'s<br>power source will prevent the Jinn from<br>using its ability.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>EMF Level 5<br>Fingerprints<br>Freezing Temperatures';
}

function showMareInfo () {
    ghostName.innerText = 'Mare';
    description.innerHTML = 'A Mare is the source of all nightmares,<br>making it more powerful in the dark.';
    strength.innerHTML = 'Strength: A Mare will have an increased<br>chance to attack in the dark.';
    weakness.innerHTML = 'Weakness: Turning the lights on around the<br>Mare will lower its chance to attack.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>Spirit Box<br>Ghost Orb<br>Ghost Writing';
}

function showRevenantInfo () {
    ghostName.innerText = 'Revenant';
    description.innerHTML = 'A Revenant is a violent ghost that will<br>attack indiscriminately. Their speed can<br>be deceiving, as they are slow while<br>dormant; however, as soon as they hunt<br>they can move incredibly fast.';
    strength.innerHTML = 'Strength: A Revenant will travel at a<br>significantly faster speed when hunting<br>their prey.';
    weakness.innerHTML = 'Weakness: Hiding from the Revenant will<br>cause it to move very slowly.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>Ghost Orb<br>Ghost Writing<br>Freezing Temperatures';
}

function showShadeInfo () {
    ghostName.innerText = 'Shade';
    description.innerHTML = 'A Shade is known to be very shy. There<br>is evidence to suggest that a Shade will<br>stop all paranormal activity if there are<br>people nearby.';
    strength.innerHTML = 'Strength: Shades are much harder to<br>find.';
    weakness.innerHTML = 'Weakness: The ghost will not enter a<br>hunt if there are people nearby.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>EMF Level 5<br>Ghost Writing<br>Freezing Temperatures';
}

function showDemonInfo () {
    ghostName.innerText = 'Demon';
    description.innerHTML = 'Demons are the most aggressive ghosts<br>we\'ve ever encountered. Known to attack<br>without reason, they seem to enjoy the<br>thrill of the hunt.';
    strength.innerHTML = 'Strength: Demons will initiate hunts more<br>often than other ghosts.';
    weakness.innerHTML = 'Weakness: Demons fear the Crucifix and<br>will be less aggressive near one.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>Fingerprints<br>Ghost Writing<br>Freezing Temperatures';
}

function showYureiInfo () {
    ghostName.innerText = 'Yurei';
    description.innerHTML = 'A Yurei is a ghost that has returned to<br>the physical world, usually for the<br>purpose of revenge or hatred.';
    strength.innerHTML = 'Strength: Yureis have been known to have<br>a stronger effect on people\'s sanity.';
    weakness.innerHTML = 'Weakness: Smudging the Yurei\'s place of<br>death will trap it temporarily, reducing<br>how much it wanders.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>Ghost Orb<br>Freezing Temperatures<br>D.O.T.S Projector';
}

function showOniInfo () {
    ghostName.innerText = 'Oni';
    description.innerHTML = 'Onis love to scare their victims as much<br>as possible before attacking. They are<br>often seen in their physical form, guarding<br>their place of death.';
    strength.innerHTML = 'Strength: Oni are much more active whilst<br>people are nearby and will drain their<br>sanity faster when manifesting.';
    weakness.innerHTML = 'Weakness: Oni disappear less often while<br>hunting their prey.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>EMF Level 5<br>Freezing Temperatures<br>D.O.T.S Projector';
}

function showYokaiInfo () {
    ghostName.innerText = 'Yokai';
    description.innerHTML = 'Yokai are common ghosts that are<br>attracted to human voices. They can<br>usually be found haunting family homes.';
    strength.innerHTML = 'Strength: Talking near a Yokai will anger<br>it, increasing the chance of an attack.';
    weakness.innerHTML = 'Weakness: When hunting, a Yokai can only<br>hear voices close to it.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>Spirit Box<br>Ghost Orb<br>D.O.T.S Projector';
}

function showHantuInfo () {
    ghostName.innerText = 'Hantu';
    description.innerHTML = 'A Hantu is a rare ghost that thrives in<br>the coldest climates. The cold seems to<br>make them more aggressive and<br>empowered.';
    strength.innerHTML = 'Strength: Lower temperatures allow the<br>Hantu to move at faster speeds.';
    weakness.innerHTML = 'Weakness: Hantus move slower in warmer<br>areas.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>Fingerprints<br>Ghost Orb<br>Freezing Temperatures';
}

function showGoryoInfo () {
    ghostName.innerText = 'Goryo';
    description.innerHTML = 'When a Goryo passes through a DOTS<br>projector, using a video camera is the<br>ony way to see it.';
    strength.innerHTML = 'Strength: A Goryo will usually only show<br>itself on camera if there are no people<br>nearby.';
    weakness.innerHTML = 'Weakness: They are rarely seen far from<br>their place of death.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>EMF Level 5<br>Fingerprints<br>D.O.T.S Projector';
}

function showMylingInfo () {
    ghostName.innerText = 'Myling';
    description.innerHTML = 'A Myling is a very vocal and active<br>ghost. They are rumored to be quiet<br>when hunting their prey.';
    strength.innerHTML = 'Strength: A Myling is known to be quieter<br>when hunting.';
    weakness.innerHTML = 'Weakness: Mylings more frequently make<br>paranormal sounds.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>EMF Level 5<br>Fingerprints<br>Ghost Writing';
}

function showOnryoInfo () {
    ghostName.innerText = 'Onryo';
    description.innerHTML = 'The Onryo is often referred to as "The<br>Wrathful Spirit". It steals souls from<br>dying victims\' bodies to seek revenge.<br>This ghost has been known to fear any<br>form of fire, and will do anything to be<br>far from it.';
    strength.innerHTML = 'Strength: Extinguishing a flame can cause<br>an Onryo to attack.';
    weakness.innerHTML = 'Weakness: When threatened, this ghost<br>will be less likely to hunt.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>Spirit Box<br>Ghost Orb<br>Freezing Temperatures';
}

function showTwinsInfo () {
    ghostName.innerText = 'The Twins';
    description.innerHTML = 'These ghosts have been reported to<br>mimic each other\'s actions. They alternate<br>their attacks to confuse their prey.';
    strength.innerHTML = 'Strength: Either Twin can be angered and<br>initiate an attack on their prey.';
    weakness.innerHTML = 'Weakness: The Twins will often interact<br>with the environment at the same time.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>EMF Level 5<br>Spirit Box<br>Freezing Temperatures';
}

function showRaijuInfo () {
    ghostName.innerText = 'Raiju';
    description.innerHTML = 'A Raiju is a demon that thrives on<br>electrical current. While generally calm,<br>they can become agitated when<br>overwhelmed with power.';
    strength.innerHTML = 'Strength: A Raiju can siphon power from<br>nearby electrical devices, making it move<br>faster.';
    weakness.innerHTML = 'Weakness: Raiju are constantly disrupting<br>electronic equipment when attacking, making<br>it easier to track.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>EMF Level 5<br>Ghost Orb<br>D.O.T.S Projector';
}

function showObakeInfo () {
    ghostName.innerText = 'Obake';
    description.innerHTML = 'Obake are terrifying shape-shifters,<br>capable of taking on many forms. They<br>have been seen taking on humanoid shapes<br>to attract their prey.';
    strength.innerHTML = 'Strength: When interacting with the<br>environment, an Obake will rarely leave a<br>trace.';
    weakness.innerHTML = 'Weakness: Sometimes this ghost will<br>shapeshift, leaving behind unique evidence.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>EMF Level 5<br>Fingerprints<br>Ghost Orb';
}

function showMimicInfo () {
    ghostName.innerText = 'The Mimic';
    description.innerHTML = 'The Mimic is an elusive, mysterious,<br>copycat ghost that mirrors traits and<br>behaviors from others, including other<br>ghost types.';
    strength.innerHTML = 'Strength: We\'re unsure what this ghost<br>is capable of. Be careful.';
    weakness.innerHTML = 'Weakness: Several reports have noted<br>ghost orb sightings near mimics.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>Spirit Box<br>Fingerprints<br>Freezing Temperatures';
}

function showMoroiInfo () {
    ghostName.innerText = 'Moroi';
    description.innerHTML = 'Moroi have risen from the grave to drain<br>energy from the living. They have been<br>known to place curses on their victims,<br>curable only by antidotes or moving very<br>far away.';
    strength.innerHTML = 'Strength: The weaker their victims, the<br>stronger the Moroi becomes.';
    weakness.innerHTML = 'Weakness: Moroi suffer from hyperosmia,<br>weakening them for longer periods.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>Spirit Box<br>Ghost Writing<br>Freezing Temperatures';
}

function showDeogenInfo () {
    ghostName.innerText = 'Deogen';
    description.innerHTML = 'Sometimes surrounded by an endless fog,<br>Deogen have been eluding ghost hunters<br>for years.<br><br>These ghosts have been reported to find<br>even the most hidden prey, before stalking<br>them into exhaustion.';
    strength.innerHTML = 'Strength: Deogen constantly sense the<br>living. You can run but you can\'t hide.';
    weakness.innerHTML = 'Weakness: Deogen require a lot of energy<br>to form and will move very slowly when<br>approaching its victim.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>Spirit Box<br>Ghost Writing<br>D.O.T.S Projector';
}

function showThayeInfo () {
    ghostName.innerText = 'Thaye';
    description.innerHTML = 'Thaye have been known to rapidly age<br>over time, even in the afterlife. From<br>what we\'ve learned, they seem to<br>deteriorate faster while within the<br>presence of the living.';
    strength.innerHTML = 'Strength: Upon entering the location,<br>Thaye will become active, defensive and<br>agile.';
    weakness.innerHTML = 'Weakness: Thaye will weaken over time,<br>making them weaker, slower and less<br>aggressive.';
    ghostEvidence.innerHTML = '<h5>Evidence</h5>Ghost Orb<br>Ghost Writing<br>D.O.T.S Projector';
}

//Declare evidence buttons and state toggle event listeners
let emf = document.getElementById('emf');
emf.addEventListener('click', emfToggle);
let fingerprints = document.getElementById('fingerprints');
fingerprints.addEventListener('click', fingerprintsToggle);
let writing = document.getElementById('writing');
writing.addEventListener('click', writingToggle);
let freezing = document.getElementById('freezing');
freezing.addEventListener('click', freezingToggle);
let dots = document.getElementById('dots');
dots.addEventListener('click', dotsToggle);
let orbs = document.getElementById('orbs');
orbs.addEventListener('click', orbsToggle);
let spiritBox = document.getElementById('spirit-box');
spiritBox.addEventListener('click', spiritBoxToggle);

//Declare ghost answer buttons
let spirit = document.getElementById('spirit');
spirit.addEventListener('click', spiritToggle);
let wraith = document.getElementById('wraith');
wraith.addEventListener('click', wraithToggle);
let phantom = document.getElementById('phantom');
phantom.addEventListener('click', phantomToggle);
let poltergeist = document.getElementById('poltergeist');
poltergeist.addEventListener('click', poltergeistToggle);
let banshee = document.getElementById('banshee');
banshee.addEventListener('click', bansheeToggle);
let jinn = document.getElementById('jinn');
jinn.addEventListener('click', jinnToggle);
let mare = document.getElementById('mare');
mare.addEventListener('click', mareToggle);
let revenant = document.getElementById('revenant');
revenant.addEventListener('click', revenantToggle);
let shade = document.getElementById('shade');
shade.addEventListener('click', shadeToggle);
let demon = document.getElementById('demon');
demon.addEventListener('click', demonToggle);
let yurei = document.getElementById('yurei');
yurei.addEventListener('click', yureiToggle);
let oni = document.getElementById('oni');
oni.addEventListener('click', oniToggle);
let yokai = document.getElementById('yokai');
yokai.addEventListener('click', yokaiToggle);
let hantu = document.getElementById('hantu');
hantu.addEventListener('click', hantuToggle);
let goryo = document.getElementById('goryo');
goryo.addEventListener('click', goryoToggle);
let myling = document.getElementById('myling');
myling.addEventListener('click', mylingToggle);
let onryo = document.getElementById('onryo');
onryo.addEventListener('click', onryoToggle);
let twins = document.getElementById('twins');
twins.addEventListener('click', twinsToggle);
let raiju = document.getElementById('raiju');
raiju.addEventListener('click', raijuToggle);
let obake = document.getElementById('obake');
obake.addEventListener('click', obakeToggle);
let mimic = document.getElementById('mimic');
mimic.addEventListener('click', mimicToggle);
let moroi = document.getElementById('moroi');
moroi.addEventListener('click', moroiToggle);
let deogen = document.getElementById('deogen');
deogen.addEventListener('click', deogenToggle);
let thaye = document.getElementById('thaye');
thaye.addEventListener('click', thayeToggle);

//Functions for changing evidence button appearance on click
function emfToggle () {
    if (emf.innerHTML === '<img id="emf-sym" src="img/square.svg"> EMF Level 5') {
        emf.innerHTML = '<img id="emf-sym" src="img/x-square.svg"> EMF Level 5';
        emf.classList.remove('blank');
        emf.classList.add('check');
    } else {
        if (emf.innerHTML === '<img id="emf-sym" src="img/x-square.svg"> EMF Level 5') {
            emf.innerHTML = '<img id="emf-sym" src="img/square.svg"> <del>EMF Level 5</del>';
            emf.classList.remove('check');
            emf.classList.add('cross');
        } else {
            if(emf.innerHTML === '<img id="emf-sym" src="img/square.svg"> <del>EMF Level 5</del>') {
                emf.innerHTML = '<img id="emf-sym" src="img/square.svg"> EMF Level 5';
                emf.classList.remove('cross');
                emf.classList.add('blank');
            } 
        }
    }
    answerToggle(); 
}

function fingerprintsToggle () {
    if (fingerprints.innerHTML === '<img id="fingerprints-sym" src="img/square.svg"> Fingerprints') {
        fingerprints.innerHTML = '<img id="fingerprints-sym" src="img/x-square.svg"> Fingerprints';
        fingerprints.classList.remove('blank');
        fingerprints.classList.add('check');
    } else {
        if (fingerprints.innerHTML === '<img id="fingerprints-sym" src="img/x-square.svg"> Fingerprints') {
            fingerprints.innerHTML = '<img id="fingerprints-sym" src="img/square.svg"> <del>Fingerprints</del>';
            fingerprints.classList.remove('check');
            fingerprints.classList.add('cross');
        } else {
            if(fingerprints.innerHTML === '<img id="fingerprints-sym" src="img/square.svg"> <del>Fingerprints</del>') {
                fingerprints.innerHTML = '<img id="fingerprints-sym" src="img/square.svg"> Fingerprints';
                fingerprints.classList.remove('cross');
                fingerprints.classList.add('blank');
            } 
        }
    }
    answerToggle();  
}

function writingToggle () {
    if (writing.innerHTML === '<img id="writing-sym" src="img/square.svg"> Ghost Writing') {
        writing.innerHTML = '<img id="writing-sym" src="img/x-square.svg"> Ghost Writing';
        writing.classList.remove('blank');
        writing.classList.add('check');
    } else {
        if (writing.innerHTML === '<img id="writing-sym" src="img/x-square.svg"> Ghost Writing') {
            writing.innerHTML = '<img id="writing-sym" src="img/square.svg"> <del>Ghost Writing</del>';
            writing.classList.remove('check');
            writing.classList.add('cross');
        } else {
            if(writing.innerHTML === '<img id="writing-sym" src="img/square.svg"> <del>Ghost Writing</del>') {
                writing.innerHTML = '<img id="writing-sym" src="img/square.svg"> Ghost Writing';
                writing.classList.remove('cross');
                writing.classList.add('blank');
            } 
        }
    }
    answerToggle();  
}

function freezingToggle () {
    if (freezing.innerHTML === '<img id="freezing-sym" src="img/square.svg"> Freezing Temperatures') {
        freezing.innerHTML = '<img id="freezing-sym" src="img/x-square.svg"> Freezing Temperatures';
        freezing.classList.remove('blank');
        freezing.classList.add('check');
    } else {
        if (freezing.innerHTML === '<img id="freezing-sym" src="img/x-square.svg"> Freezing Temperatures') {
            freezing.innerHTML = '<img id="freezing-sym" src="img/square.svg"> <del>Freezing Temperatures</del>';
            freezing.classList.remove('check');
            freezing.classList.add('cross');
        } else {
            if(freezing.innerHTML === '<img id="freezing-sym" src="img/square.svg"> <del>Freezing Temperatures</del>') {
                freezing.innerHTML = '<img id="freezing-sym" src="img/square.svg"> Freezing Temperatures';
                freezing.classList.remove('cross');
                freezing.classList.add('blank');
            } 
        }
    }
    answerToggle();  
}

function dotsToggle () {
    if (dots.innerHTML === '<img id="dots-sym" src="img/square.svg"> D.O.T.S Projector') {
        dots.innerHTML = '<img id="dots-sym" src="img/x-square.svg"> D.O.T.S Projector';
        dots.classList.remove('blank');
        dots.classList.add('check');
    } else {
        if (dots.innerHTML === '<img id="dots-sym" src="img/x-square.svg"> D.O.T.S Projector') {
            dots.innerHTML = '<img id="dots-sym" src="img/square.svg"> <del>D.O.T.S Projector</del>';
            dots.classList.remove('check');
            dots.classList.add('cross');
        } else {
            if(dots.innerHTML === '<img id="dots-sym" src="img/square.svg"> <del>D.O.T.S Projector</del>') {
                dots.innerHTML = '<img id="dots-sym" src="img/square.svg"> D.O.T.S Projector';
                dots.classList.remove('cross');
                dots.classList.add('blank');
            } 
        }
    } 
    answerToggle(); 
}

function orbsToggle () {
    if (orbs.innerHTML === '<img id="orbs-sym" src="img/square.svg"> Ghost Orb') {
        orbs.innerHTML = '<img id="orbs-sym" src="img/x-square.svg"> Ghost Orb';
        orbs.classList.remove('blank');
        orbs.classList.add('check');
    } else {
        if (orbs.innerHTML === '<img id="orbs-sym" src="img/x-square.svg"> Ghost Orb') {
            orbs.innerHTML = '<img id="orbs-sym" src="img/square.svg"> <del>Ghost Orb</del>';
            orbs.classList.remove('check');
            orbs.classList.add('cross');
        } else {
            if(orbs.innerHTML === '<img id="orbs-sym" src="img/square.svg"> <del>Ghost Orb</del>') {
                orbs.innerHTML = '<img id="orbs-sym" src="img/square.svg"> Ghost Orb';
                orbs.classList.remove('cross');
                orbs.classList.add('blank');
            } 
        }
    } 
    answerToggle(); 
}

function spiritBoxToggle () {
    if (spiritBox.innerHTML === '<img id="spirit-box-sym" src="img/square.svg"> Spirit Box') {
        spiritBox.innerHTML = '<img id="spirit-box-sym" src="img/x-square.svg"> Spirit Box';
        spiritBox.classList.remove('blank');
        spiritBox.classList.add('check');
    } else {
        if (spiritBox.innerHTML === '<img id="spirit-box-sym" src="img/x-square.svg"> Spirit Box') {
            spiritBox.innerHTML = '<img id="spirit-box-sym" src="img/square.svg"> <del>Spirit Box</del>';
            spiritBox.classList.remove('check');
            spiritBox.classList.add('cross');
        } else {
            if(spiritBox.innerHTML === '<img id="spirit-box-sym" src="img/square.svg"> <del>Spirit Box</del>') {
                spiritBox.innerHTML = '<img id="spirit-box-sym" src="img/square.svg"> Spirit Box';
                spiritBox.classList.remove('cross');
                spiritBox.classList.add('blank');
            } 
        }
    } 
    answerToggle(); 
}

//Function for changing ghost answer buttons appearance on click
function spiritToggle () {
    if (spirit.innerHTML === 'Spirit') {
        spirit.innerHTML = '<del>Spirit</del>';
    } else {
        if (spirit.innerHTML === '<del>Spirit</del>') {
            spirit.innerHTML = 'Spirit';
        }
    }
}

function wraithToggle () {
    if (wraith.innerHTML === 'Wraith') {
        wraith.innerHTML = '<del>Wraith</del>';
    } else {
        if (wraith.innerHTML === '<del>Wraith</del>') {
            wraith.innerHTML = 'Wraith';
        }
    }
}

function phantomToggle () {
    if (phantom.innerHTML === 'Phantom') {
        phantom.innerHTML = '<del>Phantom</del>';
    } else {
        if (phantom.innerHTML === '<del>Phantom</del>') {
            phantom.innerHTML = 'Phantom';
        }
    }
}

function poltergeistToggle () {
    if (poltergeist.innerHTML === 'Poltergeist') {
        poltergeist.innerHTML = '<del>Poltergeist</del>';
    } else {
        if (poltergeist.innerHTML === '<del>Poltergeist</del>') {
            poltergeist.innerHTML = 'Poltergeist';
        }
    }
}

function bansheeToggle () {
    if (banshee.innerHTML === 'Banshee') {
        banshee.innerHTML = '<del>Banshee</del>';
    } else {
        if (banshee.innerHTML === '<del>Banshee</del>') {
            banshee.innerHTML = 'Banshee';
        }
    }
}

function jinnToggle () {
    if (jinn.innerHTML === 'Jinn') {
        jinn.innerHTML = '<del>Jinn</del>';
    } else {
        if (jinn.innerHTML === '<del>Jinn</del>') {
            jinn.innerHTML = 'Jinn';
        }
    }
}

function mareToggle () {
    if (mare.innerHTML === 'Mare') {
        mare.innerHTML = '<del>Mare</del>';
    } else {
        if (mare.innerHTML === '<del>Mare</del>') {
            mare.innerHTML = 'Mare';
        }
    }
}

function revenantToggle () {
    if (revenant.innerHTML === 'Revenant') {
        revenant.innerHTML = '<del>Revenant</del>';
    } else {
        if (revenant.innerHTML === '<del>Revenant</del>') {
            revenant.innerHTML = 'Revenant';
        }
    }
}

function shadeToggle () {
    if (shade.innerHTML === 'Shade') {
        shade.innerHTML = '<del>Shade</del>';
    } else {
        if (shade.innerHTML === '<del>Shade</del>') {
            shade.innerHTML = 'Shade';
        }
    }
}

function demonToggle () {
    if (demon.innerHTML === 'Demon') {
        demon.innerHTML = '<del>Demon</del>';
    } else {
        if (demon.innerHTML === '<del>Demon</del>') {
            demon.innerHTML = 'Demon';
        }
    }
}

function yureiToggle () {
    if (yurei.innerHTML === 'Yurei') {
        yurei.innerHTML = '<del>Yurei</del>';
    } else {
        if (yurei.innerHTML === '<del>Yurei</del>') {
            yurei.innerHTML = 'Yurei';
        }
    }
}

function oniToggle () {
    if (oni.innerHTML === 'Oni') {
        oni.innerHTML = '<del>Oni</del>';
    } else {
        if (oni.innerHTML === '<del>Oni</del>') {
            oni.innerHTML = 'Oni';
        }
    }
}

function yokaiToggle () {
    if (yokai.innerHTML === 'Yokai') {
        yokai.innerHTML = '<del>Yokai</del>';
    } else {
        if (yokai.innerHTML === '<del>Yokai</del>') {
            yokai.innerHTML = 'Yokai';
        }
    }
}

function hantuToggle () {
    if (hantu.innerHTML === 'Hantu') {
        hantu.innerHTML = '<del>Hantu</del>';
    } else {
        if (hantu.innerHTML === '<del>Hantu</del>') {
            hantu.innerHTML = 'Hantu';
        }
    }
}

function goryoToggle () {
    if (goryo.innerHTML === 'Goryo') {
        goryo.innerHTML = '<del>Goryo</del>';
    } else {
        if (goryo.innerHTML === '<del>Goryo</del>') {
            goryo.innerHTML = 'Goryo';
        }
    }
}

function mylingToggle () {
    if (myling.innerHTML === 'Myling') {
        myling.innerHTML = '<del>Myling</del>';
    } else {
        if (myling.innerHTML === '<del>Myling</del>') {
            myling.innerHTML = 'Myling';
        }
    }
}

function onryoToggle () {
    if (onryo.innerHTML === 'Onryo') {
        onryo.innerHTML = '<del>Onryo</del>';
    } else {
        if (onryo.innerHTML === '<del>Onryo</del>') {
            onryo.innerHTML = 'Onryo';
        }
    }
}

function twinsToggle () {
    if (twins.innerHTML === 'The Twins') {
        twins.innerHTML = '<del>The Twins</del>';
    } else {
        if (twins.innerHTML === '<del>The Twins</del>') {
            twins.innerHTML = 'The Twins';
        }
    }
}

function raijuToggle () {
    if (raiju.innerHTML === 'Raiju') {
        raiju.innerHTML = '<del>Raiju</del>';
    } else {
        if (raiju.innerHTML === '<del>Raiju</del>') {
            raiju.innerHTML = 'Raiju';
        }
    }
}

function obakeToggle () {
    if (obake.innerHTML === 'Obake') {
        obake.innerHTML = '<del>Obake</del>';
    } else {
        if (obake.innerHTML === '<del>Obake</del>') {
            obake.innerHTML = 'Obake';
        }
    }
}

function mimicToggle () {
    if (mimic.innerHTML === 'The Mimic') {
        mimic.innerHTML = '<del>The Mimic</del>';
    } else {
        if (mimic.innerHTML === '<del>The Mimic</del>') {
            mimic.innerHTML = 'The Mimic';
        }
    }
}

function moroiToggle () {
    if (moroi.innerHTML === 'Moroi') {
        moroi.innerHTML = '<del>Moroi</del>';
    } else {
        if (moroi.innerHTML === '<del>Moroi</del>') {
            moroi.innerHTML = 'Moroi';
        }
    }
}

function deogenToggle () {
    if (deogen.innerHTML === 'Deogen') {
        deogen.innerHTML = '<del>Deogen</del>';
    } else {
        if (deogen.innerHTML === '<del>Deogen</del>') {
            deogen.innerHTML = 'Deogen';
        }
    }
}

function thayeToggle () {
    if (thaye.innerHTML === 'Thaye') {
        thaye.innerHTML = '<del>Thaye</del>';
    } else {
        if (thaye.innerHTML === '<del>Thaye</del>') {
            thaye.innerHTML = 'Thaye';
        }
    }
}

function answerToggle () {
    //spirit
    if (emf.classList.contains('cross') || fingerprints.classList.contains('check') || writing.classList.contains('cross') || freezing.classList.contains('check') || dots.classList.contains('check') || orbs.classList.contains('check') || spiritBox.classList.contains('cross')) {
        spirit.setAttribute('style', 'color:lightgrey');
    } else {
        spirit.setAttribute('style', 'color:black');
    }

    //wraith
    if (emf.classList.contains('cross') || fingerprints.classList.contains('check') || writing.classList.contains('check') || freezing.classList.contains('check') || dots.classList.contains('cross') || orbs.classList.contains('check') || spiritBox.classList.contains('cross')) {
        wraith.setAttribute('style', 'color:lightgrey');
    } else {
        wraith.setAttribute('style', 'color:black');
    }
    
    //phantom
    if (emf.classList.contains('check') || fingerprints.classList.contains('cross') || writing.classList.contains('check') || freezing.classList.contains('check') || dots.classList.contains('cross') || orbs.classList.contains('check') || spiritBox.classList.contains('cross')) {
        phantom.setAttribute('style', 'color:lightgrey');
    } else {
        phantom.setAttribute('style', 'color:black');
    }
    
    //poltergeist
    if (emf.classList.contains('check') || fingerprints.classList.contains('cross') || writing.classList.contains('cross') || freezing.classList.contains('check') || dots.classList.contains('check') || orbs.classList.contains('check') || spiritBox.classList.contains('cross')) {
        poltergeist.setAttribute('style', 'color:lightgrey');
    } else {
        poltergeist.setAttribute('style', 'color:black');
    }

    //banshee
    if (emf.classList.contains('check') || fingerprints.classList.contains('cross') || writing.classList.contains('check') || freezing.classList.contains('check') || dots.classList.contains('cross') || orbs.classList.contains('cross') || spiritBox.classList.contains('check')) {
        banshee.setAttribute('style', 'color:lightgrey');
    } else {
        banshee.setAttribute('style', 'color:black');
    }

    //jinn
    if (emf.classList.contains('cross') || fingerprints.classList.contains('cross') || writing.classList.contains('check') || freezing.classList.contains('cross') || dots.classList.contains('check') || orbs.classList.contains('check') || spiritBox.classList.contains('check')) {
        jinn.setAttribute('style', 'color:lightgrey');
    } else {
        jinn.setAttribute('style', 'color:black');
    }

    //mare
    if (emf.classList.contains('check') || fingerprints.classList.contains('check') || writing.classList.contains('cross') || freezing.classList.contains('check') || dots.classList.contains('check') || orbs.classList.contains('cross') || spiritBox.classList.contains('cross')) {
        mare.setAttribute('style', 'color:lightgrey');
    } else {
        mare.setAttribute('style', 'color:black');
    }

    //revenant
    if (emf.classList.contains('check') || fingerprints.classList.contains('check') || writing.classList.contains('cross') || freezing.classList.contains('cross') || dots.classList.contains('check') || orbs.classList.contains('cross') || spiritBox.classList.contains('check')) {
        revenant.setAttribute('style', 'color:lightgrey');
    } else {
        revenant.setAttribute('style', 'color:black');
    }

    //shade
    if (emf.classList.contains('cross') || fingerprints.classList.contains('check') || writing.classList.contains('cross') || freezing.classList.contains('cross') || dots.classList.contains('check') || orbs.classList.contains('check') || spiritBox.classList.contains('check')) {
        shade.setAttribute('style', 'color:lightgrey');
    } else {
        shade.setAttribute('style', 'color:black');
    }

    //demon
    if (emf.classList.contains('check') || fingerprints.classList.contains('cross') || writing.classList.contains('cross') || freezing.classList.contains('cross') || dots.classList.contains('check') || orbs.classList.contains('check') || spiritBox.classList.contains('check')) {
        demon.setAttribute('style', 'color:lightgrey');
    } else {
        demon.setAttribute('style', 'color:black');
    }

    //yurei
    if (emf.classList.contains('check') || fingerprints.classList.contains('check') || writing.classList.contains('check') || freezing.classList.contains('cross') || dots.classList.contains('cross') || orbs.classList.contains('cross') || spiritBox.classList.contains('check')) {
        yurei.setAttribute('style', 'color:lightgrey');
    } else {
        yurei.setAttribute('style', 'color:black');
    }

    //oni
    if (emf.classList.contains('cross') || fingerprints.classList.contains('check') || writing.classList.contains('check') || freezing.classList.contains('cross') || dots.classList.contains('cross') || orbs.classList.contains('check') || spiritBox.classList.contains('check')) {
        oni.setAttribute('style', 'color:lightgrey');
    } else {
        oni.setAttribute('style', 'color:black');
    }

    //yokai
    if (emf.classList.contains('check') || fingerprints.classList.contains('check') || writing.classList.contains('check') || freezing.classList.contains('check') || dots.classList.contains('cross') || orbs.classList.contains('cross') || spiritBox.classList.contains('cross')) {
        yokai.setAttribute('style', 'color:lightgrey');
    } else {
        yokai.setAttribute('style', 'color:black');
    }

    //hantu
    if (emf.classList.contains('check') || fingerprints.classList.contains('cross') || writing.classList.contains('check') || freezing.classList.contains('cross') || dots.classList.contains('check') || orbs.classList.contains('cross') || spiritBox.classList.contains('check')) {
        hantu.setAttribute('style', 'color:lightgrey');
    } else {
        hantu.setAttribute('style', 'color:black');
    }

    //goryo
    if (emf.classList.contains('cross') || fingerprints.classList.contains('cross') || writing.classList.contains('check') || freezing.classList.contains('check') || dots.classList.contains('cross') || orbs.classList.contains('check') || spiritBox.classList.contains('check')) {
        goryo.setAttribute('style', 'color:lightgrey');
    } else {
        goryo.setAttribute('style', 'color:black');
    }

    //myling
    if (emf.classList.contains('cross') || fingerprints.classList.contains('cross') || writing.classList.contains('cross') || freezing.classList.contains('check') || dots.classList.contains('check') || orbs.classList.contains('check') || spiritBox.classList.contains('check')) {
        myling.setAttribute('style', 'color:lightgrey');
    } else {
        myling.setAttribute('style', 'color:black');
    }

    //onryo
    if (emf.classList.contains('check') || fingerprints.classList.contains('check') || writing.classList.contains('check') || freezing.classList.contains('cross') || dots.classList.contains('check') || orbs.classList.contains('cross') || spiritBox.classList.contains('cross')) {
        onryo.setAttribute('style', 'color:lightgrey');
    } else {
        onryo.setAttribute('style', 'color:black');
    }

    //twins
    if (emf.classList.contains('cross') || fingerprints.classList.contains('check') || writing.classList.contains('check') || freezing.classList.contains('cross') || dots.classList.contains('check') || orbs.classList.contains('check') || spiritBox.classList.contains('cross')) {
        twins.setAttribute('style', 'color:lightgrey');
    } else {
        twins.setAttribute('style', 'color:black');
    }

    //raiju
    if (emf.classList.contains('cross') || fingerprints.classList.contains('check') || writing.classList.contains('check') || freezing.classList.contains('check') || dots.classList.contains('cross') || orbs.classList.contains('cross') || spiritBox.classList.contains('check')) {
        raiju.setAttribute('style', 'color:lightgrey');
    } else {
        raiju.setAttribute('style', 'color:black');
    }

    //obake
    if (emf.classList.contains('cross') || fingerprints.classList.contains('cross') || writing.classList.contains('check') || freezing.classList.contains('check') || dots.classList.contains('check') || orbs.classList.contains('cross') || spiritBox.classList.contains('check')) {
        obake.setAttribute('style', 'color:lightgrey');
    } else {
        obake.setAttribute('style', 'color:black');
    }

    //mimic
    if (emf.classList.contains('check') || fingerprints.classList.contains('cross') || writing.classList.contains('check') || freezing.classList.contains('cross') || dots.classList.contains('check') || orbs.classList.contains('check') || spiritBox.classList.contains('cross')) {
        mimic.setAttribute('style', 'color:lightgrey');
    } else {
        mimic.setAttribute('style', 'color:black');
    }

    //moroi
    if (emf.classList.contains('check') || fingerprints.classList.contains('check') || writing.classList.contains('cross') || freezing.classList.contains('cross') || dots.classList.contains('check') || orbs.classList.contains('check') || spiritBox.classList.contains('cross')) {
        moroi.setAttribute('style', 'color:lightgrey');
    } else {
        moroi.setAttribute('style', 'color:black');
    }

    //deogen
    if (emf.classList.contains('check') || fingerprints.classList.contains('check') || writing.classList.contains('cross') || freezing.classList.contains('check') || dots.classList.contains('cross') || orbs.classList.contains('check') || spiritBox.classList.contains('cross')) {
        deogen.setAttribute('style', 'color:lightgrey');
    } else {
        deogen.setAttribute('style', 'color:black');
    }

    //thaye
    if (emf.classList.contains('check') || fingerprints.classList.contains('check') || writing.classList.contains('cross') || freezing.classList.contains('check') || dots.classList.contains('cross') || orbs.classList.contains('cross') || spiritBox.classList.contains('check')) {
        thaye.setAttribute('style', 'color:lightgrey');
    } else {
        thaye.setAttribute('style', 'color:black');
    }
    
}
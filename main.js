const canvas = document.createElement("canvas");
canvas.id = "canvas";
var DIM = Math.min(window.innerWidth, window.innerHeight);
canvas.width = DIM;
canvas.height = DIM;
var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);
const ctx = canvas.getContext("2d");
let wiener_1;
let hashPairs = [];
let hash = tokenData.hash;



function getHashPairs() {
	for (let i = 1; i < 20; i++) {
		hashPairs.push(hash.slice(1 + (i * 1), 2 + (i * 1)))
	}
}

function getACSII(hashPair) {
	let code;
	for (let i = 0; i < hashPair.length; i++) {
		code = hashPair.charCodeAt(i);
	}
	return code;
}

function getSeed() {
	let value;
	let seedVal;
	let seed = [];
	for (let g = 0; g < hashPairs.length; g++) {
		value = getACSII(hashPairs[g]);
		if (value == 48) {
			seedVal = 1
		};
		if (value == 49) {
			seedVal = 2
		};
		if (value == 50) {
			seedVal = 3
		};
		if (value == 51) {
			seedVal = 4
		};
		if (value == 52) {
			seedVal = 5
		};
		if (value == 53) {
			seedval = 6
		};
		if (value == 54) {
			seedVal = 7
		};
		if (value == 55) {
			seedVal = 8
		};
		if (value == 56) {
			seedVal = 9
		};
		if (value == 57) {
			seedVal = 10
		};
		if (value == 97) {
			seedVal = 11
		};
		if (value == 98) {
			seedVal = 12
		};
		if (value == 99) {
			seedVal = 13
		};
		if (value == 100) {
			seedVal = 14
		};
		if (value == 101) {
			seedVal = 15
		};
		if (value == 102) {
			seedVal = 16
		};
		seed.push(seedVal);
	}
	return seed;
}
getHashPairs(tokenData);
let wienerSeed = getSeed();

function xfillRect( x, y, w, h )
{
	var X = (x/960)*DIM;
	var Y = (y/960)*DIM;
	var W = (w/960)*DIM;
	var H = (h/960)*DIM;
	ctx.fillRect( X, Y, W, H );
}

function draw() {
	var canvas = document.getElementById("canvas");
	var wienerSeed = canvas.getContext("2d");
	if (canvas.getContext) {
		let background = canvas.getContext("2d");
		let sex = getSex();
		if ((sex == 1)) {
			wiener_1 = new Wiener(sex, getSkinColor(), getEyeColor(), getEyes(), getNose(), getMouth(), getEarrings(), getHair(), getMaleBeard(), getMaleShirt(), getTrousers(), getLeftHand(), getRightHand(), getMaleVest(), getMaleChain(), getBackground(), 0, 0, getAnimal());
		} else {
			wiener_1 = new Wiener(sex, getSkinColor(), getEyeColor(), getEyes(), getNose(), getMouth(), getEarrings(), getHair(), getFemaleBag(), getFemaleShirt(), getTrousers(), getLeftHand(), getRightHand(), getFemaleVest(), 0, getBackground(), 0, 0, getAnimal());
		}
		wiener_1.display();
	}
}

function getSex() {
	var aux = wienerSeed[0];
	if (aux <= 8) return 1;
	return 2;
}

function getSkinColor() {
	var aux = wienerSeed[1];
	if (aux <= 5) return 1;
	if (aux <= 10) return 2;
	return 3;
}

function getEyeColor() {
	var aux = wienerSeed[2];
	if (aux <= 4) return 1;
	if (aux <= 8) return 2;
	if (aux <= 12) return 3;
	return 4;
}

function getEyes() {
	var aux = wienerSeed[3];
	if (aux <= 8) return 1;
	return 2;
}

function getNose() {
	var aux = wienerSeed[4];
	if (aux <= 3) return 1;
	if (aux <= 6) return 2;
	if (aux <= 9) return 3;
	if (aux <= 12) return 4;
	if (aux <= 16) return 5;
}

function getMouth() {
	var aux = wienerSeed[5];
	if (aux <= 4) return 1;
	if (aux <= 8) return 2;
	if (aux <= 12) return 3;
	if (aux <= 16) return 4;
}

function getEarrings() {
	var aux = wienerSeed[6];
	if (aux <= 4) return 1;
	if (aux <= 8) return 2;
	if (aux <= 12) return 3;
	return 4;
}

function getHair() {
	var aux = wienerSeed[7];
	if (aux == 1) return 0;
	if (aux == 2) return 1;
	if (aux == 3) return 2;
	if (aux == 4) return 3;
	if (aux == 5) return 4;
	if (aux == 6) return 5;
	if (aux == 7) return 6;
	if (aux == 8) return 7;
	if (aux == 9) return 8;
	if (aux == 10) return 9;
	if (aux == 11) return 10;
	if (aux == 12) return 11;
	return 12;
}

function getMaleBeard() {
	var aux = wienerSeed[8];
	if (aux <= 2) return 1;
	if (aux <= 4) return 2;
	if (aux <= 6) return 3;
	if (aux <= 8) return 4;
	if (aux <= 10) return 5;
	if (aux <= 12) return 6;
	return 7;
}

function getFemaleBag() {
	var aux = wienerSeed[8];
	if (aux <= 5) return 1;
	if (aux <= 10) return 2;
	return 0;
}

function getMaleShirt() {
	var aux = wienerSeed[9];
	if (aux == 1) return 1;
	if (aux == 2) return 2;
	if (aux == 3) return 3;
	if (aux == 4) return 4;
	if (aux == 5) return 5;
	if (aux == 6) return 6;
	if (aux == 7) return 7;
	if (aux == 8) return 8;
	if (aux == 9) return 9;
	if (aux == 10) return 10;
	if (aux == 11) return 11;
	if (aux == 12) return 12;
	if (aux == 13) return 13;
	if (aux == 14) return 14;
	if (aux == 15) return 15;
	if (aux == 16) return 16;
}

function getFemaleShirt() {
	var aux = wienerSeed[9];
	if (aux == 1) return 1;
	if (aux == 2) return 2;
	if (aux == 3) return 3;
	if (aux == 4) return 4;
	if (aux == 5) return 5;
	if (aux == 6) return 6;
	if (aux == 7) return 7;
	if (aux == 8) return 8;
	if (aux == 9) return 9;
	if (aux == 10) return 10;
	if (aux == 11) return 11;
	if (aux == 12) return 12;
	if (aux == 13) return 13;
	if (aux == 14) return 14;
	if (aux == 15) return 15;
	if (aux == 16) return 16;
}

function getTrousers() {
	var aux = wienerSeed[10];
	if (aux == 1) return 1;
	if (aux == 2) return 2;
	if (aux == 3) return 3;
	if (aux == 4) return 4;
	if (aux == 5) return 5;
	if (aux == 6) return 6;
	if (aux == 7) return 7;
	if (aux == 8) return 8;
	if (aux == 9) return 9;
	return 10;
}

function getLeftHand() {
	var aux = wienerSeed[11];
	if (aux <= 2) return 1;
	if (aux <= 4) return 2;
	if (aux <= 6) return 3;
	if (aux <= 8) return 4;
	if (aux <= 10) return 5;
	if (aux <= 12) return 6;
	return 7;
}

function getRightHand() {
	var aux = wienerSeed[12];
	if (aux == 1) return 1;
	if (aux == 2) return 2;
	if (aux == 3) return 3;
	if (aux == 4) return 4;
	if (aux == 5) return 5;
	if (aux == 6) return 6;
	if (aux == 7) return 7;
	if (aux == 8) return 8;
	return 9;
}

function getMaleVest() {
	var aux = wienerSeed[13];
	if (aux <= 5) return 0;
	if (aux <= 10) return 1;
	return 2;
}

function getFemaleVest() {
	var aux = wienerSeed[13];
	if (aux <= 5) return 0;
	if (aux <= 10) return 1;
	return 2;
}

function getMaleChain() {
	var aux = wienerSeed[14];
	if (aux <= 3) return 1;
	if (aux <= 6) return 2;
	if (aux <= 9) return 3;
	if (aux <= 12) return 4;
	return 5;
}

function getBackground() {
	var aux = wienerSeed[15];
	if (aux <= 3) return 1;
	if (aux <= 6) return 2;
	if (aux <= 9) return 3;
	if (aux <= 12) return 4;
	return 5;
}

function getAnimal() {
	var aux = wienerSeed[18];
	if (aux <= 1) return 1;
	if (aux <= 2) return 2;
	if (aux <= 3) return 3;
	if (aux <= 4) return 4;
	if (aux <= 5) return 5;
	return 0;
}
class Wiener {
	constructor(Sex, sColor, eColor, eyes, nose, mouth, earring, hair, beard, shirt, trousers, leftHand, rightHand, vest, chain, bColor, name, lastName, bird) {
		this.sex = Sex;
		this.sColor = sColor;
		this.eColor = eColor;
		this.eyes = eyes;
		this.nose = nose;
		this.mouth = mouth;
		this.earring = earring;
		this.hair = hair;
		this.noHair = false;
		this.beard = beard;
		this.shirt = shirt;
		this.trousers = trousers;
		this.leftHand = leftHand;
		this.rightHand = rightHand;
		this.vest = vest;
		this.noVest = false;
		this.chain = chain;
		this.bColor = bColor;
		this.wienerName = name;
		this.wienerLastName = lastName;
		this.bird = bird;
		this.nobird = false;
	}
	display() {
		if (canvas.getContext) {
			if (this.bColor == 1) {
				ctx.fillStyle = "rgb(20,20,60)";
			}
			if (this.bColor == 2) {
				ctx.fillStyle = "rgb(70,60,65)";
			}
			if (this.bColor == 3) {
				ctx.fillStyle = "rgb(80,70,80)";
			}
			if (this.bColor == 4) {
				ctx.fillStyle = "rgb(40,34,33)";
			}
			if (this.bColor == 5) {
				ctx.fillStyle = "rgb(60,25,40)";
			}
			xfillRect(0, 0, 960, 960);
			if (this.sex == 1) {
				if (this.sColor == 1) {
					ctx.fillStyle = "rgb(255,221,205)";
					xfillRect(390, 120, 120, 30);
					xfillRect(360, 150, 180, 240);
					xfillRect(330, 180, 30, 90);
					xfillRect(540, 180, 30, 90);
					xfillRect(390, 390, 120, 90);
					xfillRect(420, 480, 60, 30);
				}
				if (this.sColor == 2) {
					ctx.fillStyle = "rgb(165,107,70)";
					xfillRect(390, 120, 120, 30);
					xfillRect(360, 150, 180, 240);
					xfillRect(330, 180, 30, 90);
					xfillRect(540, 180, 30, 90);
					xfillRect(390, 390, 120, 90);
					xfillRect(420, 480, 60, 30);
				}
				if (this.sColor == 3) {
					ctx.fillStyle = "rgb(200,161,135)";
					xfillRect(390, 120, 120, 30);
					xfillRect(360, 150, 180, 240);
					xfillRect(330, 180, 30, 90);
					xfillRect(540, 180, 30, 90);
					xfillRect(390, 390, 120, 90);
					xfillRect(420, 480, 60, 30);
				}
				if (this.eyes == 1) {
					if (this.eColor == 1) {
						ctx.fillStyle = "rgb(0,0,0)";
						xfillRect(420, 210, 30, 30);
						xfillRect(510, 210, 30, 30);
					}
					if (this.eColor == 2) {
						ctx.fillStyle = "rgb(100,50,40)";
						xfillRect(420, 210, 30, 30);
						xfillRect(510, 210, 30, 30);
					}
					if (this.eColor == 3) {
						ctx.fillStyle = "rgb(0,85,30)";
						xfillRect(420, 210, 30, 30);
						xfillRect(510, 210, 30, 30);
					}
					if (this.eColor == 4) {
						ctx.fillStyle = "rgb(0,89,119)";
						xfillRect(420, 210, 30, 30);
						xfillRect(510, 210, 30, 30);
					}
				}
				if (this.eyes == 2) {
					if (this.eColor == 1) {
						ctx.fillStyle = "rgb(0,0,0)";
						xfillRect(420, 210, 30, 30);
						xfillRect(480, 210, 30, 30);
					}
					if (this.eColor == 2) {
						ctx.fillStyle = "rgb(100,50,40)";
						xfillRect(420, 210, 30, 30);
						xfillRect(480, 210, 30, 30);
					}
					if (this.eColor == 3) {
						ctx.fillStyle = "rgb(0,85,30)";
						xfillRect(420, 210, 30, 30);
						xfillRect(480, 210, 30, 30);
					}
					if (this.eColor == 4) {
						ctx.fillStyle = "rgb(0,89,119)";
						xfillRect(420, 210, 30, 30);
						xfillRect(480, 210, 30, 30);
					}
				}
				if (this.sColor == 1) {
					if (this.nose == 1) {
						ctx.fillStyle = "rgb(227,182,185)";
						xfillRect(450, 270, 60, 30);
					}
					if (this.nose == 2) {
						ctx.fillStyle = "rgb(227,182,185)";
						xfillRect(450, 270, 30, 30);
					}
					if (this.nose == 3) {
						ctx.fillStyle = "rgb(227,182,185)";
						xfillRect(450, 240, 30, 60);
					}
					if (this.nose == 4) {
						ctx.fillStyle = "rgb(227,182,185)";
						xfillRect(480, 270, 30, 30);
					}
					if (this.nose == 5) {
						ctx.fillStyle = "rgb(227,182,185)";
						xfillRect(450, 240, 30, 60);
						ctx.fillStyle = "rgb(0,0,50)";
						xfillRect(390, 210, 60, 60);
						xfillRect(480, 210, 60, 60);
						xfillRect(450, 210, 30, 30);
					}
				}
				if (this.sColor == 2) {
					if (this.nose == 1) {
						ctx.fillStyle = "rgb(170,130,80)";
						xfillRect(450, 270, 60, 30);
					}
					if (this.nose == 2) {
						ctx.fillStyle = "rgb(170,130,80)";
						xfillRect(450, 270, 30, 30);
					}
					if (this.nose == 3) {
						ctx.fillStyle = "rgb(170,130,80)";
						xfillRect(450, 240, 30, 60);
					}
					if (this.nose == 4) {
						ctx.fillStyle = "rgb(170,130,80)";
						xfillRect(480, 270, 30, 30);
					}
					if (this.nose == 5) {
						ctx.fillStyle = "rgb(170,130,80)";
						xfillRect(450, 240, 30, 60);
						ctx.fillStyle = "rgb(0,0,50)";
						xfillRect(390, 210, 60, 60);
						xfillRect(480, 210, 60, 60);
						xfillRect(450, 210, 30, 30);
					}
				}
				if (this.sColor == 3) {
					if (this.nose == 1) {
						ctx.fillStyle = "rgb(165,122,120)";
						xfillRect(450, 270, 60, 30);
					}
					if (this.nose == 2) {
						ctx.fillStyle = "rgb(165,122,120)";
						xfillRect(450, 270, 30, 30);
					}
					if (this.nose == 3) {
						ctx.fillStyle = "rgb(165,122,120)";
						xfillRect(450, 240, 30, 60);
					}
					if (this.nose == 4) {
						ctx.fillStyle = "rgb(165,122,120)";
						xfillRect(480, 270, 30, 30);
					}
					if (this.nose == 5) {
						ctx.fillStyle = "rgb(165,122,120)";
						xfillRect(450, 240, 30, 60);
						ctx.fillStyle = "rgb(0,0,50)";
						xfillRect(390, 210, 60, 60);
						xfillRect(480, 210, 60, 60);
						xfillRect(450, 210, 30, 30);
					}
				}
				if (this.beard == 1) {
					ctx.fillStyle = "rgb(192,178,87)";
					xfillRect(390, 300, 120, 30);
				}
				if (this.beard == 2) {
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(420, 300, 90, 30);
				}
				if (this.beard == 3) {
					ctx.fillStyle = "rgb(242,130,63)";
					xfillRect(420, 300, 90, 30);
				}
				if (this.beard == 4) {
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(360, 270, 30, 120);
					xfillRect(390, 300, 150, 90);
					xfillRect(390, 390, 120, 30);
				}
				if (this.beard == 5) {
					ctx.fillStyle = "rgb(242,130,63)";
					xfillRect(360, 270, 30, 120);
					xfillRect(390, 300, 150, 90);
					xfillRect(390, 390, 120, 30);
				}
				if (this.beard == 6) {
					ctx.fillStyle = "rgb(192,178,87)";
					xfillRect(360, 270, 30, 120);
					xfillRect(390, 300, 150, 90);
					xfillRect(390, 390, 120, 30);
				}
				if (this.mouth == 1) {
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(420, 330, 60, 30);
				}
				if (this.mouth == 2) {
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(420, 330, 60, 30);
					ctx.fillStyle = "rgb(211,227,188)";
					xfillRect(420, 360, 30, 30);
				}
				if (this.mouth == 3) {
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(420, 330, 60, 30);
					ctx.fillStyle = "rgb(254,146,0)";
					xfillRect(420, 360, 30, 30);
				}
				if (this.mouth == 4) {
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(420, 330, 60, 30);
					ctx.fillStyle = "rgb(46,46,46)";
					xfillRect(420, 360, 60, 30);
				}
				if (this.earring == 1) {
					ctx.fillStyle = "rgb(255,255,12)";
					ctx.fillRect(330, 270, 30, 30);
				}
				if (this.earring == 2) {
					ctx.fillStyle = "rgb(225,200,100)";
					ctx.fillRect(540, 270, 30, 30);
				}
				if (this.earring == 3) {
					ctx.fillStyle = "rgb(192,192,192)";
					ctx.fillRect(330, 180, 30, 30);
				}
				if (this.shirt == 1) {
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(360, 510, 180, 240);
					xfillRect(300, 450, 60, 60);
					xfillRect(540, 450, 60, 60);
					xfillRect(510, 450, 30, 60);
					xfillRect(360, 450, 30, 60);
					xfillRect(390, 480, 30, 30);
					xfillRect(480, 480, 30, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(240, 450, 60, 60);
					xfillRect(210, 480, 30, 180);
					xfillRect(600, 450, 60, 60);
					xfillRect(660, 360, 30, 120);
				}
				if (this.shirt == 2) {
					ctx.fillStyle = "rgb(255,255,0)";
					xfillRect(360, 510, 180, 240);
					xfillRect(300, 450, 60, 60);
					xfillRect(540, 450, 60, 60);
					xfillRect(510, 450, 30, 60);
					xfillRect(360, 450, 30, 60);
					xfillRect(390, 480, 30, 30);
					xfillRect(480, 480, 30, 30);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(480, 570, 30, 30);
					xfillRect(390, 570, 30, 30);
					xfillRect(480, 630, 30, 30);
					xfillRect(390, 630, 30, 30);
					xfillRect(420, 660, 60, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(240, 450, 60, 60);
					xfillRect(210, 480, 30, 180);
					xfillRect(600, 450, 60, 60);
					xfillRect(660, 360, 30, 120);
				}
				if (this.shirt == 3) {
					ctx.fillStyle = "rgb(110,139,61)";
					xfillRect(360, 510, 180, 240);
					xfillRect(300, 450, 60, 60);
					xfillRect(540, 450, 60, 60);
					xfillRect(510, 450, 30, 60);
					xfillRect(360, 450, 30, 60);
					xfillRect(390, 480, 30, 30);
					xfillRect(480, 480, 30, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(240, 450, 60, 60);
					xfillRect(210, 480, 30, 180);
					xfillRect(600, 450, 60, 60);
					xfillRect(660, 360, 30, 120);
				}
				if (this.shirt == 4) {
					ctx.fillStyle = "rgb(255,182,193)";
					xfillRect(360, 510, 180, 240);
					xfillRect(300, 450, 60, 60);
					xfillRect(540, 450, 60, 60);
					xfillRect(510, 450, 30, 60);
					xfillRect(360, 450, 30, 60);
					xfillRect(390, 480, 30, 30);
					xfillRect(480, 480, 30, 30);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(480, 450, 30, 30);
					xfillRect(390, 450, 30, 30);
					xfillRect(360, 420, 30, 30);
					xfillRect(420, 480, 60, 30);
					xfillRect(510, 420, 30, 30);
					xfillRect(450, 510, 30, 30);
					xfillRect(600, 450, 30, 60);
					xfillRect(270, 450, 30, 60);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(240, 450, 60, 60);
					xfillRect(210, 480, 30, 180);
					xfillRect(600, 450, 60, 60);
					xfillRect(660, 360, 30, 120);
				}
				if (this.shirt == 5) {
					ctx.fillStyle = "rgb(176,224,230)";
					xfillRect(360, 510, 180, 240);
					xfillRect(300, 450, 60, 60);
					xfillRect(540, 450, 60, 60);
					xfillRect(510, 450, 30, 60);
					xfillRect(360, 450, 30, 60);
					xfillRect(390, 480, 30, 30);
					xfillRect(480, 480, 30, 30);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(480, 450, 30, 30);
					xfillRect(390, 450, 30, 30);
					xfillRect(360, 420, 30, 30);
					xfillRect(420, 480, 60, 30);
					xfillRect(510, 420, 30, 30);
					xfillRect(450, 510, 30, 30);
					xfillRect(600, 450, 30, 60);
					xfillRect(270, 450, 30, 60);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(240, 450, 60, 60);
					xfillRect(210, 480, 30, 180);
					xfillRect(600, 450, 60, 60);
					xfillRect(660, 360, 30, 120);
				}
				if (this.shirt == 6) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(240, 450, 420, 60);
					xfillRect(210, 480, 30, 180);
					xfillRect(600, 450, 60, 60);
					xfillRect(660, 360, 30, 120);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(360, 510, 180, 240);
					xfillRect(510, 450, 30, 60);
					xfillRect(360, 450, 30, 60);
					ctx.fillStyle = "rgb(200,200,200)";
					xfillRect(480, 640, 30, 60);
					xfillRect(390, 580, 30, 30);
				}
				if (this.shirt == 7) {
					ctx.fillStyle = "rgb(125,0,0)";
					xfillRect(360, 510, 180, 240);
					xfillRect(300, 450, 60, 60);
					xfillRect(540, 450, 60, 60);
					xfillRect(510, 450, 30, 60);
					xfillRect(360, 450, 30, 60);
					xfillRect(390, 480, 30, 30);
					xfillRect(480, 480, 30, 30);
					xfillRect(600, 450, 60, 60);
					xfillRect(660, 360, 30, 120);
					xfillRect(240, 450, 60, 60);
					xfillRect(210, 480, 30, 180);
					xfillRect(360, 390, 30, 60);
					xfillRect(360, 390, 30, 60);
					xfillRect(510, 390, 30, 60);
					xfillRect(540, 270, 30, 120);
					xfillRect(570, 150, 30, 120);
					xfillRect(540, 120, 30, 60);
					xfillRect(510, 90, 30, 60);
					xfillRect(330, 90, 180, 30);
					xfillRect(360, 60, 150, 30);
					xfillRect(330, 90, 60, 60);
					xfillRect(300, 120, 60, 60);
					xfillRect(270, 180, 60, 120);
					xfillRect(300, 270, 60, 90);
					xfillRect(330, 360, 30, 60);
					xfillRect(210, 480, 30, 180);
					xfillRect(360, 390, 30, 60);
					xfillRect(360, 390, 30, 60);
					xfillRect(510, 390, 30, 60);
					ctx.fillStyle = "rgb(170,0,0)";
					xfillRect(480, 480, 30, 90);
					xfillRect(390, 480, 30, 60);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(480, 570, 30, 30);
					xfillRect(390, 540, 30, 30);
				}
				if (this.shirt == 8) {
					ctx.fillStyle = "rgb(50,50,50)";
					xfillRect(360, 510, 180, 240);
					xfillRect(300, 450, 60, 60);
					xfillRect(540, 450, 60, 60);
					xfillRect(510, 450, 30, 60);
					xfillRect(360, 450, 30, 60);
					xfillRect(390, 480, 30, 30);
					xfillRect(480, 480, 30, 30);
					xfillRect(600, 450, 60, 60);
					xfillRect(660, 360, 30, 120);
					xfillRect(240, 450, 60, 60);
					xfillRect(210, 480, 30, 180);
					xfillRect(360, 390, 30, 60);
					xfillRect(360, 390, 30, 60);
					xfillRect(510, 390, 30, 60);
					xfillRect(540, 270, 30, 120);
					xfillRect(570, 150, 30, 120);
					xfillRect(540, 120, 30, 60);
					xfillRect(510, 90, 30, 60);
					xfillRect(330, 90, 180, 30);
					xfillRect(360, 60, 150, 30);
					xfillRect(330, 90, 60, 60);
					xfillRect(300, 120, 60, 60);
					xfillRect(270, 180, 60, 120);
					xfillRect(300, 270, 60, 90);
					xfillRect(330, 360, 30, 60);
					xfillRect(210, 480, 30, 180);
					xfillRect(360, 390, 30, 60);
					xfillRect(360, 390, 30, 60);
					xfillRect(510, 390, 30, 60);
					ctx.fillStyle = "rgb(90,90,90)";
					xfillRect(480, 480, 30, 90);
					xfillRect(390, 480, 30, 60);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(480, 570, 30, 30);
					xfillRect(390, 540, 30, 30);
				}
				if (this.shirt == 9) {
					ctx.fillStyle = "rgb(255,0,250)";
					xfillRect(360, 510, 180, 240);
					xfillRect(300, 450, 60, 60);
					xfillRect(540, 450, 60, 60);
					xfillRect(510, 450, 30, 60);
					xfillRect(360, 450, 30, 60);
					xfillRect(390, 480, 30, 30);
					xfillRect(480, 480, 30, 30);
					xfillRect(600, 450, 60, 60);
					xfillRect(660, 360, 30, 120);
					xfillRect(240, 450, 60, 60);
					xfillRect(210, 480, 30, 180);
					xfillRect(390, 450, 30, 30);
					xfillRect(360, 420, 30, 30);
					xfillRect(510, 420, 30, 30);
					xfillRect(480, 450, 30, 30);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(420, 510, 60, 210);
					xfillRect(390, 720, 120, 30);
					xfillRect(420, 450, 30, 30);
					xfillRect(390, 420, 30, 30);
					xfillRect(480, 420, 30, 30);
					xfillRect(540, 420, 30, 30);
					xfillRect(510, 390, 30, 30);
					xfillRect(330, 390, 60, 30);
					xfillRect(660, 360, 30, 30);
					xfillRect(210, 630, 30, 30);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(450, 480, 30, 210);
					xfillRect(420, 480, 30, 30);
				}
				if (this.shirt == 10) {
					ctx.fillStyle = "rgb(123,123,123)";
					xfillRect(360, 510, 180, 240);
					xfillRect(300, 450, 60, 60);
					xfillRect(540, 450, 60, 60);
					xfillRect(510, 450, 30, 60);
					xfillRect(360, 450, 30, 60);
					xfillRect(390, 480, 30, 30);
					xfillRect(480, 480, 30, 30);
					xfillRect(600, 450, 60, 60);
					xfillRect(660, 360, 30, 120);
					xfillRect(240, 450, 60, 60);
					xfillRect(210, 480, 30, 180);
					xfillRect(390, 450, 30, 30);
					xfillRect(360, 420, 30, 30);
					xfillRect(510, 420, 30, 30);
					xfillRect(480, 450, 30, 30);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(420, 510, 60, 210);
					xfillRect(390, 720, 120, 30);
					xfillRect(420, 450, 30, 30);
					xfillRect(390, 420, 30, 30);
					xfillRect(480, 420, 30, 30);
					xfillRect(540, 420, 30, 30);
					xfillRect(510, 390, 30, 30);
					xfillRect(330, 390, 60, 30);
					xfillRect(660, 360, 30, 30);
					xfillRect(210, 630, 30, 30);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(450, 480, 30, 210);
					xfillRect(420, 480, 30, 30);
				}
				if (this.shirt == 11) {
					ctx.fillStyle = "rgb(246,227,57)";
					xfillRect(360, 510, 180, 240);
					xfillRect(300, 450, 60, 60);
					xfillRect(540, 450, 60, 60);
					xfillRect(510, 450, 30, 60);
					xfillRect(360, 450, 30, 60);
					xfillRect(390, 480, 30, 30);
					xfillRect(480, 480, 30, 30);
					xfillRect(600, 450, 60, 60);
					xfillRect(660, 360, 30, 120);
					xfillRect(240, 450, 60, 60);
					xfillRect(210, 480, 30, 180);
					xfillRect(390, 450, 30, 30);
					xfillRect(360, 420, 30, 30);
					xfillRect(510, 420, 30, 30);
					xfillRect(480, 450, 30, 30);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(420, 510, 60, 210);
					xfillRect(390, 720, 120, 30);
					xfillRect(420, 450, 30, 30);
					xfillRect(390, 420, 30, 30);
					xfillRect(480, 420, 30, 30);
					xfillRect(540, 420, 30, 30);
					xfillRect(510, 390, 30, 30);
					xfillRect(330, 390, 60, 30);
					xfillRect(660, 360, 30, 30);
					xfillRect(210, 630, 30, 30);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(450, 480, 30, 210);
					xfillRect(420, 480, 30, 30);
				}
				if (this.shirt == 12) {
					ctx.fillStyle = "rgb(90,120,70)";
					xfillRect(300, 450, 60, 60);
					xfillRect(540, 450, 60, 60);
					xfillRect(510, 450, 30, 60);
					xfillRect(600, 450, 60, 60);
					xfillRect(660, 390, 30, 90);
					xfillRect(240, 450, 60, 60);
					xfillRect(210, 480, 30, 150);
					xfillRect(480, 450, 60, 300);
					xfillRect(360, 450, 60, 300);
					xfillRect(420, 450, 60, 300);
					xfillRect(390, 420, 120, 30);
					ctx.fillStyle = "rgb(60,90,40)";
					xfillRect(360, 450, 180, 30);
					xfillRect(360, 510, 180, 30);
					xfillRect(360, 570, 180, 30);
					xfillRect(360, 630, 180, 30);
					xfillRect(360, 690, 180, 30);
					xfillRect(330, 450, 30, 60);
					xfillRect(270, 450, 30, 60);
					xfillRect(210, 480, 30, 30);
					xfillRect(210, 540, 30, 30);
					xfillRect(210, 600, 30, 30);
					xfillRect(540, 450, 30, 60);
					xfillRect(600, 450, 30, 60);
					xfillRect(660, 450, 30, 30);
					xfillRect(660, 390, 30, 30);
					xfillRect(660, 330, 30, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(660, 360, 30, 30);
					xfillRect(210, 630, 30, 30);
				}
				if (this.shirt == 13) {
					ctx.fillStyle = "rgb(155,65,1)";
					xfillRect(300, 450, 60, 60);
					xfillRect(540, 450, 60, 60);
					xfillRect(510, 450, 30, 60);
					xfillRect(600, 450, 60, 60);
					xfillRect(660, 390, 30, 90);
					xfillRect(240, 450, 60, 60);
					xfillRect(210, 480, 30, 150);
					xfillRect(480, 450, 60, 300);
					xfillRect(360, 450, 60, 300);
					xfillRect(420, 450, 60, 300);
					xfillRect(390, 420, 120, 30);
					ctx.fillStyle = "rgb(185,95,1)";
					xfillRect(360, 450, 180, 30);
					xfillRect(360, 510, 180, 30);
					xfillRect(360, 570, 180, 30);
					xfillRect(360, 630, 180, 30);
					xfillRect(360, 690, 180, 30);
					xfillRect(330, 450, 30, 60);
					xfillRect(270, 450, 30, 60);
					xfillRect(210, 480, 30, 30);
					xfillRect(210, 540, 30, 30);
					xfillRect(210, 600, 30, 30);
					xfillRect(540, 450, 30, 60);
					xfillRect(600, 450, 30, 60);
					xfillRect(660, 450, 30, 30);
					xfillRect(660, 390, 30, 30);
					xfillRect(660, 330, 30, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(660, 360, 30, 30);
					xfillRect(210, 630, 30, 30);
				}
				if (this.shirt == 14) {
					ctx.fillStyle = "rgb(220,66,78)";
					xfillRect(360, 480, 180, 270);
					xfillRect(390, 450, 30, 30);
					xfillRect(480, 450, 30, 30);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(300, 450, 60, 60);
					xfillRect(540, 450, 60, 60);
					xfillRect(510, 450, 30, 30);
					xfillRect(360, 450, 30, 30);
					xfillRect(420, 540, 30, 30);
					xfillRect(420, 570, 60, 60);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(240, 450, 60, 60);
					xfillRect(210, 480, 30, 180);
					xfillRect(600, 450, 60, 60);
					xfillRect(660, 360, 30, 120);
				}
				if (this.shirt == 15) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
						xfillRect(240, 450, 60, 60);
						xfillRect(210, 480, 30, 180);
						xfillRect(600, 450, 60, 60);
						xfillRect(660, 360, 30, 120);
						xfillRect(360, 510, 180, 240);
						xfillRect(300, 450, 60, 60);
						xfillRect(540, 450, 60, 60);
						xfillRect(510, 450, 30, 60);
						xfillRect(360, 450, 30, 60);
						xfillRect(390, 480, 30, 30);
						xfillRect(480, 480, 30, 30);
						ctx.fillStyle = "rgb(235,201,185)";
						xfillRect(480, 540, 30, 30);
						xfillRect(390, 540, 30, 30);
						xfillRect(450, 690, 30, 30);
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
						xfillRect(240, 450, 60, 60);
						xfillRect(210, 480, 30, 180);
						xfillRect(600, 450, 60, 60);
						xfillRect(660, 360, 30, 120);
						xfillRect(360, 510, 180, 240);
						xfillRect(300, 450, 60, 60);
						xfillRect(540, 450, 60, 60);
						xfillRect(510, 450, 30, 60);
						xfillRect(360, 450, 30, 60);
						xfillRect(390, 480, 30, 30);
						xfillRect(480, 480, 30, 30);
						ctx.fillStyle = "rgb(145,87,50)";
						xfillRect(480, 540, 30, 30);
						xfillRect(390, 540, 30, 30);
						xfillRect(450, 690, 30, 30);
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
						xfillRect(240, 450, 60, 60);
						xfillRect(210, 480, 30, 180);
						xfillRect(600, 450, 60, 60);
						xfillRect(660, 360, 30, 120);
						xfillRect(360, 510, 180, 240);
						xfillRect(300, 450, 60, 60);
						xfillRect(540, 450, 60, 60);
						xfillRect(510, 450, 30, 60);
						xfillRect(360, 450, 30, 60);
						xfillRect(390, 480, 30, 30);
						xfillRect(480, 480, 30, 30);
						ctx.fillStyle = "rgb(180,141,115)";
						xfillRect(480, 540, 30, 30);
						xfillRect(390, 540, 30, 30);
						xfillRect(450, 690, 30, 30);
					}
				}
				if (this.chain == 1) {
					ctx.fillStyle = "rgb(218,165,32)";
					xfillRect(420, 480, 60, 30);
					xfillRect(390, 450, 30, 30);
					xfillRect(480, 450, 30, 30);
					if (this.vest != 1 && this.vest != 2 && this.shirt <= 8) {
						xfillRect(450, 510, 30, 120);
						xfillRect(420, 540, 90, 30);
					}
				}
				if (this.chain == 2) {
					ctx.fillStyle = "rgb(218,165,32)";
					xfillRect(420, 480, 60, 30);
					xfillRect(390, 450, 30, 30);
					xfillRect(480, 450, 30, 30);
				}
				if (this.chain == 3) {
					ctx.fillStyle = "rgb(192,192,192)";
					xfillRect(420, 480, 60, 30);
					xfillRect(390, 450, 30, 30);
					xfillRect(480, 450, 30, 30);
					if (this.vest != 1 && this.vest != 2 && this.shirt <= 8) {
						xfillRect(450, 510, 30, 120);
						xfillRect(420, 540, 90, 30);
					}
				}
				if (this.chain == 4) {
					ctx.fillStyle = "rgb(192,192,192)";
					xfillRect(420, 480, 60, 30);
					xfillRect(390, 450, 30, 30);
					xfillRect(480, 450, 30, 30);
				}
				if (this.shirt == 16) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(240, 450, 420, 60);
					xfillRect(210, 480, 30, 180);
					xfillRect(600, 450, 60, 60);
					xfillRect(660, 360, 30, 120);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(360, 510, 180, 240);
					xfillRect(510, 450, 30, 60);
					xfillRect(360, 450, 30, 60);
					ctx.fillStyle = "rgb(50,50,50)";
					xfillRect(480, 450, 30, 240);
					xfillRect(510, 480, 30, 240);
					xfillRect(360, 480, 30, 240);
					xfillRect(390, 450, 30, 240);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(300, 450, 60, 30);
					xfillRect(330, 480, 30, 30);
					xfillRect(540, 450, 60, 30);
					xfillRect(540, 480, 30, 30);
					ctx.fillStyle = "rgb(150,150,150)";
					xfillRect(510, 630, 30, 30);
					xfillRect(360, 630, 30, 30);
					ctx.fillStyle = "rgb(50,60,80)";
					xfillRect(360, 540, 30, 30);
					ctx.fillStyle = "rgb(152,99,10)";
					xfillRect(480, 510, 30, 30);
				}
				if (this.vest == 1) {
					ctx.fillStyle = "rgb(43,45,24)";
					xfillRect(300, 450, 60, 60);
					xfillRect(540, 450, 60, 60);
					xfillRect(510, 450, 30, 60);
					xfillRect(600, 450, 60, 60);
					xfillRect(660, 360, 30, 120);
					xfillRect(240, 450, 60, 60);
					xfillRect(210, 480, 30, 180);
					xfillRect(480, 450, 60, 300);
					xfillRect(360, 450, 60, 300);
					ctx.fillStyle = "rgb(143,145,124)";
					xfillRect(330, 420, 90, 30);
					xfillRect(480, 420, 90, 30);
					xfillRect(510, 660, 30, 30);
					xfillRect(360, 660, 30, 30);
				}
				if (this.vest == 2) {
					ctx.fillStyle = "rgb(30,45,120)";
					xfillRect(300, 450, 60, 60);
					xfillRect(540, 450, 60, 60);
					xfillRect(510, 450, 30, 60);
					xfillRect(600, 450, 60, 60);
					xfillRect(660, 360, 30, 120);
					xfillRect(240, 450, 60, 60);
					xfillRect(210, 480, 30, 180);
					xfillRect(480, 450, 60, 300);
					xfillRect(360, 450, 60, 300);
					ctx.fillStyle = "rgb(30,45,150)";
					xfillRect(330, 420, 90, 30);
					xfillRect(480, 420, 90, 30);
					xfillRect(510, 660, 30, 30);
					xfillRect(360, 660, 30, 30);
				}
				if (this.trousers == 1) {
					ctx.fillStyle = "rgb(200,155,105)";
					xfillRect(360, 750, 60, 210);
					xfillRect(480, 750, 60, 210);
					xfillRect(420, 750, 60, 90);
					ctx.fillStyle = "rgb(170,125,85)";
					xfillRect(450, 780, 30, 60);
					ctx.fillStyle = "rgb(80,80,80)";
					xfillRect(360, 750, 60, 30);
					xfillRect(480, 750, 60, 30);
					ctx.fillStyle = "rgb(80,80,80)";
					xfillRect(360, 750, 60, 30);
					ctx.fillStyle = "rgb(225,200,100)";
					xfillRect(420, 750, 60, 30);
				}
				if (this.trousers == 2) {
					ctx.fillStyle = "rgb(50,50,105)";
					xfillRect(360, 750, 60, 210);
					xfillRect(480, 750, 60, 210);
					xfillRect(420, 750, 60, 90);
					ctx.fillStyle = "rgb(40,40,95)";
					xfillRect(450, 780, 30, 60);
					ctx.fillStyle = "rgb(95,50,23)";
					xfillRect(360, 750, 60, 30);
					xfillRect(480, 750, 60, 30);
					ctx.fillStyle = "rgb(95,50,23)";
					xfillRect(360, 750, 60, 30);
					ctx.fillStyle = "rgb(120,120,120)";
					xfillRect(420, 750, 60, 30);
				}
				if (this.trousers == 3) {
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(360, 750, 60, 210);
					xfillRect(480, 750, 60, 210);
					xfillRect(420, 750, 60, 90);
					ctx.fillStyle = "rgb(121,85,71)";
					xfillRect(360, 750, 60, 30);
					xfillRect(480, 750, 60, 30);
					ctx.fillStyle = "rgb(158,158,158)";
					xfillRect(420, 750, 60, 30);
				}
				if (this.trousers == 4) {
					ctx.fillStyle = "rgb(59,92,233)";
					xfillRect(360, 750, 60, 210);
					xfillRect(480, 750, 60, 210);
					xfillRect(420, 750, 60, 90);
					ctx.fillStyle = "rgb(48,77,195)";
					xfillRect(450, 780, 30, 60);
					ctx.fillStyle = "rgb(80,80,80)";
					xfillRect(360, 750, 60, 30);
					xfillRect(480, 750, 60, 30);
					ctx.fillStyle = "rgb(80,80,80)";
					xfillRect(360, 750, 60, 30);
					ctx.fillStyle = "rgb(225,200,100)";
					xfillRect(420, 750, 60, 30);
				}
				if (this.trousers == 5) {
					ctx.fillStyle = "rgb(20,50,0)";
					xfillRect(360, 750, 60, 210);
					xfillRect(480, 750, 60, 210);
					xfillRect(420, 750, 60, 90);
					ctx.fillStyle = "rgb(20,60,0)";
					xfillRect(450, 780, 30, 60);
					ctx.fillStyle = "rgb(121,85,71)";
					xfillRect(360, 750, 60, 30);
					xfillRect(480, 750, 60, 30);
					ctx.fillStyle = "rgb(158,158,158)";
					xfillRect(420, 750, 60, 30);
				}
				if (this.trousers == 6) {
					ctx.fillStyle = "rgb(255,0,250)";
					xfillRect(360, 750, 60, 210);
					xfillRect(480, 750, 60, 210);
					xfillRect(420, 750, 60, 90);
					ctx.fillStyle = "rgb(255,60,250)";
					xfillRect(450, 780, 30, 60);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(360, 750, 60, 30);
					xfillRect(480, 750, 60, 30);
					ctx.fillStyle = "rgb(158,158,158)";
					xfillRect(420, 750, 60, 30);
				}
				if (this.trousers == 7) {
					ctx.fillStyle = "rgb(123,123,123)";
					xfillRect(360, 750, 60, 210);
					xfillRect(480, 750, 60, 210);
					xfillRect(420, 750, 60, 90);
					ctx.fillStyle = "rgb(130,130,130)";
					xfillRect(450, 780, 30, 60);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(360, 750, 60, 30);
					xfillRect(480, 750, 60, 30);
					ctx.fillStyle = "rgb(158,158,158)";
					xfillRect(420, 750, 60, 30);
				}
				if (this.trousers == 8) {
					ctx.fillStyle = "rgb(246,227,57)";
					xfillRect(360, 750, 60, 210);
					xfillRect(480, 750, 60, 210);
					xfillRect(420, 750, 60, 90);
					ctx.fillStyle = "rgb(252,239,117)";
					xfillRect(450, 780, 30, 60);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(360, 750, 60, 30);
					xfillRect(480, 750, 60, 30);
					ctx.fillStyle = "rgb(158,158,158)";
					xfillRect(420, 750, 60, 30);
				}
				if (this.trousers == 9) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
						xfillRect(360, 750, 60, 210);
						xfillRect(480, 750, 60, 210);
						xfillRect(420, 750, 60, 90);
						xfillRect(450, 780, 30, 60);
						xfillRect(360, 750, 60, 30);
						xfillRect(480, 750, 60, 30);
						xfillRect(360, 750, 60, 30);
						xfillRect(420, 750, 60, 30);
						ctx.fillStyle = "rgb(235,201,185)";
						xfillRect(420, 810, 30, 30);
						xfillRect(480, 810, 30, 30);
						ctx.fillStyle = "rgb(205,181,165)";
						xfillRect(450, 810, 30, 60);
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
						xfillRect(360, 750, 60, 210);
						xfillRect(480, 750, 60, 210);
						xfillRect(420, 750, 60, 90);
						xfillRect(450, 780, 30, 60);
						xfillRect(360, 750, 60, 30);
						xfillRect(480, 750, 60, 30);
						xfillRect(360, 750, 60, 30);
						xfillRect(420, 750, 60, 30);
						ctx.fillStyle = "rgb(145,87,50)";
						xfillRect(420, 810, 30, 30);
						xfillRect(480, 810, 30, 30);
						ctx.fillStyle = "rgb(125,67,30)";
						xfillRect(450, 810, 30, 60);
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
						xfillRect(360, 750, 60, 210);
						xfillRect(480, 750, 60, 210);
						xfillRect(420, 750, 60, 90);
						xfillRect(450, 780, 30, 60);
						xfillRect(360, 750, 60, 30);
						xfillRect(480, 750, 60, 30);
						xfillRect(360, 750, 60, 30);
						xfillRect(420, 750, 60, 30);
						ctx.fillStyle = "rgb(180,141,115)";
						xfillRect(420, 810, 30, 30);
						xfillRect(480, 810, 30, 30);
						ctx.fillStyle = "rgb(160,121,95)";
						xfillRect(450, 810, 30, 60);
					}
				}
				if (this.trousers == 10) {
					if (this.sColor == 1) {
						xfillRect(360, 750, 30, 30);
						ctx.fillStyle = "rgb(0,0,0)";
						xfillRect(360, 750, 60, 210);
						xfillRect(480, 750, 60, 210);
						xfillRect(420, 750, 60, 90);
						ctx.fillStyle = "rgb(50,50,50)";
						xfillRect(360, 750, 60, 30);
						xfillRect(480, 750, 60, 30);
						xfillRect(450, 780, 30, 60);
						ctx.fillStyle = "rgb(132,99,0)";
						xfillRect(420, 750, 60, 30);
						ctx.fillStyle = "rgb(192,192,192)";
						xfillRect(390, 780, 30, 30);
						xfillRect(360, 810, 30, 30);
						ctx.fillStyle = "rgb(255,221,205)";
						xfillRect(390, 900, 30, 30);
						xfillRect(510, 930, 30, 30);
					}
					if (this.sColor == 2) {
						xfillRect(360, 750, 30, 30);
						ctx.fillStyle = "rgb(0,0,0)";
						xfillRect(360, 750, 60, 210);
						xfillRect(480, 750, 60, 210);
						xfillRect(420, 750, 60, 90);
						ctx.fillStyle = "rgb(50,50,50)";
						xfillRect(360, 750, 60, 30);
						xfillRect(480, 750, 60, 30);
						xfillRect(450, 780, 30, 60);
						ctx.fillStyle = "rgb(132,99,0)";
						xfillRect(420, 750, 60, 30);
						ctx.fillStyle = "rgb(192,192,192)";
						xfillRect(390, 780, 30, 30);
						xfillRect(360, 810, 30, 30);
						ctx.fillStyle = "rgb(165,107,70)";
						xfillRect(390, 900, 30, 30);
						xfillRect(510, 930, 30, 30);
					}
					if (this.sColor == 3) {
						xfillRect(360, 750, 30, 30);
						ctx.fillStyle = "rgb(0,0,0)";
						xfillRect(360, 750, 60, 210);
						xfillRect(480, 750, 60, 210);
						xfillRect(420, 750, 60, 90);
						ctx.fillStyle = "rgb(50,50,50)";
						xfillRect(360, 750, 60, 30);
						xfillRect(480, 750, 60, 30);
						xfillRect(450, 780, 30, 60);
						ctx.fillStyle = "rgb(132,99,0)";
						xfillRect(420, 750, 60, 30);
						ctx.fillStyle = "rgb(192,192,192)";
						xfillRect(390, 780, 30, 30);
						xfillRect(360, 810, 30, 30);
						ctx.fillStyle = "rgb(200,161,135)";
						xfillRect(390, 900, 30, 30);
						xfillRect(510, 930, 30, 30);
					}
				}
				if (this.hair == 0) {
					this.noHair = true;
				}
				if (this.hair == 1) {
					ctx.fillStyle = "rgb(0,200,0)";
					xfillRect(390, 90, 30, 30);
					xfillRect(420, 60, 30, 90);
					xfillRect(450, 30, 30, 150);
				}
				if (this.hair == 2) {
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(330, 150, 30, 60);
					xfillRect(330, 270, 30, 60);
					xfillRect(360, 120, 30, 120);
					xfillRect(390, 90, 30, 90);
					xfillRect(420, 90, 90, 60);
					xfillRect(510, 90, 30, 90);
					xfillRect(540, 150, 30, 60);
				}
				if (this.hair == 3) {
					ctx.fillStyle = "rgb(230,200,0)";
					xfillRect(330, 150, 30, 60);
					xfillRect(330, 270, 30, 60);
					xfillRect(360, 120, 30, 120);
					xfillRect(390, 90, 30, 90);
					xfillRect(420, 90, 90, 60);
					xfillRect(510, 90, 30, 90);
					xfillRect(540, 150, 30, 60);
				}
				if (this.hair == 4) {
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(330, 120, 30, 90);
					xfillRect(360, 120, 30, 120);
					xfillRect(390, 90, 30, 90);
					xfillRect(420, 90, 30, 60);
					xfillRect(450, 60, 30, 150);
					xfillRect(480, 60, 60, 120);
					xfillRect(540, 60, 30, 150);
					xfillRect(570, 90, 30, 60);
				}
				if (this.hair == 5) {
					ctx.fillStyle = "rgb(192,178,87)";
					xfillRect(330, 120, 30, 90);
					xfillRect(360, 120, 30, 120);
					xfillRect(390, 90, 30, 90);
					xfillRect(420, 90, 30, 60);
					xfillRect(450, 60, 30, 150);
					xfillRect(480, 60, 60, 120);
					xfillRect(540, 60, 30, 150);
					xfillRect(570, 90, 30, 60);
				}
				if (this.hair == 6) {
					ctx.fillStyle = "rgb(242,130,63)";
					xfillRect(300, 150, 30, 180);
					xfillRect(330, 120, 30, 90);
					xfillRect(330, 270, 30, 90);
					xfillRect(360, 90, 30, 150);
					xfillRect(390, 90, 120, 60);
					xfillRect(450, 150, 30, 30);
					xfillRect(510, 90, 30, 90);
					xfillRect(540, 120, 30, 90);
					xfillRect(540, 270, 30, 30);
				}
				if (this.hair == 7) {
					ctx.fillStyle = "rgb(230,200,0)";
					xfillRect(300, 150, 30, 180);
					xfillRect(330, 120, 30, 90);
					xfillRect(330, 270, 30, 90);
					xfillRect(360, 90, 30, 150);
					xfillRect(390, 90, 120, 60);
					xfillRect(450, 150, 30, 30);
					xfillRect(510, 90, 30, 90);
					xfillRect(540, 120, 30, 90);
					xfillRect(540, 270, 30, 30);
				}
				if (this.hair == 8) {
					ctx.fillStyle = "rgb(192,178,87)";
					xfillRect(300, 150, 30, 180);
					xfillRect(330, 120, 30, 90);
					xfillRect(330, 270, 30, 90);
					xfillRect(360, 90, 30, 150);
					xfillRect(390, 90, 120, 60);
					xfillRect(450, 150, 30, 30);
					xfillRect(510, 90, 30, 90);
					xfillRect(540, 120, 30, 90);
					xfillRect(540, 270, 30, 30);
				}
				if (this.hair == 9) {
					ctx.fillStyle = "rgb(105,60,33)";
					xfillRect(300, 150, 30, 90);
					xfillRect(330, 120, 30, 90);
					xfillRect(360, 90, 30, 120);
					xfillRect(390, 90, 60, 90);
					xfillRect(450, 120, 30, 30);
					xfillRect(480, 90, 30, 60);
					xfillRect(510, 90, 30, 90);
					xfillRect(540, 120, 30, 90);
					xfillRect(570, 180, 30, 60);
				}
				if (this.hair == 10) {
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(300, 210, 30, 60);
					xfillRect(330, 180, 30, 90);
					xfillRect(420, 90, 90, 30);
					xfillRect(390, 120, 30, 30);
					xfillRect(360, 150, 30, 30);
					xfillRect(510, 120, 30, 30);
					xfillRect(540, 150, 30, 120);
					xfillRect(570, 210, 30, 60);
					ctx.fillStyle = "rgb(238,180,34)";
					xfillRect(330, 270, 30, 60);
					xfillRect(360, 180, 30, 60);
					xfillRect(330, 150, 30, 30);
					xfillRect(390, 150, 30, 30);
					xfillRect(360, 120, 30, 30);
					xfillRect(390, 90, 30, 30);
					xfillRect(510, 90, 30, 30);
					xfillRect(510, 150, 30, 30);
					xfillRect(420, 120, 90, 30);
				}
				if (this.hair == 11) {
					ctx.fillStyle = "rgb(105,60,33)";
					xfillRect(330, 180, 30, 30);
					xfillRect(360, 180, 30, 60);
					xfillRect(540, 180, 30, 30);
					xfillRect(330, 270, 30, 60);
					ctx.fillStyle = "rgb(220,66,78)";
					xfillRect(390, 60, 120, 90);
					xfillRect(330, 120, 30, 60);
					xfillRect(360, 90, 30, 90);
					xfillRect(510, 90, 30, 60);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(390, 150, 210, 30);
					xfillRect(450, 90, 60, 30);
				}
				if (this.bird == 0) {
					this.nobird = true;
				}
				if (this.bird == 1) {
					ctx.fillStyle = "rgb(255,0,0)";
					xfillRect(210, 270, 90, 90);
					ctx.fillStyle = "rgb(200,0,0)";
					xfillRect(240, 240, 30, 30);
					ctx.fillStyle = "rgb(255,0,0)";
					xfillRect(210, 360, 90, 90);
					xfillRect(180, 360, 150, 30);
					ctx.fillStyle = "rgb(200,0,0)";
					xfillRect(210, 450, 30, 30);
					xfillRect(240, 420, 30, 30);
					ctx.fillStyle = "rgb(255,200,0)";
					xfillRect(180, 390, 30, 30);
					xfillRect(300, 390, 30, 30);
					ctx.fillStyle = "rgb(0,0,180)";
					xfillRect(180, 420, 30, 90);
					xfillRect(300, 420, 30, 30);
					ctx.fillStyle = "rgb(200,0,0)";
					xfillRect(240, 510, 30, 60);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(240, 300, 30, 60);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(210, 300, 30, 30);
					xfillRect(270, 300, 30, 30);
				}
				if (this.bird == 2) {
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(210, 270, 90, 90);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(240, 240, 30, 30);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(210, 360, 90, 90);
					xfillRect(180, 360, 150, 30);
					ctx.fillStyle = "rgb(250,250,250)";
					xfillRect(210, 450, 30, 30);
					xfillRect(240, 420, 30, 30);
					ctx.fillStyle = "rgb(250,250,250)";
					xfillRect(180, 390, 30, 30);
					xfillRect(300, 390, 30, 30);
					ctx.fillStyle = "rgb(245,245,245)";
					xfillRect(180, 420, 30, 90);
					xfillRect(300, 420, 30, 30);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(240, 510, 30, 60);
					ctx.fillStyle = "rgb(250,250,250)";
					xfillRect(240, 510, 30, 30);
					ctx.fillStyle = "rgb(255,165,0)";
					xfillRect(240, 330, 30, 30);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(210, 300, 30, 30);
					xfillRect(270, 300, 30, 30);
				}
				if (this.bird == 3) {
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(210, 270, 90, 90);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(240, 240, 30, 30);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(210, 360, 90, 90);
					xfillRect(180, 360, 150, 30);
					ctx.fillStyle = "rgb(20,20,20)";
					xfillRect(210, 450, 30, 30);
					xfillRect(240, 420, 30, 30);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(180, 390, 30, 30);
					xfillRect(300, 390, 30, 30);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(180, 420, 30, 90);
					xfillRect(300, 420, 30, 30);
					ctx.fillStyle = "rgb(15,15,15)";
					xfillRect(240, 510, 30, 60);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(240, 510, 30, 30);
					ctx.fillStyle = "rgb(60,60,60)";
					xfillRect(240, 330, 30, 30);
					ctx.fillStyle = "rgb(50,30,30)";
					xfillRect(210, 300, 30, 30);
					xfillRect(270, 300, 30, 30);
				}
				if (this.bird == 4) {
					ctx.fillStyle = "rgb(51,21,4)";
					xfillRect(210, 330, 90, 30);
					xfillRect(210, 300, 30, 30);
					xfillRect(270, 300, 30, 30);
					ctx.fillStyle = "rgb(51,21,4)";
					xfillRect(210, 360, 90, 90);
					ctx.fillStyle = "rgb(51,21,4)";
					xfillRect(210, 450, 30, 30);
					xfillRect(240, 420, 30, 30);
					ctx.fillStyle = "rgb(41,11,1)";
					xfillRect(240, 510, 30, 90);
					ctx.fillStyle = "rgb(41,11,1)";
					xfillRect(240, 510, 30, 30);
					ctx.fillStyle = "rgb(230,230,230)";
					xfillRect(210, 360, 30, 30);
					xfillRect(270, 360, 30, 30);
					ctx.fillStyle = "rgb(5,5,5)";
					xfillRect(240, 390, 30, 30);
				}
				if (this.bird == 5) {
					ctx.fillStyle = "rgb(140,140,140)";
					xfillRect(240, 390, 90, 60);
					ctx.fillStyle = "rgb(170,170,170)";
					xfillRect(210, 420, 30, 60);
					xfillRect(180, 480, 30, 30);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(300, 390, 30, 30);
					ctx.fillStyle = "rgb(255,192,203)";
					xfillRect(300, 360, 30, 30);
				}
				if (this.leftHand == 1) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(630, 300, 90, 60);
					xfillRect(660, 240, 30, 60);
				}
				if (this.leftHand == 2) {
					ctx.fillStyle = "rgb(136,74,1)";
					xfillRect(720, 180, 30, 30);
					xfillRect(690, 240, 90, 30);
					xfillRect(690, 360, 90, 30);
					ctx.fillStyle = "rgb(60,99,34)";
					xfillRect(690, 270, 90, 90);
					xfillRect(720, 210, 30, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(660, 300, 30, 60);
					xfillRect(690, 300, 30, 30);
					xfillRect(750, 300, 30, 60);
				}
				if (this.leftHand == 3) {
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(690, 240, 90, 30);
					xfillRect(780, 270, 30, 30);
					ctx.fillStyle = "rgb(253,200,124)";
					xfillRect(690, 270, 90, 120);
					ctx.fillStyle = "rgb(255,182,77)";
					xfillRect(720, 270, 30, 120);
					xfillRect(690, 360, 30, 30);
					xfillRect(750, 330, 30, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(660, 300, 30, 60);
					xfillRect(690, 300, 30, 30);
				}
				if (this.leftHand == 4) {
					ctx.fillStyle = "rgb(165,94,38)";
					xfillRect(660, 300, 30, 30);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(720, 300, 30, 30);
					ctx.fillStyle = "rgb(120,116,117)";
					xfillRect(750, 300, 30, 30);
					xfillRect(810, 270, 30, 30);
					xfillRect(870, 240, 30, 30);
					xfillRect(810, 180, 30, 30);
					ctx.fillStyle = "rgb(189,189,189)";
					xfillRect(810, 150, 30, 30);
					xfillRect(840, 180, 30, 30);
					xfillRect(840, 240, 30, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(660, 330, 30, 30);
					xfillRect(690, 300, 30, 60);
				}
				if (this.leftHand == 5) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(630, 300, 90, 60);
					xfillRect(630, 270, 30, 30);
					xfillRect(690, 270, 30, 30);
					xfillRect(600, 330, 30, 30);
				}
				if (this.leftHand == 6) {
					ctx.fillStyle = "rgb(255,144,0)";
					xfillRect(690, 270, 60, 150);
					ctx.fillStyle = "rgb(191,54,12)";
					xfillRect(690, 210, 30, 60);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(660, 300, 30, 60);
					xfillRect(690, 300, 30, 30);
				}
				if (this.leftHand == 7) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(630, 300, 30, 30);
					xfillRect(690, 300, 30, 60);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(690, 210, 30, 90);
					ctx.fillStyle = "rgb(29,29,29)";
					xfillRect(660, 330, 30, 30);
					xfillRect(660, 210, 30, 30);
					ctx.fillStyle = "rgb(162,79,79)";
					xfillRect(660, 240, 30, 30);
					ctx.fillStyle = "rgb(79,162,79)";
					xfillRect(660, 270, 30, 30);
					ctx.fillStyle = "rgb(69,105,223)";
					xfillRect(660, 300, 30, 30);
				}
				if (this.rightHand == 1) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(210, 660, 60, 90);
					xfillRect(270, 660, 30, 30);
				}
				if (this.rightHand == 2) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(210, 660, 60, 90);
					ctx.fillStyle = "rgb(207,216,221)";
					xfillRect(150, 660, 30, 90);
					xfillRect(300, 660, 30, 90);
					ctx.fillStyle = "rgb(254,193,7)";
					xfillRect(180, 660, 30, 90);
					xfillRect(270, 660, 30, 90);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(180, 690, 30, 30);
					ctx.fillStyle = "rgb(150,127,19)";
					xfillRect(330, 720, 30, 30);
					xfillRect(390, 780, 30, 30);
					xfillRect(390, 870, 30, 30);
					xfillRect(420, 930, 30, 30);
					ctx.fillStyle = "rgb(214,193,95)";
					xfillRect(360, 750, 30, 30);
					xfillRect(390, 810, 30, 60);
					xfillRect(390, 900, 30, 30);
				}
				if (this.rightHand == 3) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(210, 660, 60, 90);
					ctx.fillStyle = "rgb(121,85,71)";
					xfillRect(150, 660, 30, 90);
					xfillRect(300, 660, 30, 90);
					xfillRect(360, 690, 30, 30);
					ctx.fillStyle = "rgb(25,33,140)";
					xfillRect(180, 660, 30, 90);
					xfillRect(270, 660, 30, 90);
					xfillRect(330, 690, 30, 30);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(270, 690, 30, 30);
					xfillRect(180, 690, 30, 30);
				}
				if (this.rightHand == 4) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					};
					xfillRect(210, 660, 60, 90);
					xfillRect(270, 660, 30, 30);
					ctx.fillStyle = "rgb(161,95,42)";
					xfillRect(270, 720, 30, 30);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(210, 720, 30, 30);
					ctx.fillStyle = "rgb(117,117,117)";
					xfillRect(180, 720, 30, 30);
					xfillRect(120, 660, 30, 30);
					xfillRect(60, 600, 30, 30);
					xfillRect(150, 570, 30, 30);
					ctx.fillStyle = "rgb(189,189,189)";
					xfillRect(90, 630, 30, 30);
					xfillRect(150, 540, 30, 30);
					xfillRect(120, 570, 30, 30);
				}
				if (this.rightHand == 5) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					};
					xfillRect(210, 660, 60, 60);
					xfillRect(270, 660, 30, 30);
					xfillRect(240, 720, 30, 30);
				}
				if (this.rightHand == 6) {
					ctx.fillStyle = "rgb(255,144,0)";
					xfillRect(180, 690, 150, 60);
					xfillRect(390, 810, 30, 30);
					ctx.fillStyle = "rgb(191,54,12)";
					xfillRect(330, 720, 60, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(210, 660, 60, 90);
					xfillRect(270, 660, 30, 30);
				}
				if (this.rightHand == 7) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					};
					xfillRect(210, 660, 60, 60);
					ctx.fillStyle = "rgb(180,105,0)";
					xfillRect(180, 690, 30, 60);
					xfillRect(270, 690, 30, 60);
					xfillRect(90, 900, 300, 30);
					ctx.fillStyle = "rgb(205,120,0)";
					xfillRect(90, 750, 300, 150);
					ctx.fillStyle = "rgb(20,108,0)";
					xfillRect(120, 690, 60, 60);
					ctx.fillStyle = "rgb(0,76,11)";
					xfillRect(150, 630, 30, 60);
					ctx.fillStyle = "rgb(210,17,46)";
					xfillRect(180, 750, 30, 30);
					xfillRect(240, 750, 30, 30);
					xfillRect(300, 750, 30, 30);
					xfillRect(360, 750, 30, 30);
					xfillRect(210, 780, 30, 30);
					xfillRect(270, 780, 30, 30);
					xfillRect(330, 780, 30, 30);
					xfillRect(300, 810, 30, 30);
					ctx.fillStyle = "rgb(232,232,232)";
					xfillRect(210, 750, 30, 30);
					xfillRect(270, 750, 30, 30);
					xfillRect(330, 750, 30, 30);
					xfillRect(240, 780, 30, 30);
					xfillRect(300, 780, 30, 30);
					xfillRect(360, 780, 30, 30);
					xfillRect(330, 810, 30, 30);
				}
				if (this.rightHand == 8) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(210, 690, 30, 60);
					ctx.fillStyle = "rgb(188,255,244)";
					xfillRect(240, 690, 30, 60);
					xfillRect(210, 600, 90, 60);
					xfillRect(210, 750, 90, 30);
					ctx.fillStyle = "rgb(207,245,129)";
					xfillRect(210, 660, 90, 30);
				}
				if (this.rightHand == 9) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(210, 690, 30, 60);
					xfillRect(270, 690, 30, 30);
					ctx.fillStyle = "rgb(188,255,244)";
					xfillRect(240, 690, 30, 60);
					xfillRect(210, 600, 90, 60);
					xfillRect(210, 750, 90, 30);
					ctx.fillStyle = "rgb(70,0,20)";
					xfillRect(210, 630, 90, 60);
				}
			}
			if (this.sex == 2) {
				if (this.sColor == 1) {
					ctx.fillStyle = "rgb(255,221,205)";
					xfillRect(390, 150, 120, 30);
					xfillRect(360, 180, 180, 210);
					xfillRect(330, 210, 30, 60);
					xfillRect(540, 210, 30, 60);
					xfillRect(390, 390, 120, 30);
					xfillRect(420, 420, 60, 90);
				}
				if (this.sColor == 2) {
					ctx.fillStyle = "rgb(165,107,70)";
					xfillRect(390, 150, 120, 30);
					xfillRect(360, 180, 180, 210);
					xfillRect(330, 210, 30, 60);
					xfillRect(540, 210, 30, 60);
					xfillRect(390, 390, 120, 30);
					xfillRect(420, 420, 60, 90);
				}
				if (this.sColor == 3) {
					ctx.fillStyle = "rgb(200,161,135)";
					xfillRect(390, 150, 120, 30);
					xfillRect(360, 180, 180, 210);
					xfillRect(330, 210, 30, 60);
					xfillRect(540, 210, 30, 60);
					xfillRect(390, 390, 120, 30);
					xfillRect(420, 420, 60, 90);
				}
				if (this.eyes == 1) {
					if (this.eColor == 1) {
						ctx.fillStyle = "rgb(0,0,0)";
						xfillRect(420, 210, 30, 30);
						xfillRect(510, 210, 30, 30);
					}
					if (this.eColor == 2) {
						ctx.fillStyle = "rgb(100,50,40)";
						xfillRect(420, 210, 30, 30);
						xfillRect(510, 210, 30, 30);
					}
					if (this.eColor == 3) {
						ctx.fillStyle = "rgb(0,100,60)";
						xfillRect(420, 210, 30, 30);
						xfillRect(510, 210, 30, 30);
					}
					if (this.eColor == 4) {
						ctx.fillStyle = "rgb(0,89,119)";
						xfillRect(420, 210, 30, 30);
						xfillRect(510, 210, 30, 30);
					}
				}
				if (this.eyes == 2) {
					if (this.eColor == 1) {
						ctx.fillStyle = "rgb(0,0,0)";
						xfillRect(420, 210, 30, 30);
						xfillRect(480, 210, 30, 30);
					}
					if (this.eColor == 2) {
						ctx.fillStyle = "rgb(100,50,40)";
						xfillRect(420, 210, 30, 30);
						xfillRect(480, 210, 30, 30);
					}
					if (this.eColor == 3) {
						ctx.fillStyle = "rgb(0,100,60)";
						xfillRect(420, 210, 30, 30);
						xfillRect(480, 210, 30, 30);
					}
					if (this.eColor == 4) {
						ctx.fillStyle = "rgb(0,89,119)";
						xfillRect(420, 210, 30, 30);
						xfillRect(480, 210, 30, 30);
					}
				}
				if (this.sColor == 1) {
					if (this.nose == 1) {
						ctx.fillStyle = "rgb(227,182,185)";
						xfillRect(450, 270, 60, 30);
					}
					if (this.nose == 2) {
						ctx.fillStyle = "rgb(227,182,185)";
						xfillRect(450, 300, 30, 30);
					}
					if (this.nose == 3) {
						ctx.fillStyle = "rgb(227,182,185)";
						xfillRect(450, 240, 30, 60);
					}
					if (this.nose == 4) {
						ctx.fillStyle = "rgb(227,182,185)";
						xfillRect(480, 270, 30, 30);
					}
					if (this.nose == 5) {
						ctx.fillStyle = "rgb(165,122,120)";
						xfillRect(450, 240, 30, 60);
						ctx.fillStyle = "rgb(0,0,50)";
						xfillRect(390, 210, 60, 60);
						xfillRect(480, 210, 60, 60);
						xfillRect(450, 210, 30, 30);
					}
				}
				if (this.sColor == 2) {
					if (this.nose == 1) {
						ctx.fillStyle = "rgb(170,130,80)";
						xfillRect(450, 270, 60, 30);
					}
					if (this.nose == 2) {
						ctx.fillStyle = "rgb(170,130,80)";
						xfillRect(450, 300, 30, 30);
					}
					if (this.nose == 3) {
						ctx.fillStyle = "rgb(170,130,80)";
						xfillRect(450, 240, 30, 60);
					}
					if (this.nose == 4) {
						ctx.fillStyle = "rgb(170,130,80)";
						xfillRect(480, 270, 30, 30);
					}
					if (this.nose == 5) {
						ctx.fillStyle = "rgb(165,122,120)";
						xfillRect(450, 240, 30, 60);
						ctx.fillStyle = "rgb(191,255,244)";
						xfillRect(390, 210, 60, 60);
						xfillRect(480, 210, 60, 60);
						xfillRect(450, 210, 30, 30);
					}
				}
				if (this.sColor == 3) {
					if (this.nose == 1) {
						ctx.fillStyle = "rgb(170,130,80)";
						xfillRect(450, 270, 60, 30);
					}
					if (this.nose == 2) {
						ctx.fillStyle = "rgb(170,130,80)";
						xfillRect(450, 300, 30, 30);
					}
					if (this.nose == 3) {
						ctx.fillStyle = "rgb(170,130,80)";
						xfillRect(450, 240, 30, 60);
					}
					if (this.nose == 4) {
						ctx.fillStyle = "rgb(170,130,80)";
						xfillRect(480, 270, 30, 30);
					}
					if (this.nose == 5) {
						ctx.fillStyle = "rgb(165,122,120)";
						xfillRect(450, 240, 30, 60);
						ctx.fillStyle = "rgb(150,0,50)";
						xfillRect(390, 210, 60, 60);
						xfillRect(480, 210, 60, 60);
						xfillRect(450, 210, 30, 30);
					}
				}
				if (this.mouth == 1) {
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(420, 360, 60, 30);
				}
				if (this.mouth == 2) {
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(420, 360, 60, 30);
				}
				if (this.mouth == 3) {
					ctx.fillStyle = "rgb(161,41,51)";
					xfillRect(420, 360, 60, 30);
				}
				if (this.mouth == 4) {
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(420, 360, 60, 30);
					ctx.fillStyle = "rgb(254,146,0)";
					xfillRect(420, 390, 30, 30);
				}
				if (this.hair == 0) {
					this.noHair = true;
				}
				if (this.hair == 1) {
					ctx.fillStyle = "rgb(210,72,85)";
					xfillRect(330, 270, 30, 90);
					xfillRect(330, 180, 30, 30);
					xfillRect(360, 150, 30, 90);
					xfillRect(390, 120, 30, 60);
					xfillRect(420, 90, 30, 60);
					xfillRect(450, 60, 30, 120);
				}
				if (this.hair == 2) {
					ctx.fillStyle = "rgb(75,41,3)";
					xfillRect(300, 150, 30, 210);
					xfillRect(330, 120, 30, 90);
					xfillRect(330, 270, 30, 150);
					xfillRect(360, 90, 30, 150);
					xfillRect(360, 390, 30, 90);
					xfillRect(390, 90, 120, 60);
					xfillRect(390, 150, 60, 30);
					xfillRect(510, 90, 30, 90);
					xfillRect(540, 120, 30, 90);
					xfillRect(540, 270, 30, 30);
					xfillRect(390, 420, 30, 60);
					xfillRect(480, 420, 30, 60);
				}
				if (this.hair == 3) {
					ctx.fillStyle = "rgb(230,200,0)";
					xfillRect(300, 150, 30, 210);
					xfillRect(330, 120, 30, 90);
					xfillRect(330, 270, 30, 150);
					xfillRect(360, 90, 30, 150);
					xfillRect(360, 390, 30, 90);
					xfillRect(390, 90, 120, 60);
					xfillRect(390, 150, 60, 30);
					xfillRect(510, 90, 30, 90);
					xfillRect(540, 120, 30, 90);
					xfillRect(540, 270, 30, 30);
					xfillRect(390, 420, 30, 60);
					xfillRect(480, 420, 30, 60);
				}
				if (this.hair == 4) {
					ctx.fillStyle = "rgb(75,41,3)";
					xfillRect(300, 180, 30, 270);
					xfillRect(330, 150, 30, 60);
					xfillRect(330, 270, 30, 210);
					xfillRect(360, 120, 30, 120);
					xfillRect(360, 390, 30, 90);
					xfillRect(390, 120, 30, 60);
					xfillRect(390, 420, 30, 60);
					xfillRect(420, 90, 90, 60);
					xfillRect(510, 120, 30, 60);
					xfillRect(540, 150, 30, 300);
					xfillRect(510, 390, 30, 90);
					xfillRect(480, 420, 30, 60);
					xfillRect(330, 510, 30, 90);
					xfillRect(360, 600, 30, 30);
				}
				if (this.hair == 5) {
					ctx.fillStyle = "rgb(192,179,87)";
					xfillRect(300, 180, 30, 270);
					xfillRect(330, 150, 30, 60);
					xfillRect(330, 270, 30, 210);
					xfillRect(360, 120, 30, 120);
					xfillRect(360, 390, 30, 90);
					xfillRect(390, 120, 30, 60);
					xfillRect(390, 420, 30, 60);
					xfillRect(420, 90, 90, 60);
					xfillRect(510, 120, 30, 60);
					xfillRect(540, 150, 30, 300);
					xfillRect(510, 390, 30, 90);
					xfillRect(480, 420, 30, 60);
					xfillRect(330, 510, 30, 90);
					xfillRect(360, 600, 30, 30);
				}
				if (this.hair == 6) {
					ctx.fillStyle = "rgb(53,56,61)";
					xfillRect(270, 210, 30, 30);
					xfillRect(270, 300, 30, 30);
					xfillRect(270, 360, 30, 30);
					xfillRect(300, 150, 30, 240);
					xfillRect(300, 420, 30, 30);
					xfillRect(300, 540, 30, 30);
					xfillRect(300, 630, 30, 30);
					xfillRect(330, 120, 30, 30);
					xfillRect(330, 270, 30, 210);
					xfillRect(330, 510, 30, 180);
					xfillRect(360, 360, 30, 120);
					xfillRect(360, 600, 30, 120);
					xfillRect(390, 420, 30, 60);
					xfillRect(480, 420, 30, 60);
					xfillRect(510, 390, 30, 30);
					xfillRect(360, 90, 30, 30);
					xfillRect(360, 150, 30, 30);
					xfillRect(390, 120, 60, 30);
					xfillRect(420, 90, 120, 30);
					xfillRect(480, 120, 90, 30);
					xfillRect(510, 150, 90, 30);
					xfillRect(540, 180, 90, 30);
					ctx.fillStyle = "rgb(168,255,184)";
					xfillRect(330, 150, 30, 60);
					xfillRect(360, 120, 30, 30);
					xfillRect(390, 90, 30, 30);
					xfillRect(420, 60, 90, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
						xfillRect(450, 120, 30, 30);
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
						xfillRect(450, 120, 30, 30);
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
						xfillRect(450, 120, 30, 30);
					}
				}
				if (this.hair == 7) {
					ctx.fillStyle = "rgb(192,179,87)";
					xfillRect(270, 210, 30, 30);
					xfillRect(270, 300, 30, 30);
					xfillRect(270, 360, 30, 30);
					xfillRect(300, 150, 30, 240);
					xfillRect(300, 420, 30, 30);
					xfillRect(300, 540, 30, 30);
					xfillRect(300, 630, 30, 30);
					xfillRect(330, 120, 30, 30);
					xfillRect(330, 270, 30, 210);
					xfillRect(330, 510, 30, 180);
					xfillRect(360, 360, 30, 120);
					xfillRect(360, 600, 30, 120);
					xfillRect(390, 420, 30, 60);
					xfillRect(480, 420, 30, 60);
					xfillRect(510, 390, 30, 30);
					xfillRect(360, 90, 30, 30);
					xfillRect(360, 150, 30, 30);
					xfillRect(390, 120, 60, 30);
					xfillRect(420, 90, 120, 30);
					xfillRect(480, 120, 90, 30);
					xfillRect(510, 150, 90, 30);
					xfillRect(540, 180, 90, 30);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(330, 150, 30, 60);
					xfillRect(360, 120, 30, 30);
					xfillRect(390, 90, 30, 30);
					xfillRect(420, 60, 90, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(450, 120, 30, 30);
				}
				if (this.hair == 8) {
					ctx.fillStyle = "rgb(242,130,63)";
					xfillRect(300, 180, 30, 270);
					xfillRect(330, 150, 30, 60);
					xfillRect(330, 270, 30, 210);
					xfillRect(360, 120, 30, 120);
					xfillRect(360, 390, 30, 90);
					xfillRect(390, 120, 30, 60);
					xfillRect(390, 420, 30, 60);
					xfillRect(420, 90, 90, 60);
					xfillRect(510, 120, 30, 60);
					xfillRect(540, 150, 30, 300);
					xfillRect(510, 390, 30, 90);
					xfillRect(480, 420, 30, 60);
					xfillRect(330, 510, 30, 90);
					xfillRect(360, 600, 30, 30);
				}
				if (this.hair == 9) {
					ctx.fillStyle = "rgb(242,130,63)";
					xfillRect(270, 210, 30, 30);
					xfillRect(270, 300, 30, 30);
					xfillRect(270, 360, 30, 30);
					xfillRect(300, 150, 30, 240);
					xfillRect(300, 420, 30, 30);
					xfillRect(300, 540, 30, 30);
					xfillRect(300, 630, 30, 30);
					xfillRect(330, 120, 30, 30);
					xfillRect(330, 270, 30, 210);
					xfillRect(330, 510, 30, 180);
					xfillRect(360, 360, 30, 120);
					xfillRect(360, 600, 30, 120);
					xfillRect(390, 420, 30, 60);
					xfillRect(480, 420, 30, 60);
					xfillRect(510, 390, 30, 30);
					xfillRect(360, 90, 30, 30);
					xfillRect(360, 150, 30, 30);
					xfillRect(390, 120, 60, 30);
					xfillRect(420, 90, 120, 30);
					xfillRect(480, 120, 90, 30);
					xfillRect(510, 150, 90, 30);
					xfillRect(540, 180, 90, 30);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(330, 150, 30, 60);
					xfillRect(360, 120, 30, 30);
					xfillRect(390, 90, 30, 30);
					xfillRect(420, 60, 90, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(450, 120, 30, 30);
				}
				if (this.hair == 10) {
					ctx.fillStyle = "rgb(171,171,171)";
					xfillRect(330, 150, 30, 240);
					xfillRect(360, 300, 30, 90);
					xfillRect(300, 240, 30, 120);
					xfillRect(360, 180, 30, 30);
					xfillRect(360, 150, 180, 30);
					xfillRect(540, 150, 30, 210);
					xfillRect(570, 240, 30, 120);
					xfillRect(390, 120, 150, 30);
					xfillRect(420, 90, 90, 30);
					ctx.fillStyle = "rgb(255,100,100)";
					xfillRect(390, 120, 30, 30);
					xfillRect(360, 90, 30, 30);
					ctx.fillStyle = "rgb(220,220,220)";
					xfillRect(360, 120, 30, 30);
					xfillRect(390, 90, 30, 30);
				}
				if (this.hair == 11) {
					ctx.fillStyle = "rgb(50,40,30)";
					xfillRect(360, 120, 90, 60);
					xfillRect(360, 180, 30, 60);
					xfillRect(330, 150, 30, 60);
					xfillRect(390, 90, 120, 30);
					xfillRect(450, 120, 90, 30);
					xfillRect(480, 150, 60, 30);
					xfillRect(510, 180, 60, 30);
					xfillRect(540, 210, 30, 30);
					xfillRect(300, 30, 60, 90);
					xfillRect(270, 60, 30, 60);
					xfillRect(300, 120, 30, 30);
					xfillRect(360, 60, 30, 30);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(330, 120, 30, 30);
					xfillRect(360, 90, 30, 30);
				}
				if (this.hair == 12) {
					ctx.fillStyle = "rgb(171,143,94)";
					xfillRect(360, 120, 90, 60);
					xfillRect(360, 180, 30, 60);
					xfillRect(330, 150, 30, 60);
					xfillRect(390, 90, 120, 30);
					xfillRect(450, 120, 90, 30);
					xfillRect(480, 150, 60, 30);
					xfillRect(510, 180, 60, 30);
					xfillRect(540, 210, 30, 30);
					xfillRect(300, 30, 60, 90);
					xfillRect(270, 60, 30, 60);
					xfillRect(300, 120, 30, 30);
					xfillRect(360, 60, 30, 30);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(330, 120, 30, 30);
					xfillRect(360, 90, 30, 30);
				}
				if (this.earring == 1) {
					ctx.fillStyle = "rgb(255,255,12)";
					ctx.fillRect(330, 270, 30, 30);
					ctx.fillRect(540, 270, 30, 30);
				}
				if (this.earring == 2) {
					ctx.fillStyle = "rgb(180,0,180)";
					ctx.fillRect(330, 270, 30, 30);
					ctx.fillRect(540, 270, 30, 30);
				}
				if (this.earring == 3) {
					ctx.fillStyle = "rgb(192,192,192)";
					ctx.fillRect(330, 270, 30, 30);
					ctx.fillRect(540, 270, 30, 30);
				}
				if (this.shirt == 1) {
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(390, 480, 30, 30);
					xfillRect(480, 480, 30, 30);
					xfillRect(360, 510, 30, 90);
					xfillRect(510, 510, 30, 30);
					xfillRect(540, 510, 30, 90);
					xfillRect(450, 540, 30, 30);
					xfillRect(390, 570, 150, 180);
					xfillRect(360, 720, 30, 30);
					xfillRect(660, 360, 30, 30);
					xfillRect(210, 630, 30, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(390, 510, 30, 60);
					xfillRect(420, 480, 30, 90);
					xfillRect(450, 480, 30, 60);
					xfillRect(480, 510, 30, 60);
					xfillRect(510, 540, 30, 30);
					xfillRect(240, 480, 150, 30);
					xfillRect(210, 480, 30, 150);
					xfillRect(510, 480, 150, 30);
					xfillRect(660, 390, 30, 120);
				}
				if (this.shirt == 2) {
					ctx.fillStyle = "rgb(57,151,98)";
					xfillRect(390, 480, 30, 30);
					xfillRect(480, 480, 30, 30);
					xfillRect(360, 510, 30, 90);
					xfillRect(510, 510, 30, 30);
					xfillRect(540, 510, 30, 90);
					xfillRect(390, 570, 150, 180);
					xfillRect(360, 720, 30, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
						xfillRect(390, 510, 30, 60);
						xfillRect(420, 480, 30, 90);
						xfillRect(450, 480, 30, 60);
						xfillRect(480, 510, 30, 60);
						xfillRect(510, 540, 30, 30);
						xfillRect(240, 480, 150, 30);
						xfillRect(210, 480, 30, 180);
						xfillRect(510, 480, 150, 30);
						xfillRect(660, 360, 30, 150);
						ctx.fillStyle = "rgb(230,195,176)";
						xfillRect(450, 540, 30, 30);
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
						xfillRect(390, 510, 30, 60);
						xfillRect(420, 480, 30, 90);
						xfillRect(450, 480, 30, 60);
						xfillRect(480, 510, 30, 60);
						xfillRect(510, 540, 30, 30);
						xfillRect(240, 480, 150, 30);
						xfillRect(210, 480, 30, 180);
						xfillRect(510, 480, 150, 30);
						xfillRect(660, 360, 30, 150);
						ctx.fillStyle = "rgb(173,127,80)";
						xfillRect(450, 540, 30, 30);
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
						xfillRect(390, 510, 30, 60);
						xfillRect(420, 480, 30, 90);
						xfillRect(450, 480, 30, 60);
						xfillRect(480, 510, 30, 60);
						xfillRect(510, 540, 30, 30);
						xfillRect(240, 480, 150, 30);
						xfillRect(210, 480, 30, 180);
						xfillRect(510, 480, 150, 30);
						xfillRect(660, 360, 30, 150);
						ctx.fillStyle = "rgb(203,147,122)";
						xfillRect(450, 540, 30, 30);
					}
				}
				if (this.shirt == 3) {
					ctx.fillStyle = "rgb(185,49,111)";
					xfillRect(390, 480, 30, 30);
					xfillRect(480, 480, 30, 30);
					xfillRect(360, 510, 30, 90);
					xfillRect(510, 510, 30, 30);
					xfillRect(540, 510, 30, 90);
					xfillRect(450, 540, 30, 30);
					xfillRect(390, 570, 150, 180);
					xfillRect(360, 720, 30, 30);
					xfillRect(660, 360, 30, 30);
					xfillRect(210, 630, 30, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(390, 510, 30, 60);
					xfillRect(420, 480, 30, 90);
					xfillRect(450, 480, 30, 60);
					xfillRect(480, 510, 30, 60);
					xfillRect(510, 540, 30, 30);
					xfillRect(240, 480, 150, 30);
					xfillRect(210, 480, 30, 150);
					xfillRect(510, 480, 150, 30);
					xfillRect(660, 390, 30, 120);
				}
				if (this.shirt == 4) {
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(300, 480, 120, 30);
					xfillRect(480, 480, 150, 30);
					xfillRect(360, 510, 210, 90);
					xfillRect(540, 510, 30, 90);
					xfillRect(390, 570, 150, 180);
					xfillRect(360, 720, 30, 30);
					xfillRect(300, 510, 60, 30);
					xfillRect(570, 510, 60, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(240, 480, 60, 30);
					xfillRect(210, 480, 30, 180);
					xfillRect(630, 480, 60, 30);
					xfillRect(660, 360, 30, 150);
				}
				if (this.shirt == 5) {
					ctx.fillStyle = "rgb(33,0,90)";
					xfillRect(300, 480, 120, 30);
					xfillRect(480, 480, 150, 30);
					xfillRect(360, 510, 210, 90);
					xfillRect(540, 510, 30, 90);
					xfillRect(390, 570, 150, 180);
					xfillRect(360, 720, 30, 30);
					xfillRect(300, 510, 60, 30);
					xfillRect(570, 510, 60, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(240, 480, 60, 30);
					xfillRect(210, 480, 30, 180);
					xfillRect(630, 480, 60, 30);
					xfillRect(660, 360, 30, 150);
				}
				if (this.shirt == 6) {
					ctx.fillStyle = "rgb(220,90,90)";
					xfillRect(300, 480, 120, 30);
					xfillRect(480, 480, 150, 30);
					xfillRect(360, 510, 210, 90);
					xfillRect(540, 510, 30, 90);
					xfillRect(390, 570, 150, 180);
					xfillRect(360, 720, 30, 30);
					xfillRect(300, 510, 60, 30);
					xfillRect(570, 510, 60, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(240, 480, 60, 30);
					xfillRect(210, 480, 30, 180);
					xfillRect(630, 480, 60, 30);
					xfillRect(660, 360, 30, 150);
				}
				if (this.shirt == 7) {
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(300, 480, 120, 30);
					xfillRect(480, 480, 150, 30);
					xfillRect(360, 510, 210, 90);
					xfillRect(540, 510, 30, 90);
					xfillRect(390, 570, 150, 180);
					xfillRect(360, 720, 30, 30);
					xfillRect(300, 510, 60, 30);
					xfillRect(570, 510, 60, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(240, 480, 60, 30);
					xfillRect(210, 480, 30, 180);
					xfillRect(630, 480, 60, 30);
					xfillRect(660, 360, 30, 150);
				}
				if (this.shirt == 8) {
					ctx.fillStyle = "rgb(161,41,52)";
					xfillRect(270, 480, 150, 30);
					xfillRect(480, 480, 150, 30);
					xfillRect(360, 510, 30, 90);
					xfillRect(510, 510, 30, 30);
					xfillRect(540, 510, 30, 90);
					xfillRect(450, 540, 30, 30);
					xfillRect(390, 570, 150, 180);
					xfillRect(360, 720, 30, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(390, 510, 30, 60);
					xfillRect(420, 480, 30, 90);
					xfillRect(450, 480, 30, 60);
					xfillRect(480, 510, 30, 60);
					xfillRect(510, 540, 30, 30);
					xfillRect(240, 480, 30, 30);
					xfillRect(210, 480, 30, 180);
					xfillRect(630, 480, 30, 30);
					xfillRect(660, 360, 30, 150);
				}
				if (this.shirt == 9) {
					ctx.fillStyle = "rgb(0,41,52)";
					xfillRect(270, 480, 150, 30);
					xfillRect(480, 480, 150, 30);
					xfillRect(360, 510, 30, 90);
					xfillRect(510, 510, 30, 30);
					xfillRect(540, 510, 30, 90);
					xfillRect(450, 540, 30, 30);
					xfillRect(390, 570, 150, 180);
					xfillRect(360, 720, 30, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(390, 510, 30, 60);
					xfillRect(420, 480, 30, 90);
					xfillRect(450, 480, 30, 60);
					xfillRect(480, 510, 30, 60);
					xfillRect(510, 540, 30, 30);
					xfillRect(240, 480, 30, 30);
					xfillRect(210, 480, 30, 180);
					xfillRect(630, 480, 30, 30);
					xfillRect(660, 360, 30, 150);
				}
				if (this.shirt == 10) {
					ctx.fillStyle = "rgb(87,65,52)";
					xfillRect(270, 480, 150, 30);
					xfillRect(480, 480, 150, 30);
					xfillRect(360, 510, 30, 90);
					xfillRect(510, 510, 30, 30);
					xfillRect(540, 510, 30, 90);
					xfillRect(450, 540, 30, 30);
					xfillRect(390, 570, 150, 180);
					xfillRect(360, 720, 30, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(390, 510, 30, 60);
					xfillRect(420, 480, 30, 90);
					xfillRect(450, 480, 30, 60);
					xfillRect(480, 510, 30, 60);
					xfillRect(510, 540, 30, 30);
					xfillRect(240, 480, 30, 30);
					xfillRect(210, 480, 30, 180);
					xfillRect(630, 480, 30, 30);
					xfillRect(660, 360, 30, 150);
				}
				if (this.shirt == 11) {
					ctx.fillStyle = "rgb(255,165,0)";
					xfillRect(270, 480, 150, 30);
					xfillRect(480, 480, 150, 30);
					xfillRect(360, 510, 30, 90);
					xfillRect(510, 510, 30, 30);
					xfillRect(540, 510, 30, 90);
					xfillRect(450, 540, 30, 30);
					xfillRect(390, 570, 150, 180);
					xfillRect(360, 720, 30, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(390, 510, 30, 60);
					xfillRect(420, 480, 30, 90);
					xfillRect(450, 480, 30, 60);
					xfillRect(480, 510, 30, 60);
					xfillRect(510, 540, 30, 30);
					xfillRect(240, 480, 30, 30);
					xfillRect(210, 480, 30, 180);
					xfillRect(630, 480, 30, 30);
					xfillRect(660, 360, 30, 150);
				}
				if (this.shirt == 12) {
					ctx.fillStyle = "rgb(57,151,98)";
					xfillRect(390, 480, 30, 30);
					xfillRect(480, 480, 30, 30);
					xfillRect(360, 510, 180, 90);
					xfillRect(510, 510, 30, 30);
					xfillRect(540, 510, 30, 90);
					xfillRect(390, 570, 150, 180);
					xfillRect(360, 720, 30, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(420, 510, 90, 30);
					xfillRect(240, 480, 150, 30);
					xfillRect(210, 480, 30, 180);
					xfillRect(510, 480, 150, 30);
					xfillRect(660, 360, 30, 150);
				}
				if (this.shirt == 13) {
					ctx.fillStyle = "rgb(255,165,0)";
					xfillRect(390, 480, 30, 30);
					xfillRect(480, 480, 30, 30);
					xfillRect(360, 510, 180, 90);
					xfillRect(510, 510, 30, 30);
					xfillRect(540, 510, 30, 90);
					xfillRect(390, 570, 150, 180);
					xfillRect(360, 720, 30, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(420, 510, 90, 30);
					xfillRect(240, 480, 150, 30);
					xfillRect(210, 480, 30, 180);
					xfillRect(510, 480, 150, 30);
					xfillRect(660, 360, 30, 150);
				}
				if (this.shirt == 14) {
					ctx.fillStyle = "rgb(255,0,102)";
					xfillRect(270, 480, 150, 30);
					xfillRect(480, 480, 150, 30);
					xfillRect(360, 510, 30, 90);
					xfillRect(510, 510, 30, 30);
					xfillRect(540, 510, 30, 90);
					xfillRect(450, 540, 30, 30);
					xfillRect(390, 570, 150, 180);
					xfillRect(360, 720, 30, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(390, 510, 30, 60);
					xfillRect(420, 480, 30, 90);
					xfillRect(450, 480, 30, 60);
					xfillRect(480, 510, 30, 60);
					xfillRect(510, 540, 30, 30);
					xfillRect(240, 480, 30, 30);
					xfillRect(210, 480, 30, 180);
					xfillRect(630, 480, 30, 30);
					xfillRect(660, 360, 30, 150);
				}
				if (this.shirt == 15) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
						xfillRect(390, 510, 30, 60);
						xfillRect(420, 480, 30, 90);
						xfillRect(450, 480, 30, 60);
						xfillRect(480, 510, 30, 60);
						xfillRect(510, 540, 30, 30);
						xfillRect(240, 480, 30, 30);
						xfillRect(210, 480, 30, 180);
						xfillRect(630, 480, 30, 30);
						xfillRect(660, 360, 30, 150);
						xfillRect(270, 480, 150, 30);
						xfillRect(480, 480, 150, 30);
						xfillRect(360, 510, 30, 90);
						xfillRect(510, 510, 30, 30);
						xfillRect(540, 510, 30, 90);
						xfillRect(450, 540, 30, 30);
						xfillRect(390, 570, 150, 180);
						xfillRect(360, 720, 30, 30);
						ctx.fillStyle = "rgb(235,201,185)";
						xfillRect(450, 690, 30, 30);
						xfillRect(450, 570, 30, 30);
						xfillRect(510, 540, 30, 30);
						xfillRect(390, 540, 30, 30);
						xfillRect(390, 600, 60, 30);
						xfillRect(480, 600, 60, 30);
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
						xfillRect(390, 510, 30, 60);
						xfillRect(420, 480, 30, 90);
						xfillRect(450, 480, 30, 60);
						xfillRect(480, 510, 30, 60);
						xfillRect(510, 540, 30, 30);
						xfillRect(240, 480, 30, 30);
						xfillRect(210, 480, 30, 180);
						xfillRect(630, 480, 30, 30);
						xfillRect(660, 360, 30, 150);
						xfillRect(270, 480, 150, 30);
						xfillRect(480, 480, 150, 30);
						xfillRect(360, 510, 30, 90);
						xfillRect(510, 510, 30, 30);
						xfillRect(540, 510, 30, 90);
						xfillRect(450, 540, 30, 30);
						xfillRect(390, 570, 150, 180);
						xfillRect(360, 720, 30, 30);
						ctx.fillStyle = "rgb(145,87,50)";
						xfillRect(450, 690, 30, 30);
						xfillRect(450, 570, 30, 30);
						xfillRect(510, 540, 30, 30);
						xfillRect(390, 540, 30, 30);
						xfillRect(390, 600, 60, 30);
						xfillRect(480, 600, 60, 30);
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
						xfillRect(390, 510, 30, 60);
						xfillRect(420, 480, 30, 90);
						xfillRect(450, 480, 30, 60);
						xfillRect(480, 510, 30, 60);
						xfillRect(510, 540, 30, 30);
						xfillRect(240, 480, 30, 30);
						xfillRect(210, 480, 30, 180);
						xfillRect(630, 480, 30, 30);
						xfillRect(660, 360, 30, 150);
						xfillRect(270, 480, 150, 30);
						xfillRect(480, 480, 150, 30);
						xfillRect(360, 510, 30, 90);
						xfillRect(510, 510, 30, 30);
						xfillRect(540, 510, 30, 90);
						xfillRect(450, 540, 30, 30);
						xfillRect(390, 570, 150, 180);
						xfillRect(360, 720, 30, 30);
						ctx.fillStyle = "rgb(180,141,115)";
						xfillRect(450, 690, 30, 30);
						xfillRect(450, 570, 30, 30);
						xfillRect(510, 540, 30, 30);
						xfillRect(390, 540, 30, 30);
						xfillRect(390, 600, 60, 30);
						xfillRect(480, 600, 60, 30);
					}
				}
				if (this.shirt == 16) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
						xfillRect(390, 510, 30, 60);
						xfillRect(420, 480, 30, 90);
						xfillRect(450, 480, 30, 60);
						xfillRect(480, 510, 30, 60);
						xfillRect(510, 540, 30, 30);
						xfillRect(240, 480, 30, 30);
						xfillRect(210, 480, 30, 180);
						xfillRect(630, 480, 30, 30);
						xfillRect(660, 360, 30, 150);
						xfillRect(270, 480, 150, 30);
						xfillRect(480, 480, 150, 30);
						xfillRect(360, 510, 30, 90);
						xfillRect(510, 510, 30, 30);
						xfillRect(540, 510, 30, 90);
						xfillRect(450, 540, 30, 30);
						xfillRect(390, 570, 150, 180);
						xfillRect(360, 720, 30, 30);
						ctx.fillStyle = "rgb(235,201,185)";
						xfillRect(450, 690, 30, 30);
						xfillRect(450, 570, 30, 30);
						xfillRect(510, 540, 30, 30);
						xfillRect(390, 540, 30, 30);
						xfillRect(390, 600, 60, 30);
						xfillRect(480, 600, 60, 30);
						ctx.fillStyle = "rgb(255,255,255)";
						xfillRect(360, 540, 180, 120);
						xfillRect(540, 570, 30, 30);
						ctx.fillStyle = "rgb(200,200,200)";
						xfillRect(360, 540, 30, 30);
						xfillRect(450, 540, 30, 30);
						xfillRect(540, 540, 30, 30);
						xfillRect(390, 570, 60, 30);
						xfillRect(480, 570, 60, 30);
						ctx.fillStyle = "rgb( 218,165,32)";
						xfillRect(570, 480, 30, 30);
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
						xfillRect(390, 510, 30, 60);
						xfillRect(420, 480, 30, 90);
						xfillRect(450, 480, 30, 60);
						xfillRect(480, 510, 30, 60);
						xfillRect(510, 540, 30, 30);
						xfillRect(240, 480, 30, 30);
						xfillRect(210, 480, 30, 180);
						xfillRect(630, 480, 30, 30);
						xfillRect(660, 360, 30, 150);
						xfillRect(270, 480, 150, 30);
						xfillRect(480, 480, 150, 30);
						xfillRect(360, 510, 30, 90);
						xfillRect(510, 510, 30, 30);
						xfillRect(540, 510, 30, 90);
						xfillRect(450, 540, 30, 30);
						xfillRect(390, 570, 150, 180);
						xfillRect(360, 720, 30, 30);
						ctx.fillStyle = "rgb(145,87,50)";
						xfillRect(450, 690, 30, 30);
						xfillRect(450, 570, 30, 30);
						xfillRect(510, 540, 30, 30);
						xfillRect(390, 540, 30, 30);
						xfillRect(390, 600, 60, 30);
						xfillRect(480, 600, 60, 30);
						ctx.fillStyle = "rgb(145,87,50)";
						xfillRect(450, 690, 30, 30);
						xfillRect(450, 570, 30, 30);
						xfillRect(510, 540, 30, 30);
						xfillRect(390, 540, 30, 30);
						xfillRect(390, 600, 60, 30);
						xfillRect(480, 600, 60, 30);
						ctx.fillStyle = "rgb(255,255,255)";
						xfillRect(360, 540, 180, 120);
						xfillRect(540, 570, 30, 30);
						ctx.fillStyle = "rgb(200,200,200)";
						xfillRect(360, 540, 30, 30);
						xfillRect(450, 540, 30, 30);
						xfillRect(540, 540, 30, 30);
						xfillRect(390, 570, 60, 30);
						xfillRect(480, 570, 60, 30);
						ctx.fillStyle = "rgb( 218,165,32)";
						xfillRect(570, 480, 30, 30);
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
						xfillRect(390, 510, 30, 60);
						xfillRect(420, 480, 30, 90);
						xfillRect(450, 480, 30, 60);
						xfillRect(480, 510, 30, 60);
						xfillRect(510, 540, 30, 30);
						xfillRect(240, 480, 30, 30);
						xfillRect(210, 480, 30, 180);
						xfillRect(630, 480, 30, 30);
						xfillRect(660, 360, 30, 150);
						xfillRect(270, 480, 150, 30);
						xfillRect(480, 480, 150, 30);
						xfillRect(360, 510, 30, 90);
						xfillRect(510, 510, 30, 30);
						xfillRect(540, 510, 30, 90);
						xfillRect(450, 540, 30, 30);
						xfillRect(390, 570, 150, 180);
						xfillRect(360, 720, 30, 30);
						ctx.fillStyle = "rgb(180,141,115)";
						xfillRect(450, 690, 30, 30);
						xfillRect(450, 570, 30, 30);
						xfillRect(510, 540, 30, 30);
						xfillRect(390, 540, 30, 30);
						xfillRect(390, 600, 60, 30);
						xfillRect(480, 600, 60, 30);
						ctx.fillStyle = "rgb(235,201,185)";
						xfillRect(450, 690, 30, 30);
						xfillRect(450, 570, 30, 30);
						xfillRect(510, 540, 30, 30);
						xfillRect(390, 540, 30, 30);
						xfillRect(390, 600, 60, 30);
						xfillRect(480, 600, 60, 30);
						ctx.fillStyle = "rgb(255,255,255)";
						xfillRect(360, 540, 180, 120);
						xfillRect(540, 570, 30, 30);
						ctx.fillStyle = "rgb(200,200,200)";
						xfillRect(360, 540, 30, 30);
						xfillRect(450, 540, 30, 30);
						xfillRect(540, 540, 30, 30);
						xfillRect(390, 570, 60, 30);
						xfillRect(480, 570, 60, 30);
						ctx.fillStyle = "rgb( 218,165,32)";
						xfillRect(570, 480, 30, 30);
					}
				}
				if (this.vest == 1) {
					ctx.fillStyle = "rgb(143,45,24)";
					xfillRect(300, 480, 60, 60);
					xfillRect(540, 480, 60, 60);
					xfillRect(510, 480, 30, 60);
					xfillRect(600, 480, 90, 60);
					xfillRect(210, 480, 90, 60);
					xfillRect(480, 480, 60, 300);
					xfillRect(360, 480, 60, 300);
					xfillRect(540, 540, 30, 60);
					ctx.fillStyle = "rgb(143,145,124)";
					xfillRect(510, 690, 30, 30);
					xfillRect(360, 690, 30, 30);
					xfillRect(360, 480, 60, 30);
					xfillRect(390, 510, 30, 30);
					xfillRect(480, 480, 60, 30);
					xfillRect(480, 510, 30, 30);
					xfillRect(660, 510, 30, 30);
					xfillRect(210, 480, 30, 30);
				}
				if (this.vest == 2) {
					ctx.fillStyle = "rgb(51,51,51)";
					xfillRect(300, 480, 60, 60);
					xfillRect(540, 480, 60, 60);
					xfillRect(510, 480, 30, 60);
					xfillRect(600, 480, 90, 60);
					xfillRect(210, 480, 90, 60);
					xfillRect(480, 480, 60, 300);
					xfillRect(360, 480, 60, 300);
					xfillRect(540, 540, 30, 60);
					ctx.fillStyle = "rgb(89,75,76)";
					xfillRect(510, 690, 30, 30);
					xfillRect(360, 690, 30, 30);
					xfillRect(360, 480, 60, 30);
					xfillRect(390, 510, 30, 30);
					xfillRect(480, 480, 60, 30);
					xfillRect(480, 510, 30, 30);
					xfillRect(660, 510, 30, 30);
					xfillRect(210, 480, 30, 30);
				}
				if (this.bird == 0) {
					this.nobird = true;
				}
				if (this.bird == 1) {
					ctx.fillStyle = "rgb(255,0,0)";
					xfillRect(210, 300, 90, 90);
					ctx.fillStyle = "rgb(200,0,0)";
					xfillRect(240, 270, 30, 30);
					ctx.fillStyle = "rgb(255,0,0)";
					xfillRect(210, 390, 90, 90);
					xfillRect(180, 390, 150, 30);
					ctx.fillStyle = "rgb(200,0,0)";
					xfillRect(210, 480, 30, 30);
					xfillRect(240, 450, 30, 30);
					ctx.fillStyle = "rgb(255,200,0)";
					xfillRect(180, 420, 30, 30);
					xfillRect(300, 420, 30, 30);
					ctx.fillStyle = "rgb(0,0,180)";
					xfillRect(180, 450, 30, 90);
					xfillRect(300, 450, 30, 30);
					ctx.fillStyle = "rgb(200,0,0)";
					xfillRect(240, 510, 30, 90);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(240, 330, 30, 60);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(210, 330, 30, 30);
					xfillRect(270, 330, 30, 30);
				}
				if (this.bird == 2) {
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(210, 300, 90, 90);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(240, 270, 30, 30);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(210, 390, 90, 90);
					xfillRect(180, 390, 150, 30);
					ctx.fillStyle = "rgb(250,250,250)";
					xfillRect(210, 480, 30, 30);
					xfillRect(240, 450, 30, 30);
					ctx.fillStyle = "rgb(250,250,250)";
					xfillRect(180, 420, 30, 30);
					xfillRect(300, 420, 30, 30);
					ctx.fillStyle = "rgb(245,245,245)";
					xfillRect(180, 450, 30, 90);
					xfillRect(300, 450, 30, 30);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(240, 510, 30, 90);
					ctx.fillStyle = "rgb(250,250,250)";
					xfillRect(240, 540, 30, 30);
					ctx.fillStyle = "rgb(255,165,0)";
					xfillRect(240, 360, 30, 30);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(210, 330, 30, 30);
					xfillRect(270, 330, 30, 30);
				}
				if (this.bird == 3) {
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(210, 300, 90, 90);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(240, 270, 30, 30);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(210, 390, 90, 90);
					xfillRect(180, 390, 150, 30);
					ctx.fillStyle = "rgb(20,20,20)";
					xfillRect(210, 480, 30, 30);
					xfillRect(240, 450, 30, 30);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(180, 420, 30, 30);
					xfillRect(300, 420, 30, 30);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(180, 450, 30, 90);
					xfillRect(300, 450, 30, 30);
					ctx.fillStyle = "rgb(15,15,15)";
					xfillRect(240, 570, 30, 30);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(240, 540, 30, 30);
					xfillRect(240, 510, 30, 60);
					ctx.fillStyle = "rgb(60,60,60)";
					xfillRect(240, 360, 30, 30);
					ctx.fillStyle = "rgb(50,30,30)";
					xfillRect(210, 330, 30, 30);
					xfillRect(270, 330, 30, 30);
				}
				if (this.bird == 4) {
					ctx.fillStyle = "rgb(51,21,4)";
					xfillRect(210, 360, 90, 30);
					xfillRect(210, 330, 30, 30);
					xfillRect(270, 330, 30, 30);
					ctx.fillStyle = "rgb(51,21,4)";
					xfillRect(210, 360, 90, 90);
					ctx.fillStyle = "rgb(51,21,4)";
					xfillRect(210, 480, 30, 30);
					xfillRect(270, 480, 30, 30);
					xfillRect(240, 450, 30, 30);
					ctx.fillStyle = "rgb(41,11,1)";
					xfillRect(240, 510, 30, 90);
					ctx.fillStyle = "rgb(41,11,1)";
					xfillRect(240, 510, 30, 30);
					ctx.fillStyle = "rgb(230,230,230)";
					xfillRect(210, 390, 30, 30);
					xfillRect(270, 390, 30, 30);
					ctx.fillStyle = "rgb(5,5,5)";
					xfillRect(240, 420, 30, 30);
				}
				if (this.bird == 5) {
					ctx.fillStyle = "rgb(140,140,140)";
					xfillRect(240, 420, 90, 60);
					ctx.fillStyle = "rgb(170,170,170)";
					xfillRect(210, 420, 30, 60);
					xfillRect(180, 480, 30, 30);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(300, 420, 30, 30);
					ctx.fillStyle = "rgb(255,192,203)";
					xfillRect(300, 390, 30, 30);
				}
				if (this.trousers == 1) {
					ctx.fillStyle = "rgb(56,91,111)";
					xfillRect(360, 750, 90, 30);
					xfillRect(480, 750, 60, 30);
					ctx.fillStyle = "rgb(192,179,109)";
					xfillRect(450, 750, 30, 30);
					ctx.fillStyle = "rgb(91,64,117)";
					xfillRect(360, 780, 180, 60);
					xfillRect(360, 840, 60, 120);
					xfillRect(480, 840, 60, 120);
				}
				if (this.trousers == 2) {
					ctx.fillStyle = "rgb(56,91,111)";
					xfillRect(360, 750, 90, 30);
					xfillRect(480, 750, 60, 30);
					ctx.fillStyle = "rgb(192,179,109)";
					xfillRect(450, 750, 30, 30);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(360, 780, 180, 60);
					xfillRect(360, 840, 60, 120);
					xfillRect(480, 840, 60, 120);
				}
				if (this.trousers == 3) {
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(360, 750, 90, 30);
					xfillRect(480, 750, 60, 30);
					ctx.fillStyle = "rgb(192,179,109)";
					xfillRect(450, 750, 30, 30);
					ctx.fillStyle = "rgb(22,86,150)";
					xfillRect(360, 780, 180, 60);
					xfillRect(360, 840, 60, 120);
					xfillRect(480, 840, 60, 120);
				}
				if (this.trousers == 4) {
					ctx.fillStyle = "rgb(50,97,185)";
					xfillRect(330, 750, 270, 210);
					xfillRect(360, 720, 60, 30);
					xfillRect(540, 720, 30, 30);
					xfillRect(240, 930, 30, 30);
					xfillRect(270, 870, 30, 90);
					xfillRect(300, 810, 30, 150);
					xfillRect(600, 810, 30, 150);
					xfillRect(630, 870, 30, 90);
					xfillRect(660, 930, 30, 30);
					ctx.fillStyle = "rgb(47,92,177)";
					xfillRect(270, 930, 30, 30);
					xfillRect(330, 930, 30, 30);
					xfillRect(390, 930, 60, 30);
					xfillRect(480, 930, 30, 30);
					xfillRect(570, 930, 30, 30);
					xfillRect(630, 930, 30, 30);
					xfillRect(300, 870, 30, 30);
					xfillRect(360, 870, 30, 30);
					xfillRect(420, 870, 30, 30);
					xfillRect(480, 870, 30, 30);
					xfillRect(540, 870, 30, 30);
					xfillRect(600, 870, 30, 30);
					xfillRect(330, 810, 30, 30);
					xfillRect(390, 810, 60, 30);
					xfillRect(480, 810, 60, 30);
					xfillRect(570, 810, 30, 30);
					xfillRect(360, 750, 30, 30);
					xfillRect(420, 750, 30, 30);
					xfillRect(480, 750, 30, 30);
					xfillRect(540, 750, 30, 30);
				}
				if (this.trousers == 5) {
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(330, 750, 270, 210);
					xfillRect(360, 720, 60, 30);
					xfillRect(540, 720, 30, 30);
					xfillRect(240, 930, 30, 30);
					xfillRect(270, 870, 30, 90);
					xfillRect(300, 810, 30, 150);
					xfillRect(600, 810, 30, 150);
					xfillRect(630, 870, 30, 90);
					xfillRect(660, 930, 30, 30);
					ctx.fillStyle = "rgb(242,242,242)";
					xfillRect(270, 930, 30, 30);
					xfillRect(330, 930, 30, 30);
					xfillRect(390, 930, 60, 30);
					xfillRect(480, 930, 30, 30);
					xfillRect(570, 930, 30, 30);
					xfillRect(630, 930, 30, 30);
					xfillRect(300, 870, 30, 30);
					xfillRect(360, 870, 30, 30);
					xfillRect(420, 870, 30, 30);
					xfillRect(480, 870, 30, 30);
					xfillRect(540, 870, 30, 30);
					xfillRect(600, 870, 30, 30);
					xfillRect(330, 810, 30, 30);
					xfillRect(390, 810, 60, 30);
					xfillRect(480, 810, 60, 30);
					xfillRect(570, 810, 30, 30);
					xfillRect(360, 750, 30, 30);
					xfillRect(420, 750, 30, 30);
					xfillRect(480, 750, 30, 30);
					xfillRect(540, 750, 30, 30);
				}
				if (this.trousers == 6) {
					ctx.fillStyle = "rgb(56,156,111)";
					xfillRect(360, 750, 90, 30);
					xfillRect(480, 750, 60, 30);
					ctx.fillStyle = "rgb(192,179,109)";
					xfillRect(450, 750, 30, 30);
					ctx.fillStyle = "rgb(91,64,117)";
					xfillRect(360, 780, 180, 60);
					xfillRect(360, 840, 60, 120);
					xfillRect(480, 840, 60, 120);
				}
				if (this.trousers == 7) {
					ctx.fillStyle = "rgb(169,172,91)";
					xfillRect(360, 720, 60, 30);
					xfillRect(360, 750, 180, 90);
					xfillRect(360, 840, 60, 120);
					xfillRect(480, 840, 60, 120);
				}
				if (this.trousers == 8) {
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(360, 750, 180, 90);
					xfillRect(360, 840, 60, 120);
					xfillRect(480, 840, 60, 120);
					ctx.fillStyle = "rgb(80,80,80)";
					xfillRect(360, 750, 30, 30);
					xfillRect(360, 840, 30, 60);
					xfillRect(390, 810, 30, 60);
					xfillRect(420, 750, 60, 90);
					xfillRect(480, 750, 30, 30);
					xfillRect(480, 840, 30, 60);
					xfillRect(510, 810, 30, 60);
					xfillRect(390, 930, 30, 30);
					xfillRect(510, 930, 30, 30);
				}
				if (this.trousers == 9) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
						xfillRect(360, 750, 180, 90);
						xfillRect(360, 840, 60, 120);
						xfillRect(480, 840, 60, 120);
						ctx.fillStyle = "rgb(235,201,185)";
						xfillRect(450, 780, 30, 60);
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
						xfillRect(360, 750, 180, 90);
						xfillRect(360, 840, 60, 120);
						xfillRect(480, 840, 60, 120);
						ctx.fillStyle = "rgb(145,87,50)";
						xfillRect(450, 780, 30, 60);
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
						xfillRect(360, 750, 180, 90);
						xfillRect(360, 840, 60, 120);
						xfillRect(480, 840, 60, 120);
						ctx.fillStyle = "rgb(180,141,115)";
						xfillRect(450, 780, 30, 60);
					}
				}
				if (this.trousers == 10) {
					ctx.fillStyle = "rgb(35,148,237)";
					xfillRect(360, 750, 180, 90);
					xfillRect(360, 840, 60, 120);
					xfillRect(480, 840, 60, 120);
					xfillRect(360, 720, 60, 30);
					ctx.fillStyle = "rgb(0,170,234)";
					xfillRect(360, 720, 30, 30);
					xfillRect(360, 780, 30, 30);
					xfillRect(420, 750, 30, 30);
					xfillRect(510, 780, 30, 30);
					xfillRect(510, 930, 30, 30);
					xfillRect(480, 840, 30, 30);
					xfillRect(450, 810, 30, 30);
					xfillRect(390, 840, 30, 30);
					xfillRect(360, 910, 30, 30);
				}
				if (this.beard == 1) {
					ctx.fillStyle = "rgb(100,100,100)";
					xfillRect(510, 480, 30, 60);
					xfillRect(480, 540, 30, 60);
					xfillRect(450, 600, 30, 30);
					xfillRect(420, 630, 30, 60);
					xfillRect(390, 690, 30, 30);
					ctx.fillStyle = "rgb(65,50,50)";
					xfillRect(330, 690, 60, 60);
					xfillRect(390, 720, 30, 30);
					xfillRect(360, 750, 30, 30);
					xfillRect(300, 750, 60, 60);
					ctx.fillStyle = "rgb(100,50,50)";
					xfillRect(300, 780, 30, 30);
				}
				if (this.beard == 2) {
					ctx.fillStyle = "rgb(50,30,30)";
					xfillRect(360, 480, 30, 60);
					xfillRect(390, 540, 30, 60);
					xfillRect(420, 600, 30, 30);
					xfillRect(450, 630, 30, 60);
					xfillRect(480, 690, 30, 30);
					ctx.fillStyle = "rgb(154,84,0)";
					xfillRect(510, 690, 60, 60);
					xfillRect(480, 720, 30, 30);
					xfillRect(540, 750, 60, 60);
					ctx.fillStyle = "rgb(100,50,50)";
					xfillRect(570, 780, 30, 30);
				}
				if (this.leftHand == 1) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(630, 300, 90, 60);
					xfillRect(660, 240, 30, 60);
				}
				if (this.leftHand == 2) {
					ctx.fillStyle = "rgb(136,74,1)";
					xfillRect(720, 180, 30, 30);
					xfillRect(690, 240, 90, 30);
					xfillRect(690, 360, 90, 30);
					ctx.fillStyle = "rgb(60,99,34)";
					xfillRect(690, 270, 90, 90);
					xfillRect(720, 210, 30, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(660, 300, 30, 60);
					xfillRect(690, 300, 30, 30);
					xfillRect(750, 300, 30, 60);
				}
				if (this.leftHand == 3) {
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(690, 240, 90, 30);
					xfillRect(780, 270, 30, 30);
					ctx.fillStyle = "rgb(253,200,124)";
					xfillRect(690, 270, 90, 120);
					ctx.fillStyle = "rgb(255,182,77)";
					xfillRect(720, 270, 30, 120);
					xfillRect(690, 360, 30, 30);
					xfillRect(750, 330, 30, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(660, 300, 30, 60);
					xfillRect(690, 300, 30, 30);
				}
				if (this.leftHand == 4) {
					ctx.fillStyle = "rgb(165,94,38)";
					xfillRect(660, 300, 30, 30);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(720, 300, 30, 30);
					ctx.fillStyle = "rgb(120,116,117)";
					xfillRect(750, 300, 30, 30);
					xfillRect(810, 270, 30, 30);
					xfillRect(870, 240, 30, 30);
					xfillRect(810, 180, 30, 30);
					ctx.fillStyle = "rgb(189,189,189)";
					xfillRect(810, 150, 30, 30);
					xfillRect(840, 180, 30, 30);
					xfillRect(840, 240, 30, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(660, 330, 30, 30);
					xfillRect(690, 300, 30, 60);
				}
				if (this.leftHand == 5) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(630, 300, 90, 60);
					xfillRect(630, 270, 30, 30);
					xfillRect(690, 270, 30, 30);
					xfillRect(600, 330, 30, 30);
				}
				if (this.leftHand == 6) {
					ctx.fillStyle = "rgb(255,144,0)";
					xfillRect(690, 270, 60, 150);
					ctx.fillStyle = "rgb(191,54,12)";
					xfillRect(690, 210, 30, 60);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(660, 300, 30, 60);
					xfillRect(690, 300, 30, 30);
				}
				if (this.leftHand == 7) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(630, 300, 30, 30);
					xfillRect(690, 300, 30, 60);
					ctx.fillStyle = "rgb(0,0,0)";
					xfillRect(690, 210, 30, 90);
					ctx.fillStyle = "rgb(29,29,29)";
					xfillRect(660, 330, 30, 30);
					xfillRect(660, 210, 30, 30);
					ctx.fillStyle = "rgb(162,79,79)";
					xfillRect(660, 240, 30, 30);
					ctx.fillStyle = "rgb(79,162,79)";
					xfillRect(660, 270, 30, 30);
					ctx.fillStyle = "rgb(69,105,223)";
					xfillRect(660, 300, 30, 30);
				}
				if (this.rightHand == 1) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(210, 660, 60, 90);
					xfillRect(270, 660, 30, 30);
				}
				if (this.rightHand == 2) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(210, 660, 60, 90);
					ctx.fillStyle = "rgb(207,216,221)";
					xfillRect(150, 660, 30, 90);
					xfillRect(300, 660, 30, 90);
					ctx.fillStyle = "rgb(254,193,7)";
					xfillRect(180, 660, 30, 90);
					xfillRect(270, 660, 30, 90);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(180, 690, 30, 30);
					ctx.fillStyle = "rgb(150,127,19)";
					xfillRect(330, 720, 30, 30);
					xfillRect(390, 780, 30, 30);
					xfillRect(390, 870, 30, 30);
					xfillRect(420, 930, 30, 30);
					ctx.fillStyle = "rgb(214,193,95)";
					xfillRect(360, 750, 30, 30);
					xfillRect(390, 810, 30, 60);
					xfillRect(390, 900, 30, 30);
				}
				if (this.rightHand == 3) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(210, 660, 60, 90);
					ctx.fillStyle = "rgb(121,85,71)";
					xfillRect(150, 660, 30, 90);
					xfillRect(300, 660, 30, 90);
					xfillRect(360, 690, 30, 30);
					ctx.fillStyle = "rgb(25,33,140)";
					xfillRect(180, 660, 30, 90);
					xfillRect(270, 660, 30, 90);
					xfillRect(330, 690, 30, 30);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(270, 690, 30, 30);
					xfillRect(180, 690, 30, 30);
				}
				if (this.rightHand == 4) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					};
					xfillRect(210, 660, 60, 90);
					xfillRect(270, 660, 30, 30);
					ctx.fillStyle = "rgb(161,95,42)";
					xfillRect(270, 720, 30, 30);
					ctx.fillStyle = "rgb(255,255,255)";
					xfillRect(210, 720, 30, 30);
					ctx.fillStyle = "rgb(117,117,117)";
					xfillRect(180, 720, 30, 30);
					xfillRect(120, 660, 30, 30);
					xfillRect(60, 600, 30, 30);
					xfillRect(150, 570, 30, 30);
					ctx.fillStyle = "rgb(189,189,189)";
					xfillRect(90, 630, 30, 30);
					xfillRect(150, 540, 30, 30);
					xfillRect(120, 570, 30, 30);
				}
				if (this.rightHand == 5) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					};
					xfillRect(210, 660, 60, 60);
					xfillRect(270, 660, 30, 30);
					xfillRect(240, 720, 30, 30);
				}
				if (this.rightHand == 6) {
					ctx.fillStyle = "rgb(255,144,0)";
					xfillRect(180, 690, 150, 60);
					xfillRect(390, 810, 30, 30);
					ctx.fillStyle = "rgb(191,54,12)";
					xfillRect(330, 720, 60, 30);
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(210, 660, 60, 90);
					xfillRect(270, 660, 30, 30);
				}
				if (this.rightHand == 7) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					};
					xfillRect(210, 660, 60, 60);
					ctx.fillStyle = "rgb(180,105,0)";
					xfillRect(180, 690, 30, 60);
					xfillRect(270, 690, 30, 60);
					xfillRect(90, 900, 300, 30);
					ctx.fillStyle = "rgb(205,120,0)";
					xfillRect(90, 750, 300, 150);
					ctx.fillStyle = "rgb(20,108,0)";
					xfillRect(120, 690, 60, 60);
					ctx.fillStyle = "rgb(0,76,11)";
					xfillRect(150, 630, 30, 60);
					ctx.fillStyle = "rgb(210,17,46)";
					xfillRect(180, 750, 30, 30);
					xfillRect(240, 750, 30, 30);
					xfillRect(300, 750, 30, 30);
					xfillRect(360, 750, 30, 30);
					xfillRect(210, 780, 30, 30);
					xfillRect(270, 780, 30, 30);
					xfillRect(330, 780, 30, 30);
					xfillRect(300, 810, 30, 30);
					ctx.fillStyle = "rgb(232,232,232)";
					xfillRect(210, 750, 30, 30);
					xfillRect(270, 750, 30, 30);
					xfillRect(330, 750, 30, 30);
					xfillRect(240, 780, 30, 30);
					xfillRect(300, 780, 30, 30);
					xfillRect(360, 780, 30, 30);
					xfillRect(330, 810, 30, 30);
				}
				if (this.rightHand == 8) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(210, 690, 30, 60);
					ctx.fillStyle = "rgb(188,255,244)";
					xfillRect(240, 690, 30, 60);
					xfillRect(210, 600, 90, 60);
					xfillRect(210, 750, 90, 30);
					ctx.fillStyle = "rgb(207,245,129)";
					xfillRect(210, 660, 90, 30);
				}
				if (this.rightHand == 9) {
					if (this.sColor == 1) {
						ctx.fillStyle = "rgb(255,221,205)";
					}
					if (this.sColor == 2) {
						ctx.fillStyle = "rgb(165,107,70)";
					}
					if (this.sColor == 3) {
						ctx.fillStyle = "rgb(200,161,135)";
					}
					xfillRect(210, 690, 30, 60);
					xfillRect(270, 690, 30, 30);
					ctx.fillStyle = "rgb(188,255,244)";
					xfillRect(240, 690, 30, 60);
					xfillRect(210, 600, 90, 60);
					xfillRect(210, 750, 90, 30);
					ctx.fillStyle = "rgb(70,0,20)";
					xfillRect(210, 630, 90, 60);
				}
			}
		}
	}
}
draw();

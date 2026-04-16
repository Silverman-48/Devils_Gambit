	// Variables Used

	let currentscore = 0;
	let lifepoints = 3;
	let blanks = 1;
	let streak = 0;
	let acevalue = 0;
	let lastchance = 1;
	let cards = [];

	let suitarray = ['♣️', '♦️', '♠️', '♥️'];
	let colorarray = ['Red', 'Black'];
	let valuearray = ['Low', 'High'];

	let variable = "None";
	let element = "None";
	let multiplier = 1;
	let valueswitch = -1;

	let value = "";
	let rank = "";
	let suit = "";
	let color = "";
	let result = "";
	let result2 = "";
	let valuemodifiertable = 0;
	let valuemodifierhand = 0;

	let redcardscounter = 0;
	let blackcardscounter = 0;
	let jokercardscounter = 0;
	let clubscardscounter = 0;
	let diamondscardscounter = 0;
	let spadescardscounter = 0;
	let heartscardscounter = 0;
	let lowcardscounter = 0;
	let highcardscounter = 0;
	let acecardscounter = 0;

	let empty = "empty";

// Resets the Gambit Values

	function clearGAMBIT() {
		if (lifepoints === 0) return;
		if (cards.length === 0) {
			emptyDECK();
			return;
		}

		document.getElementById("empty_gambit").innerHTML = "None";
		document.getElementById("gambit_left").innerHTML = "";
		document.getElementById("gambit_right").innerHTML = "";
		setCURRENTGAMBIT();
	}

// Secondary Reset for Other Functions

	function clearGAMBIT2() {
		document.getElementById("empty_gambit").innerHTML = "None";
		document.getElementById("gambit_left").innerHTML = "";
		document.getElementById("gambit_right").innerHTML = "";

		variable = "None";
		element = "None";
		multiplier = 1;
		valueswitch = -1;
	}

// Changes the Text for Left-Side Gambits
	
	function setgambitLEFT(buttonelement) {
		if (lifepoints === 0) return;
		if (cards.length === 0) {
			emptyDECK();
			return;
		}

		document.getElementById("empty_gambit").innerHTML = "";

		let textgambit_left = document.getElementById("gambit_left");
		let textgambit_right = document.getElementById("gambit_right");

		let mod1 = textgambit_left.innerHTML;
		let mod2 = textgambit_right.innerHTML;

		if (buttonelement === mod1) {
			textgambit_right.innerHTML = "";
			setCURRENTGAMBIT();
			updateTESTVALUES();
			return;
		}

		textgambit_left.innerHTML = buttonelement;

		setCURRENTGAMBIT();
		updateTESTVALUES();
	}

// Changes the Text for Right-Side Gambits

	function setgambitRIGHT(buttonelement) {
		if (lifepoints === 0) return;
		if (cards.length === 0) {
			emptyDECK();
			return;
		}

		document.getElementById("empty_gambit").innerHTML = "";

		let textgambit_left = document.getElementById("gambit_left");
		let textgambit_right = document.getElementById("gambit_right");

		let mod1 = textgambit_left.innerHTML;
		let mod2 = textgambit_right.innerHTML;

		if (buttonelement === mod2) {
			textgambit_left.innerHTML = "";
			setCURRENTGAMBIT();
			updateTESTVALUES();
			return;
		}

		textgambit_right.innerHTML = buttonelement;

		setCURRENTGAMBIT();
		updateTESTVALUES();
	}

// Sets the Current Gambit Values

	function setCURRENTGAMBIT() {

		gambit1 = document.getElementById("gambit_left").innerHTML;
		gambit2 = document.getElementById("gambit_right").innerHTML;

		if (gambit1 === "" && gambit2 === "") {
				document.getElementById("currentgambit").innerHTML = "Select Your Gambit";

				valueswitch = -1;
				variable = "None";
				element = "None";
				multiplier = 1;

		}

		if (valuearray.includes(gambit1)) {
			if (colorarray.includes(gambit2)) {
				document.getElementById("currentgambit").innerHTML = "Value & Color Gambit (x3)";

				variable = gambit2;
				element = "color";
				multiplier = 3;

				if (gambit1 === "Low") {
					valueswitch = 0;
				} else {
					valueswitch = 1;
				}

			} else if (suitarray.includes(gambit2)) {
				document.getElementById("currentgambit").innerHTML = "Value & Suit Gambit (x6)";

				variable = gambit2;
				element = "suit";
				multiplier = 6;

				if (gambit1 === "Low") {
					valueswitch = 0;
				} else {
					valueswitch = 1;
				}

			} else {
				document.getElementById("currentgambit").innerHTML = "Value Gambit (x1)";

				variable = "empty";
				element = "empty";
				multiplier = 1;

				if (gambit1 === "Low") {
					valueswitch = 0;
				} else {
					valueswitch = 1;
				}

			}
		}

		if (colorarray.includes(gambit2) && gambit1 === "") {
				document.getElementById("currentgambit").innerHTML = "Color Gambit (x1)";

				valueswitch = -1;
				variable = gambit2;
				element = "color";
				multiplier = 1;

		}

		if (suitarray.includes(gambit2) && gambit1 === "") {
				document.getElementById("currentgambit").innerHTML = "Suit Gambit (x3)";

				valueswitch = -1;
				variable = gambit2;
				element = "suit";
				multiplier = 3;

		}
	}

// Checks If Gambit is Regular or Value, and Runs It

	function runGAMBIT() {
		if (valueswitch > -1) {
			gambitVALUE();
		} else {
			gambit();
		}
	}

// Used to Check Debug Values

	function updateTESTVALUES() {
		document.getElementById("valueswitch").innerHTML = valueswitch;
		document.getElementById("variable").innerHTML = variable;
		document.getElementById("element").innerHTML = element;
		document.getElementById("multiplier").innerHTML = multiplier;
	}

// New Add / Remove Function

	function addORremove(variable, value, sign) {
		eval('var check = ' + variable);
		
		if (check === 0 && sign === "-") {
			return;
		} else {
			eval(variable + ' = ' + variable + sign + value);
			eval('document.getElementById(variable).textContent = ' + variable);
		}
	}

// Deck of Cards Maker

	function fillARRAY() {

		const suits = [
			{ suit: "♥️", color: "Red" },
			{ suit: "♦️", color: "Red" },
			{ suit: "♣️", color: "Black" },
			{ suit: "♠️", color: "Black" }
		]

		const ranks = [
			{ rank: "A", value: 20 },
			{ rank: "2", value: 2, },
			{ rank: "3", value: 3 },
			{ rank: "4", value: 4 },
			{ rank: "5", value: 5 },
			{ rank: "6", value: 6 },
			{ rank: "7", value: 7 },
			{ rank: "8", value: 8 },
			{ rank: "9", value: 9 },
			{ rank: "10", value: 10 },
			{ rank: "Q", value: 10 },
			{ rank: "J", value: 10 },
			{ rank: "K", value: 10 }
		]

		const deck = [];

		suits.forEach(({ suit, color }) => {
			ranks.forEach(({ rank, value }) => {
				deck.push({ rank, value, suit: suit, color });
			});
		});

		deck.push(
			{ rank: "J1", value: 20, suit: "🃏", color: "Special" },
			{ rank: "J2", value: 20, suit: "🃏", color: "Special" }
		);

		let currentIndex = deck.length;

		while (currentIndex != 0) {

			let randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
		}

		return deck;
	}

	cards = fillARRAY();

// Skips a Round

	function skipROUND() {

		if (lifepoints === 0) return;
		if (cards.length === 0) {
			emptyDECK();
			return;
		}

		document.getElementById("currentgambit").innerHTML = "Round Skiped";
		
		addORremove('lifepoints', 1, '-');
		addORremove('streak', 1, '-');
		selectCARD();
		updateDISPLAYS();
		pickTABLECARD();
	}

// Last Chance Setup

	function lastCHANCE(variable) {
		if (lastchance === 0) return;
		if (blanks === 0) return;

		lastchance = lastchance - 1;
		addORremove('blanks', 1, '-');

		const randomNumber = Math.floor(Math.random() * 4) + 1;
		document.getElementById("output").textContent = randomNumber;
		const diceroll = Number(variable);

		if (randomNumber === diceroll) {

			addORremove('lifepoints', 1, '+');
			document.getElementById("currentgambit").innerHTML = "Select Your Gambit";

		} else {

			if (lifepoints === 0) {
				document.getElementById("lifepoints").textContent = "0";
				document.getElementById("currentgambit").innerHTML = "Game Over";
			} else {
				return;
			}

		}
	}

// Show / Hide Elements

	function showELEMENT(element) {
		var x = document.getElementById(element);

		if (x.style.display == "block") {
			x.style.display = "none";
		} else {
			x.style.display = "block";
		}
	}

// Show / Hide Main Interface and Card History

	function toggleELEMENTS() {
		var x = document.getElementById('flex_element_1');
		var y = document.getElementById('flex_element_2');

		if (x.style.display == "block") {
			x.style.display = "none";
			y.style.display = "block";
			document.getElementById("togglebutton").innerHTML = "Show Game Screen";
		} else {
			x.style.display = "block";
			y.style.display = "none";
			document.getElementById("togglebutton").innerHTML = "Show Card History";
		}
	}

// Triggers the “Empty Deck” Message

	function emptyDECK() {
		document.getElementById("tablecard").textContent = "No more cards left!";
	}

// Update the Score, Card History and Score Displays

	function updateDISPLAYS() {
		document.getElementById("score").textContent = currentscore;
		let gambithistoryvalue = "";
		let gambithistoryvariable = "";

		if (valueswitch === 0) {
			gambithistoryvalue = "Low ";
		} else if (valueswitch === 1) {
			gambithistoryvalue = "High ";
		} else {
			gambithistoryvalue = "";
		}

		if (variable === "empty") {
			gambithistoryvariable = "";
		} else {
			gambithistoryvariable = variable;
		}

		if (document.getElementById("card_history").innerHTML !== "") {
			document.getElementById("card_history").innerHTML = 
			gambithistoryvalue + gambithistoryvariable + "<br>" + result2 + "<br>" + result + "<br><br>" + document.getElementById("card_history").innerHTML;
		} else {
			document.getElementById("card_history").innerHTML = 
			gambithistoryvalue + gambithistoryvariable + "<br>" + result2 + "<br>" + result + "<br>" + document.getElementById("card_history").innerHTML;
		}

		if (lifepoints > 0) return;
		if (lifepoints === 0 && lastchance > 0) {
			document.getElementById("lifepoints").textContent = "0";
			document.getElementById("currentgambit").innerHTML = "Last Chance Available!";
			clearGAMBIT2();
		} else {
			document.getElementById("lifepoints").textContent = "0";
			document.getElementById("currentgambit").innerHTML = "Game Over";
			clearGAMBIT2();
		}
	}

// Triggers the Game Reset

	function reset() {
		var score = document.getElementById("score").innerHTML;
		var highscore = document.getElementById("highscore").innerHTML;
		var numberscore = Number(score);
		var numberhighscore = Number(highscore);

		if (numberscore > numberhighscore) {
			document.getElementById("highscore").innerHTML = score;
		}

		cards = fillARRAY();

		document.getElementById("table_suit_1").innerHTML = "";
		document.getElementById("table_number").innerHTML = "";
		document.getElementById("table_suit_2").innerHTML = "";

		document.getElementById("hand_suit_1").innerHTML = "";
		document.getElementById("hand_number").innerHTML = "";
		document.getElementById("hand_suit_2").innerHTML = "";

		currentscore = 0;
		lifepoints = 3;
		blanks = 1;
		streak = 0;
		lastchance = 1;
		acevalue = 0;

		document.getElementById("score").innerHTML = currentscore;
		document.getElementById("lifepoints").textContent = 3;
		document.getElementById("blanks").innerHTML = blanks;
		document.getElementById("streak").innerHTML = streak;
		document.getElementById("output").innerHTML = "0";

		document.getElementById("tablecard").textContent = "None";
		document.getElementById("card_history").innerHTML = "";
		document.getElementById("remaining").innerHTML = cards.length;

		redcardscounter = 0;
		blackcardscounter = 0;
		jokercardscounter = 0;
		clubscardscounter = 0;
		diamondscardscounter = 0;
		spadescardscounter = 0;
		heartscardscounter = 0;
		lowcardscounter = 0;
		highcardscounter = 0;
		acecardscounter = 0;

		document.getElementById("redcards").innerHTML = redcardscounter;
		document.getElementById("blackcards").innerHTML = blackcardscounter;
		document.getElementById("jokercards").innerHTML = jokercardscounter;
		document.getElementById("clubscards").innerHTML = clubscardscounter;
		document.getElementById("diamondscards").innerHTML = diamondscardscounter;
		document.getElementById("spadescards").innerHTML = spadescardscounter;
		document.getElementById("heartscards").innerHTML = heartscardscounter;
		document.getElementById("lowcards").innerHTML = lowcardscounter;
		document.getElementById("highcards").innerHTML = highcardscounter;
		document.getElementById("acecards").innerHTML = acecardscounter;

		valueswitch = -1;
		variable = "None";
		element = "None";
		multiplier = 1;

		document.getElementById("empty_gambit").innerHTML = "None";
		document.getElementById("gambit_left").innerHTML = "";
		document.getElementById("gambit_right").innerHTML = "";

		document.getElementById("currentgambit").innerHTML = "Select Your Gambit";

		pickTABLECARD();
		updateTESTVALUES();
	}

// Life Point Related Functions

	function getLIFEPOINT() {
		if (lifepoints === 0) return;
		if (cards.length === 0) {
			emptyDECK();
			return;
		}
		
		if (streak >= 3) {
			streak = streak - 3;
			document.getElementById("streak").textContent = streak;
			lifepoints = lifepoints + 1;
			document.getElementById("lifepoints").textContent = lifepoints;
			document.getElementById("currentgambit").textContent = "Streak Sacrificed";
		} else {
			return;
		}
	}

// Blank Related Functions

	function useBLANK() {
		if (blanks === 0) return;
		if (lifepoints === 0) return;
		if (cards.length === 0) {
			emptyDECK();
			return;
		}

		document.getElementById("currentgambit").innerHTML = "Blank Used";

		addORremove('blanks', 1, '-');

		selectCARD();

		currentscore = Math.floor(currentscore + streak + value / 2);
		addORremove('lifepoints', 1, '-');
		addORremove('streak', 1, '+');
		updateDISPLAYS();
		pickTABLECARD();
	}

// Selects the Player's Card

	function selectCARD() {
		if (lifepoints <= 0) return;
		if (cards.length === 0) {
			emptyDECK();
			return;
		}

		const index = Math.floor(Math.random() * cards.length);
		card = cards.splice(index, 1)[0];
		value = card.value;
		rank = card.rank;
		suit = card.suit;
		color = card.color;
		result = rank.concat(" ", suit);

		document.getElementById("remaining").textContent = cards.length;

		if (value <= 7) {
		
			valuemodifierhand = 0;
			lowcardscounter = lowcardscounter + 1;
			document.getElementById("lowcards").innerHTML = lowcardscounter;
		
		}

		if (value >= 8 && value !== 20) {
		
			valuemodifierhand = 1;
			highcardscounter = highcardscounter + 1;
			document.getElementById("highcards").innerHTML = highcardscounter;
		
		}

		if (rank === "A") {
			acecardscounter = acecardscounter + 1;
			document.getElementById("acecards").innerHTML = acecardscounter;
		}

		if (color === "Red") {
			redcardscounter = redcardscounter + 1;
			document.getElementById("redcards").innerHTML = redcardscounter;
		}

		if (color === "Black") {
			blackcardscounter = blackcardscounter + 1;
			document.getElementById("blackcards").innerHTML = blackcardscounter;
		}

		if (color === "Special") {
			jokercardscounter = jokercardscounter + 1;
			document.getElementById("jokercards").innerHTML = jokercardscounter;
		}

		if (suit === "♣️") {
			clubscardscounter = clubscardscounter + 1;
			document.getElementById("clubscards").innerHTML = clubscardscounter;
		}

		if (suit === "♠️") {
			spadescardscounter = spadescardscounter + 1;
			document.getElementById("spadescards").innerHTML = spadescardscounter;
		}

		if (suit === "♦️") {
			diamondscardscounter = diamondscardscounter + 1;
			document.getElementById("diamondscards").innerHTML = diamondscardscounter;
		}

		if (suit === "♥️") {
			heartscardscounter = heartscardscounter + 1;
			document.getElementById("heartscards").innerHTML = heartscardscounter;
		}

		document.getElementById("hand_suit_1").innerHTML = suit;
		document.getElementById("hand_number").innerHTML = rank;
		document.getElementById("hand_suit_2").innerHTML = suit;
	}

// Picks the Next Table Card

	function pickTABLECARD() {
		if (cards.length === 0) {
			emptyDECK();
			return;
		}

		const index = Math.floor(Math.random() * cards.length);
		const card = cards.splice(index, 1)[0];
		const value = card.value;
		const rank = card.rank;
		const suit = card.suit;
		const color = card.color;
		result2 = rank.concat(" ", suit);

		document.getElementById("tablecard").textContent = result2;
		document.getElementById("remaining").textContent = cards.length;
		acevalue = card.value;

		if (value <= 7) {
		
			valuemodifiertable = 0;
			lowcardscounter = lowcardscounter + 1;
			document.getElementById("lowcards").innerHTML = lowcardscounter;
		
		}

		if (value >= 8 && value !== 20) {
		
			valuemodifiertable = 1;
			highcardscounter = highcardscounter + 1;
			document.getElementById("highcards").innerHTML = highcardscounter;
		
		}

		if (rank === "A") {
			acecardscounter = acecardscounter + 1;
			document.getElementById("acecards").innerHTML = acecardscounter;
		}

		if (color === "Red") {
			redcardscounter = redcardscounter + 1;
			document.getElementById("redcards").innerHTML = redcardscounter;
		}

		if (color === "Black") {
			blackcardscounter = blackcardscounter + 1;
			document.getElementById("blackcards").innerHTML = blackcardscounter;
		}

		if (color === "Special") {
			jokercardscounter = jokercardscounter + 1;
			document.getElementById("jokercards").innerHTML = jokercardscounter;
		}

		if (suit === "♣️") {
			clubscardscounter = clubscardscounter + 1;
			document.getElementById("clubscards").innerHTML = clubscardscounter;
		}

		if (suit === "♠️") {
			spadescardscounter = spadescardscounter + 1;
			document.getElementById("spadescards").innerHTML = spadescardscounter;
		}

		if (suit === "♦️") {
			diamondscardscounter = diamondscardscounter + 1;
			document.getElementById("diamondscards").innerHTML = diamondscardscounter;
		}

		if (suit === "♥️") {
			heartscardscounter = heartscardscounter + 1;
			document.getElementById("heartscards").innerHTML = heartscardscounter;
		}

		document.getElementById("table_suit_1").innerHTML = suit;
		document.getElementById("table_number").innerHTML = rank;
		document.getElementById("table_suit_2").innerHTML = suit;
	}

		pickTABLECARD();

// Sets the Joker Gambit

	function jokerGAMBIT() {
		if (lifepoints === 0) return;
		if (cards.length === 0) {
			emptyDECK();
			return;
		}

		document.getElementById("currentgambit").innerHTML = "Joker Gambit (Win or Lose)";

		selectCARD();

		if (color === 'Special') {
			currentscore = currentscore + value * 10;
			addORremove('streak', 1, '+');
			updateDISPLAYS();
			pickTABLECARD();
		} else {
			lifepoints = 0;
			document.getElementById("lifepoints").textContent = "0";
			streak = 0;
			document.getElementById("streak").textContent = "0";
			lastchance = 0;
			updateDISPLAYS();
			pickTABLECARD();
		}
	}

// Sets the Color, Suit, Number and Number & Suit Gambits

	function gambit() {
		if (document.getElementById("gambit_left").innerHTML === "" && document.getElementById("gambit_right").innerHTML === "") return;
		if (lifepoints === 0) return;
		if (cards.length === 0) {
			emptyDECK();
			return;
		}

		selectCARD();

		eval('var check = ' + element);

		if (variable === check || color === 'Special') {
			currentscore = currentscore + streak + value * multiplier;
			addORremove('streak', 1, '+');
			updateDISPLAYS();
			pickTABLECARD();
		} else {
			lostGAMBIT();
		}
	}

// Sets the High and Low Gambits

	function gambitVALUE() {
		if (lifepoints === 0) return;
		if (cards.length === 0) {
			emptyDECK();
			return;
		}

		selectCARD();

		eval('var check = ' + element);

		if (rank === 'A') {
			SPEvalue = acevalue;

			if (valuemodifiertable === valueswitch && variable === check || color === 'Special' || SPEvalue === 20 && variable === check) {
				currentscore = currentscore + streak + value * multiplier;
				addORremove('streak', 1, '+');
				updateDISPLAYS();
				pickTABLECARD();
			} else {
				lostGAMBIT();
			}
		} else {
			if (valuemodifierhand === valueswitch && variable === check || color === 'Special') {
				currentscore = currentscore + streak + value * multiplier;
				addORremove('streak', 1, '+');
				updateDISPLAYS();
				pickTABLECARD();
			} else {
				lostGAMBIT();
			}
		}
	}

// Activates When the Gambit is Lost

	function lostGAMBIT() {
			addORremove('streak', 1, '-');
			addORremove('lifepoints', 1, '-');
			updateDISPLAYS();
			pickTABLECARD();
	}

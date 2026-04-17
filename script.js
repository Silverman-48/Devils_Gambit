	// Variables Used

	let currentscore = 0;
	let lifepoints = 3;
	let blanks = 1;
	let streak = 0;
	let acevalue = 0;
	let lastchance = 1;
	let cards = [];

	let firstTimeTable = true;
	let firstTimeHand = true;

	let suitarray = ['♣️', '♦️', '♠️', '♥️'];
	let colorarray = ['Red', 'Black', 'Special'];
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

	let valuemultiplier = 1;
	let colormultiplier = 1;
	let suitmultiplier = 3;
	let valuecolormultiplier = 3;
	let valuesuitmultiplier = 6;
	let jokermultiplier = 10;

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

		const buttons_1 = document.querySelectorAll('.special_button_1');
		buttons_1.forEach(btn => btn.classList.remove('highlight'));

		const buttons_2 = document.querySelectorAll('.special_button_2');
		buttons_2.forEach(btn => btn.classList.remove('highlight'));

		document.getElementById("empty_gambit").innerHTML = "None";
		document.getElementById("gambit_left").innerHTML = "";
		document.getElementById("gambit_right").innerHTML = "";

		setCURRENTGAMBIT();
		updateTESTVALUES();
	}

// Secondary Reset for Other Functions

	function clearGAMBIT2() {
		const buttons_1 = document.querySelectorAll('.special_button_1');
		buttons_1.forEach(btn => btn.classList.remove('highlight'));

		const buttons_2 = document.querySelectorAll('.special_button_2');
		buttons_2.forEach(btn => btn.classList.remove('highlight'));

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

		const buttons = document.querySelectorAll('.special_button_1');
		const buttons_2 = document.querySelectorAll('.special_button_2');

		buttons.forEach(btn => btn.classList.remove('highlight'));

		document.getElementById("empty_gambit").innerHTML = "";

		let textgambit_left = document.getElementById("gambit_left");
		let textgambit_right = document.getElementById("gambit_right");

		let mod1 = textgambit_left.innerHTML;
		let mod2 = textgambit_right.innerHTML;

		if (buttonelement === mod1) {
			if (mod2 === "") {
				document.getElementById("empty_gambit").innerHTML = "None";
			}
			textgambit_left.innerHTML = "";
			setCURRENTGAMBIT();
			updateTESTVALUES();
			return;
		}

		textgambit_left.innerHTML = buttonelement;
		
		setCURRENTGAMBIT();
		updateTESTVALUES();

		if (buttonelement === "Special") {
			textgambit_right.innerHTML = "";
			buttons.forEach(btn => {
				btn.classList.remove('highlight');
			});
			buttons_2.forEach(btn => {
				btn.classList.remove('highlight');
			});
		}

		buttons.forEach(btn => {
			if (btn.textContent.trim() === buttonelement || btn.textContent.trim() === "I'm Feeling Lucky" && buttonelement === "Special") {
				btn.classList.add('highlight');

			}
		});
	}

// Changes the Text for Right-Side Gambits

	function setgambitRIGHT(buttonelement) {
		if (lifepoints === 0) return;
		if (cards.length === 0) {
			emptyDECK();
			return;
		}

		const buttons = document.querySelectorAll('.special_button_2');

		buttons.forEach(btn => btn.classList.remove('highlight'));

		let textgambit_left = document.getElementById("gambit_left");
		let textgambit_right = document.getElementById("gambit_right");

		if (variable === "Special") {
			textgambit_left.innerHTML = "";
			document.getElementById("joker_button").classList.remove('highlight');
		}

		document.getElementById("empty_gambit").innerHTML = "";

		let mod1 = textgambit_left.innerHTML;
		let mod2 = textgambit_right.innerHTML;

		if (buttonelement === mod2) {
			if (mod1 === "") {
				document.getElementById("empty_gambit").innerHTML = "None";
			}
			textgambit_right.innerHTML = "";
			setCURRENTGAMBIT();
			updateTESTVALUES();
			return;
		}

		textgambit_right.innerHTML = buttonelement;

		setCURRENTGAMBIT();
		updateTESTVALUES();

		buttons.forEach(btn => {
			if (btn.textContent.trim() === buttonelement) {
				btn.classList.add('highlight');
			}
		});
	}

// Sets the Current Gambit Values

	function setCURRENTGAMBIT() {

		gambit1 = document.getElementById("gambit_left").innerHTML;
		gambit2 = document.getElementById("gambit_right").innerHTML;

		if (gambit1 === "" && gambit2 === "") {
				valueswitch = -1;
				variable = "None";
				element = "None";
				multiplier = 1;

				document.getElementById("currentgambit").innerHTML = "Select Your Gambit:";
		}

		if (valuearray.includes(gambit1)) {
			if (colorarray.includes(gambit2)) {
				variable = gambit2;
				element = "color";
				multiplier = valuecolormultiplier;

				document.getElementById("currentgambit").innerHTML = "Value & Color Gambit (x" + multiplier + ")";

				if (gambit1 === "Low") {
					valueswitch = 0;
				} else {
					valueswitch = 1;
				}

			} else if (suitarray.includes(gambit2)) {
				variable = gambit2;
				element = "suit";
				multiplier = valuesuitmultiplier;

				document.getElementById("currentgambit").innerHTML = "Value & Suit Gambit (x" + multiplier + ")";

				if (gambit1 === "Low") {
					valueswitch = 0;
				} else {
					valueswitch = 1;
				}

			} else {
				variable = "empty";
				element = "empty";
				multiplier = valuemultiplier;

				document.getElementById("currentgambit").innerHTML = "Value Gambit (x" + multiplier + ")";

				if (gambit1 === "Low") {
					valueswitch = 0;
				} else {
					valueswitch = 1;
				}

			}
		}

		if (colorarray.includes(gambit2) && gambit1 === "") {
				valueswitch = -1;
				variable = gambit2;
				element = "color";
				multiplier = colormultiplier;

				document.getElementById("currentgambit").innerHTML = "Color Gambit (x" + multiplier + ")";

		}

		if (suitarray.includes(gambit2) && gambit1 === "") {
				valueswitch = -1;
				variable = gambit2;
				element = "suit";
				multiplier = suitmultiplier;

				document.getElementById("currentgambit").innerHTML = "Suit Gambit (x" + multiplier + ")";

		}

		if (gambit1 === "Special") {
				valueswitch = -1;
				variable = gambit1;
				element = "color";
				multiplier = jokermultiplier;

				document.getElementById("currentgambit").innerHTML = "Joker Gambit (x" + multiplier + ")";
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

// Set Up Multipliers

function setMULTIPLIERS() {
	document.getElementById("value_mult_disp").value = valuemultiplier;
	document.getElementById("color_mult_disp").value = colormultiplier;
	document.getElementById("suit_mult_disp").value = suitmultiplier;
	document.getElementById("value_color_mult_disp").value = valuecolormultiplier;
	document.getElementById("value_suit_mult_disp").value = valuesuitmultiplier;
	document.getElementById("joker_mult_disp").value = jokermultiplier;
}

setMULTIPLIERS();

// Change Multiplier

function changeMultiplier(type, delta) {
    let newValue = 1;
    
    switch(type) {
        case 'value': 
            valuemultiplier = Math.min(20, Math.max(1, valuemultiplier + delta));
            newValue = valuemultiplier;
            break;
        case 'color': 
            colormultiplier = Math.min(20, Math.max(1, colormultiplier + delta));
            newValue = colormultiplier;
            break;
        case 'suit': 
            suitmultiplier = Math.min(20, Math.max(1, suitmultiplier + delta));
            newValue = suitmultiplier;
            break;
        case 'value_color': 
            valuecolormultiplier = Math.min(20, Math.max(1, valuecolormultiplier + delta));
            newValue = valuecolormultiplier;
            break;
        case 'value_suit': 
            valuesuitmultiplier = Math.min(20, Math.max(1, valuesuitmultiplier + delta));
            newValue = valuesuitmultiplier;
            break;
        case 'joker': 
            jokermultiplier = Math.min(20, Math.max(1, jokermultiplier + delta));
            newValue = jokermultiplier;
            break;
    }

    const displayElement = document.getElementById(type + "_mult_disp");
    if (displayElement) {
        displayElement.value = newValue;
    }
}

// Handle Deck Presets

let currentPresetIndex = 0;

const presets = [
    {
        name: "Standard",
        config: {
            "include-numbers": true, "include-faces": true, "include-aces": true,
            "suit-hearts": true, "suit-diamonds": true, "suit-clubs": true, "suit-spades": true, "include-jokers": true,
            "mult-hearts": 1, "mult-diamonds": 1, "mult-clubs": 1, "mult-spades": 1, "mult-jokers": 1,
            "value_mult": 1, "color_mult": 1, "suit_mult": 3, "value_color_mult": 3, "value_suit_mult": 6, "joker_mult": 10
        }
    },
    {
        name: "Face-Off",
        config: {
            "include-numbers": false, "include-faces": true, "include-aces": true,
            "suit-hearts": true, "suit-diamonds": true, "suit-clubs": true, "suit-spades": true, "include-jokers": false,
            "mult-hearts": 1, "mult-diamonds": 1, "mult-clubs": 1, "mult-spades": 1, "mult-jokers": 0,
            "value_mult": 2, "color_mult": 2, "suit_mult": 3, "value_color_mult": 4, "value_suit_mult": 5, "joker_mult": 1
        }
    },
    {
        name: "Chaos",
        config: {
            "include-numbers": true, "include-faces": false, "include-aces": true,
            "suit-hearts": true, "suit-diamonds": false, "suit-clubs": true, "suit-spades": false, "include-jokers": true,
            "mult-hearts": 2, "mult-diamonds": 0, "mult-clubs": 2, "mult-spades": 0, "mult-jokers": 5,
            "value_mult": 5, "color_mult": 5, "suit_mult": 5, "value_color_mult": 10, "value_suit_mult": 10, "joker_mult": 20
        }
    }
];

function applyPreset() {
    const preset = presets[currentPresetIndex];
    const cfg = preset.config;

    // 1. Update UI Element Name
    document.getElementById('preset-name').textContent = `${preset.name}`;

    // 2. Update Checkboxes
    const checkboxes = ["include-numbers", "include-faces", "include-aces", "suit-hearts", "suit-diamonds", "suit-clubs", "suit-spades", "include-jokers"];
    checkboxes.forEach(id => {
        document.getElementById(id).checked = cfg[id];
    });

    // 3. Update Suit Quantity Inputs
    const quantities = ["mult-hearts", "mult-diamonds", "mult-clubs", "mult-spades", "mult-jokers"];
    quantities.forEach(id => {
        document.getElementById(id).value = cfg[id];
    });

    // 4. Update Global Multiplier Variables
    valuemultiplier = cfg["value_mult"];
    colormultiplier = cfg["color_mult"];
    suitmultiplier = cfg["suit_mult"];
    valuecolormultiplier = cfg["value_color_mult"];
    valuesuitmultiplier = cfg["value_suit_mult"];
    jokermultiplier = cfg["joker_mult"];

    // 5. Update Multiplier Display Inputs
    document.getElementById('value_mult_disp').value = valuemultiplier;
    document.getElementById('color_mult_disp').value = colormultiplier;
    document.getElementById('suit_mult_disp').value = suitmultiplier;
    document.getElementById('value_color_mult_disp').value = valuecolormultiplier;
    document.getElementById('value_suit_mult_disp').value = valuesuitmultiplier;
    document.getElementById('joker_mult_disp').value = jokermultiplier;
}

function changePreset(delta) {
    currentPresetIndex += delta;
    if (currentPresetIndex < 0) currentPresetIndex = presets.length - 1;
    if (currentPresetIndex >= presets.length) currentPresetIndex = 0;
    applyPreset();
}

// Deck of Cards Maker

	const standardSuits = [
		{ suit: "♥️", color: "Red" },
		{ suit: "♦️", color: "Red" },
		{ suit: "♣️", color: "Black" },
		{ suit: "♠️", color: "Black" }
	];

	const standardRanks = [
		{ rank: "A", value: 20 },
		{ rank: "2", value: 2 },
		{ rank: "3", value: 3 },
		{ rank: "4", value: 4 },
		{ rank: "5", value: 5 },
		{ rank: "6", value: 6 },
		{ rank: "7", value: 7 },
		{ rank: "8", value: 8 },
		{ rank: "9", value: 9 },
		{ rank: "10", value: 10 },
		{ rank: "J", value: 10 },
		{ rank: "Q", value: 10 },
		{ rank: "K", value: 10 }
	];

	const standardExtras = [
		{ rank: "J1", value: 20, suit: "🃏", color: "Special" },
		{ rank: "J2", value: 20, suit: "🃏", color: "Special" }
	];

	// Function purely for shuffling any array (Deck)
	function shuffleDeck(deck) {
		let currentIndex = deck.length;

		while (currentIndex !== 0) {
			let randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			[deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
		}

		return deck;
	}

	// Function to generate the deck based on provided rules
	// We default extraCards to an empty array so it's optional
	function createDeck(suits, ranks, extraCards = []) {
		const deck = [];

		// Generate the standard combinations
		suits.forEach(({ suit, color }) => {
			ranks.forEach(({ rank, value }) => {
				deck.push({ rank, value, suit, color });
			});
		});

		// Add any special cards (like Jokers) to the deck
		deck.push(...extraCards);

		// Return the shuffled deck
		return shuffleDeck(deck);
	}

// Change Card Quantity

function changeQty(id, delta) {
    const input = document.getElementById(id);
    let newValue = parseInt(input.value) + delta;
    
    // Enforce your hard limits (1 to 10)
    if (newValue < 1) newValue = 1;
    if (newValue > 10) newValue = 10;
    
    input.value = newValue;
}

// Generate Deck

function generateCustomDeck() {
    // 1. Handle Suits with Multipliers
    const selectedSuits = [];
    const suitIds = { "♥️": "hearts", "♦️": "diamonds", "♣️": "clubs", "♠️": "spades" };

    standardSuits.forEach(s => {
        const id = suitIds[s.suit];
        const isChecked = document.getElementById(`suit-${id}`).checked;
        if (isChecked) {
            // Get the multiplier value (e.g., 2), restricted between 1 and 10
            const mult = Math.min(Math.max(parseInt(document.getElementById(`mult-${id}`).value) || 1, 1), 10);
            for (let i = 0; i < mult; i++) {
                selectedSuits.push(s);
            }
        }
    });

    // 2. Handle Ranks (Keeping it simple/standard)
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeFaces = document.getElementById('include-faces').checked;
    const includeAces = document.getElementById('include-aces').checked;

    const selectedRanks = standardRanks.filter(r => {
        if (r.rank === "A") return includeAces;
        if (["J", "Q", "K"].includes(r.rank)) return includeFaces;
        return includeNumbers;
    });

    // 3. Handle Jokers with Multipliers
    const selectedExtras = [];
    if (document.getElementById('include-jokers').checked) {
        const jMult = Math.min(Math.max(parseInt(document.getElementById('mult-jokers').value) || 1, 1), 10);
        for (let i = 0; i < jMult; i++) {
            // This adds both J1 and J2 from your standardExtras for every 1x multiplier
            selectedExtras.push(...standardExtras);
        }
    }

    // 4. Return the deck to the global 'cards' variable
    return createDeck(selectedSuits, selectedRanks, selectedExtras);
}

	cards = generateCustomDeck();

// Skips a Round

	function skipROUND() {

		if (lifepoints === 0) return;
		if (cards.length === 0) {
			emptyDECK();
			return;
		}

		valueswitch = -1;
		variable = "Skip";

		document.getElementById("currentgambit").innerHTML = "Round Skipped";
		
		addORremove('lifepoints', 1, '-');
		addORremove('streak', 1, '-');
		selectCARD();
		updateDISPLAYS();
		updateTESTVALUES();
		pickTABLECARD();
	}

// Last Chance Setup

	function lastCHANCE(variable) {
		if (lastchance === 0) return;

		lastchance = lastchance - 1;

		const randomNumber = Math.floor(Math.random() * 4) + 1;
		document.getElementById("output").textContent = randomNumber;
		const diceroll = Number(variable);

		if (randomNumber === diceroll) {

			addORremove('lifepoints', 1, '+');
			document.getElementById("currentgambit").innerHTML = "One More Chance!";
			document.getElementById("last_chance").style.display = "none";
			document.getElementById("gameplay_buttons").style.display = "block";

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

// Show / Hide Game or Main Menu

	function toggleMAINMENU() {
		var x = document.getElementById('main_menu');
		var y = document.getElementById('game_screen');

		if (x.style.display == "block") {
			x.style.display = "none";
			y.style.display = "block";
		} else {
			x.style.display = "block";
			y.style.display = "none";
		}
	}

// Show / Hide Main Interface and Card History

	function toggleELEMENTS() {
		var x = document.getElementById('flex_element_1');
		var y = document.getElementById('flex_element_2');

		if (x.style.display == "block") {
			x.style.display = "none";
			y.style.display = "block";
		} else {
			x.style.display = "block";
			y.style.display = "none";
		}
	}

// Triggers the “Empty Deck” Message

	function emptyDECK() {
		document.getElementById("currentgambit").textContent = "No more cards left!";
		document.getElementById("gambit_left").textContent = "";
		document.getElementById("gambit_right").textContent = "";
		document.getElementById("empty_gambit").textContent = "None";

		const buttons_1 = document.querySelectorAll('.special_button_1');
		buttons_1.forEach(btn => btn.classList.remove('highlight'));

		const buttons_2 = document.querySelectorAll('.special_button_2');
		buttons_2.forEach(btn => btn.classList.remove('highlight'));
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
			document.getElementById("gameplay_buttons").style.display = "none";
			document.getElementById("last_chance").style.display = "block";
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

		document.getElementById("prev_table_card").style.visibility = "hidden";
		document.getElementById("prev_hand_card").style.visibility = "hidden";
		document.getElementById("hand_card").style.visibility = "hidden";

		document.getElementById("gameplay_buttons").style.display = "block";
		document.getElementById("last_chance").style.display = "none";

		cards = generateCustomDeck();

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

		firstTimeTable = true;
		firstTimeHand = true;

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

		document.getElementById("currentgambit").innerHTML = "Select Your Gambit:";

		const buttons_1 = document.querySelectorAll('.special_button_1');
		buttons_1.forEach(btn => btn.classList.remove('highlight'));

		const buttons_2 = document.querySelectorAll('.special_button_2');
		buttons_2.forEach(btn => btn.classList.remove('highlight'));

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
			document.getElementById("currentgambit").textContent = "Streak Sacrificed (+1 Life)";
		} else {
			document.getElementById("currentgambit").textContent = "Not Enough Streak (" + streak + "/3)";
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

		valueswitch = -1;
		variable = "Blank";

		document.getElementById("currentgambit").innerHTML = "Blank Used";

		addORremove('blanks', 1, '-');

		selectCARD();

		currentscore = Math.floor(currentscore + streak + value / 2);
		// addORremove('lifepoints', 1, '-');
		addORremove('streak', 1, '+');
		updateDISPLAYS();
		updateTESTVALUES();
		pickTABLECARD();
	}

// Selects the Player's Card

	function selectCARD() {
		if (lifepoints <= 0) return;
		if (cards.length === 0) {
			emptyDECK();
			return;
		}

		if (firstTimeHand) {
			firstTimeHand = false;
			document.getElementById("hand_card").style.visibility = "visible";
		} else {
			document.getElementById("prev_hand_card").style.visibility = "visible";
			document.getElementById("hand_suit_prev").innerHTML = document.getElementById("hand_suit_1").innerHTML;
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

		if (firstTimeTable) {
			firstTimeTable = false;
		} else {
			document.getElementById("prev_table_card").style.visibility = "visible";
			document.getElementById("table_suit_prev").innerHTML = document.getElementById("table_suit_1").innerHTML;
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

		document.getElementById("currentgambit").innerHTML = "Joker Gambit";

		selectCARD();

		if (color === 'Special') {
			currentscore = currentscore + value * multiplier;
			addORremove('streak', 1, '+');
			updateDISPLAYS();
			updateTESTVALUES();
			pickTABLECARD();
		} else {
			lifepoints = 0;
			document.getElementById("lifepoints").textContent = "0";
			streak = 0;
			document.getElementById("streak").textContent = "0";
			lastchance = 0;
			updateDISPLAYS();
			updateTESTVALUES();
			pickTABLECARD();
		}
	}

// Checks If Gambit is Regular or Value, and Runs It

	function runGAMBIT() {
		if (variable === "Special") {
			jokerGAMBIT();
		} else if (valueswitch > -1) {
			gambitVALUE();
		} else {
			gambit();
		}
		if (cards.length === 0) {
			emptyDECK();
			return;
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

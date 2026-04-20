	// Variables Used

	let playerwin = false;

	let currentlifepoints = 3;
	let currentblanks = 1;
	let currentstreak = 0;
	let currentlastchance = 1;

	let savedscore = 0;
	let currentscoretobeat = 0;
	let currentscore = 0;
	let lifepoints = 3;
	let blanks = 1;
	let streak = 0;
	let acevalue = 0;
	let lastchance = 1;
	let cards = [];

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

let mults = {
    // General Toggles & Values
    useSpec_value: false, gen_value: 1,
    useSpec_color: false, gen_color: 1,
    useSpec_suit: false, gen_suit: 3,
    useSpec_value_color: false, gen_value_color: 3, 
    useSpec_value_suit: false, gen_value_suit: 6,

    // Specific Values (Keep your previous ones here)
    value_low: 1, value_high: 1,
    color_red: 1, color_black: 1,
    suit_hearts: 3, suit_diamonds: 3, suit_clubs: 3, suit_spades: 3,
    value_color_low_red: 3, value_color_low_black: 3, value_color_high_red: 3, value_color_high_black: 3,
    value_suit_low_hearts: 6, value_suit_low_diamonds: 6, value_suit_low_clubs: 6, value_suit_low_spades: 6,
    value_suit_high_hearts: 6, value_suit_high_diamonds: 6, value_suit_high_clubs: 6, value_suit_high_spades: 6,
    joker: 10
};

	let winstreakamount = 1;
	let winlifeamount = 0;
	let lossstreakamount = -1;
	let losslifeamount = -1;

	let blankscoreamount = 2;
	let blankscoreop = "/";
	let blankstreakamount = 0;

	let skiplifeamount = 1;
	let skipstreakamount = 1;

	let sacrificelife = 3;
	let sacrificeblanks = 6;

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

	let lowredcardscounter = 0;
	let lowblackcardscounter = 0;
	let lowheartscardscounter = 0;
	let lowdiamondscardscounter = 0;
	let lowclubscardscounter = 0;
	let lowspadescardscounter = 0;

	let highredcardscounter = 0;
	let highblackcardscounter = 0;
	let highheartscardscounter = 0;
	let highdiamondscardscounter = 0;
	let highclubscardscounter = 0;
	let highspadescardscounter = 0;

	let empty = "empty";

	let savedlifepoints = 3;
	let savedblanks = 1;

	const GLOBAL_CAP = 20;

function enforceCaps() {
    if (lifepoints !== Infinity && lifepoints > GLOBAL_CAP) lifepoints = GLOBAL_CAP;
    if (streak !== Infinity && streak > GLOBAL_CAP) streak = GLOBAL_CAP;
    if (blanks !== Infinity && blanks > GLOBAL_CAP) blanks = GLOBAL_CAP;
    
    if(document.getElementById('lifepoints')) document.getElementById('lifepoints').textContent = (lifepoints === Infinity) ? "∞" : lifepoints;
    if(document.getElementById('streak')) document.getElementById('streak').textContent = (streak === Infinity) ? "∞" : streak;
    if(document.getElementById('blanks')) document.getElementById('blanks').textContent = (blanks === Infinity) ? "∞" : blanks;
}

function toggleSpecificCards(type) {
    const isChecked = document.getElementById(`use_custom_${type}`).checked;
    const area = document.getElementById(`custom_${type}_area`);
    if (area) area.style.display = isChecked ? "flex" : "none";
}

function toggleLIVES() {
    const checkbox = document.getElementById("toggle_lives");
    const lifeInput = document.getElementById("currentlifepoints");
    const stepperButtons = lifeInput.parentElement.querySelectorAll('button');

    if (checkbox.checked) {
        lifeInput.value = savedlifepoints;
        currentlifepoints = savedlifepoints;
        stepperButtons.forEach(btn => btn.disabled = false);
    } else {
        if (lifeInput.value !== "∞") {
            savedlifepoints = parseInt(lifeInput.value) || 3; 
        }
        lifeInput.value = "∞";
        currentlifepoints = Infinity; 
        stepperButtons.forEach(btn => btn.disabled = true);
    }
}

function toggleBLANKS() {
    const checkbox = document.getElementById("toggle_blanks");
    const blankInput = document.getElementById("currentblanks");
    const stepperButtons = blankInput.parentElement.querySelectorAll('button');

    if (checkbox.checked) {
        blankInput.value = savedblanks;
        currentblanks = savedblanks;
        stepperButtons.forEach(btn => btn.disabled = false);
    } else {
        if (blankInput.value !== "∞") {
            savedblanks = parseInt(blankInput.value) || 1; 
        }
        blankInput.value = "∞";
        currentblanks = Infinity; 
        stepperButtons.forEach(btn => btn.disabled = true);
    }
}

// Resets the Gambit Values

	function clearGAMBIT() {
		if (playerwin === true) return;
		if (lifepoints === 0) return;
		if (cards.length === 0) {
			emptyDECK();
			return;
		}

		const buttons_1 = document.querySelectorAll('.special_button_1');
		buttons_1.forEach(btn => btn.classList.remove('highlight'));

		const buttons_2 = document.querySelectorAll('.special_button_2');
		buttons_2.forEach(btn => btn.classList.remove('highlight'));

		document.getElementById("empty_gambit").innerHTML = "...";
		document.getElementById("gambit_left").innerHTML = "";
		document.getElementById("gambit_right").innerHTML = "";

		document.getElementById("set_button").disabled = true;

		setCURRENTGAMBIT();
		updateTESTVALUES();
	}

// Secondary Reset for Other Functions

	function clearGAMBIT2() {
		const buttons_1 = document.querySelectorAll('.special_button_1');
		buttons_1.forEach(btn => btn.classList.remove('highlight'));

		const buttons_2 = document.querySelectorAll('.special_button_2');
		buttons_2.forEach(btn => btn.classList.remove('highlight'));

		document.getElementById("empty_gambit").innerHTML = "...";
		document.getElementById("gambit_left").innerHTML = "";
		document.getElementById("gambit_right").innerHTML = "";

		variable = "None";
		element = "None";
		multiplier = 1;
		valueswitch = -1;
	}

// Changes the Text for Left-Side Gambits
	
	function setgambitLEFT(buttonelement) {
		if (playerwin === true) return;
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

		if (buttonelement === "Special") {
			textgambit_right.innerHTML = "";
			buttons.forEach(btn => {
				btn.classList.remove('highlight');
			});
			buttons_2.forEach(btn => {
				btn.classList.remove('highlight');
			});
		}

		if (buttonelement === mod1) {
			if (mod2 === "") {
				document.getElementById("empty_gambit").innerHTML = "...";
				document.getElementById("percentage").innerHTML = "";
			}
			textgambit_left.innerHTML = "";
			setCURRENTGAMBIT();
			updateTESTVALUES();
			return;
		}

		textgambit_left.innerHTML = buttonelement;
		
		setCURRENTGAMBIT();
		updateTESTVALUES();

		buttons.forEach(btn => {
			if (btn.textContent.trim() === buttonelement || btn.textContent.trim() === "I'm Feeling Lucky" && buttonelement === "Special") {
				btn.classList.add('highlight');

			}
		});
	}

// Changes the Text for Right-Side Gambits

	function setgambitRIGHT(buttonelement) {
		if (playerwin === true) return;
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
			document.getElementById("btn_gambit_Special").classList.remove('highlight'); // Changed from joker_button
		}

		document.getElementById("empty_gambit").innerHTML = "";

		let mod1 = textgambit_left.innerHTML;
		let mod2 = textgambit_right.innerHTML;

		if (buttonelement === mod2) {
			if (mod1 === "") {
				document.getElementById("empty_gambit").innerHTML = "...";
				document.getElementById("percentage").innerHTML = "";
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

function toggleSpecifics(cat) {
    const isChecked = document.getElementById(`use_spec_${cat}`).checked;
    mults[`useSpec_${cat}`] = isChecked;
    
    // Hide or Show the specific area
    const area = document.getElementById(`spec_${cat}_area`);
    if (area) area.style.display = isChecked ? "flex" : "none";
    
    updateTESTVALUES();
}

// Sets the Current Gambit Values

	function setCURRENTGAMBIT() {

        calculateCHANCE();

	gambit1 = document.getElementById("gambit_left").innerHTML;
	gambit2 = document.getElementById("gambit_right").innerHTML;

	const suitMap = {'♥️':'hearts', '♦️':'diamonds', '♣️':'clubs', '♠️':'spades'};
	let v = gambit1 ? gambit1.toLowerCase() : "";
	let c = "";
	if (gambit2) {
		if (['Red', 'Black'].includes(gambit2)) c = "color_" + gambit2.toLowerCase();
		else if (suitMap[gambit2]) c = "suit_" + suitMap[gambit2];
	}

	let key = "";
	if (gambit1 === "Special") key = "joker";
	else if (v && !c) key = "value_" + v;
	else if (!v && c) key = c;
	else if (v && c) {
		let prefix = c.split('_')[0]; 
		let suffix = c.split('_')[1]; 
		key = `value_${prefix}_${v}_${suffix}`;
	}
	
	if (key && mults[key]) {
		multiplier = mults[key];
	}

    let category = "";
    if (key.includes("value_suit")) category = "value_suit";
    else if (key.includes("value_color")) category = "value_color";
    else if (key.includes("value")) category = "value";
    else if (key.includes("color")) category = "color";
    else if (key.includes("suit")) category = "suit";

if (key === "joker") {
        multiplier = mults["joker"];
    } else {
        if (mults["useSpec_" + category]) {
            multiplier = mults[key] !== undefined ? mults[key] : 1; 
        } else {
            multiplier = mults["gen_" + category];
        }
    }

	if (gambit1 === "" && gambit2 === "") {
				valueswitch = -1;
				variable = "None";
				element = "None";

				document.getElementById("currentgambit").innerHTML = "Select Your Gambit:";
		}

		if (valuearray.includes(gambit1)) {
			if (colorarray.includes(gambit2)) {
				variable = gambit2;
				element = "color";

				document.getElementById("currentgambit").innerHTML = "Value & Color Gambit (x" + multiplier + ")";

				if (gambit1 === "Low") {
					valueswitch = 0;
				} else {
					valueswitch = 1;
				}

			} else if (suitarray.includes(gambit2)) {
				variable = gambit2;
				element = "suit";

				document.getElementById("currentgambit").innerHTML = "Value & Suit Gambit (x" + multiplier + ")";

				if (gambit1 === "Low") {
					valueswitch = 0;
				} else {
					valueswitch = 1;
				}

			} else {
				variable = "empty";
				element = "empty";

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

				document.getElementById("currentgambit").innerHTML = "Color Gambit (x" + multiplier + ")";

		}

		if (suitarray.includes(gambit2) && gambit1 === "") {
				valueswitch = -1;
				variable = gambit2;
				element = "suit";

				document.getElementById("currentgambit").innerHTML = "Suit Gambit (x" + multiplier + ")";

		}

		if (gambit1 === "Special") {
				valueswitch = -1;
				variable = gambit1;
				element = "color";

				document.getElementById("currentgambit").innerHTML = "Joker Gambit (x" + multiplier + ")";
		}

// --- NEW VALIDATION LOGIC ---
        let isGambitAllowed = true;
        let gambitNameForCheck = "";

        // Formulate the expected Checkbox ID based on the current combo
        if (gambit1 && gambit2) {
            const suitMapCheck = {'♥️':'Hearts', '♦️':'Diamonds', '♣️':'Clubs', '♠️':'Spades'};
            let g2Name = suitMapCheck[gambit2] ? suitMapCheck[gambit2] : gambit2;
            gambitNameForCheck = `use_gambit_${gambit1}_${g2Name}`;
        } else if (gambit1 && !gambit2) {
            gambitNameForCheck = `use_gambit_${gambit1}`;
        } else if (!gambit1 && gambit2) {
            const suitMapCheck = {'♥️':'Hearts', '♦️':'Diamonds', '♣️':'Clubs', '♠️':'Spades'};
            let g2Name = suitMapCheck[gambit2] ? suitMapCheck[gambit2] : gambit2;
            gambitNameForCheck = `use_gambit_${g2Name}`;
        }

        const setButton = document.getElementById("set_button");
        if (gambitNameForCheck) {
            const checkbox = document.getElementById(gambitNameForCheck);
            if (checkbox && !checkbox.checked) {
                isGambitAllowed = false;
            }
        }

        // Apply UI lockouts
        if (!isGambitAllowed && (gambit1 || gambit2)) {
            document.getElementById("empty_gambit").innerHTML += " <span style='color:#FF6666;'>(Disabled)</span>";
            setButton.disabled = true;
        } else {
            // Keep the "Set" button disabled if nothing is selected at all
            setButton.disabled = (gambit1 === "" && gambit2 === "");
        }

	}

// Calculates Percentages of Gambit Success

function calculateCHANCE() {
    const gambit = document.getElementById("full_gambit").textContent.trim();
    
    let counter = 0;

    // 2. Determine which counter to use
    switch(gambit) {
        case 'Low':     counter = lowcardscounter; break;
        case 'High':    counter = highcardscounter; break;
        case 'Red':     counter = redcardscounter; break;
        case 'Black':    counter = blackcardscounter; break;
        case '♥️':       counter = heartscardscounter; break;
        case '♦️':       counter = diamondscardscounter; break;
        case '♣️':       counter = clubscardscounter; break;
        case '♠️':       counter = spadescardscounter; break;
        case 'Special': counter = jokercardscounter; break;

        case 'Low Red':     counter = lowredcardscounter; break;
        case 'Low Black':    counter = lowblackcardscounter; break;
        case 'Low ♥️':     counter = lowheartscardscounter; break;
        case 'Low ♦️':    counter = lowdiamondscardscounter; break;
        case 'Low ♣️':     counter = lowclubscardscounter; break;
        case 'Low ♠️':    counter = lowspadescardscounter; break;

        case 'High Red':     counter = highredcardscounter; break;
        case 'High Black':    counter = highblackcardscounter; break;
        case 'High ♥️':     counter = highheartscardscounter; break;
        case 'High ♦️':    counter = highdiamondscardscounter; break;
        case 'High ♣️':     counter = highclubscardscounter; break;
        case 'High ♠️':    counter = highspadescardscounter; break;

        default:        counter = 0; document.getElementById("percentage").textContent = ""; return;
    }

    // 3. Safety check: avoid dividing by zero if the deck is empty
    if (cards.length > 0) {
        const chance = (counter / cards.length) * 100;
        document.getElementById("percentage").textContent = chance.toFixed(2) + "%";
    } else {
        document.getElementById("percentage").textContent = "";
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
		
                                      if (check === Infinity) return; 

		if (check === 0 && sign === "-") {
			return;
		} else {
			eval(variable + ' = ' + variable + sign + value);
		}	
		enforceCaps();
	}

function addORremoveCHEATS(variableId, value, sign, max) {
    const inputElement = document.getElementById(variableId);
    if (!inputElement) return;

    let currentValue = parseInt(inputElement.value) || 0;
    let newValue;

    if (sign === "-") {
        newValue = currentValue - value;
        if (newValue <= 0) {
            switch (variableId) {
                case 'currentscoretobeat': newValue = 1; break;
                case 'currentlifepoints': newValue = 1; break;
                case 'blankscoreamount': newValue = 1; break;
                case 'skiplifeamount':
                case 'skipstreakamount':
                case 'blankstreakamount':
		case 'lossstreakamount':
		case 'losslifeamount':
                    if (newValue < -20) newValue = -20; // Allow negatives for skipped/blanked modifiers
                    break;
                default: newValue = 0; break;
            }
        }
    } else if (sign === "+") {
        newValue = currentValue + value;
    }

    if (max !== undefined && newValue > max) {
        newValue = max;
    }

    inputElement.value = newValue;

    switch (variableId) {
        case 'currentscoretobeat': currentscoretobeat = newValue; break;
        case 'currentlifepoints': currentlifepoints = newValue; break;
        case 'currentblanks': currentblanks = newValue; break;
        case 'currentstreak': currentstreak = newValue; break;
        case 'currentlastchance': currentlastchance = newValue; break;
        case 'sacrificelife': sacrificelife = newValue; break;
        case 'sacrificeblanks': sacrificeblanks = newValue; break;
        case 'skiplifeamount': skiplifeamount = newValue; break;
        case 'skipstreakamount': skipstreakamount = newValue; break;
        case 'blankstreakamount': blankstreakamount = newValue; break;
        case 'blankscoreamount': blankscoreamount = newValue; break;
	case 'winstreakamount': winstreakamount = newValue; break;
	case 'winlifeamount': winlifeamount = newValue; break;
	case 'lossstreakamount': lossstreakamount = newValue; break;
	case 'losslifeamount': losslifeamount = newValue; break;
    }
}

// Set Up Multipliers

function setMULTDISPLAYS() {
    // Dynamically loop through the new specific UI elements
	Object.keys(mults).forEach(key => {
		let el = document.getElementById(key + "_mult_disp");
		if (el) el.value = mults[key];
	});
	document.getElementById("currentlifepoints").value = currentlifepoints;
	document.getElementById("currentblanks").value = currentblanks;
	document.getElementById("currentstreak").value = currentstreak;
	document.getElementById("currentlastchance").value = currentlastchance;
	document.getElementById("sacrificelife").value = sacrificelife;
	document.getElementById("sacrificeblanks").value = sacrificeblanks;
	document.getElementById("currentscoretobeat").value = savedscore;
	document.getElementById("skiplifeamount").value = skiplifeamount;
	document.getElementById("skipstreakamount").value = skipstreakamount;
	if(document.getElementById("blankstreakamount")) document.getElementById("blankstreakamount").value = blankstreakamount;
	if(document.getElementById("blankscoreamount")) document.getElementById("blankscoreamount").value = blankscoreamount;
	if(document.getElementById("blankscoreop_btn")) document.getElementById("blankscoreop_btn").innerHTML = `<span class="button_content2">${blankscoreop}</span>`;
	if(document.getElementById("winstreakamount")) document.getElementById("winstreakamount").value = winstreakamount;
	if(document.getElementById("winlifeamount")) document.getElementById("winlifeamount").value = winlifeamount;
	if(document.getElementById("lossstreakamount")) document.getElementById("lossstreakamount").value = lossstreakamount;
	if(document.getElementById("losslifeamount")) document.getElementById("losslifeamount").value = losslifeamount;
}

function changeMultiplier(type, delta) {
	if (mults[type] !== undefined) {
		mults[type] = Math.min(20, Math.max(0, mults[type] + delta));
		const displayElement = document.getElementById(type + "_mult_disp");
		if (displayElement) displayElement.value = mults[type];
	}
}

// Activate Endless Mode

function endlessMODE() {
    const checkbox = document.getElementById("endless_mode");
    const scoreInput = document.getElementById("currentscoretobeat");
    
    // 1. Find all buttons inside the same div as the score input
    // This targets only the buttons in that specific 'stepper'
    const stepperButtons = scoreInput.parentElement.querySelectorAll('button');

    if (checkbox.checked) {
        // FIX: Ensure we only save the score if it isn't already "∞"
        if (scoreInput.value !== "∞") {
            savedscore = scoreInput.value; 
        }
        scoreInput.value = "∞";
        currentscoretobeat = "∞";

        // 2. Disable all the buttons
        stepperButtons.forEach(btn => btn.disabled = true);
    } else {
        scoreInput.value = savedscore;
        currentscoretobeat = parseInt(savedscore);

        // 3. Re-enable the buttons
        stepperButtons.forEach(btn => btn.disabled = false);
    }
}

// Handle Deck Presets

let currentPresetIndex = 0;

const presets = [
    {
        name: "Default",
        config: {
            "endless": true,
            "finite_lives": true,
            "finite_blanks": true,
            "currentscoretobeat": 100,

            "mult-decks": 1,
            "use_custom_ranks": false,
            "use_custom_suits": false,
            "mult-rank-A": 1, "mult-rank-2": 1, "mult-rank-3": 1, "mult-rank-4": 1, "mult-rank-5": 1, "mult-rank-6": 1, "mult-rank-7": 1,
            "mult-rank-8": 1, "mult-rank-9": 1, "mult-rank-10": 1, "mult-rank-J": 1, "mult-rank-Q": 1, "mult-rank-K": 1,
            "mult-hearts": 1, "mult-diamonds": 1, "mult-clubs": 1, "mult-spades": 1, "mult-rank-J1": 1, "mult-rank-J2": 1,

            "useSpec_value": false,    "gen_value": 1,
            "useSpec_color": false,    "gen_color": 1,
            "useSpec_suit": false,     "gen_suit": 3,
            "useSpec_value_color": false, "gen_value_color": 3,
            "useSpec_value_suit": false,  "gen_value_suit": 6,

            "value_low": 1, "value_high": 1,
            "color_red": 1, "color_black": 1,
            "suit_hearts": 3, "suit_diamonds": 3, "suit_clubs": 3, "suit_spades": 3,
            "value_color_low_red": 3, "value_color_low_black": 3, "value_color_high_red": 3, "value_color_high_black": 3,
            "value_suit_low_hearts": 6, "value_suit_low_diamonds": 6, "value_suit_low_clubs": 6, "value_suit_low_spades": 6,
            "value_suit_high_hearts": 6, "value_suit_high_diamonds": 6, "value_suit_high_clubs": 6, "value_suit_high_spades": 6,
            "joker": 10,

            "lifepoints": 3, "blanks": 1, "streak": 0, "lastchance": 1,

            "sacrificelife": 3, "sacrificeblanks": 6,

            "winlifeamount": 0, "winstreakamount": 1,

            "losslifeamount": -1, "lossstreakamount": -1,
 
            "skiplifeamount": -1, "skipstreakamount": 1, 

            "active_Low": true, "active_High": true, "active_Red": true, "active_Black": true,
            "active_Hearts": true, "active_Diamonds": true, "active_Clubs": true, "active_Spades": true, "active_Special": true,

            "active_Low_Red": true, "active_Low_Black": true, "active_High_Red": true, "active_High_Black": true,

            "active_Low_Hearts": true, "active_Low_Diamonds": true, "active_Low_Clubs": true, "active_Low_Spades": true,
            "active_High_Hearts": true, "active_High_Diamonds": true, "active_High_Clubs": true, "active_High_Spades": true,

            "active_Blank": true, "active_Skip": true, "active_SacrificeLife": true, "active_SacrificeBlank": true,

            "blankstreakamount": 0, "blankscoreamount": 2, "blankscoreop": "/"
        }
    }
];

function applyPreset() {
    const preset = presets[currentPresetIndex];
    const cfg = preset.config;

    document.getElementById('preset-name').textContent = `${preset.name}`;

    // Apply specific Stepper values for Decks/Cards
  const quantities = ["mult-decks", "mult-rank-A", "mult-rank-2", "mult-rank-3", "mult-rank-4", "mult-rank-5", "mult-rank-6", "mult-rank-7", "mult-rank-8", "mult-rank-9", "mult-rank-10", "mult-rank-J", "mult-rank-Q", "mult-rank-K", "mult-hearts", "mult-diamonds", "mult-clubs", "mult-spades", "mult-rank-J1", "mult-rank-J2"];
    quantities.forEach(id => {
        if(document.getElementById(id)) document.getElementById(id).value = cfg[id] !== undefined ? Math.max(1, cfg[id]) : 1;
    });

    // Reset UI Toggles to Preset Configuration
    document.getElementById("use_custom_ranks").checked = cfg["use_custom_ranks"] || false;
    document.getElementById("use_custom_suits").checked = cfg["use_custom_suits"] || false;
    toggleSpecificCards('ranks');
    toggleSpecificCards('suits');

Object.keys(mults).forEach(key => {
        if (cfg[key] !== undefined) {
            // Apply failsafe: If the value is a number, ensure it's at least 0
            // If it's a boolean (like useSpec_), keep it as is
            if (typeof cfg[key] === "number") {
                mults[key] = Math.max(1, cfg[key]);
            } else {
                mults[key] = cfg[key];
            }

            if (key.startsWith("useSpec_")) {
                let id = key.replace("useSpec_", "use_spec_");
                let cb = document.getElementById(id);
                if (cb) {
                    cb.checked = mults[key];
                    toggleSpecifics(key.replace("useSpec_", ""));
                }
            } else {
                // Also update the UI input fields for general/specific multipliers 
                // so the user sees the corrected 0 instead of a negative number
                let inputId = key.replace("gen_", "gen-mult-").replace("_", "-");
                let inputEl = document.getElementById(inputId) || document.getElementById(key.replace("_", "-"));
                if (inputEl) {
                    inputEl.value = mults[key];
                }
            }
        }
    });

currentlifepoints = cfg["lifepoints"] !== undefined ? Math.max(1, cfg["lifepoints"]) : 3;
    currentblanks = cfg["blanks"] !== undefined ? Math.max(0, cfg["blanks"]) : 1;
    currentstreak = cfg["streak"] !== undefined ? Math.max(0, cfg["streak"]) : 0;
    currentlastchance = cfg["lastchance"] !== undefined ? Math.max(1, cfg["lastchance"]) : 1;
    sacrificelife = cfg["sacrificelife"] !== undefined ? Math.max(0, cfg["sacrificelife"]) : 3;
    sacrificeblanks = cfg["sacrificeblanks"] !== undefined ? Math.max(0, cfg["sacrificeblanks"]) : 6;
    skiplifeamount = cfg["skiplifeamount"] !== undefined ? cfg["skiplifeamount"] : 1;
    skipstreakamount = cfg["skipstreakamount"] !== undefined ? cfg["skipstreakamount"] : 1;

    winlifeamount = cfg["winlifeamount"] !== undefined ? cfg["winlifeamount"] : 1;
    winstreakamount = cfg["winstreakamount"] !== undefined ? cfg["winstreakamount"] : 1;
    losslifeamount = cfg["losslifeamount"] !== undefined ? cfg["losslifeamount"] : -1;
    lossstreakamount = cfg["lossstreakamount"] !== undefined ? cfg["lossstreakamount"] : -1;

blankstreakamount = cfg["blankstreakamount"] !== undefined ? cfg["blankstreakamount"] : 0;
  blankscoreamount = cfg["blankscoreamount"] !== undefined ? Math.max(1, cfg["blankscoreamount"]) : 2;
  blankscoreop = cfg["blankscoreop"] !== undefined ? cfg["blankscoreop"] : "/";
    
    // Process Active Gambits UI
const gambitNames = [
        'Low', 'High', 'Red', 'Black', 'Hearts', 'Diamonds', 'Clubs', 'Spades', 'Special',
        'Low_Red', 'High_Red', 'Low_Black', 'High_Black',
        'Low_Hearts', 'High_Hearts', 'Low_Diamonds', 'High_Diamonds',
        'Low_Clubs', 'High_Clubs', 'Low_Spades', 'High_Spades'
    ];
    gambitNames.forEach(name => {
        let active = cfg[`active_${name}`] !== undefined ? cfg[`active_${name}`] : true;
        let cb = document.getElementById(`use_gambit_${name}`);
        if (cb) {
            cb.checked = active;
        }
    });

  const actionNames = ['Blank', 'Skip', 'SacrificeLife', 'SacrificeBlank'];
    actionNames.forEach(name => {
        let active = cfg[`active_${name}`] !== undefined ? cfg[`active_${name}`] : true;
        let cb = document.getElementById(`use_action_${name}`);
        if (cb) {
            cb.checked = active;
            toggleActionBtn(name);
        }
    });

    currentscoretobeat = cfg["currentscoretobeat"] !== undefined ? Math.max(1, cfg["currentscoretobeat"]) : 100;
        savedscore = currentscoretobeat;
          document.getElementById("currentscoretobeat").value = currentscoretobeat;

// Seed the UI first so the toggle functions don't read stale data from the previous preset
    savedlifepoints = currentlifepoints; 
    document.getElementById("currentlifepoints").value = savedlifepoints;

    savedblanks = currentblanks; 
    document.getElementById("currentblanks").value = savedblanks;

    // Process Checkboxes for Infinity Logic
    document.getElementById("endless_mode").checked = cfg["endless"] || false;
    endlessMODE();
    
    document.getElementById("toggle_lives").checked = cfg["finite_lives"] !== undefined ? cfg["finite_lives"] : true;
    toggleLIVES();

    document.getElementById("toggle_blanks").checked = cfg["finite_blanks"] !== undefined ? cfg["finite_blanks"] : true;
    toggleBLANKS();

    setMULTDISPLAYS();

document.getElementById('currentlifepoints').value = currentlifepoints === Infinity ? "∞" : currentlifepoints;
    
    // Change the currentblanks line to this:
    document.getElementById('currentblanks').value = currentblanks === Infinity ? "∞" : currentblanks;
    
    document.getElementById('currentstreak').value = currentstreak;
    document.getElementById('currentlastchance').value = currentlastchance;
    document.getElementById('sacrificelife').value = sacrificelife;
    document.getElementById('sacrificeblanks').value = sacrificeblanks;
    
    document.getElementById('currentscoretobeat').value = currentscoretobeat;
    document.getElementById('scoretobeat').innerHTML = currentscoretobeat;
    setCURRENTGAMBIT();
}

applyPreset();

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

function changeQty(id, delta, min = 0) {
    let input = document.getElementById(id);
    let val = parseInt(input.value) || 0;
    val += delta;
    if (val < min) val = min;
    if (val > 10) val = 10; // Assuming 10 is your max based on earlier code
    input.value = val;
}

function changeAllValueMult(delta) {
    const keys = [
        'value_low', 'value_high'
    ];

    keys.forEach(key => {
        changeMultiplier(key, delta);
    });
}

function changeAllColorMult(delta) {
    const keys = [
        'color_red', 'color_black'
    ];

    keys.forEach(key => {
        changeMultiplier(key, delta);
    });
}

function changeAllSuitMult(delta) {
    const keys = [
        'suit_hearts', 'suit_diamonds', 'suit_clubs', 'suit_spades'
    ];

    keys.forEach(key => {
        changeMultiplier(key, delta);
    });
}

function changeAllValueColorMult(delta) {
    const keys = [
        'value_color_low_red', 'value_color_high_red', 'value_color_low_black', 'value_color_high_black'
    ];

    keys.forEach(key => {
        changeMultiplier(key, delta);
    });
}

function changeAllValueSuitMult(delta) {
    const keys = [
        'value_suit_low_hearts', 'value_suit_low_diamonds', 'value_suit_low_clubs', 'value_suit_low_spades', 
        'value_suit_high_hearts', 'value_suit_high_diamonds', 'value_suit_high_clubs', 'value_suit_high_spades'
    ];

    keys.forEach(key => {
        changeMultiplier(key, delta);
    });
}

function changeAllRanks(delta) {
    // List all the IDs that should be affected by the "Main" stepper
    const rankIds = [
        'mult-rank-A', 'mult-rank-2', 'mult-rank-3', 
        'mult-rank-4', 'mult-rank-5', 'mult-rank-6', 'mult-rank-7', 
        'mult-rank-8', 'mult-rank-9', 'mult-rank-10', 'mult-rank-J', 
        'mult-rank-Q', 'mult-rank-K', 'mult-rank-J1', 'mult-rank-J2'
    ];

    // Run the existing changeQty function for every ID in the list
    rankIds.forEach(id => {
        if (document.getElementById(id)) {
            changeQty(id, delta);
        }
    });
}

function changeAllSuits(delta) {
    // List all the IDs that should be affected by the "Main" stepper
    const rankIds = [
        'mult-hearts', 'mult-diamonds', 'mult-clubs', 'mult-spades'
    ];

    // Run the existing changeQty function for every ID in the list
    rankIds.forEach(id => {
        if (document.getElementById(id)) {
            changeQty(id, delta);
        }
    });
}

function toggleBlankOp() {
    if (blankscoreop === "/") {
        blankscoreop = "*";
    } else {
        blankscoreop = "/";
    }
    const btn = document.getElementById("blankscoreop_btn");
    if (btn) btn.innerHTML = `<span class="button_content2">${blankscoreop}</span>`;
}

function toggleActionBtn(name) {
    const cb = document.getElementById(`use_action_${name}`);
    const btn = document.getElementById(`btn_action_${name}`);
    if (btn && cb) {
        btn.disabled = !cb.checked;
    }
}

// Generate Deck

function generateCustomDeck() {
    const decks = parseInt(document.getElementById('mult-decks').value) || 1;
    const useCustomSuits = document.getElementById('use_custom_suits').checked;
    const useCustomRanks = document.getElementById('use_custom_ranks').checked;

    // 1. Compile Suits
    const selectedSuits = [];
    const suitIds = { "♥️": "hearts", "♦️": "diamonds", "♣️": "clubs", "♠️": "spades" };
    standardSuits.forEach(s => {
        const id = suitIds[s.suit];
        const mult = useCustomSuits ? Math.min(Math.max(parseInt(document.getElementById(`mult-${id}`).value) || 0, 0), 10) : 1;
        for (let i = 0; i < mult; i++) selectedSuits.push(s);
    });

    // 2. Compile Ranks
    const selectedRanks = [];
    standardRanks.forEach(r => {
        const id = `mult-rank-${r.rank}`;
        const mult = useCustomRanks ? Math.min(Math.max(parseInt(document.getElementById(id).value) || 0, 0), 10) : 1;
        for (let i = 0; i < mult; i++) selectedRanks.push(r);
    });

    // 3. Compile Base Deck Combinations
    const baseCombinations = [];
    selectedSuits.forEach(({ suit, color }) => {
        selectedRanks.forEach(({ rank, value }) => {
            baseCombinations.push({ rank, value, suit, color });
        });
    });

    // 4. Factor in Total Decks and Jokers
  const finalDeck = [];
    for (let i = 0; i < decks; i++) {
        finalDeck.push(...baseCombinations); 
    }

    // Pull multipliers for the split jokers (default to 1 if custom ranks is unchecked)
    const j1Mult = useCustomRanks ? Math.min(Math.max(parseInt(document.getElementById('mult-rank-J1').value) || 0, 0), 10) : 1;
    const j2Mult = useCustomRanks ? Math.min(Math.max(parseInt(document.getElementById('mult-rank-J2').value) || 0, 0), 10) : 1;

    // Push Joker 1 (Index 0 in standardExtras array)
    if (standardExtras.length > 0) {
        for (let i = 0; i < j1Mult * decks; i++) finalDeck.push(standardExtras[0]);
    }
    
    // Push Joker 2 (Index 1 in standardExtras array)
    if (standardExtras.length > 1) {
        for (let i = 0; i < j2Mult * decks; i++) finalDeck.push(standardExtras[1]);
    }

    // 5. Update the Global Card Counters via Direct Filtering (100% Accurate)
    heartscardscounter = finalDeck.filter(c => c.suit === '♥️').length;
    diamondscardscounter = finalDeck.filter(c => c.suit === '♦️').length;
    clubscardscounter = finalDeck.filter(c => c.suit === '♣️').length;
    spadescardscounter = finalDeck.filter(c => c.suit === '♠️').length;
    
    redcardscounter = finalDeck.filter(c => c.color === 'Red').length;
    blackcardscounter = finalDeck.filter(c => c.color === 'Black').length;
    jokercardscounter = finalDeck.filter(c => c.color === 'Special').length;
    
    lowcardscounter = finalDeck.filter(c => c.value <= 7 && c.color !== 'Special').length;
    highcardscounter = finalDeck.filter(c => c.value >= 8 && c.value !== 20 && c.color !== 'Special').length;
    acecardscounter = finalDeck.filter(c => c.rank === 'A').length;

    lowredcardscounter = finalDeck.filter(c => c.value <= 7 && c.color === 'Red').length;
    lowblackcardscounter = finalDeck.filter(c => c.value <= 7 && c.color === 'Black').length;
    lowheartscardscounter = finalDeck.filter(c => c.value <= 7 && c.suit === '♥️').length;
    lowdiamondscardscounter = finalDeck.filter(c => c.value <= 7 && c.suit === '♦️').length;
    lowclubscardscounter = finalDeck.filter(c => c.value <= 7 && c.suit === '♣️').length;
    lowspadescardscounter = finalDeck.filter(c => c.value <= 7 && c.suit === '♠️').length;

    highredcardscounter = finalDeck.filter(c => c.value >= 8 && c.value !== 20 && c.color === 'Red').length;
    highblackcardscounter = finalDeck.filter(c => c.value >= 8 && c.value !== 20 && c.color === 'Black').length;
    highheartscardscounter = finalDeck.filter(c => c.value >= 8 && c.value !== 20 && c.suit === '♥️').length;
    highdiamondscardscounter = finalDeck.filter(c => c.value >= 8 && c.value !== 20 && c.suit === '♦️').length;
    highclubscardscounter = finalDeck.filter(c => c.value >= 8 && c.value !== 20 && c.suit === '♣️').length;
    highspadescardscounter = finalDeck.filter(c => c.value >= 8 && c.value !== 20 && c.suit === '♠️').length;

    // Update the UI
    document.getElementById("heartscards").innerHTML = heartscardscounter;
    document.getElementById("diamondscards").innerHTML = diamondscardscounter;
    document.getElementById("clubscards").innerHTML = clubscardscounter;
    document.getElementById("spadescards").innerHTML = spadescardscounter;
    document.getElementById("redcards").innerHTML = redcardscounter;
    document.getElementById("blackcards").innerHTML = blackcardscounter;
    document.getElementById("lowcards").innerHTML = lowcardscounter;
    document.getElementById("highcards").innerHTML = highcardscounter;
    document.getElementById("acecards").innerHTML = acecardscounter;
    document.getElementById("jokercards").innerHTML = jokercardscounter;

    return shuffleDeck(finalDeck);
}

//  Skips a Round

	function skipROUND() {
		if (playerwin === true) return;
		if (lifepoints === 0) return;
		if (cards.length === 0) {
			emptyDECK();
			return;
		}

		// Calculate Life Cost
		if (lifepoints !== Infinity) {
			lifepoints += skiplifeamount;
			if (lifepoints < 0) lifepoints = 0;
			document.getElementById("lifepoints").textContent = lifepoints;
		}

		// Calculate Streak Effect
		streak += skipstreakamount;
		if (streak < 0) streak = 0;
		document.getElementById("streak").textContent = streak;

		valueswitch = -1;
		variable = "Skip";
		element = "none";
		multiplier = 1;
		
		updateTESTVALUES();
		waitforPLAYER(true);
		
		document.getElementById("currentgambit").innerHTML = "Round Skipped";
		
		selectCARD();

		document.getElementById("percentage").innerHTML = "";
		enforceCaps();
	}

// Last Chance Setup

	function lastCHANCE(variable) {
		if (lastchance === 0) return;

		lastchance = lastchance - 1;

		const randomNumber = Math.floor(Math.random() * 4) + 1;
		document.getElementById("output").textContent = randomNumber;
		const diceroll = Number(variable);

		if (randomNumber === diceroll) {

			document.getElementById("table_card").style.borderStyle = "solid";
			document.getElementById("table_card").style.background = "white";

			pickTABLECARD();
			
			addORremove('lifepoints', 1, '+');
			document.getElementById("currentgambit").innerHTML = "One More Chance!";
			document.getElementById("empty_gambit").innerHTML = "...";
			document.getElementById("gambit_left").innerHTML = "";
			document.getElementById("gambit_right").innerHTML = "";
			document.getElementById("last_chance").style.display = "none";
			document.getElementById("gameplay_buttons").style.display = "block";

		} else {

			if (lastchance >= 1) {
				document.getElementById("currentgambit").innerHTML = "Last Chance Available! (" + lastchance + ")";
				return;
			} else {
				document.getElementById("currentgambit").innerHTML = "Game Over";
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

function showELEMENTFLEX(elementId) {
    // 1. List all your sections in one place
    const sections = ['card_options', 'mult_options', 'gambit_options', 'stats_options', 'misc_options', 'win_loss_options', 'actions_options'];
    
    const target = document.getElementById(elementId);
    if (!target) return; // Safety check

    // 2. Check if the one we clicked is already open
    const isAlreadyOpen = target.style.display === 'flex';

    // 3. Hide EVERY section in the list
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });

    // 4. If it wasn't open, open it now
    if (!isAlreadyOpen) {
        target.style.display = 'flex';
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
			document.getElementById("score").innerHTML = "0";
			document.getElementById("highscore").innerHTML = "0";
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
		document.getElementById("empty_gambit").textContent = "...";
		document.getElementById("percentage").innerHTML = "";

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

		calculateCHANCE();

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

let lifeDisplay = (lifepoints === Infinity) ? "∞" : lifepoints;
		let blanksDisplay = (blanks === Infinity) ? "∞" : blanks; // <-- Add this

		// Determine the spacing (double break if history already exists)
		let spacing = (document.getElementById("card_history").innerHTML !== "") ? "<br><br>" : "<br>";

		// Build the entry (Update the B: value to use blanksDisplay)
		let historyEntry = gambithistoryvalue + gambithistoryvariable + " (x" + multiplier + ")" + 
		                   "<br>L:" + lifeDisplay + " B:" + blanksDisplay + " S:" + streak + " Score: " + currentscore + 
                           "<br>Table: " + result2 + "<br>Hand: " + result + spacing;

// Prepend to history
document.getElementById("card_history").innerHTML = historyEntry + document.getElementById("card_history").innerHTML;

		if (currentscore >= currentscoretobeat) {
			clearGAMBIT();
			currentscore = currentscoretobeat;
			document.getElementById("score").innerHTML = currentscore;
			document.getElementById("table_suit_1").innerHTML = "";
			document.getElementById("table_number").innerHTML = "";
			document.getElementById("table_suit_2").innerHTML = "";
			document.getElementById("table_card").style.borderStyle = "dotted";
			document.getElementById("table_card").style.background = "none";
			document.getElementById("currentgambit").innerHTML = "You Won!";
			playerwin = true;
			return;
		}

		if (lifepoints === 0 && lastchance > 0) {
			document.getElementById("lifepoints").textContent = "0";
			document.getElementById("currentgambit").innerHTML = "Last Chance Available! (" + lastchance + ")";
			document.getElementById("table_suit_1").innerHTML = "";
			document.getElementById("table_number").innerHTML = "";
			document.getElementById("table_suit_2").innerHTML = "";
			document.getElementById("table_card").style.borderStyle = "dotted";
			document.getElementById("table_card").style.background = "none";
			document.getElementById("empty_gambit").innerHTML = "...";
			document.getElementById("gambit_left").innerHTML = "";
			document.getElementById("gambit_right").innerHTML = "";
			document.getElementById("gameplay_buttons").style.display = "none";
			document.getElementById("last_chance").style.display = "block";
			document.getElementById("continue_button").disabled = true;
			document.getElementById("percentage").innerHTML = "";
			clearGAMBIT2();
			return;
		} else if (lifepoints === 0) {
			document.getElementById("lifepoints").textContent = "0";
			document.getElementById("currentgambit").innerHTML = "Game Over";
			document.getElementById("table_suit_1").innerHTML = "";
			document.getElementById("table_number").innerHTML = "";
			document.getElementById("table_suit_2").innerHTML = "";
			document.getElementById("table_card").style.borderStyle = "dotted";
			document.getElementById("table_card").style.background = "none";

			document.getElementById("hand_suit_1").innerHTML = "";
			document.getElementById("hand_number").innerHTML = "";
			document.getElementById("hand_suit_2").innerHTML = "";
			document.getElementById("hand_card").style.borderStyle = "dotted";
			document.getElementById("hand_card").style.background = "none";

			document.getElementById("empty_gambit").innerHTML = "...";
			document.getElementById("gambit_left").innerHTML = "";
			document.getElementById("gambit_right").innerHTML = "";
			document.getElementById("percentage").innerHTML = "";
			clearGAMBIT2();
			return;
		} else if (lifepoints > 0) pickTABLECARD(); return;
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

		document.getElementById("hand_card").style.borderStyle = "dotted";
		document.getElementById("hand_card").style.background = "none";

		document.getElementById("table_card").style.borderStyle = "solid";
		document.getElementById("table_card").style.background = "white";

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
		lifepoints = currentlifepoints;
		blanks = currentblanks;
		streak = currentstreak;
		lastchance = currentlastchance;
		acevalue = 0;
		playerwin = false;

		document.getElementById("scoretobeat").innerHTML = currentscoretobeat;
		document.getElementById("score").innerHTML = currentscore;
		document.getElementById("lifepoints").textContent = lifepoints === Infinity ? "∞" : lifepoints;
		document.getElementById("blanks").textContent = blanks === Infinity ? "∞" : blanks;
		document.getElementById("streak").innerHTML = streak;
		document.getElementById("output").innerHTML = "0";

		document.getElementById("tablecard").textContent = "None";
		document.getElementById("card_history").innerHTML = "";
		document.getElementById("remaining").innerHTML = cards.length;

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
		document.getElementById("percentage").innerHTML = "";

		valueswitch = -1;
		variable = "None";
		element = "None";
		multiplier = 1;

		document.getElementById("empty_gambit").innerHTML = "...";
		document.getElementById("gambit_left").innerHTML = "";
		document.getElementById("gambit_right").innerHTML = "";

		document.getElementById("currentgambit").innerHTML = "Select Your Gambit:";

		const buttons_1 = document.querySelectorAll('.special_button_1');
		buttons_1.forEach(btn => btn.classList.remove('highlight'));

		const buttons_2 = document.querySelectorAll('.special_button_2');
		buttons_2.forEach(btn => btn.classList.remove('highlight'));

		document.getElementById("set_button").disabled = true;

		pickTABLECARD();
		updateTESTVALUES();
	}

// Life Point Related Functions

function sacrificeSTREAK(type) {
    if (playerwin === true) return;
    if (lifepoints === 0) return;
    if (cards.length === 0) {
        emptyDECK();
        return;
    }

	const buttons_1 = document.querySelectorAll('.special_button_1');
	buttons_1.forEach(btn => btn.classList.remove('highlight'));

	const buttons_2 = document.querySelectorAll('.special_button_2');
	buttons_2.forEach(btn => btn.classList.remove('highlight'));

	document.getElementById("gambit_left").innerHTML = "";
	document.getElementById("gambit_right").innerHTML = "";

	valueswitch = -1;
	variable = "Sacrifice";
	element = type;
	multiplier = 1;

	updateTESTVALUES();

    var streaknumber = (type === "lifepoints") ? sacrificelife : sacrificeblanks;

    // 1. Check if user has enough streak first
    if (streak < streaknumber) {
        document.getElementById("currentgambit").textContent = "Not Enough Streak";
        document.getElementById("empty_gambit").textContent = "(" + streak + "/" + streaknumber + ")";
	document.getElementById("percentage").innerHTML = "";
        return;
    }

    if (type === 'lifepoints') {
        if (lifepoints !== Infinity) {
            if (lifepoints >= GLOBAL_CAP) {
		  enforceCaps();
                  document.getElementById("currentgambit").textContent = "Max HP Reached";
                  document.getElementById("empty_gambit").textContent = "...";
                  document.getElementById("percentage").innerHTML = "";
                  return;
            }
            lifepoints++; 
            document.getElementById("lifepoints").textContent = lifepoints;
        }
        document.getElementById("currentgambit").textContent = "Streak Sacrificed";
        document.getElementById("empty_gambit").textContent = "(+1 Life)";
        document.getElementById("percentage").innerHTML = "";
    } else if (type === 'blanks') {
        if (blanks >= GLOBAL_CAP) {
	      enforceCaps();
              document.getElementById("currentgambit").textContent = "Max Blanks Reached";
              document.getElementById("empty_gambit").textContent = "...";
              document.getElementById("percentage").innerHTML = "";
              return;
        }
        blanks++; // Update global variable
        document.getElementById("blanks").textContent = blanks;
        document.getElementById("currentgambit").textContent = "Streak Sacrificed";
        document.getElementById("empty_gambit").textContent = "(+1 Blank)";
	document.getElementById("percentage").innerHTML = "";
    }

    streak -= streaknumber;
    document.getElementById("streak").textContent = streak;

    enforceCaps();
}

// Blank Related Functions

	function useBLANK() {
		if (playerwin === true) return;
		if (blanks === 0) {
			document.getElementById("currentgambit").innerHTML = "No Blanks Available";
			document.getElementById("percentage").innerHTML = "";
			return;
		};
		if (lifepoints === 0) return;
		if (cards.length === 0) {
			emptyDECK();
			return;
		}

		valueswitch = -1;
		variable = "Blank";
		element = "none";
		multiplier = 1;

		updateTESTVALUES();
		waitforPLAYER(true);
		
		document.getElementById("currentgambit").innerHTML = "Blank Used";

		let amount = blankscoreamount === 0 ? 1 : blankscoreamount; // Failsafe
		if (blankscoreop === "/") {
			currentscore = Math.floor(currentscore + (streak + acevalue) / amount);
		} else {
			currentscore = Math.floor(currentscore + (streak + acevalue) * amount);
		}

		// Apply the Streak modifier
		streak += blankstreakamount;
		if (streak < 0) streak = 0;
		document.getElementById("streak").textContent = streak;

		addORremove('blanks', 1, '-');

		selectCARD();

		document.getElementById("percentage").innerHTML = "";
		enforceCaps();
	}

// Selects the Player's Card

	function selectCARD() {
		if (playerwin === true) return;
		if (cards.length === 0) {
			emptyDECK();
			return;
		}

		document.getElementById("hand_card").style.borderStyle = "solid";
		document.getElementById("hand_card").style.background = "white";

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
			lowcardscounter = lowcardscounter - 1;
			document.getElementById("lowcards").innerHTML = lowcardscounter;
		
		}

		if (value >= 8 && value !== 20) {
		
			valuemodifierhand = 1;
			highcardscounter = highcardscounter - 1;
			document.getElementById("highcards").innerHTML = highcardscounter;
		
		}

		if (rank === "A") {
			acecardscounter = acecardscounter - 1;
			document.getElementById("acecards").innerHTML = acecardscounter;
		}

		if (color === "Red") {
			redcardscounter = redcardscounter - 1;
			document.getElementById("redcards").innerHTML = redcardscounter;
		}

		if (color === "Black") {
			blackcardscounter = blackcardscounter - 1;
			document.getElementById("blackcards").innerHTML = blackcardscounter;
		}

		if (color === "Special") {
			jokercardscounter = jokercardscounter - 1;
			document.getElementById("jokercards").innerHTML = jokercardscounter;
		}

		if (suit === "♣️") {
			clubscardscounter = clubscardscounter - 1;
			document.getElementById("clubscards").innerHTML = clubscardscounter;
		}

		if (suit === "♠️") {
			spadescardscounter = spadescardscounter - 1;
			document.getElementById("spadescards").innerHTML = spadescardscounter;
		}

		if (suit === "♦️") {
			diamondscardscounter = diamondscardscounter - 1;
			document.getElementById("diamondscards").innerHTML = diamondscardscounter;
		}

		if (suit === "♥️") {
			heartscardscounter = heartscardscounter - 1;
			document.getElementById("heartscards").innerHTML = heartscardscounter;
		}

		document.getElementById("hand_suit_1").innerHTML = suit;
		document.getElementById("hand_number").innerHTML = rank;
		document.getElementById("hand_suit_2").innerHTML = suit;
	}

// Picks the Next Table Card

	function pickTABLECARD() {
		if (playerwin === true) return;
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
			lowcardscounter = lowcardscounter - 1;
			document.getElementById("lowcards").innerHTML = lowcardscounter;
		
		}

		if (value >= 8 && value !== 20) {
		
			valuemodifiertable = 1;
			highcardscounter = highcardscounter - 1;
			document.getElementById("highcards").innerHTML = highcardscounter;
		
		}

		if (rank === "A") {
			acecardscounter = acecardscounter - 1;
			document.getElementById("acecards").innerHTML = acecardscounter;
		}

		if (color === "Red") {
			redcardscounter = redcardscounter - 1;
			document.getElementById("redcards").innerHTML = redcardscounter;
		}

		if (color === "Black") {
			blackcardscounter = blackcardscounter - 1;
			document.getElementById("blackcards").innerHTML = blackcardscounter;
		}

		if (color === "Special") {
			jokercardscounter = jokercardscounter - 1;
			document.getElementById("jokercards").innerHTML = jokercardscounter;
		}

		if (suit === "♣️") {
			clubscardscounter = clubscardscounter - 1;
			document.getElementById("clubscards").innerHTML = clubscardscounter;
		}

		if (suit === "♠️") {
			spadescardscounter = spadescardscounter - 1;
			document.getElementById("spadescards").innerHTML = spadescardscounter;
		}

		if (suit === "♦️") {
			diamondscardscounter = diamondscardscounter - 1;
			document.getElementById("diamondscards").innerHTML = diamondscardscounter;
		}

		if (suit === "♥️") {
			heartscardscounter = heartscardscounter - 1;
			document.getElementById("heartscards").innerHTML = heartscardscounter;
		}

		document.getElementById("table_suit_1").innerHTML = suit;
		document.getElementById("table_number").innerHTML = rank;
		document.getElementById("table_suit_2").innerHTML = suit;
	}

// Checks If Gambit is Regular or Value, and Runs It

	function runGAMBIT() {
		if (cards.length === 0) {
			emptyDECK();
			return;
		}
		if (variable === "Special") {
			jokerGAMBIT();
			return;
		} else if (valueswitch > -1) {
			gambitVALUE();
			return;
		} else {
			gambit();
			return;
		}
	}

// Sets the Joker Gambit

	function jokerGAMBIT() {
		if (playerwin === true) return;
		if (lifepoints === 0) return;
		if (cards.length === 0) {
			emptyDECK();
			return;
		}

		document.getElementById("currentgambit").innerHTML = "Joker Gambit";

		selectCARD();

		if (color === 'Special') {
			currentscore = currentscore + acevalue * multiplier;
			if (winstreakamount !== 0) addORremove('streak', Math.abs(winstreakamount), winstreakamount < 0 ? '-' : '+');
			if (winlifeamount !== 0) addORremove('lifepoints', Math.abs(winlifeamount), winlifeamount < 0 ? '-' : '+');
			updateTESTVALUES();
			waitforPLAYER(true);
		} else {
			lifepoints = 0;
			document.getElementById("lifepoints").textContent = "0";
			streak = 0;
			document.getElementById("streak").textContent = "0";
			blanks = 0;
			document.getElementById("blanks").textContent = "0";
			lastchance = 0;
			waitforPLAYER(false);
			updateTESTVALUES();
		}
	}

// Sets the Color, Suit, Number and Number & Suit Gambits

	function gambit() {
		if (playerwin === true) return;
		if (document.getElementById("gambit_left").innerHTML === "" && document.getElementById("gambit_right").innerHTML === "") return;
		if (lifepoints === 0) return;
		if (cards.length === 0) {
			emptyDECK();
			return;
		}

		selectCARD();

		eval('var check = ' + element);

		if (variable === check || color === 'Special') {
			currentscore = currentscore + (streak + acevalue) * multiplier;
			if (winstreakamount !== 0) addORremove('streak', Math.abs(winstreakamount), winstreakamount < 0 ? '-' : '+');
			if (winlifeamount !== 0) addORremove('lifepoints', Math.abs(winlifeamount), winlifeamount < 0 ? '-' : '+');
			waitforPLAYER(true);
		} else {
			lostGAMBIT();
		}
	}

// Sets the High and Low Gambits

	function gambitVALUE() {
		if (playerwin === true) return;
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
				currentscore = currentscore + (streak + acevalue) * multiplier;
				if (winstreakamount !== 0) addORremove('streak', Math.abs(winstreakamount), winstreakamount < 0 ? '-' : '+');
				if (winlifeamount !== 0) addORremove('lifepoints', Math.abs(winlifeamount), winlifeamount < 0 ? '-' : '+');
				waitforPLAYER(true);
			} else {
				lostGAMBIT();
			}
		} else {
			if (valuemodifierhand === valueswitch && variable === check || color === 'Special') {
				currentscore = currentscore + (streak + acevalue) * multiplier;
				if (winstreakamount !== 0) addORremove('streak', Math.abs(winstreakamount), winstreakamount < 0 ? '-' : '+');
				if (winlifeamount !== 0) addORremove('lifepoints', Math.abs(winlifeamount), winlifeamount < 0 ? '-' : '+');
				waitforPLAYER(true);
			} else {
				lostGAMBIT();
			}
		}
	}

// Activates When the Gambit is Lost

	function lostGAMBIT() {
			if (lossstreakamount !== 0) addORremove('streak', Math.abs(lossstreakamount), lossstreakamount < 0 ? '-' : '+');
			if (losslifeamount !== 0) addORremove('lifepoints', Math.abs(losslifeamount), losslifeamount < 0 ? '-' : '+');
			waitforPLAYER(false);
	}

// Wait for the player to continue

	function waitforPLAYER(wonGambit) {

		const buttons_1 = document.querySelectorAll('.special_button_1');
		buttons_1.forEach(btn => btn.classList.remove('highlight'));

		const buttons_2 = document.querySelectorAll('.special_button_2');
		buttons_2.forEach(btn => btn.classList.remove('highlight'));

		// CHANGE: Target only specific game buttons to avoid disabling menu steppers
		const gameButtons = document.querySelectorAll('#gameplay_buttons button, #set_button, #clear_button, #reset_button, #card_history_button, #settings_button');
		gameButtons.forEach(btn => btn.disabled = true);

		if (wonGambit) {
			document.getElementById("empty_gambit").innerHTML = "...";
			document.getElementById("gambit_left").innerHTML = "";
			document.getElementById("gambit_right").innerHTML = "";
			document.getElementById("currentgambit").innerHTML = "Success";
			setTimeout(resumeGAME, 1500);
		} else {
			document.getElementById("empty_gambit").innerHTML = "...";
			document.getElementById("gambit_left").innerHTML = "";
			document.getElementById("gambit_right").innerHTML = "";
			document.getElementById("currentgambit").innerHTML = "Fail";
			setTimeout(resumeGAME, 1500);
		}
	}

	function resumeGAME() {
		const gameButtons = document.querySelectorAll('#gameplay_buttons button, #set_button, #clear_button, #reset_button, #card_history_button, #settings_button');
		gameButtons.forEach(btn => {
			btn.disabled = false;
            
			// Actions still use normal toggling
			if (btn.id && btn.id.startsWith('btn_action_')) {
				let name = btn.id.replace('btn_action_', '');
				let cb = document.getElementById(`use_action_${name}`);
				if (cb) btn.disabled = !cb.checked;
			}
		});

		document.getElementById("currentgambit").innerHTML = "Select Your Gambit:";
		document.getElementById("set_button").disabled = true; // Ensure set is disabled until a gambit is selected

		document.getElementById("hand_card").style.borderStyle = "dotted";
		document.getElementById("hand_card").style.background = "none";

		document.getElementById("hand_suit_1").innerHTML = "";
		document.getElementById("hand_number").innerHTML = "";
		document.getElementById("hand_suit_2").innerHTML = "";

		updateDISPLAYS();
	}

	reset();

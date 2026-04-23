	// Variables Used

	let playerwin = false;

	let currentlifepoints = 3;
	let currentblanks = 1;
	let currentstreak = 0;
	let currentlastchance = 1;
	let lastchancedice = 4;

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
    let multiplierOp = "*";
	let valueswitch = -1;

	let value = "";
    let currentPoints = 0;
	let rank = "";
	let suit = "";
	let color = "";
	let result = "";
	let result2 = "";
	let valuemodifiertable = 0;
	let valuemodifierhand = 0;
	let usedstreak = 0;

    let cardPoints = { "A": 20, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": 10, "Q": 10, "K": 10, "J1": 20, "J2": 20 };
	let winloss = "";

let mults = {
    useSpec_value: false, gen_value: 1, gen_value_op: "*",
    useSpec_color: false, gen_color: 1, gen_color_op: "*",
    useSpec_suit: false, gen_suit: 3, gen_suit_op: "*",
    useSpec_value_color: false, gen_value_color: 3, gen_value_color_op: "*", 
    useSpec_value_suit: false, gen_value_suit: 6, gen_value_suit_op: "*",

    value_low: 1, value_low_op: "*", value_high: 1, value_high_op: "*",
    color_red: 1, color_red_op: "*", color_black: 1, color_black_op: "*",
    suit_hearts: 3, suit_hearts_op: "*", suit_diamonds: 3, suit_diamonds_op: "*", suit_clubs: 3, suit_clubs_op: "*", suit_spades: 3, suit_spades_op: "*",
    value_color_low_red: 3, value_color_low_red_op: "*", value_color_low_black: 3, value_color_low_black_op: "*", value_color_high_red: 3, value_color_high_red_op: "*", value_color_high_black: 3, value_color_high_black_op: "*",
    value_suit_low_hearts: 6, value_suit_low_hearts_op: "*", value_suit_low_diamonds: 6, value_suit_low_diamonds_op: "*", value_suit_low_clubs: 6, value_suit_low_clubs_op: "*", value_suit_low_spades: 6, value_suit_low_spades_op: "*",
    value_suit_high_hearts: 6, value_suit_high_hearts_op: "*", value_suit_high_diamonds: 6, value_suit_high_diamonds_op: "*", value_suit_high_clubs: 6, value_suit_high_clubs_op: "*", value_suit_high_spades: 6, value_suit_high_spades_op: "*",
    joker: 10, joker_op: "*"
};

	let winstreakamount = 1; let winstreakop = "+";
	let winlifeamount = 0;   let winlifeop = "+";
	let lossstreakamount = 1; let lossstreakop = "-";
	let losslifeamount = 2;   let losslifeop = "-";

	let blankscoreamount = 2;
	let blankscoreop = "/";
	let blanklifeamount = 0;  let blanklifeop = "+";
	let blankstreakamount = 0; let blankstreakop = "+";

	let skipscoreamount = 0;
	let skipscoreop = "/";
	let skiplifeamount = 1;   let skiplifeop = "-";
	let skipstreakamount = 1; let skipstreakop = "+";

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
	let scorechangeamount = '100';

	let gameplaybtn = document.getElementById("gameplay_buttons").querySelectorAll('button');
	let lastchancebtn = document.getElementById("last_chance").querySelectorAll('button');

// --- NEW 54 CARD LOGIC DATA ---
const suitsList = ['Hearts', 'Diamonds', 'Clubs', 'Spades', 'Jokers'];
const standardCardRanks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const defaultCardPoints = { "A": 20, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": 10, "Q": 10, "K": 10, "J1": 20, "J2": 20 };

let customDeckData = {};
suitsList.forEach(suit => {
    customDeckData[suit] = {};
    if (suit === 'Jokers') {
        customDeckData[suit]['J1'] = { qty: 1, pts: 20 };
        customDeckData[suit]['J2'] = { qty: 1, pts: 20 };
    } else {
        standardCardRanks.forEach(rank => {
            customDeckData[suit][rank] = { qty: 1, pts: defaultCardPoints[rank] };
        });
    }
});

let currentDeckSuitIndex = 0;

function cycleDeckSuit(dir) {
    currentDeckSuitIndex += dir;
    if (currentDeckSuitIndex < 0) currentDeckSuitIndex = suitsList.length - 1;
    if (currentDeckSuitIndex >= suitsList.length) currentDeckSuitIndex = 0;
    renderDeckSuitMenu();
}

function renderDeckSuitMenu() {
    const suit = suitsList[currentDeckSuitIndex];
    const displayNames = {
        'Hearts': 'Hearts (♥️)', 'Diamonds': 'Diamonds (♦️)', 
        'Clubs': 'Clubs (♣️)', 'Spades': 'Spades (♠️)', 'Jokers': 'Jokers (🃏)'
    };
    document.getElementById('deck_suit_display').innerText = displayNames[suit];
    
    const container = document.getElementById('deck_cards_container');
    if (!container) return;
    container.innerHTML = '';

    const cards = suit === 'Jokers' ? ['J1', 'J2'] : standardCardRanks;

    cards.forEach(rank => {
        const data = customDeckData[suit][rank];
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.justifyContent = 'space-between';
        row.style.alignItems = 'center';
        
        row.innerHTML = `
            <label style="flex: 1; text-align: left">${rank}</label>
            <div class="stepper" style="flex: 1; justify-content: center;">
                <button type="button" onclick="changeCardData('${suit}', '${rank}', 'qty', -1)"> « </button>
                <input type="text" value="${data.qty}" readonly style="width: 25px;">
                <button type="button" onclick="changeCardData('${suit}', '${rank}', 'qty', 1)"> » </button>
            </div>
            <div class="stepper" style="flex: 1; justify-content: flex-end;">
                <button type="button" onclick="changeCardData('${suit}', '${rank}', 'pts', -1)"> « </button>
                <input type="text" value="${data.pts}" readonly style="width: 25px;">
                <button type="button" onclick="changeCardData('${suit}', '${rank}', 'pts', 1)"> » </button>
            </div>
        `;
        container.appendChild(row);
    });
}

function changeCardData(suit, rank, type, delta) {
    let val = customDeckData[suit][rank][type];
    val += delta;
    if (type === 'qty') {
        val = Math.max(0, Math.min(10, val));
    } else {
        val = Math.max(0, Math.min(20, val));
    }
    customDeckData[suit][rank][type] = val;
    renderDeckSuitMenu();
}

function changeSuitAll(type, delta) {
    const suit = suitsList[currentDeckSuitIndex];
    const cards = suit === 'Jokers' ? ['J1', 'J2'] : standardCardRanks;

    cards.forEach(rank => {
        let val = customDeckData[suit][rank][type];
        val += delta;
        
        if (type === 'qty') {
            val = Math.max(0, Math.min(10, val));
        } else {
            val = Math.max(0, Math.min(20, val));
        }
        
        customDeckData[suit][rank][type] = val;
    });
    
    renderDeckSuitMenu();
}

const gambitNames = [
    'Low', 'High', 'Red', 'Black', 'Hearts', 'Diamonds', 'Clubs', 'Spades', 'Special',
    'Low_Red', 'High_Red', 'Low_Black', 'High_Black',
    'Low_Hearts', 'High_Hearts', 'Low_Diamonds', 'High_Diamonds',
    'Low_Clubs', 'High_Clubs', 'Low_Spades', 'High_Spades'
];

const actionNames = ['Blank', 'Skip', 'SacrificeLife', 'SacrificeBlank'];

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

            "use_custom_ranks": false,
            "use_custom_suits": false,
            "mult-rank-A": 1, "mult-rank-2": 1, "mult-rank-3": 1, "mult-rank-4": 1, "mult-rank-5": 1, "mult-rank-6": 1, "mult-rank-7": 1,
            "mult-rank-8": 1, "mult-rank-9": 1, "mult-rank-10": 1, "mult-rank-J": 1, "mult-rank-Q": 1, "mult-rank-K": 1,
            "mult-hearts": 1, "mult-diamonds": 1, "mult-clubs": 1, "mult-spades": 1, "mult-rank-J1": 1, "mult-rank-J2": 1, "mult-jokers": 1,

    "use_custom_points": false,
    "points-A": 20, "points-2": 2, "points-3": 3, "points-4": 4, 
    "points-5": 5, "points-6": 6, "points-7": 7, "points-8": 8, 
    "points-9": 9, "points-10": 10, "points-J": 10, "points-Q": 10, 
    "points-K": 10, "points-J1": 20, "points-J2": 20, 

    // Gen toggles and modifiers
    useSpec_value: false, gen_value: 1, gen_value_op: "*",
    useSpec_color: false, gen_color: 1, gen_color_op: "*",
    useSpec_suit: false, gen_suit: 3, gen_suit_op: "*",
    useSpec_value_color: false, gen_value_color: 3, gen_value_color_op: "*", 
    useSpec_value_suit: false, gen_value_suit: 6, gen_value_suit_op: "*",

    // Specific modifiers
    value_low: 1, value_low_op: "*", 
    value_high: 1, value_high_op: "*",
    
    color_red: 1, color_red_op: "*", 
    color_black: 1, color_black_op: "*",
    
    suit_hearts: 3, suit_hearts_op: "*", 
    suit_diamonds: 3, suit_diamonds_op: "*", 
    suit_clubs: 3, suit_clubs_op: "*", 
    suit_spades: 3, suit_spades_op: "*",
    
    value_color_low_red: 3, value_color_low_red_op: "*", 
    value_color_low_black: 3, value_color_low_black_op: "*", 
    value_color_high_red: 3, value_color_high_red_op: "*", 
    value_color_high_black: 3, value_color_high_black_op: "*",
    
    value_suit_low_hearts: 6, value_suit_low_hearts_op: "*", 
    value_suit_low_diamonds: 6, value_suit_low_diamonds_op: "*", 
    value_suit_low_clubs: 6, value_suit_low_clubs_op: "*", 
    value_suit_low_spades: 6, value_suit_low_spades_op: "*",
    value_suit_high_hearts: 6, value_suit_high_hearts_op: "*", 
    value_suit_high_diamonds: 6, value_suit_high_diamonds_op: "*", 
    value_suit_high_clubs: 6, value_suit_high_clubs_op: "*", 
    value_suit_high_spades: 6, value_suit_high_spades_op: "*",
    
    joker: 10, joker_op: "*",

            "lifepoints": 3, "blanks": 1, "streak": 0, "lastchance": 1, "lastchancedice": 4,

            "sacrificelife": 3, "sacrificeblanks": 6,

            "winlifeamount": 0, "winlifeop": "+",
            "winstreakamount": 1, "winstreakop": "+",

            "losslifeamount": 1, "losslifeop": "-",
            "lossstreakamount": 1, "lossstreakop": "-",

            "skiplifeamount": 1, "skiplifeop": "-",
            "skipstreakamount": 1, "skipstreakop": "+", 
            "skipscoreamount": 0, "skipscoreop": "*",

            "blanklifeamount": 0, "blanklifeop": "+",
            "blankstreakamount": 0, "blankstreakop": "+",
            "blankscoreamount": 2, "blankscoreop": "/",

            "active_Low": true, "active_High": true, "active_Red": true, "active_Black": true,
            "active_Hearts": true, "active_Diamonds": true, "active_Clubs": true, "active_Spades": true, "active_Special": true,

            "active_Low_Red": true, "active_Low_Black": true, "active_High_Red": true, "active_High_Black": true,

            "active_Low_Hearts": true, "active_Low_Diamonds": true, "active_Low_Clubs": true, "active_Low_Spades": true,
            "active_High_Hearts": true, "active_High_Diamonds": true, "active_High_Clubs": true, "active_High_Spades": true,

            "active_Blank": true, "active_Skip": true, "active_SacrificeLife": true, "active_SacrificeBlank": true
        }
    },
    {
        name: "Russian Roulette",
        config: {
            "endless": false,
            "finite_lives": true,
            "finite_blanks": true,
            "currentscoretobeat": 1000,

            "use_custom_ranks": true,
            "use_custom_suits": true,
            "mult-rank-A": 0, "mult-rank-2": 2, "mult-rank-3": 0, "mult-rank-4": 0, "mult-rank-5": 0, "mult-rank-6": 0, "mult-rank-7": 0,
            "mult-rank-8": 0, "mult-rank-9": 0, "mult-rank-10": 0, "mult-rank-J": 0, "mult-rank-Q": 0, "mult-rank-K": 0,
            "mult-hearts": 2, "mult-diamonds": 2, "mult-clubs": 2, "mult-spades": 2, "mult-rank-J1": 10, "mult-rank-J2": 10, "mult-jokers": 2,

            "useSpec_value": false,    "gen_value": 0,
            "useSpec_color": false,    "gen_color": 0,
            "useSpec_suit": false,     "gen_suit": 0,
            "useSpec_value_color": false, "gen_value_color": 0,
            "useSpec_value_suit": false,  "gen_value_suit": 0,

            "joker": 5,

            "lifepoints": 1, "blanks": 0, "streak": 0, "lastchance": 0, "lastchancedice": 4,

            "winlifeamount": 0, "winlifeop": "+",
            "winstreakamount": 0, "winstreakop": "+",

            "losslifeamount": 1, "losslifeop": "-",
            "lossstreakamount": 1, "lossstreakop": "-",

            "skiplifeamount": 0, "skiplifeop": "+",
            "skipstreakamount": 0, "skipstreakop": "+", 
            "skipscoreamount": 0, "skipscoreop": "*",

            "blanklifeamount": 0, "blanklifeop": "+",
            "blankstreakamount": 0, "blankstreakop": "+",
            "blankscoreamount": 0, "blankscoreop": "*",

            "active_Low": false, "active_High": false, "active_Red": false, "active_Black": false,
            "active_Hearts": false, "active_Diamonds": false, "active_Clubs": false, "active_Spades": false, "active_Special": true,

            "active_Low_Red": false, "active_Low_Black": false, "active_High_Red": false, "active_High_Black": false,

            "active_Low_Hearts": false, "active_Low_Diamonds": false, "active_Low_Clubs": false, "active_Low_Spades": false,
            "active_High_Hearts": false, "active_High_Diamonds": false, "active_High_Clubs": false, "active_High_Spades": false,

            "active_Blank": false, "active_Skip": true, "active_SacrificeLife": false, "active_SacrificeBlank": false
        }
    }
];

function applyPreset() {
    const preset = presets[currentPresetIndex];
    const cfg = preset.config;

    document.getElementById('preset-name').textContent = `${preset.name}`;


// (Inside applyPreset() where you used to apply Custom Ranks/Points UI changes)
    
    // Set Main Toggle
    document.getElementById("use_custom_deck").checked = cfg["use_custom_ranks"] || cfg["use_custom_suits"] || cfg["use_custom_points"] || cfg["use_custom_deck"] || false;

    // Build the precise 54-card configuration based on old configs or defaults
    suitsList.forEach(suit => {
        const cards = suit === 'Jokers' ? ['J1', 'J2'] : standardCardRanks;
        cards.forEach(rank => {
            const presetKeyQty = `deck-${suit}-${rank}-qty`;
            const presetKeyPts = `deck-${suit}-${rank}-pts`;
            
            let fallbackQty = 1;
            // Legacy conversion: Multiply the rank mult by the suit mult to mimic old behavior
            if (cfg["use_custom_ranks"] !== undefined || cfg["use_custom_suits"] !== undefined) {
                let rMult = rank.startsWith('J') ? cfg[`mult-rank-${rank}`] : cfg[`mult-rank-${rank}`];
                let sMult = suit === 'Jokers' ? cfg['mult-jokers'] : cfg[`mult-${suit.toLowerCase()}`];
                fallbackQty = (rMult !== undefined ? rMult : 1) * (sMult !== undefined ? sMult : 1);
            }

            let fallbackPts = cfg[`points-${rank}`] !== undefined ? cfg[`points-${rank}`] : defaultCardPoints[rank];

            customDeckData[suit][rank].qty = cfg[presetKeyQty] !== undefined ? cfg[presetKeyQty] : fallbackQty;
            customDeckData[suit][rank].pts = cfg[presetKeyPts] !== undefined ? cfg[presetKeyPts] : fallbackPts;
        });
    });
    
    // Refresh UI
    renderDeckSuitMenu();

const defaultMults = {
    // Gen toggles and modifiers
    useSpec_value: false, gen_value: 1, gen_value_op: "*",
    useSpec_color: false, gen_color: 1, gen_color_op: "*",
    useSpec_suit: false, gen_suit: 3, gen_suit_op: "*",
    useSpec_value_color: false, gen_value_color: 3, gen_value_color_op: "*", 
    useSpec_value_suit: false, gen_value_suit: 6, gen_value_suit_op: "*",

    // Specific modifiers
    value_low: 1, value_low_op: "*", 
    value_high: 1, value_high_op: "*",
    
    color_red: 1, color_red_op: "*", 
    color_black: 1, color_black_op: "*",
    
    suit_hearts: 3, suit_hearts_op: "*", 
    suit_diamonds: 3, suit_diamonds_op: "*", 
    suit_clubs: 3, suit_clubs_op: "*", 
    suit_spades: 3, suit_spades_op: "*",
    
    value_color_low_red: 3, value_color_low_red_op: "*", 
    value_color_low_black: 3, value_color_low_black_op: "*", 
    value_color_high_red: 3, value_color_high_red_op: "*", 
    value_color_high_black: 3, value_color_high_black_op: "*",
    
    value_suit_low_hearts: 6, value_suit_low_hearts_op: "*", 
    value_suit_low_diamonds: 6, value_suit_low_diamonds_op: "*", 
    value_suit_low_clubs: 6, value_suit_low_clubs_op: "*", 
    value_suit_low_spades: 6, value_suit_low_spades_op: "*",
    value_suit_high_hearts: 6, value_suit_high_hearts_op: "*", 
    value_suit_high_diamonds: 6, value_suit_high_diamonds_op: "*", 
    value_suit_high_clubs: 6, value_suit_high_clubs_op: "*", 
    value_suit_high_spades: 6, value_suit_high_spades_op: "*",
    
    joker: 10, joker_op: "*",

    // Points
    "points-A": 20, "points-2": 2, "points-3": 3, "points-4": 4, 
    "points-5": 5, "points-6": 6, "points-7": 7, "points-8": 8, 
    "points-9": 9, "points-10": 10, "points-J": 10, "points-Q": 10, 
    "points-K": 10, "points-J1": 20, "points-J2": 20
};

Object.keys(mults).forEach(key => {
        let val = cfg[key] !== undefined ? cfg[key] : defaultMults[key];
        
        if (typeof val === "number") {
            let opKey = key + "_op";
            let opVal = cfg[opKey] !== undefined ? cfg[opKey] : defaultMults[opKey];
            let min = (opVal === "/") ? 1 : 0;
            mults[key] = Math.max(min, val);
        } else {
            mults[key] = val;
        }

        if (key.startsWith("useSpec_")) {
            let id = key.replace("useSpec_", "use_spec_");
            let cb = document.getElementById(id);
            if (cb) {
                cb.checked = mults[key];
                toggleSpecifics(key.replace("useSpec_", ""));
            }
	} else if (key.endsWith("_op")) {
            let btnId = key.replace("_op", "_op_btn");
            let btnEl = document.getElementById(btnId);
            // Added the || "*" failsafe here so it never shows undefined
            if(btnEl) btnEl.innerHTML = `<span class="button_content2">${mults[key] || "*"}</span>`;
        } else {
            let inputId = key.replace("gen_", "gen-mult-").replace("_", "-");
            let inputEl = document.getElementById(inputId) || document.getElementById(key.replace("_", "-"));
            if (inputEl) {
                inputEl.value = mults[key];
            }
        }
    });

    currentlifepoints = cfg["lifepoints"] !== undefined ? Math.max(1, cfg["lifepoints"]) : 3;
    currentblanks = cfg["blanks"] !== undefined ? Math.max(0, cfg["blanks"]) : 1;
    currentstreak = cfg["streak"] !== undefined ? Math.max(0, cfg["streak"]) : 0;

    currentlastchance = cfg["lastchance"] !== undefined ? Math.max(0, cfg["lastchance"]) : 1;
    lastchancedice = cfg["lastchancedice"] !== undefined ? Math.max(2, cfg["lastchancedice"]) : 4;

    sacrificelife = cfg["sacrificelife"] !== undefined ? Math.max(0, cfg["sacrificelife"]) : 3;
    sacrificeblanks = cfg["sacrificeblanks"] !== undefined ? Math.max(0, cfg["sacrificeblanks"]) : 6;

    winlifeamount = cfg["winlifeamount"] !== undefined ? cfg["winlifeamount"] : 0;
    winlifeop = cfg["winlifeop"] !== undefined ? cfg["winlifeop"] : "+";

    winstreakamount = cfg["winstreakamount"] !== undefined ? cfg["winstreakamount"] : 1;
    winstreakop = cfg["winstreakop"] !== undefined ? cfg["winstreakop"] : "+";

    losslifeamount = cfg["losslifeamount"] !== undefined ? cfg["losslifeamount"] : 1;
    losslifeop = cfg["losslifeop"] !== undefined ? cfg["losslifeop"] : "-";

    lossstreakamount = cfg["lossstreakamount"] !== undefined ? cfg["lossstreakamount"] : 1;
    lossstreakop = cfg["lossstreakop"] !== undefined ? cfg["lossstreakop"] : "-";

    skiplifeamount = cfg["skiplifeamount"] !== undefined ? cfg["skiplifeamount"] : 1;
    skiplifeop = cfg["skiplifeop"] !== undefined ? cfg["skiplifeop"] : "-";

    skipstreakamount = cfg["skipstreakamount"] !== undefined ? cfg["skipstreakamount"] : 1;
    skipstreakop = cfg["skipstreakop"] !== undefined ? cfg["skipstreakop"] : "+";

    skipscoreamount = cfg["skipscoreamount"] !== undefined ? Math.max(0, cfg["skipscoreamount"]) : 0;
    skipscoreop = cfg["skipscoreop"] !== undefined ? cfg["skipscoreop"] : "/";

    if (skipscoreop === '/' && skipscoreamount <= "1") {
        skipscoreamount = 1;
    }

    blanklifeamount = cfg["blanklifeamount"] !== undefined ? cfg["blanklifeamount"] : 0;
    blanklifeop = cfg["blanklifeop"] !== undefined ? cfg["blanklifeop"] : "+";

    blankstreakamount = cfg["blankstreakamount"] !== undefined ? cfg["blankstreakamount"] : 0;
    blankstreakop = cfg["blankstreakop"] !== undefined ? cfg["blankstreakop"] : "+";

    blankscoreamount = cfg["blankscoreamount"] !== undefined ? Math.max(0, cfg["blankscoreamount"]) : 2;
    blankscoreop = cfg["blankscoreop"] !== undefined ? cfg["blankscoreop"] : "/";

    if (blankscoreop === '/' && blankscoreamount <= 1) {
        blankscoreamount = 1;
    }

    gambitNames.forEach(name => {
        let active = cfg[`active_${name}`] !== undefined ? cfg[`active_${name}`] : true;
        let cb = document.getElementById(`use_gambit_${name}`);
        if (cb) {
            cb.checked = active;
        }
    });

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
    checkMainToggle('gambit');
    checkMainToggle('action');
    
    setCURRENTGAMBIT();
}

// This function only handles DRAWING the info to the screen
function updatePresetUI() {
    const nameElement = document.getElementById('preset-name');
    const counterElement = document.getElementById('preset-counter');

    if (nameElement && presets[currentPresetIndex]) {
        nameElement.innerText = presets[currentPresetIndex].name;
    }

    if (counterElement) {
        // Human-friendly counting (1-based index)
        counterElement.innerText = `${currentPresetIndex + 1} / ${presets.length}`;
    }
}

// This function only handles CHANGING the data
function changePreset(direction) {
    currentPresetIndex += direction;

    // Wrap-around logic
    if (currentPresetIndex < 0) {
        currentPresetIndex = presets.length - 1;
    } else if (currentPresetIndex >= presets.length) {
        currentPresetIndex = 0;
    }

    updatePresetUI();
  applyPreset();
}

function toggleAll(type) {
    const isChecked = document.getElementById(`toggle_all_${type}s`).checked;
    const names = type === 'gambit' ? gambitNames : actionNames;
    
    names.forEach(name => {
        const cb = document.getElementById(`use_${type}_${name}`);
        if (cb) {
            cb.checked = isChecked;
            if (type === 'action') toggleActionBtn(name);
        }
    });
    if (type === 'gambit') setCURRENTGAMBIT();
}

// Checks if the main checkbox should be ticked based on its children
function checkMainToggle(type) {
    const mainToggle = document.getElementById(`toggle_all_${type}s`);
    const names = type === 'gambit' ? gambitNames : actionNames;
    if (!mainToggle) return;
    
    let allChecked = true;
    names.forEach(name => {
        const cb = document.getElementById(`use_${type}_${name}`);
        if (cb && !cb.checked) allChecked = false;
    });
    mainToggle.checked = allChecked;
}

function enforceCaps() {
    if (lifepoints !== Infinity && lifepoints > GLOBAL_CAP) lifepoints = GLOBAL_CAP;
    if (streak !== Infinity && streak > GLOBAL_CAP) streak = GLOBAL_CAP;
    if (blanks !== Infinity && blanks > GLOBAL_CAP) blanks = GLOBAL_CAP;
    
    if(document.getElementById('lifepoints')) document.getElementById('lifepoints').textContent = (lifepoints === Infinity) ? "∞" : lifepoints;
    if(document.getElementById('streak')) document.getElementById('streak').textContent = (streak === Infinity) ? "∞" : streak;
    if(document.getElementById('blanks')) document.getElementById('blanks').textContent = (blanks === Infinity) ? "∞" : blanks;
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
        multiplierOp = mults["joker_op"] || "*";
    } else {
        if (mults["useSpec_" + category]) {
            multiplier = mults[key] !== undefined ? mults[key] : 1; 
            multiplierOp = mults[key + "_op"] !== undefined ? mults[key + "_op"] : "*";
        } else {
            multiplier = mults["gen_" + category];
            multiplierOp = mults["gen_" + category + "_op"] !== undefined ? mults["gen_" + category + "_op"] : "*";
        }
    }

    let multipliersymbol = "x";

    if (multiplierOp === "/") {multipliersymbol = "/"}

	if (gambit1 === "" && gambit2 === "") {
				valueswitch = -1;
				variable = "None";
				element = "None";

				document.getElementById("currentgambit").innerHTML = "Select Your Gambit";
		}

		if (valuearray.includes(gambit1)) {
			if (colorarray.includes(gambit2)) {
				variable = gambit2;
				element = "color";

				document.getElementById("currentgambit").innerHTML = "Value & Color Gambit (" + multipliersymbol + multiplier + ")";

				if (gambit1 === "Low") {
					valueswitch = 0;
				} else {
					valueswitch = 1;
				}

			} else if (suitarray.includes(gambit2)) {
				variable = gambit2;
				element = "suit";

				document.getElementById("currentgambit").innerHTML = "Value & Suit Gambit (" + multipliersymbol + multiplier + ")";

				if (gambit1 === "Low") {
					valueswitch = 0;
				} else {
					valueswitch = 1;
				}

			} else {
				variable = "empty";
				element = "empty";

				document.getElementById("currentgambit").innerHTML = "Value Gambit (" + multipliersymbol + multiplier + ")";

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

				document.getElementById("currentgambit").innerHTML = "Color Gambit (" + multipliersymbol + multiplier + ")";

		}

		if (suitarray.includes(gambit2) && gambit1 === "") {
				valueswitch = -1;
				variable = gambit2;
				element = "suit";

				document.getElementById("currentgambit").innerHTML = "Suit Gambit (" + multipliersymbol + multiplier + ")";

		}

		if (gambit1 === "Special") {
				valueswitch = -1;
				variable = gambit1;
				element = "color";

				document.getElementById("currentgambit").innerHTML = "Joker Gambit (" + multipliersymbol + multiplier + ")";
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

    checkMainToggle('gambit'); // <-- Add this line
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
		document.getElementById("multiplier").innerHTML = multiplierOp + multiplier;
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

function addORremoveSCORE(value, sign) {

    const inputElement = document.getElementById('currentscoretobeat');
    if (!inputElement) return;

    let currentValue = parseInt(inputElement.value) || 0;
    let newValue;

    if (sign === "-") {
        newValue = currentValue - value;
        if (newValue < 1) {
            newValue = 1;
        }
    } else if (sign === "+") {
        newValue = currentValue + value;
        if (newValue > 10000) {
            newValue = 10000;
        }
    }

    inputElement.value = newValue;

    currentscoretobeat = newValue;
}

function addORremoveOPTIONS(variableId, value, sign, minmax) {

    const inputElement = document.getElementById(variableId);
    if (!inputElement) return;

    if (variableId === 'blankscoreamount' && blankscoreop === '/' && inputElement.value <= "1") {
        inputElement.value = 1;
        return;
    } else if (variableId === 'skipscoreamount' && skipscoreop === '/' && inputElement.value <= "1") {
        inputElement.value = 1;
        return;
    }

    let currentValue = parseInt(inputElement.value) || 0;
    let newValue;

    if (sign === "-") {
        newValue = currentValue - value;
        if (minmax !== undefined && newValue < minmax) {
            newValue = minmax;
        }
    } else if (sign === "+") {
        newValue = currentValue + value;
        if (minmax !== undefined && newValue > minmax) {
            newValue = minmax;
        }
    }

    inputElement.value = newValue;

    switch (variableId) {
        case 'currentscoretobeat': currentscoretobeat = newValue; break;
        case 'currentlifepoints': currentlifepoints = newValue; break;
        case 'currentblanks': currentblanks = newValue; break;
        case 'currentstreak': currentstreak = newValue; break;
        case 'currentlastchance': currentlastchance = newValue; break;
        case 'lastchancedice': lastchancedice = newValue; break;
        case 'sacrificelife': sacrificelife = newValue; break;
        case 'sacrificeblanks': sacrificeblanks = newValue; break;
        case 'skiplifeamount': skiplifeamount = newValue; break;
        case 'skipstreakamount': skipstreakamount = newValue; break;
        case 'blanklifeamount': blanklifeamount = newValue; break;
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
	if(document.getElementById("lastchancedice")) document.getElementById("lastchancedice").value = lastchancedice;
	document.getElementById("sacrificelife").value = sacrificelife;
	document.getElementById("sacrificeblanks").value = sacrificeblanks;
	document.getElementById("currentscoretobeat").value = savedscore;
	if(document.getElementById("skiplifeamount")) { document.getElementById("skiplifeamount").value = skiplifeamount; document.getElementById("skiplifeop_btn").innerHTML = `<span class="button_content2">${skiplifeop}</span>`; }
	if(document.getElementById("skipstreakamount")) { document.getElementById("skipstreakamount").value = skipstreakamount; document.getElementById("skipstreakop_btn").innerHTML = `<span class="button_content2">${skipstreakop}</span>`; }
	if(document.getElementById("skipscoreamount")) document.getElementById("skipscoreamount").value = skipscoreamount;
	if(document.getElementById("skipscoreop_btn")) document.getElementById("skipscoreop_btn").innerHTML = `<span class="button_content2">${skipscoreop}</span>`;
	if(document.getElementById("blanklifeamount")) { document.getElementById("blanklifeamount").value = blanklifeamount; document.getElementById("blanklifeop_btn").innerHTML = `<span class="button_content2">${blanklifeop}</span>`; }
	if(document.getElementById("blankstreakamount")) { document.getElementById("blankstreakamount").value = blankstreakamount; document.getElementById("blankstreakop_btn").innerHTML = `<span class="button_content2">${blankstreakop}</span>`; }
	if(document.getElementById("blankscoreamount")) document.getElementById("blankscoreamount").value = blankscoreamount;
	if(document.getElementById("blankscoreop_btn")) document.getElementById("blankscoreop_btn").innerHTML = `<span class="button_content2">${blankscoreop}</span>`;
	if(document.getElementById("winstreakamount")) { document.getElementById("winstreakamount").value = winstreakamount; document.getElementById("winstreakop_btn").innerHTML = `<span class="button_content2">${winstreakop}</span>`; }
	if(document.getElementById("winlifeamount")) { document.getElementById("winlifeamount").value = winlifeamount; document.getElementById("winlifeop_btn").innerHTML = `<span class="button_content2">${winlifeop}</span>`; }
	if(document.getElementById("lossstreakamount")) { document.getElementById("lossstreakamount").value = lossstreakamount; document.getElementById("lossstreakop_btn").innerHTML = `<span class="button_content2">${lossstreakop}</span>`; }
	if(document.getElementById("losslifeamount")) { document.getElementById("losslifeamount").value = losslifeamount; document.getElementById("losslifeop_btn").innerHTML = `<span class="button_content2">${losslifeop}</span>`; }
}

function toggleMultOp(key) {
    mults[key + "_op"] = mults[key + "_op"] === "/" ? "*" : "/";
    if (mults[key + "_op"] === "/" && mults[key] <= 1) {
        mults[key] = 1;
        let disp = document.getElementById(key + "_mult_disp");
        if (disp) disp.value = 1;
    }
    let btn = document.getElementById(key + "_op_btn");
    if (btn) btn.innerHTML = `<span class="button_content2">${mults[key + "_op"]}</span>`;
    updateTESTVALUES();
}

function changeMultiplier(type, delta) {
	if (mults[type] !== undefined) {
        let min = (mults[type + "_op"] === "/") ? 1 : 0;
		mults[type] = Math.min(20, Math.max(min, mults[type] + delta));
		const displayElement = document.getElementById(type + "_mult_disp");
		if (displayElement) displayElement.value = mults[type];
        updateTESTVALUES();
	}
}

function changeAllPoints(delta) {
    const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "J1", "J2"];
    ranks.forEach(r => changePoint(r, delta));
}

// Activate Endless Mode

function endlessMODE() {
    const checkbox = document.getElementById("endless_mode");
    const scoreInput = document.getElementById("currentscoretobeat");
    
    // 1. Find all buttons inside the same div as the score input
    // This targets only the buttons in that specific 'stepper'
    const stepperButtons = document.getElementById("scorebuttons").querySelectorAll('button');
    const addremoveButtons = document.getElementById("addremovebuttons").querySelectorAll('button');

    if (checkbox.checked) {
        // FIX: Ensure we only save the score if it isn't already "∞"
        if (scoreInput.value !== "∞") {
            savedscore = scoreInput.value; 
        }
        scoreInput.value = "∞";
        currentscoretobeat = "∞";

        // 2. Disable all the buttons
        stepperButtons.forEach(btn => btn.disabled = true);
        addremoveButtons.forEach(btn => btn.disabled = true);
    } else {
        scoreInput.value = savedscore;
        currentscoretobeat = parseInt(savedscore);

        // 3. Re-enable the buttons
        stepperButtons.forEach(btn => btn.disabled = false);
        addremoveButtons.forEach(btn => btn.disabled = false);
    }
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


function toggleGainLossOp(type) {
    if (type === 'winlife') { winlifeop = winlifeop === '+' ? '-' : '+'; document.getElementById("winlifeop_btn").innerHTML = `<span class="button_content2">${winlifeop}</span>`; }
    else if (type === 'winstreak') { winstreakop = winstreakop === '+' ? '-' : '+'; document.getElementById("winstreakop_btn").innerHTML = `<span class="button_content2">${winstreakop}</span>`; }
    else if (type === 'losslife') { losslifeop = losslifeop === '+' ? '-' : '+'; document.getElementById("losslifeop_btn").innerHTML = `<span class="button_content2">${losslifeop}</span>`; }
    else if (type === 'lossstreak') { lossstreakop = lossstreakop === '+' ? '-' : '+'; document.getElementById("lossstreakop_btn").innerHTML = `<span class="button_content2">${lossstreakop}</span>`; }
    else if (type === 'blanklife') { blanklifeop = blanklifeop === '+' ? '-' : '+'; document.getElementById("blanklifeop_btn").innerHTML = `<span class="button_content2">${blanklifeop}</span>`; }
    else if (type === 'blankstreak') { blankstreakop = blankstreakop === '+' ? '-' : '+'; document.getElementById("blankstreakop_btn").innerHTML = `<span class="button_content2">${blankstreakop}</span>`; }
    else if (type === 'skiplife') { skiplifeop = skiplifeop === '+' ? '-' : '+'; document.getElementById("skiplifeop_btn").innerHTML = `<span class="button_content2">${skiplifeop}</span>`; }
    else if (type === 'skipstreak') { skipstreakop = skipstreakop === '+' ? '-' : '+'; document.getElementById("skipstreakop_btn").innerHTML = `<span class="button_content2">${skipstreakop}</span>`; }
}

function toggleBlankOp() {
    if (blankscoreop === "/") {
        blankscoreop = "*";
    } else {
        blankscoreop = "/";
        if (document.getElementById("blankscoreamount").value === "0") {
            document.getElementById("blankscoreamount").value = "1";
        }
    }
    const btn = document.getElementById("blankscoreop_btn");
    if (btn) btn.innerHTML = `<span class="button_content2">${blankscoreop}</span>`;
}

function toggleScoreAmount(amount, buttonid) {
    scorechangeamount = amount;

    const scoreContainer = document.getElementById("scorebuttons");
    if (!scoreContainer) return; 

    const scoreButtons = scoreContainer.querySelectorAll('button');

    scoreButtons.forEach(button => {
        button.classList.remove('highlight');
    });

    const targetButton = document.getElementById(buttonid);
    if (targetButton) {
        targetButton.classList.add('highlight');
    }
}

toggleScoreAmount(100, 'score_btn_3');

function toggleSkipOp() {
    if (skipscoreop === "/") {
        skipscoreop = "*";
    } else {
        skipscoreop = "/";
        if (document.getElementById("skipscoreamount").value === "0") {
            document.getElementById("skipscoreamount").value = "1";
        }
    }
    const btn = document.getElementById("skipscoreop_btn");
    if (btn) btn.innerHTML = `<span class="button_content2">${skipscoreop}</span>`;
}

function toggleActionBtn(name) {
    const cb = document.getElementById(`use_action_${name}`);
    const btn = document.getElementById(`btn_action_${name}`);
    if (btn && cb) {
        btn.disabled = !cb.checked;
    }
    checkMainToggle('action'); // <-- Add this line
}

// Generate Deck

function generateCustomDeck() {
    const useCustomDeck = document.getElementById('use_custom_deck').checked;
    const finalDeck = [];

    if (useCustomDeck) {
        const suitMap = { 'Hearts': { s: '♥️', c: 'Red' }, 'Diamonds': { s: '♦️', c: 'Red' }, 'Clubs': { s: '♣️', c: 'Black' }, 'Spades': { s: '♠️', c: 'Black' } };

        suitsList.forEach(suitName => {
            if (suitName === 'Jokers') {
                ['J1', 'J2'].forEach(rank => {
                    const data = customDeckData[suitName][rank];
                    for(let i=0; i<data.qty; i++) {
                        finalDeck.push({ rank: rank, value: 20, points: data.pts, suit: '🃏', color: 'Special' });
                    }
                });
            } else {
                const sInfo = suitMap[suitName];
                standardCardRanks.forEach(rank => {
                    const data = customDeckData[suitName][rank];
                    let intrinsicValue = 0;
                    if (rank === 'A') intrinsicValue = 20;
                    else if (['J', 'Q', 'K'].includes(rank)) intrinsicValue = 10;
                    else intrinsicValue = parseInt(rank);

                    for(let i=0; i<data.qty; i++) {
                        finalDeck.push({ rank: rank, value: intrinsicValue, points: data.pts, suit: sInfo.s, color: sInfo.c });
                    }
                });
            }
        });
    } else {
        // Fallback to purely Standard Defaults
        standardSuits.forEach(s => {
            standardRanks.forEach(r => {
                finalDeck.push({ rank: r.rank, value: r.value, points: defaultCardPoints[r.rank], suit: s.suit, color: s.color });
            });
        });
        standardExtras.forEach(e => {
            finalDeck.push({ rank: e.rank, value: e.value, points: defaultCardPoints[e.rank], suit: e.suit, color: e.color });
        });
    }

    // Direct Filtering Global Card Counters (Untouched from your original logic - it still works perfectly!)
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
			lifepoints += (skiplifeop === '-' ? -skiplifeamount : skiplifeamount);
			if (lifepoints < 0) lifepoints = 0;
			document.getElementById("lifepoints").textContent = lifepoints;
		}

		usedstreak = streak;

		if (skipscoreop === "/") {
			currentscore = Math.floor(currentscore + (streak + acevalue) / skipscoreamount);
		} else {
			currentscore = Math.floor(currentscore + (streak + acevalue) * skipscoreamount);
		}

		// Calculate Streak Effect
		streak += (skipstreakop === '-' ? -skipstreakamount : skipstreakamount);
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

	function lastCHANCE(playerChoice) {
		if (lastchance === 0) return;

		lastchance = lastchance - 1;

		const randomNumber = Math.floor(Math.random() * lastchancedice) + 1;
		document.getElementById("output").textContent = randomNumber;
		const diceroll = Number(playerChoice);

		if (randomNumber === diceroll) {

			pickTABLECARD();
			
			addORremove('lifepoints', 1, '+');
			document.getElementById("currentgambit").innerHTML = "One More Chance!";
			document.getElementById("empty_gambit").innerHTML = "...";
			document.getElementById("gambit_left").innerHTML = "";
			document.getElementById("gambit_right").innerHTML = "";

			document.getElementById("clear_button").disabled = false;

			document.getElementById("last_chance").style.display = "none";
			document.getElementById("gameplay_buttons").style.display = "block";

		} else {

			if (lastchance >= 1) {
				document.getElementById("currentgambit").innerHTML = "Last Chance Available (" + lastchance + ")";
				return;
			} else {

				lastchancebtn.forEach(btn => {
					btn.disabled = true;
				});

				document.getElementById("clear_button").disabled = true;
				document.getElementById("currentgambit").innerHTML = "You Lost";
			}

		}
	}

// Show / Hide Elements

	function showELEMENT(element, displaytype) {
		var x = document.getElementById(element);

		if (x.style.display == displaytype) {
			x.style.display = "none";
		} else {
			x.style.display = displaytype;
		}
	}

// 1. List all sections and their corresponding display titles in order
const menuSections = [
    { id: 'stats_options', title: 'Score / Initial Stats' },
    { id: 'card_options', title: 'Deck Structure' },
    { id: 'gambit_mult_options', title: 'Gambits' },
    { id: 'actions_options', title: 'Actions' },
    { id: 'win_loss_options', title: 'Win / Loss / Last Chance' },
];

// 2. Track the currently viewed section index (defaults to 0, which is 'Cards')
let currentSectionIndex = 0;

function cycleSection(direction) {
    // Hide EVERY section in the list to reset the view
    menuSections.forEach(section => {
        const el = document.getElementById(section.id);
        if (el) el.style.display = 'none';
    });

    // Update the index based on the direction (-1 for left, 1 for right)
    currentSectionIndex += direction;

    // Loop around if we go past the start or end of the array
    if (currentSectionIndex < 0) {
        currentSectionIndex = menuSections.length - 1;
    } else if (currentSectionIndex >= menuSections.length) {
        currentSectionIndex = 0;
    }

    // Show the new target section
    const targetSection = menuSections[currentSectionIndex];
    const targetElement = document.getElementById(targetSection.id);
    if (targetElement) {
        targetElement.style.display = 'flex';
    }

    // Update the title div in the HTML
    const titleElement = document.getElementById('section_title_display');
    if (titleElement) {
        titleElement.innerText = targetSection.title;
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
		if (cards.length === 1) {
			document.getElementById("currentgambit").textContent = "Not Enough Cards Left";
		} else {
			document.getElementById("currentgambit").textContent = "No More Cards Left";
		}
		document.getElementById("gambit_left").textContent = "";
		document.getElementById("gambit_right").textContent = "";
		document.getElementById("empty_gambit").textContent = "...";
		document.getElementById("percentage").innerHTML = "";

		const buttons_1 = document.querySelectorAll('.special_button_1');
		buttons_1.forEach(btn => btn.classList.remove('highlight'));

		const buttons_2 = document.querySelectorAll('.special_button_2');
		buttons_2.forEach(btn => btn.classList.remove('highlight'));

			gameplaybtn.forEach(btn => {
				btn.disabled = true;
			});

			document.getElementById("clear_button").disabled = true;
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
		let blanksDisplay = (blanks === Infinity) ? "∞" : blanks;
		let spacing = (document.getElementById("card_history").innerHTML !== "") ? "<br><br>" : "<br>";

		// 1. Set up initial variables
		let multipliersymbol = " x ";
		if (variable === "Special") {
			acevalue = currentPoints; 
			gambithistoryvariable = "Joker";
		}

		// 2. Determine Multiplier and Win/Loss labels FIRST
		if (gambithistoryvariable === 'Blank') {
			winloss = ""; // No (Success) or (Fail) text for Blanks
			multiplier = blankscoreamount;
			multipliersymbol = (blankscoreop === "*") ? " x " : " / ";
		} else if (gambithistoryvariable === 'Skip') {
			winloss = ""; // No (Success) or (Fail) text for Skips
			multiplier = skipscoreamount;
			multipliersymbol = (skipscoreop === "*") ? " x " : " / ";
		} else {
			// This is a standard Gambit (Success or Fail)
			multipliersymbol = (multiplierOp === "*") ? " x " : " / ";
			// Store the raw status to check for "Fail" later, then wrap it for display
			var status = winloss; 
			winloss = " (" + winloss + ")";
		}

		// 3. NOW build the score calculation string using the finalized variables
		let scorecalc = "";
		if (status === "Fail") {
			acevalue = 0;
			usedstreak = 0;
			scorecalc = ""; // Keep empty on failure as requested
		} else {
			// Only show the math for Success, Blank, or Skip
			scorecalc = "<br>((" + acevalue + " + " + usedstreak + ")" + multipliersymbol + multiplier + ")";
		}

		// 4. Combine into history entry
		let historyEntry = gambithistoryvalue + gambithistoryvariable + winloss + scorecalc + 
				"<br>T: " + result2 + " H: " + result + 
				"<br>L:" + lifeDisplay + " B:" + blanksDisplay + " S:" + streak + "<br>Score: " + currentscore + spacing;

		document.getElementById("card_history").innerHTML = historyEntry + document.getElementById("card_history").innerHTML;

		winloss = "";

		if (currentscore >= currentscoretobeat) {
			clearGAMBIT();
			currentscore = currentscoretobeat;
			document.getElementById("score").innerHTML = currentscore;
			document.getElementById("table_suit_1").innerHTML = "";
			document.getElementById("table_number").innerHTML = "";
			document.getElementById("table_suit_2").innerHTML = "";
			document.getElementById("table_card").classList.remove('card-appear', 'card-disappear');
			document.getElementById("hand_card").classList.remove('card-appear', 'card-disappear');

			gameplaybtn.forEach(btn => {
				btn.disabled = true;
			});

			document.getElementById("clear_button").disabled = true;

			document.getElementById("currentgambit").innerHTML = "You Won!";
			playerwin = true;
			return;
		}

		if (lifepoints === 0 && lastchance > 0) {
			if (cards.length <= 1) {
				emptyDECK();
				return;
			}
			document.getElementById("lifepoints").textContent = "0";
			document.getElementById("currentgambit").innerHTML = "Last Chance Available (" + lastchance + ")";
			document.getElementById("table_suit_1").innerHTML = "";
			document.getElementById("table_number").innerHTML = "";
			document.getElementById("table_suit_2").innerHTML = "";
			document.getElementById("empty_gambit").innerHTML = "...";
			document.getElementById("gambit_left").innerHTML = "";
			document.getElementById("gambit_right").innerHTML = "";
			document.getElementById("gameplay_buttons").style.display = "none";
			document.getElementById("last_chance").style.display = "block";

			document.getElementById("table_card").classList.remove('card-appear', 'card-disappear');
			document.getElementById("hand_card").classList.remove('card-appear', 'card-disappear');
            
			// Display appropriate dice buttons
			for (let i = 1; i <= 10; i++) {
				let btn = document.getElementById("lc_btn_" + i);
				if (btn) {
					btn.style.display = (i <= lastchancedice) ? "inline-block" : "none";
				}
			}

			document.getElementById("clear_button").disabled = true;
			document.getElementById("percentage").innerHTML = "";
			clearGAMBIT2();
			return;
		} else if (lifepoints === 0) {
			document.getElementById("lifepoints").textContent = "0";
			document.getElementById("currentgambit").innerHTML = "You Lost";
			document.getElementById("table_suit_1").innerHTML = "";
			document.getElementById("table_number").innerHTML = "";
			document.getElementById("table_suit_2").innerHTML = "";

			document.getElementById("hand_suit_1").innerHTML = "";
			document.getElementById("hand_number").innerHTML = "";
			document.getElementById("hand_suit_2").innerHTML = "";

			document.getElementById("table_card").classList.remove('card-appear', 'card-disappear');
			document.getElementById("hand_card").classList.remove('card-appear', 'card-disappear');

			gameplaybtn.forEach(btn => {
				btn.disabled = true;
			});

			lastchancebtn.forEach(btn => {
				btn.disabled = true;
			});

			document.getElementById("clear_button").disabled = true;

			document.getElementById("empty_gambit").innerHTML = "...";
			document.getElementById("gambit_left").innerHTML = "";
			document.getElementById("gambit_right").innerHTML = "";
			document.getElementById("percentage").innerHTML = "";
			clearGAMBIT2();
			return;
		} else if (lifepoints > 0) {
			document.getElementById("currentgambit").innerHTML = "Select Your Gambit";
			pickTABLECARD();
			return;
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

		let lifeDisplay = (lifepoints === Infinity) ? "∞" : lifepoints;
		let blanksDisplay = (blanks === Infinity) ? "∞" : blanks;

		let historyEntry = "Game Start<br>" + " L:" + lifeDisplay + " B:" + blanksDisplay + " S:" + streak;

		document.getElementById("card_history").innerHTML = historyEntry;

		document.getElementById("scoretobeat").innerHTML = currentscoretobeat;
		document.getElementById("score").innerHTML = currentscore;
		document.getElementById("lifepoints").textContent = lifepoints === Infinity ? "∞" : lifepoints;
		document.getElementById("blanks").textContent = blanks === Infinity ? "∞" : blanks;
		document.getElementById("streak").innerHTML = streak;
		document.getElementById("output").innerHTML = "0";

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

		document.getElementById("currentgambit").innerHTML = "Select Your Gambit";

		const buttons_1 = document.querySelectorAll('.special_button_1');
		buttons_1.forEach(btn => btn.classList.remove('highlight'));

		const buttons_2 = document.querySelectorAll('.special_button_2');
		buttons_2.forEach(btn => btn.classList.remove('highlight'));

		document.getElementById("set_button").disabled = true;
		document.getElementById("clear_button").disabled = false;

		gameplaybtn.forEach(btn => {
			btn.disabled = false;
		});

		lastchancebtn.forEach(btn => {
			btn.disabled = false;
		});

		document.getElementById("table_card").classList.remove('card-appear', 'card-disappear');
		document.getElementById("hand_card").classList.remove('card-appear', 'card-disappear');

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

	streak -= streaknumber;
	document.getElementById("streak").textContent = streak;

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

		let lifeDisplay = (lifepoints === Infinity) ? "∞" : lifepoints;
		let blanksDisplay = (blanks === Infinity) ? "∞" : blanks;

		let spacing = (document.getElementById("card_history").innerHTML !== "") ? "<br><br>" : "<br>";

		let historyEntry = "Streak Sacrifice (-" + streaknumber + ")<br>" + "(+1 Life)" + "<br>L:" + lifeDisplay + " B:" + blanksDisplay + " S:" + streak + spacing;

		document.getElementById("card_history").innerHTML = historyEntry + document.getElementById("card_history").innerHTML;

	} else if (type === 'blanks') {
		if (blanks !== Infinity) {
			if (blanks >= GLOBAL_CAP) {
				enforceCaps();
				document.getElementById("currentgambit").textContent = "Max Blanks Reached";
				document.getElementById("empty_gambit").textContent = "...";
				document.getElementById("percentage").innerHTML = "";
				return;
			}
			blanks++; 
			document.getElementById("blanks").textContent = blanks;
		}
		document.getElementById("currentgambit").textContent = "Streak Sacrificed";
		document.getElementById("empty_gambit").textContent = "(+1 Blank)";
		document.getElementById("percentage").innerHTML = "";

		let lifeDisplay = (lifepoints === Infinity) ? "∞" : lifepoints;
		let blanksDisplay = (blanks === Infinity) ? "∞" : blanks;

		let spacing = (document.getElementById("card_history").innerHTML !== "") ? "<br><br>" : "<br>";

		let historyEntry = "Streak Sacrifice (-" + streaknumber + ")<br>" + "(+1 Blank)" + "<br>L:" + lifeDisplay + " B:" + blanksDisplay + " S:" + streak + spacing;

		document.getElementById("card_history").innerHTML = historyEntry + document.getElementById("card_history").innerHTML;
	}

	enforceCaps();
}

// Blank Related Functions

	function useBLANK() {
		if (playerwin === true) return;
		if (lifepoints === 0) return;
		if (cards.length === 0) {
			emptyDECK();
			return;
		}
		if (blanks === 0) {
			document.getElementById("currentgambit").innerHTML = "No Blanks Available";
			document.getElementById("percentage").innerHTML = "";
			return;
		};

		valueswitch = -1;
		variable = "Blank";
		element = "none";
		multiplier = 1;

		updateTESTVALUES();
		waitforPLAYER(true);
		
		document.getElementById("currentgambit").innerHTML = "Blank Used";

		usedstreak = streak;

		if (blankscoreop === "/") {
			currentscore = Math.floor(currentscore + (streak + acevalue) / blankscoreamount);
		} else {
			currentscore = Math.floor(currentscore + (streak + acevalue) * blankscoreamount);
		}

		lifepoints += (blanklifeop === '-' ? -blanklifeamount : blanklifeamount);
		if (lifepoints < 0) lifepoints = 0;
		document.getElementById("lifepoints").textContent = lifepoints;

		// Apply the Streak modifier
		streak += (blankstreakop === '-' ? -blankstreakamount : blankstreakamount);
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

		const index = Math.floor(Math.random() * cards.length);
		card = cards.splice(index, 1)[0];
		value = card.value;
        	currentPoints = card.points;
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

		triggerAnimation('hand_card', 'card-appear');
	}

// Picks the Next Table Card

	function pickTABLECARD() {
		if (playerwin === true) return;
		if (cards.length <= 1) {
			emptyDECK();
			return;
		}

		const index = Math.floor(Math.random() * cards.length);
		const card = cards.splice(index, 1)[0];
		const value = card.value;
        	const points = card.points;
		const rank = card.rank;
		const suit = card.suit;
		const color = card.color;
		result2 = rank.concat(" ", suit);

		document.getElementById("remaining").textContent = cards.length;
		acevalue = points;

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

		triggerAnimation('table_card', 'card-appear');
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
     usedstreak = 0;
            let pts = currentPoints;
            if (multiplierOp === "/") {
                currentscore = Math.floor(currentscore + pts / multiplier);
            } else {
                currentscore = Math.floor(currentscore + pts * multiplier);
            }
			if (winstreakamount !== 0) addORremove('streak', winstreakamount, winstreakop);
			if (winlifeamount !== 0) addORremove('lifepoints', winlifeamount, winlifeop);
			updateTESTVALUES();
			waitforPLAYER(true);
		} else {
			if (lifepoints !== Infinity) {
				lifepoints = 0;
				document.getElementById("lifepoints").textContent = "0";
			}
			if (blanks !== Infinity) {
				blanks = 0;
				document.getElementById("blanks").textContent = "0";
			}
			streak = 0;
			document.getElementById("streak").textContent = "0";
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
            usedstreak = streak;
            let pts = (streak + acevalue);
            if (multiplierOp === "/") {
                currentscore = Math.floor(currentscore + pts / multiplier);
            } else {
                currentscore = Math.floor(currentscore + pts * multiplier);
            }
			if (winstreakamount !== 0) addORremove('streak', winstreakamount, winstreakop);
			if (winlifeamount !== 0) addORremove('lifepoints', winlifeamount, winlifeop);
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
			let SPEvalue = acevalue;

if (valuemodifiertable === valueswitch && variable === check || color === 'Special' || SPEvalue === 20 && variable === check) {
                usedstreak = streak;
                let pts = (streak + acevalue);
                if (multiplierOp === "/") {
                    currentscore = Math.floor(currentscore + pts / multiplier);
                } else {
                    currentscore = Math.floor(currentscore + pts * multiplier);
                }
				if (winstreakamount !== 0) addORremove('streak', winstreakamount, winstreakop);
				if (winlifeamount !== 0) addORremove('lifepoints', winlifeamount, winlifeop);
				waitforPLAYER(true);
			} else {
				lostGAMBIT();
			}
		} else {
			if (valuemodifierhand === valueswitch && variable === check || color === 'Special') {
       usedstreak = streak;
                let pts = (streak + acevalue);
                if (multiplierOp === "/") {
                    currentscore = Math.floor(currentscore + pts / multiplier);
                } else {
                    currentscore = Math.floor(currentscore + pts * multiplier);
                }
				if (winstreakamount !== 0) addORremove('streak', winstreakamount, winstreakop);
				if (winlifeamount !== 0) addORremove('lifepoints', winlifeamount, winlifeop);
				waitforPLAYER(true);
			} else {
				lostGAMBIT();
			}
		}
	}

// Activates When the Gambit is Lost

	function lostGAMBIT() {
			if (lossstreakamount !== 0) addORremove('streak', lossstreakamount, lossstreakop);
			if (losslifeamount !== 0) addORremove('lifepoints', losslifeamount, losslifeop);
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
			winloss = "Success"
			setTimeout(resumeGAME, 1200);
		} else {
			document.getElementById("empty_gambit").innerHTML = "...";
			document.getElementById("gambit_left").innerHTML = "";
			document.getElementById("gambit_right").innerHTML = "";
			document.getElementById("currentgambit").innerHTML = "Fail";
			winloss = "Fail"
			setTimeout(resumeGAME, 1200);
		}
	}

	function resumeGAME() {
		// 1. Trigger the disappear animations
		triggerAnimation('table_card', 'card-disappear');
		setTimeout(() => {triggerAnimation('hand_card', 'card-disappear');}, 150);

		// 2. Wait 300ms for the animation to finish before clearing the HTML
		setTimeout(() => {
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

			document.getElementById("set_button").disabled = true;

			document.getElementById("hand_suit_1").innerHTML = "";
			document.getElementById("hand_number").innerHTML = "";
			document.getElementById("hand_suit_2").innerHTML = "";

			// Clean up the disappear classes so the opacity is reset for the next round
			document.getElementById("table_card").classList.remove('card-appear', 'card-disappear');
			document.getElementById("hand_card").classList.remove('card-appear', 'card-disappear');

			updateDISPLAYS();
		}, 450); // 300ms matches your CSS 0.3s duration
	}

function triggerAnimation(elementId, animationClass) {
    const el = document.getElementById(elementId);
    if (!el) return;
    
    // Reset classes to allow re-triggering the same animation
    el.classList.remove('card-appear', 'card-disappear');
    void el.offsetWidth; // Force a reflow to restart the animation
    el.classList.add(animationClass);
}


	applyPreset();
	updatePresetUI();
	reset();

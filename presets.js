const presets = [
	{
	name: "Default",
	config: {
		// Infinite Mode Toggles
		"endless": true,
		"infinite_deck": false,
		"finite_lives": true,
		"finite_blanks": true,

		// Score To Beat
		"currentscoretobeat": 100,

		// Use Custom Ranks, Suits and Points Toggles
		"use_custom_deck": false,

		// Card Quantities
		"deck-Hearts-A-qty": 1, "deck-Hearts-2-qty": 1, "deck-Hearts-3-qty": 1, "deck-Hearts-4-qty": 1, "deck-Hearts-5-qty": 1, "deck-Hearts-6-qty": 1, 
		"deck-Hearts-7-qty": 1, "deck-Hearts-8-qty": 1, "deck-Hearts-9-qty": 1, "deck-Hearts-10-qty": 1, "deck-Hearts-J-qty": 1, "deck-Hearts-Q-qty": 1, "deck-Hearts-K-qty": 1, 

		"deck-Diamonds-A-qty": 1, "deck-Diamonds-2-qty": 1, "deck-Diamonds-3-qty": 1, "deck-Diamonds-4-qty": 1, "deck-Diamonds-5-qty": 1, "deck-Diamonds-6-qty": 1, 
		"deck-Diamonds-7-qty": 1, "deck-Diamonds-8-qty": 1, "deck-Diamonds-9-qty": 1, "deck-Diamonds-10-qty": 1, "deck-Diamonds-J-qty": 1, "deck-Diamonds-Q-qty": 1, "deck-Diamonds-K-qty": 1, 

		"deck-Clubs-A-qty": 1, "deck-Clubs-2-qty": 1, "deck-Clubs-3-qty": 1, "deck-Clubs-4-qty": 1, "deck-Clubs-5-qty": 1, "deck-Clubs-6-qty": 1, 
		"deck-Clubs-7-qty": 1, "deck-Clubs-8-qty": 1, "deck-Clubs-9-qty": 1, "deck-Clubs-10-qty": 1, "deck-Clubs-J-qty": 1, "deck-Clubs-Q-qty": 1, "deck-Clubs-K-qty": 1, 

		"deck-Spades-A-qty": 1, "deck-Spades-2-qty": 1, "deck-Spades-3-qty": 1, "deck-Spades-4-qty": 1, "deck-Spades-5-qty": 1, "deck-Spades-6-qty": 1, 
		"deck-Spades-7-qty": 1, "deck-Spades-8-qty": 1, "deck-Spades-9-qty": 1, "deck-Spades-10-qty": 1, "deck-Spades-J-qty": 1, "deck-Spades-Q-qty": 1, "deck-Spades-K-qty": 1, 

		"deck-Jokers-J1-qty": 1, "deck-Jokers-J2-qty": 1, 

		// Card Points
		"deck-Hearts-A-pts": 20, "deck-Hearts-2-pts": 2, "deck-Hearts-3-pts": 3, "deck-Hearts-4-pts": 4, "deck-Hearts-5-pts": 5, "deck-Hearts-6-pts": 6, 
		"deck-Hearts-7-pts": 7, "deck-Hearts-8-pts": 8, "deck-Hearts-9-pts": 9, "deck-Hearts-10-pts": 10, "deck-Hearts-J-pts": 10, "deck-Hearts-Q-pts": 10, "deck-Hearts-K-pts": 10, 

		"deck-Diamonds-A-pts": 20, "deck-Diamonds-2-pts": 2, "deck-Diamonds-3-pts": 3, "deck-Diamonds-4-pts": 4, "deck-Diamonds-5-pts": 5, "deck-Diamonds-6-pts": 6, 
		"deck-Diamonds-7-pts": 7, "deck-Diamonds-8-pts": 8, "deck-Diamonds-9-pts": 9, "deck-Diamonds-10-pts": 10, "deck-Diamonds-J-pts": 10, "deck-Diamonds-Q-pts": 10, "deck-Diamonds-K-pts": 10, 

		"deck-Clubs-A-pts": 20, "deck-Clubs-2-pts": 2, "deck-Clubs-3-pts": 3, "deck-Clubs-4-pts": 4, "deck-Clubs-5-pts": 5, "deck-Clubs-6-pts": 6, 
		"deck-Clubs-7-pts": 7, "deck-Clubs-8-pts": 8, "deck-Clubs-9-pts": 9, "deck-Clubs-10-pts": 10, "deck-Clubs-J-pts": 10, "deck-Clubs-Q-pts": 10, "deck-Clubs-K-pts": 10, 

		"deck-Spades-A-pts": 20, "deck-Spades-2-pts": 2, "deck-Spades-3-pts": 3, "deck-Spades-4-pts": 4, "deck-Spades-5-pts": 5, "deck-Spades-6-pts": 6, 
		"deck-Spades-7-pts": 7, "deck-Spades-8-pts": 8, "deck-Spades-9-pts": 9, "deck-Spades-10-pts": 10, "deck-Spades-J-pts": 10, "deck-Spades-Q-pts": 10, "deck-Spades-K-pts": 10, 

		"deck-Jokers-J1-pts": 20, "deck-Jokers-J2-pts": 20, 

		// Modifier Toggles, Values and Operations
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

		// Initial Stats
		"lifepoints": 3, "blanks": 1, "streak": 0, "lastchance": 1, "lastchancedice": 4,

		// Win and Loss Reward or Penalties
		"winlifeamount": 0, "winlifeop": "+",
		"winstreakamount": 1, "winstreakop": "+",

		"losslifeamount": 1, "losslifeop": "-",
		"lossstreakamount": 1, "lossstreakop": "-",

		// Gambit Toggles
		"active_Low": true, "active_High": true, "active_Red": true, "active_Black": true,
		"active_Hearts": true, "active_Diamonds": true, "active_Clubs": true, "active_Spades": true, "active_Special": true,

		"active_Low_Red": true, "active_Low_Black": true, "active_High_Red": true, "active_High_Black": true,

		"active_Low_Hearts": true, "active_Low_Diamonds": true, "active_Low_Clubs": true, "active_Low_Spades": true,
		"active_High_Hearts": true, "active_High_Diamonds": true, "active_High_Clubs": true, "active_High_Spades": true,

		// Item Toggles and Modifiers
		"active_Blank": true, "active_Skip": true, "active_SacrificeLife": true, "active_SacrificeBlank": true,

		"sacrificelife": 3, "sacrificeblanks": 6,

		"skiplifeamount": 1, "skiplifeop": "-",
		"skipstreakamount": 1, "skipstreakop": "+", 
		"skipscoreamount": 0, "skipscoreop": "*",

		"blanklifeamount": 0, "blanklifeop": "+",
		"blankstreakamount": 0, "blankstreakop": "+",
		"blankscoreamount": 2, "blankscoreop": "/"
	}
    },
    {
        name: "Russian Roulette",
 	config: {
		// Infinite Mode Toggles
		"endless": false,
		"infinite_deck": false,
		"finite_lives": true,
		"finite_blanks": true,

		// Score To Beat
		"currentscoretobeat": 600,

		// Use Custom Ranks, Suits and Points Toggles
		"use_custom_deck": true,

		// Card Quantities
		"deck-Hearts-A-qty": 0, "deck-Hearts-2-qty": 2, "deck-Hearts-3-qty": 0, "deck-Hearts-4-qty": 0, "deck-Hearts-5-qty": 0, "deck-Hearts-6-qty": 0, 
		"deck-Hearts-7-qty": 0, "deck-Hearts-8-qty": 0, "deck-Hearts-9-qty": 0, "deck-Hearts-10-qty": 0, "deck-Hearts-J-qty": 0, "deck-Hearts-Q-qty": 0, "deck-Hearts-K-qty": 0, 

		"deck-Diamonds-A-qty": 0, "deck-Diamonds-2-qty": 2, "deck-Diamonds-3-qty": 0, "deck-Diamonds-4-qty": 0, "deck-Diamonds-5-qty": 0, "deck-Diamonds-6-qty": 0, 
		"deck-Diamonds-7-qty": 0, "deck-Diamonds-8-qty": 0, "deck-Diamonds-9-qty": 0, "deck-Diamonds-10-qty": 0, "deck-Diamonds-J-qty": 0, "deck-Diamonds-Q-qty": 0, "deck-Diamonds-K-qty": 0, 

		"deck-Clubs-A-qty": 0, "deck-Clubs-2-qty": 2, "deck-Clubs-3-qty": 0, "deck-Clubs-4-qty": 0, "deck-Clubs-5-qty": 0, "deck-Clubs-6-qty": 0, 
		"deck-Clubs-7-qty": 0, "deck-Clubs-8-qty": 0, "deck-Clubs-9-qty": 0, "deck-Clubs-10-qty": 0, "deck-Clubs-J-qty": 0, "deck-Clubs-Q-qty": 0, "deck-Clubs-K-qty": 0, 

		"deck-Spades-A-qty": 0, "deck-Spades-2-qty": 2, "deck-Spades-3-qty": 0, "deck-Spades-4-qty": 0, "deck-Spades-5-qty": 0, "deck-Spades-6-qty": 0, 
		"deck-Spades-7-qty": 0, "deck-Spades-8-qty": 0, "deck-Spades-9-qty": 0, "deck-Spades-10-qty": 0, "deck-Spades-J-qty": 0, "deck-Spades-Q-qty": 0, "deck-Spades-K-qty": 0, 

		"deck-Jokers-J1-qty": 10, "deck-Jokers-J2-qty": 10, 

		// Card Points
		"deck-Hearts-A-pts": 20, "deck-Hearts-2-pts": 2, "deck-Hearts-3-pts": 3, "deck-Hearts-4-pts": 4, "deck-Hearts-5-pts": 5, "deck-Hearts-6-pts": 6, 
		"deck-Hearts-7-pts": 7, "deck-Hearts-8-pts": 8, "deck-Hearts-9-pts": 9, "deck-Hearts-10-pts": 10, "deck-Hearts-J-pts": 10, "deck-Hearts-Q-pts": 10, "deck-Hearts-K-pts": 10, 

		"deck-Diamonds-A-pts": 20, "deck-Diamonds-2-pts": 2, "deck-Diamonds-3-pts": 3, "deck-Diamonds-4-pts": 4, "deck-Diamonds-5-pts": 5, "deck-Diamonds-6-pts": 6, 
		"deck-Diamonds-7-pts": 7, "deck-Diamonds-8-pts": 8, "deck-Diamonds-9-pts": 9, "deck-Diamonds-10-pts": 10, "deck-Diamonds-J-pts": 10, "deck-Diamonds-Q-pts": 10, "deck-Diamonds-K-pts": 10, 

		"deck-Clubs-A-pts": 20, "deck-Clubs-2-pts": 2, "deck-Clubs-3-pts": 3, "deck-Clubs-4-pts": 4, "deck-Clubs-5-pts": 5, "deck-Clubs-6-pts": 6, 
		"deck-Clubs-7-pts": 7, "deck-Clubs-8-pts": 8, "deck-Clubs-9-pts": 9, "deck-Clubs-10-pts": 10, "deck-Clubs-J-pts": 10, "deck-Clubs-Q-pts": 10, "deck-Clubs-K-pts": 10, 

		"deck-Spades-A-pts": 20, "deck-Spades-2-pts": 2, "deck-Spades-3-pts": 3, "deck-Spades-4-pts": 4, "deck-Spades-5-pts": 5, "deck-Spades-6-pts": 6, 
		"deck-Spades-7-pts": 7, "deck-Spades-8-pts": 8, "deck-Spades-9-pts": 9, "deck-Spades-10-pts": 10, "deck-Spades-J-pts": 10, "deck-Spades-Q-pts": 10, "deck-Spades-K-pts": 10, 

		"deck-Jokers-J1-pts": 20, "deck-Jokers-J2-pts": 20, 

		// Modifier Toggles, Values and Operations
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
    
		joker: 5, joker_op: "*",

		// Initial Stats
		"lifepoints": 1, "blanks": 5, "streak": 0, "lastchance": 0, "lastchancedice": 4,

		// Win and Loss Reward or Penalties
		"winlifeamount": 0, "winlifeop": "+",
		"winstreakamount": 0, "winstreakop": "+",

		"losslifeamount": 1, "losslifeop": "-",
		"lossstreakamount": 1, "lossstreakop": "-",

		// Gambit Toggles
		"active_Low": false, "active_High": false, "active_Red": false, "active_Black": false,
		"active_Hearts": false, "active_Diamonds": false, "active_Clubs": false, "active_Spades": false, "active_Special": true,

		"active_Low_Red": false, "active_Low_Black": false, "active_High_Red": false, "active_High_Black": false,

		"active_Low_Hearts": false, "active_Low_Diamonds": false, "active_Low_Clubs": false, "active_Low_Spades": false,
		"active_High_Hearts": false, "active_High_Diamonds": false, "active_High_Clubs": false, "active_High_Spades": false,

		// Item Toggles and Modifiers
		"active_Blank": true, "active_Skip": false, "active_SacrificeLife": false, "active_SacrificeBlank": false,

		"sacrificelife": 0, "sacrificeblanks": 0,

		"skiplifeamount": 0, "skiplifeop": "-",
		"skipstreakamount": 0, "skipstreakop": "+", 
		"skipscoreamount": 0, "skipscoreop": "*",

		"blanklifeamount": 0, "blanklifeop": "+",
		"blankstreakamount": 0, "blankstreakop": "+",
		"blankscoreamount": 0, "blankscoreop": "*"
	}
    }
];

// export { presets };

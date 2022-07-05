var iFileName = "Kestramore - Shai'Rae.js"
RequiredSheetVersion(12.999); 

RaceList["shai'rae"] = { 
	regExpSearch : /^(?=.*shai'rae).*$/i,
	name : "Shai'Rae", 
	sortname : "Shai'Rae",
	source : ["KM", 0], 
	plural : "Shai'Rae",
	size : 3, 
	speed : { 
		walk : { spd : 30, enc : 20 }, 
	},
	languageProfs : ["Common","Shai'Reese"],
    vision : [["Darkvision", 60]], 
	savetxt : { 
		text : ["Magic can't put me to sleep"], 
		adv_vs : ["charmed"] 
	},
	age : " reach adulthood in their late teens and live for an indefinite length of time", 
	height : " range from 5 to 7 feet tall (4'9\" + 3d8\")", 
	weight : " weigh around 155 lb (2d8 \xD7 2d4 + 110 lb)",
	heightMetric : " range from 1.5 to over 2.1 metres tall (140 + 10d7 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)", 
	improvements : "Shai'Rae: +2 Intelligence, +1 Wisdom;", 
	scores : [0, 0, 0, 2, 1, 0], 
	trait : "Shai'Rae (+2 Intelligence, +1 Wisdom)\n   Shai'Rae Shoma: I can alter small details of my appearance at will, e.g. colour/patterns of fur/feathers/scales/skin etc. I am immune to magical sleep and have advantage against being charmed. I make Animal Handling checks with advantage.\n   Spiritual Blood: Instead of sleeping, I meditate for up to four hours, during which time my soul may explore the wondrous Spirit Realm and commune with the spirits within.\n   Breath of Magic: I can sense the presence of magic all around me as per Detect Magic. Additionally, if I am deprived of magic (e.g. by an antimagic zone) for an extended period, I begin to weaken and eventually die after about ten days without magic. The amount of magic items I may attune to increases by one.\n   Loteslea Magic: I can attune to an appropriately levelled spell scroll as a magic item, consuming and destroying it. I may cast it from INT once per long rest.", 
	spellcastingAbility : 4,
	spellcastingBonus : [{
		name : "Loteslea Magic (level 1-5)",
		class : "any",
		firstCol : "oncelr",
		level : [0, 0],
		times : [1,1,1,1,1,0] // you don't need anything after the last 0, as the sheet will look at the highest level in the array for levels beyond it
	  }, {
		name : "Loteslea Magic (level 6-10)",
		class : "any",
		firstCol : "oncelr",
		level : [0, 1],
		times : [0,0,0,0,0,1,1,1,1,1,0]
	  }, {
		name : "Loteslea Magic (level 11-15)",
		class : "any",
		firstCol : "oncelr",
		level : [0, 2],
		times : [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0]
	  }, {
		name : "Loteslea Magic (level 16-20)",
		class : "any",
		firstCol : "oncelr",
		level : [0, 3],
		times : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,01,1,1,1,1]
	  }],
	features : { 
		"loteslea magic" : {
			name : "Loteslea Magic",
			minlevel : 1,
			usages : 1,
			additional : ["cantrip", "cantrip", "cantrip", "cantrip", "cantrip", "1st lvl", "1st lvl", "1st lvl", "1st lvl", "1st lvl", "2nd lvl", "2nd lvl", "2nd lvl", "2nd lvl", "2nd lvl", "3rd lvl", "3rd lvl", "3rd lvl", "3rd lvl", "3rd lvl"], 
			recovery : "long rest",
			tooltip : "; check racial features for details",
		},
	}

};

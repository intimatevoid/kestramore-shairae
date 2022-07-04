/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	(sub)race
	Effect:		This is the syntax for adding a new (sub)race to the sheet.
				Note that you will need to define a race using this syntax once for every sub-race (i.e. there is a separate entry for High Elf, Wood Elf, and Dark Elf)
				You will use this for a race that doesn't have a subrace, like Dragonborn and also for a subrace of a race, like Hill Dwarf and Mountain Dwarf.
				You do not make a separate entry for the parent of a subrace. So there is no Dwarf or Elf entry!
				For races that have variants, like the human, you can define a variant using the RaceSubList. Any variant defined like that will only be selectable through the "Racial Options" button
	Sheet:		v13.00.00 (2018-??-??) [identical to v12.999 syntax, except v12.999 uses 'borrow' for the burrow speed]
*/

var iFileName = "Kestramore - Shai'Rae.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

RaceList["shairae"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []

	regExpSearch : /^(?=.*shai'rae)(?=.*shairae).*$/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "something" and "catlike" in it, disregarding capitalization). If this looks too complicated, just write: /something catlike/i

	name : "Shai'Rae", //required; the name to use for the race

	source : ["KM", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	plural : "Shai'Rae", //required; the name to use for the race when the plural form is used

	size : 3, //required;  the size of the race (Gargantuan = 0, Huge = 1, Large = 2, Medium = 3, Small = 4, Tiny = 5)

	speed : { //required; This sets a value for one or more speed modes, and/or a value to be added to a specific speed mode or to all speed modes // the attributes of this object can be "walk", "burrow", "climb", "fly", "swim", and "allModes"

		// all of the following attributes are optional and you can add more ("burrow" isn't part of this example!)

		walk : { spd : 30, enc : 20 }, // the objects "walk", "burrow", "climb", "fly", "swim" are all the same, they are an object with two attributes, 'spd' for the speed in feet, and 'enc' for the encumbered speed in feet.
	},

/* SYNTAX CHANGE v12.998 >> old syntax for 'tools' and 'languages' are no longer supported!! */
	languageProfs : ["Common", "Shai'Reese"], // optional; this is an array of the language proficiencies gained. An entry can either be 1) a string that represents the language learned or 2) a number which is the number of language gained that can be chosen by the player

	vision : [["Darkvision", 60], ["Sunlight Sensitivity", 0]], //optional; An array of arrays that each have a length of 2; This adds the first value of each array to the Senses field. The second value is the range in feet. If no range is needed, put a 0 there. You can also add a modifier like "+30" or "*2" to have the appropriate calculation done with the range of sense

	savetxt : { // Optional; this attribute defines entries to add to the field for "Saving Throw Advantages / Disadvantages"

		text : ["Magic can't put me to sleep"], // Optional; this is an array of strings, and each of those strings is added to the field exactly as presented here

		//immune : ["poison", "disease"], // Optional; this is an array of strings that the character is immune to. This is put in the field after the text "Immune to ", so in this example it would result in "Immune to poison and disease"

		adv_vs : ["charmed"] // Optional; this is an array of things that the character has advantage on saves against. This is put in the field after the text "Adv. on saves vs. ", so in this example it would result in "Adv. on saves vs. traps and charmed"
	},

	age : " reach adulthood in their late teens and live indefinitely", //optional; the age tooltip/mouseover text (will be displayed in combination with the "plural" entry)

	height : " range from 5 to 7 feet tall (4'9\" + 3d8\")", //optional; the height tooltip/mouseover text (will be displayed in combination with the "plural" entry)

	improvements : "Shai'Rae: +2 Intelligence, +1 Wisdom;", //required; the text that is displayed when listing all the ability score improvements

	scores : [0, 0, 0, 2, 1, 0], //required; the ability score improvements as used by the Ability Score dialog. The syntax is: [Str, Dex, Con, Int, Wis, Cha]

	trait : "Shai'rae (+2 Intelligence, +1 Wisdom)\nShai'Reese Shoma:\n   I can alter small details of my appearance.\n   Spiritual Blood:\n   I do not sleep, but meditate for four hours, in which I visit the spirit world.\nBreath of Magic: \n   I can sense magic as per Detect Magic at all times. If deprived of magic I weaken and die after ten days.\n   Lotslea Magic: I can attune to and consume a spell scroll to use once per long rest. 1st lvl=cantrip, 6th=1st, 11th=2nd, 16=3rd.", //required; the racial trait as it will be put in the Racial Trait field on the second page (note that "\n" is a line break).
	},

	features : { //optional; the racial features. Each works the same way, so only a couple of example are given. You can add as many as you want. If the race has no level-dependent or limited features, you can just delete the whole feature entry all together

		"loteslea magic" : { //note the use of lower case characters

			name : "Loteslea Magic", //required; the name of the racial feature
			minlevel : 1, //required; the level at which the feature is gained

			usages : 1, //optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level

			recovery : "long rest", //required if "usages" is defined; way of getting the limited feature recharged. If you can use anything, but use either "long rest" or "short rest" (note the lower case) for best compatibility with the limited features section. This can be one value, but can also be an array of 20 values, one for each level

			tooltip : " Loteslea Magic", //optional; the tooltip added to the entry in the Limited Feature section, this example will read "Lesser Restoration is gained from Something Catlike (Celestial Legacy)"
			},			
		},
	}
};

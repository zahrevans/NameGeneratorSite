//Defines Variables from inputs
const firstName = document.getElementById('firstName').value.trim()
const lastName = document.getElementById('lastName').value.trim()
const classification = document.getElementById('classification').value.trim()
const favoriteRegion = document.getElementById('region').value.trim()

const favoriteType = document.getElementById('favoriteType').value.trim()
const preferredStat = document.getElementById('nature').value.trim()



//generate prefix of Name
function genPrefix(favoriteRegion) {
    if (favoriteRegion === 'kanto') {
        return "Starter"
    } else if (favoriteRegion === 'johto') {
        return "Legendary";
    } else if (favoriteRegion === 'hoenn') {
        return "Shiny";
    } else if (favoriteRegion === 'sinnoh') {
        return "Cosmic";
    } else if (favoriteRegion === 'unova') {
        return "Mythical";
    } else if (favoriteRegion === 'kalos') {
        return "Mega";
    } else if (favoriteRegion === 'alola') {
        return "Paradox";
    } else if (favoriteRegion === 'galar') {
        return "Sub-Legendary";
    } else if (favoriteRegion === 'paldea') {
        return "Pseudo-Legendary";
    } else {
        return "common"
    }
}

//generate first name of name
function genFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase()

    if (firstLetter === 'a') {
        return 'Abom'
    } else if (firstLetter === 'b') {
        return 'Blaz'
    } else if (firstLetter === 'c') {
        return 'Carb'
    } else if (firstLetter === 'd') {
        return 'Darm'
    } else if (firstLetter === 'e') {
        return 'Ent'
    } else if (firstLetter === 'f') {
        return 'Froak'
    } else if (firstLetter === 'g') {
        return 'Gar'
    } else if (firstLetter === 'h') {
        return 'Hax'
    } else if (firstLetter === 'i') {
        return 'Ink'
    } else if (firstLetter === 'j') {
        return 'Jang'
    } else if (firstLetter === 'k') {
        return 'Kel'
    } else if (firstLetter === 'l') {
        return 'Luc'
    } else if (firstLetter === 'm') {
        return 'March'
    } else if (firstLetter === 'n') {
        return 'Nagan'
    } else if (firstLetter === 'o') {
        return 'Oct'
    } else if (firstLetter === 'p') {
        return 'Por'
    } else if (firstLetter === 'q') {
        return 'Qwil'
    } else if (firstLetter === 'r') {
        return 'Ramp'
    } else if (firstLetter === 's') {
        return 'Slug'
    } else if (firstLetter === 't') {
        return 'Tink'
    } else if (firstLetter === 'u') {
        return 'Umb'
    } else if (firstLetter === 'v') {
        return 'Vict'
    } else if (firstLetter === 'w') {
        return 'Wal'
    } else if (firstLetter === 'x') {
        return 'Xer'
    } else if (firstLetter === 'y') {
        return 'Yamp'
    } else if (firstLetter === 'z') {
        return 'Zer'
    } else {
        return 'Tink' //default name
    }

}

//generate middle name 

function genMiddleName(classification) {
    switch (classification) {
        case 'leg':
            return 'a';
        case 'myth':
            return 'e';
        case 'start':
            return 'i';
        case 'ub':
            return 'o';
        case 'para':
            return 'u';
        case 'mega':
            return 'y';
        default:
            return 'a';
    }
}
// generate last name
function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase()
    if (lastLetter === 'a') {
        return 'ria'
    } else if (lastLetter === 'b') {
        return 'tomb'
    } else if (lastLetter === 'c') {
        return 'stic'
    } else if (lastLetter === 'd') {
        return 'lord'
    } else if (lastLetter === 'e') {
        return 'trode'
    } else if (lastLetter === 'f') {
        return 'tuff'
    } else if (lastLetter === 'g') {
        return 'king'
    } else if (lastLetter === 'h') {
        return 'mish'
    } else if (lastLetter === 'i') {
        return 'washi'
    } else if (lastLetter === 'k') {
        return 'buck'
    } else if (lastLetter === 'l') {
        return 'cool'
    } else if (lastLetter === 'm') {
        return 'trum'
    } else if (lastLetter === 'n') {
        return 'ton'
    } else if (lastLetter === 'o') {
        return 'drago'
    } else if (lastLetter === 'p') {
        return 'tomp'
    } else if (lastLetter === 'r') {
        return 'tar'
    } else if (lastLetter === 's') {
        return 'lass'
    } else if (lastLetter === 't') {
        return 'skit'
    } else if (lastLetter === 'u') {
        return 'shifu'
    } else if (lastLetter === 'v') {
        return 'liv'
    } else if (lastLetter === 'w') {
        return 'dow'
    } else if (lastLetter === 'x') {
        return 'lax'
    } else if (lastLetter === 'y') {
        return 'phy'
    } else if (lastLetter === 'z') {
        return '-z'
    } else if (lastLetter === 'j' || lastLetter === 'q') {
        return 'ram'
    } else {
        return 'ton' //default name
    }
}

// gen pokemon type
function genType(favoriteType) {
    switch (favoriteType) {
        case 'normal':
            return 'normal';
        case 'fire':
            return 'fire';
        case 'water':
            return 'water';
        case 'grass':
            return 'grass';
        case 'electric':
            return 'electric';
        case 'fighting':
            return 'fighting';
        case 'flying':
            return 'flying';
        case 'bug':
            return 'bug';
        case 'psychic':
            return 'psychic';
        case 'poison':
            return 'poison';
        case 'dark':
            return 'dark';
        case 'ghost':
            return 'ghost';
        case 'ground':
            return 'ground';
        case 'rock':
            return 'rock';
        case 'steel':
            return 'steel';
        case 'fairy':
            return 'fairy';
        case 'dragon':
            return 'dragon';
        case 'ice':
            return 'ice';
        default:
            return 'none'; // impossible value
    }
}

//generate nature 
function genNature(favoriteType, preferredStat) {
    // Assign mappings for stat preferences
    const natureMap = {
        Attack: { fire: "Adamant", fighting: "Brave", dark: "Naughty", rock: "Lonely", steel: "Impish", dragon: "Rash", normal: "Lonely" },
        Defense: { rock: "Relaxed", steel: "Impish", ground: "Bold", ice: "Lax", grass: "Calm", poison: "Gentle", bug: "Careful", fairy: "Gentle" },
        SpecialAttack: { psychic: "Modest", electric: "Mild", fairy: "Quiet", dragon: "Rash", water: "Gentle", fire: "Naive", ghost: "Quiet", ice: "Mild" },
        SpecialDefense: { water: "Calm", grass: "Gentle", ghost: "Sassy", bug: "Careful", steel: "Docile", fairy: "Calm", ice: "Relaxed", poison: "Careful" },
        Speed: { flying: "Jolly", fire: "Naive", electric: "Timid", ghost: "Hasty", bug: "Quirky", dark: "Serious", water: "Gentle", psychic: "Timid" },
        Neutral: { any: ["Hardy", "Serious", "Bashful", "Docile", "Quirky"] },
    };


    // Assign nature based on type and stat preference
    if (natureMap[preferredStat] && natureMap[preferredStat][favoriteType]) {
        return natureMap[preferredStat][favoriteType];
    }

    // If no match, assign a neutral nature
    const neutralNatures = natureMap.Neutral.any;
    const randomIndex = Math.floor(Math.random() * neutralNatures.length);
    return neutralNatures[randomIndex]; // Random neutral nature
}

//generate gym
function genGym(favoriteRegion) {
    // Generate a random number between 1 and 8
    const gymNumber = Math.floor(Math.random() * 8) + 1;

    // Determine the gym based on the region and gym number
    if (favoriteRegion === "kanto" && gymNumber === 1) {
        return "Boulder";
    } else if (favoriteRegion === "kanto" && gymNumber === 2) {
        return "Cascade";
    } else if (favoriteRegion === "kanto" && gymNumber === 3) {
        return "Thunder";
    } else if (favoriteRegion === "kanto" && gymNumber === 4) {
        return "Rainbow";
    } else if (favoriteRegion === "kanto" && gymNumber === 5) {
        return "Soul";
    } else if (favoriteRegion === "kanto" && gymNumber === 6) {
        return "Marsh";
    } else if (favoriteRegion === "kanto" && gymNumber === 7) {
        return "Volcano";
    } else if (favoriteRegion === "kanto" && gymNumber === 8) {
        return "Earth";
    } else if (favoriteRegion === "johto" && gymNumber === 1) {
        return "Zephyr";
    } else if (favoriteRegion === "johto" && gymNumber === 2) {
        return "Hive";
    } else if (favoriteRegion === "johto" && gymNumber === 3) {
        return "Plain";
    } else if (favoriteRegion === "johto" && gymNumber === 4) {
        return "Fog";
    } else if (favoriteRegion === "johto" && gymNumber === 5) {
        return "Storm";
    } else if (favoriteRegion === "johto" && gymNumber === 6) {
        return "Mineral";
    } else if (favoriteRegion === "johto" && gymNumber === 7) {
        return "Glacier";
    } else if (favoriteRegion === "johto" && gymNumber === 8) {
        return "Rising";
    } else if (favoriteRegion === "hoenn" && gymNumber === 1) {
        return "Stone";
    } else if (favoriteRegion === "hoenn" && gymNumber === 2) {
        return "Knuckle";
    } else if (favoriteRegion === "hoenn" && gymNumber === 3) {
        return "Dynamo";
    } else if (favoriteRegion === "hoenn" && gymNumber === 4) {
        return "Heat";
    } else if (favoriteRegion === "hoenn" && gymNumber === 5) {
        return "Balance";
    } else if (favoriteRegion === "hoenn" && gymNumber === 6) {
        return "Feather";
    } else if (favoriteRegion === "hoenn" && gymNumber === 7) {
        return "Mind";
    } else if (favoriteRegion === "hoenn" && gymNumber === 8) {
        return "Rain";
    } else if (favoriteRegion === "sinnoh" && gymNumber === 1) {
        return "Coal";
    } else if (favoriteRegion === "sinnoh" && gymNumber === 2) {
        return "Forest";
    } else if (favoriteRegion === "sinnoh" && gymNumber === 3) {
        return "Cobble";
    } else if (favoriteRegion === "sinnoh" && gymNumber === 4) {
        return "Fen";
    } else if (favoriteRegion === "sinnoh" && gymNumber === 5) {
        return "Relic";
    } else if (favoriteRegion === "sinnoh" && gymNumber === 6) {
        return "Mine";
    } else if (favoriteRegion === "sinnoh" && gymNumber === 7) {
        return "Icicle";
    } else if (favoriteRegion === "sinnoh" && gymNumber === 8) {
        return "Beacon";
    } else if (favoriteRegion === "unova" && gymNumber === 1) {
        return "Trio";
    } else if (favoriteRegion === "unova" && gymNumber === 2) {
        return "Basic";
    } else if (favoriteRegion === "unova" && gymNumber === 3) {
        return "Insect";
    } else if (favoriteRegion === "unova" && gymNumber === 4) {
        return "Bolt";
    } else if (favoriteRegion === "unova" && gymNumber === 5) {
        return "Quake";
    } else if (favoriteRegion === "unova" && gymNumber === 6) {
        return "Jet";
    } else if (favoriteRegion === "unova" && gymNumber === 7) {
        return "Freeze";
    } else if (favoriteRegion === "unova" && gymNumber === 8) {
        return "Legend";
    } else if (favoriteRegion === "kalos" && gymNumber === 1) {
        return "Bug";
    } else if (favoriteRegion === "kalos" && gymNumber === 2) {
        return "Cliff";
    } else if (favoriteRegion === "kalos" && gymNumber === 3) {
        return "Rumble";
    } else if (favoriteRegion === "kalos" && gymNumber === 4) {
        return "Plant";
    } else if (favoriteRegion === "kalos" && gymNumber === 5) {
        return "Voltage";
    } else if (favoriteRegion === "kalos" && gymNumber === 6) {
        return "Fairy";
    } else if (favoriteRegion === "kalos" && gymNumber === 7) {
        return "Psychic";
    } else if (favoriteRegion === "kalos" && gymNumber === 8) {
        return "Iceberg";
    } else if (favoriteRegion === "alola" && gymNumber === 1) {
        return "Gumshoos";
    } else if (favoriteRegion === "alola" && gymNumber === 2) {
        return "Wishiwashi";
    } else if (favoriteRegion === "alola" && gymNumber === 3) {
        return "Marowak";
    } else if (favoriteRegion === "alola" && gymNumber === 4) {
        return "Lurantis";
    } else if (favoriteRegion === "alola" && gymNumber === 5) {
        return "Vikavolt";
    } else if (favoriteRegion === "alola" && gymNumber === 6) {
        return "Mimikyu";
    } else if (favoriteRegion === "alola" && gymNumber === 7) {
        return "Kommo-o";
    } else if (favoriteRegion === "alola" && gymNumber === 8) {
        return "Island";
    } else if (favoriteRegion === "galar" && gymNumber === 1) {
        return "Turffield";
    } else if (favoriteRegion === "galar" && gymNumber === 2) {
        return "Hulbury";
    } else if (favoriteRegion === "galar" && gymNumber === 3) {
        return "Motostoke";
    } else if (favoriteRegion === "galar" && gymNumber === 4) {
        return "Stow-on-Side";
    } else if (favoriteRegion === "galar" && gymNumber === 5) {
        return "Ballonlea";
    } else if (favoriteRegion === "galar" && gymNumber === 6) {
        return "Circhester";
    } else if (favoriteRegion === "galar" && gymNumber === 7) {
        return "Spikemuth";
    } else if (favoriteRegion === "galar" && gymNumber === 8) {
        return "Hammerlocke";
    } else if (favoriteRegion === "paldea" && gymNumber === 1) {
        return "Cortondo";
    } else if (favoriteRegion === "paldea" && gymNumber === 2) {
        return "Artazon";
    } else if (favoriteRegion === "paldea" && gymNumber === 3) {
        return "Levincia";
    } else if (favoriteRegion === "paldea" && gymNumber === 4) {
        return "Cascarrafa";
    } else if (favoriteRegion === "paldea" && gymNumber === 5) {
        return "Medali";
    } else if (favoriteRegion === "paldea" && gymNumber === 6) {
        return "Montenevera";
    } else if (favoriteRegion === "paldea" && gymNumber === 7) {
        return "Alfornada";
    } else if (favoriteRegion === "paldea" && gymNumber === 8) {
        return "Glaseado";
    } else {
        return "Unknown Gym";
    }
}



// Master Function to Assemble Full Name
function genFullName() {
    // Define Variable from Inputs
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const classification = document.getElementById("classification").value;
    const favoriteRegion = document.getElementById("region").value.trim();

    const favoriteType = document.getElementById("favoriteType").value.trim();
    const preferredNature = document.getElementById("nature").value.trim();


    // Generate each part of the name using Helper functions
    const prefix = genPrefix(favoriteRegion);
    const newFirstName = genFirstName(firstName);
    const middleName = genMiddleName(classification);
    const newLastName = genLastName(lastName);

    const type = genType(favoriteType);
    const nature = genNature(favoriteType, preferredNature);
    const gym = genGym(favoriteRegion)
    //function to captialized words
    const capitalizePrefix = capitalize(prefix)
    const capitalizeFirstName = capitalize(newFirstName)

    const capitalizeType = capitalize(type)
    const capitalizeNature = capitalize(nature)
    const capitalizeGym = capitalize(gym)

    // combine all parts
    const fullName = `A  ${capitalizeType} Type ${capitalizePrefix} Pokemon Named ${capitalizeFirstName}${middleName}${newLastName} The  ${capitalizeNature} of The ${capitalizeGym} Gym`;

    //result
    document.getElementById('result').textContent = fullName;
}

// capitalizer function
function capitalize(word) {
    console.log(word)
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}
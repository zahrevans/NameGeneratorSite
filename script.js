//Defines Variables from inputs
const firstName = document.getElementById('firstName').value.trim()
const lastName = document.getElementById('lastName').value.trim()
const classification = document.getElementById('classification').value.trim()
const favoriteRegion = document.getElementById('region').value.trim()
const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim()
const favoriteType = document.getElementById('type').value.trim()
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
    console.log(firstLetter)
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
        case 'Ghost':
            return 'Ghost';
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
            return 'Null'; //type : null for errors (real pokemon)
    }
}

//generate nature 
function genNature(favoriteType, preferredStat) {
    // Assign mappings for stat preferences
    const natureMap = {
        Attack: { fire: "Adamant", fighting: "Brave", dark: "Naughty", normal: "Lonely" },
        Defense: { rock: "Relaxed", steel: "Impish", ground: "Bold", ice: "Lax" },
        SpecialAttack: { psychic: "Modest", electric: "Mild", fairy: "Quiet", dragon: "Rash" },
        SpecialDefense: { water: "Calm", grass: "Gentle", ghost: "Sassy", bug: "Careful" },
        Speed: { flying: "Jolly", fire: "Naive", electric: "Timid", ghost: "Hasty" },
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


// Generate Suffix
function genSuffix(favoriteAnimal) {
    return `of the ${favoriteAnimal}`;
}

// Master Function to Assemble Full Name
function genFullName() {
    // Define Variable from Inputs
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const classification = document.getElementById("classification").value;
    const favoriteRegion = document.getElementById("region").value.trim();
    const favoriteAnimal = document.getElementById("favoriteAnimal").value.trim();

    // Generate each part of the name using Helper functions
    const prefix = genPrefix(favoriteRegion);
    const newFirstName = genFirstName(firstName);
    const middleName = genMiddleName(classification);
    const newLastName = genLastName(lastName);
    const suffix = genSuffix(favoriteAnimal);

    //function to captialized words
    const capitalizePrefix = capitalize(prefix)
    const capitalizeFirstName = capitalize(newFirstName)
    const capitalizeSuffix = capitalize(suffix)

    // combine all parts
    const fullName = `${capitalizePrefix} ${capitalizeFirstName}${middleName}${newLastName} ${capitalizeSuffix}`;

    //result
    document.getElementById('result').textContent = fullName;
}

// capitalizer function
function capitalize(word) {
    console.log(word)
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}
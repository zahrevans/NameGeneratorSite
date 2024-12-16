//Defines Variables from inputs
const firstName = document.getElementById('firstName').value.trim()
const lastName = document.getElementById('lastName').value.trim()
const roadType = document.getElementById('roadType').value.trim()
const favoriteColor = document.getElementById('favoriteColor').value.trim()
const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim()




//generate prefix of Name
function genPrefix(firstname) {
    if (firstName.length > 4) {
        return 'The Great'
    }
    else {
        return 'Master'
    }
}

//generate first name of name
function genFirstName(firstname) {
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

function genMiddleName(roadType, favoriteColor) {
    if (roadType === 'road') {
        return `${favoriteColor}ridge`
    } else if (roadType === 'street') {
        return `${favoriteColor}ridge`
    } else {
        return `${favorColor}stone`
    }
}
// generate last name
function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase()
    if (lastLetter === 'a') {
        return 'Michael'
    } else if (lastLetter === 'b') {
        return 'David'
    } else if (lastLetter === 'c') {
        return 'Pim'
    } else if (lastLetter === 'd') {
        return 'Edward'
    } else {
        return 'Jonsey' //default name
    }
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
    const roadType = document.getElementById("roadType").value;
    const favoriteColor = document.getElementById("favoriteColor").value.trim();
    const favoriteAnimal = document.getElementById("favoriteAnimal").value.trim();

    // Generate each part of the name using Helper functions
    const prefix = genPrefix(firstName);
    const newFirstName = genFirstName(firstName);
    const middleName = genMiddleName(roadType, favoriteColor);
    const newLastName = genLastName(lastName);
    const suffix = genSuffix(favoriteAnimal);

    //function to captialized words
    const capitalizePrefix = capitalize(prefix)
    const capitalizeFirstName = capitalize(newFirstName)
    const capitalizeMiddleName = capitalize(middleName)
    const capitalizeLastName = capitalize(newLastName)
    const capitalizeSuffix = capitalize(suffix)

    // combine all parts
    const fullName = `${capitalizePrefix} ${capitalizeFirstName} ${capitalizeMiddleName} ${capitalizeLastName} ${capitalizeSuffix}`;

    //result
    document.getElementById('result').textContent = fullName;
}

// capitalizer function
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}
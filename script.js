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
        return 'Michael'
    } else if (firstLetter === 'b') {
        return 'David'
    } else if (firstLetter === 'c') {
        return 'Pim'
    } else if (firstLetter === 'd') {
        return 'Edward'
    } else {
        return 'Jonsey' //default name
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

//generate suffix 
function genSuffix(f)
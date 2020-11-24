
const courselist = [
    {code: "ACIT 1420", name: "Intorduction to Systems Administration"},
    {code: "ACIT 1515", name: "Scripting for IT"},
    {code: "ACIT 1630", name: "Database Systems"}
];

function checkInput(){
    var contact = document.getElementById("contact").value;
    var parseded = parseInt(contact)
    if (parseded.toString().length !== 4 || parseded === NaN){
        result = document.getElementById("return message").innerHTML = `${contact} is not a valid input please try again`;
        return result;
    }
    result = "no"
    for (const codes in courselist){
        if (courselist[codes]["code"] == `ACIT ${contact.toString()}`){
            result = document.getElementById("return message").innerHTML = `Yes I am taking the course: ${courselist[codes]["code"]} - ${courselist[codes]["name"]}`
            console.log(`Yes I am taking the course: ${courselist[codes]["code"]} - ${courselist[codes]["name"]}`)
        }
    }
    if (result === "no"){
        result = document.getElementById("return message").innerHTML = "I am not taking that course but I will add it :) "
        courselist.push({code: `ACIT ${contact.toString()}`, name: null})
        console.log(`${courselist[courselist.length -1]["code"]} has been added using console.push`)
    }
    return result
    }


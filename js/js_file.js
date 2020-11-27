
const courselist = [
    {code: "ACIT 1420", name: "Intorduction to Systems Administration"},
    {code: "ACIT 1515", name: "Scripting for IT"},
    {code: "ACIT 1630", name: "Database Systems"}
];

function findcourse(){
    var hatr = document.querySelectorAll('a.hats');
    var CourseArray = []
    for (x of hatr){
        CourseArray.push({class: `${x.innerHTML}`, date: "Fall 2020"})
        console.log(x.innerHTML)
    }
    var makeg = document.getElementById("makergreen").value;
    var makeitint = parseInt(makeg);
    if (makeitint.toString().length !== 4 || makeitint === NaN){
        result = document.getElementById("demo").innerHTML = `${makeg} is not a valid input please try again`;
        
        return result;
    }
    result = "no"
    cont = -1
    for (x of CourseArray){
        cont = cont + 1
        console.log(x["class"])
        if (x["class"].includes(`ACIT ${makeg.toString()}`)){
        result = document.getElementById("demo").innerHTML = `Yes I am taking the course: ${x["class"]}`
        console.log(cont)
        hatr[cont].style.backgroundColor = "green";
        }}
    if (result === "no"){

        var tag = document.createElement("a");
        tag.className = 'hats'
        var text = document.createTextNode(`ACIT ${makeitint} - Null`);
        tag.appendChild(text);
        var didi = document.createElement("div");
        didi.className = "anyother";
        didi.appendChild(tag);
        var element = document.getElementById("new");
        element.appendChild(tag);

        var tag = document.createElement("p");
        tag.className = 'hats'
        var text = document.createTextNode(`fall 2020`);
        tag.appendChild(text);
        var didi = document.createElement("div");
        didi.className = "anyother";
        didi.appendChild(tag);
        var element = document.getElementById("new");
        element.appendChild(tag);

    }

}





function checkInput(){
    var contact = document.getElementById("contact").value;
    var parseded = parseInt(contact);
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


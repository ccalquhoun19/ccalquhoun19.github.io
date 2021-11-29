async function sendRequest() {

    let initialURL = "https://date.nager.at/api/v3/publicholidays/"
    let userYear = $("#userYear").val();
    let userCountry = $("input[name=TypeList]").val();

    let userURL = initialURL + userYear + "/" + userCountry;

    let html = "";

    const response = await fetch(userURL);
    if (response.ok) {
       const holidays = await response.json();
       for (let names of holidays) {
        html += `<li>${names.localName} - ${names.name}</li>`;
     }
     document.querySelector("ul").innerHTML = html;
    }
    else {
       alert("Can't find country. Try another country.");
    }
}


async function sendRequest() {

    // initialize variables for url
    let initialURL = "https://date.nager.at/api/v3/publicholidays/"
    let userYear = $("#user-year").val();
    let userCountry = $("input[name=TypeList]").val();

    // create url for GET request
    let userURL = initialURL + userYear + "/" + userCountry;

    // fetch the url and check if it's valid
    const response = await fetch(userURL);
    if (response.ok) {
        // initialize variables for adding elements to the table
        let dates = "";
        let localNames = "";
        let commonNames = "";

        // get response from API
        const holidays = await response.json();

        // for each date in the response
        for (let names of holidays) {
            dates += `<td> ${names.date} </td>`;
            localNames += `<td> ${names.localName} </td>`;
            commonNames += `<td> ${names.name} </td>`;
        }
        $("#dates-row").html(`<th>Dates</th>`+ dates);
        $("#local-row").html(`<th>Local Names</th>` + localNames);
        $("#common-row").html(`<th>Common Names</th>` + commonNames);
    }
    // display error message if country isn't valid
    else {
       alert("Can't find country. Try another country.");
    }
}


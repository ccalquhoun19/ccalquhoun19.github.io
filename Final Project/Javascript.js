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
        // initialize id incrementer
        let i = 1;

        // initialize variables for adding elements to the table
        let dates = "";
        let localNames = "";
        let commonNames = "";

        // get response from API
        const holidays = await response.json();

        // append headers for the table
        $("#dates-row").text("Holiday Date");
        $("#common-row").append("Common Holiday Name");
        $("#local-row").append("Local Holiday Name");

        // for each date in the response
        for (let names of holidays) {
            // create each row with the date, common name, and local name
            dates = `<tr id=${i}><td> ${names.date} </td></tr>`;
            commonNames = `<td> ${names.name} </td>`;
            localNames = `<td> ${names.localName} </td>`;

            // populate the table
            $("#holiday-output").append(dates);
            $("#" + i).append(commonNames);
            $("#" + i).append(localNames);

            // increment id
            i++;
        }
    }
    // display error message if country isn't valid
    else {
       alert("Can't find country. Try another country.");
    }
}


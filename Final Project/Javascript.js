// TODO update first row with country name
// TODO fix table so multiple searches can be done in same session
// TODO reset table before each search
// TODO validation for year
// TODO validation for country name
// TODO CSS for button
// TODO CSS for table layout
// TODO make the page look pretty


// sends Ajax request to get public holidays and updates table with information
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

        // reset table output
        $("#holiday-output").html("<tbody><tr><th id='dates-row'></th><th id='common-row'></th><th id='local-row'></th></tr></tbody>");

        // get response from API
        const holidays = await response.json();

        // append headers for the table
        $("#dates-row").text("Holiday Date");
        $("#common-row").text("Common Holiday Name");
        $("#local-row").text("Local Holiday Name");

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
       alert("Some of your input is invalid.");
    }
}


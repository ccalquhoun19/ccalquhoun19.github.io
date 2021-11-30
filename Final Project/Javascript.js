// TODO validation for year
// TODO validation for country name
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

        // show table
        $("#holiday-table").css("visibility", "visible");

        // reset table data
        $("#holiday-output").html("<tbody><tr id='country-name'></tr><tr><th id='dates-row'></th><th id='common-row'></th><th id='local-row'></th></tr></tbody>");

        // gets the country name
        // code line from: https://cmsdk.com/jquery/getting-the-value-and-text-from-a-datalist-in-jquery.html
        let countryName = document.querySelectorAll('option[value="' + userCountry + '"]')[0].innerHTML;

        // add country name
        $("#country-name").html(`<th colspan='3'> ${"Holidays in " + countryName} </th>`);

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

// if the user hits enter with either field full, search for the holidays
document.addEventListener("keypress", function(e) {
    if ($("#user-year").val() != "" || $("input[name=TypeList]").val() != "") {
        if (e.key === "Enter") {
            sendRequest();
        }
    }
});

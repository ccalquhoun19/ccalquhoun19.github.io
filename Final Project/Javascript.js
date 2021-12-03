/*
  Dynamically changes number of lights according to screen size
*/
document.addEventListener("DOMContentLoaded", function() {
  const bulbSize = 62;
  let screenWidth = screen.width;
  let numBulbs = Math.floor(screenWidth / bulbSize);

  /* 
    following code retrieved from: https://www.developphp.com/video/CSS/Holiday-Christmas-Lights-Animation-Tutorial-CSS-JavaScript
  */
  for (var i = 0; i < numBulbs; i++) {
	  var bulb = document.createElement("div");
	  bulb.className = "bulb";
	  document.getElementById("lights").appendChild(bulb);
  }
});

/*
  Check if the year is valid
*/
$("#user-year").focusout(function() {
  const maxYear = 10000;
  const minYear = 0;

  let year = $("#user-year").val();

  if (year <= minYear || year >= maxYear) {
    $("#year-div").attr("class", "form-group has-error");
    $("#year-help-block").css("visibility", "visible");
  }
  else if (year > minYear || year < maxYear) {
    $("#year-div").attr("class", "form-group");
    $("#year-help-block").css("visibility", "hidden");
  }
});

/*
  Check if the country code is valid
*/
$("#user-country").focusout(function() {
  const codeLength = 2

  let country = $("input[name=TypeList]").val();

  if (country.length != codeLength) {
    $("#country-div").attr("class", "form-group has-error");
    $("#country-help-block").css("visibility", "visible");
  }
  else {
    $("#country-div").attr("class", "form-group");
    $("#country-help-block").css("visibility", "hidden");
  }
});

/*
  Sends Ajax request to get public holidays and updates table with information
*/
async function sendRequest() {
  // initialize variables for url
  let initialURL = "https://date.nager.at/api/v3/publicholidays/"
  let userYear = $("#user-year").val();
  let userCountry = $("input[name=TypeList]").val();
  let userURL = initialURL + userYear + "/" + userCountry;

  // fetch the url and check if it's valid
  const response = await fetch(userURL);
  if (response.ok) {
    let i = 1;
    let dates = "";
    let localNames = "";
    let commonNames = "";
    // followig code from: https://cmsdk.com/jquery/getting-the-value-and-text-from-a-datalist-in-jquery.html
    let countryName = document.querySelectorAll('option[value="' + userCountry + '"]')[0].innerHTML;

    // get response from API
    const holidays = await response.json();

    // show table
    $("#holiday-table").css("visibility", "visible");

    // reset table data
    $("#holiday-output").html("<tbody><tr id='country-name'></tr><tr><th id='dates-row'></th><th id='common-row'></th><th id='local-row'></th></tr></tbody>");

    // add country name
    $("#country-name").html(`<th colspan='3'> ${"Holidays in " + countryName} </th>`);

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
    updateHeightAttr();
  }
}

/*
  Properly formats background image
*/
function updateHeightAttr() {
  const rowLength = 9;

  // update height attribute
  if (document.getElementById("holiday-output").rows.length > rowLength) {
    $("#particles-js").css("height", "auto");
  }
  else {
    $("#particles-js").css("height", "100%");
  }
}

/*
  If the user hits enter with both fields full, search for the holidays
*/
document.addEventListener("keypress", function(e) {
    if ($("#user-year").val() != "" && $("input[name=TypeList]").val() != "") {
        if (e.key === "Enter") {
            sendRequest();
        }
    }
});



/*
  following code retrieved from: https://codepen.io/n-sayenko/pen/qOXKVr
*/
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 400,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 3,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 50,
        "color": "#ffffff",
        "opacity": 0.6,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "bottom",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 300,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode":  "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 150,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 200,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.2
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

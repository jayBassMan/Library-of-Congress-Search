if(window.localStorage){

        let getInput = document.getElementById("search-input");
        let getOption = document.getElementById("format-input")
    
        getInput.value = localStorage.getItem("search-input")
        getOption.value = localStorage.getItem("formate-input")
    
        let searchBtn = document.getElementById("search-Btn");
        searchBtn.addEventListener('click', function() {
            localStorage.setItem("search-input", getInput.value);
            localStorage.setItem("format-input", getOption.value);
            console.log(getInput.value, getOption.value)
        });
    }

    // fetch("https://api.github.com/reposnodejs/node/issues?per_page=5")
// .then(function (response) {
// return response.json();
// })
// .then(function (data) {
// console.log(data);
// });
    var govFetch = "https://www.loc.gov/search/?q=" + variable + "&fo=json";
    let variable;
// As a user, I can submit a search query from the application to request data and receive a response from the Library of Congress.

// As a user, I can either perform a generic search for data in all formats or I can select a format in the form to help filter results.

// As a user, I can see all of the results of my search displayed on a separate page.

// As a user, I can conduct additional searches from the results page as well.

// To learn about how to use th
// //Instructions


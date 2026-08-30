const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

const pages = {
    "ontario": "../Ontario/Homepage/OntarioHomepage.html",

    "toronto": "../Ontario/Toronto/Homepage/Homepage.html",

    "toronto hotels": "../Ontario/Toronto/Accommodation/Accommodation.html",

    "toronto attractions": "../Ontario/Toronto/Attractions/Attractions.html",

    "toronto amusement": "../Ontario/Toronto/Amusement/Amusement.html",

    "toronto restaurants": "../Ontario/Toronto/Restaurants/Restaurants.html"

};


searchForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let search = searchInput.value.toLowerCase().trim();

    if (pages[search]) {
        window.location.href = pages[search];
    }

    else {
        alert("Location not found");
    }

});
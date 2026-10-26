const amusementPlaces = [
        // {
        //         name: "African Lion Safari",
        //         image: "AfricanLionSafari.webp",
        //         description: "African Lion Safari is a drive-through wildlife park where visitors travel through large animal reserves to observe species such as giraffes, zebras, and lions. Safari tours, animal presentations, and family attractions create an immersive wildlife experience unlike a conventional zoo.",
        //         website: "https://lionsafari.com/",
        //         location: "African Lion Safari, 1386 Cooper Road, Hamilton, ON L0R 1P0",
        //         locationLink: "https://www.google.com/maps/search/?api=1&query=African+Lion+Safari+Hamilton+Ontario",
        //         title: "African Lion Safari",
        //         photoBy: "",
        //         license: "",
        //         licenseLink: "",
        //         source: "",
        //         imageLink: ""
        // },
        {
                name: "iFLY Toronto Oakville",
                image: "iFLYOakville.webp",
                description: "iFLY Toronto Oakville offers indoor skydiving in a powerful vertical wind tunnel, allowing visitors to experience freefall sensations without jumping from an aircraft. With an instructor guiding each flight, participants learn controlled body positioning while floating on rising air, creating a distinctive indoor adventure suitable for first-time flyers and memorable group experiences throughout the year.",
                website: "https://www.iflyworld.com/toronto/",
                location: "iFLY Toronto Oakville, 2007 Winston Park Drive, Oakville, ON L6H 6P5",
                locationLink: "https://www.google.com/maps/search/?api=1&query=iFLY+Toronto+Oakville+2007+Winston+Park+Drive",
                title: "iFLY Toronto Oakville",
                photoBy: "",
                license: "",
                licenseLink: "",
                source: "",
                imageLink: ""
        },
        {
                name: "Glen Eden Ski and Snowboard Centre",
                image: "GlenEden.webp",
                description: "Glen Eden at Kelso Conservation Area is a ski and snowboard hill on the Niagara Escarpment, with groomed runs, lifts, lessons, rentals, and terrain features. Its winter setting offers an accessible introduction to snow sports near the Greater Toronto Area.",
                website: "https://gleneden.on.ca/",
                location: "Glen Eden Ski and Snowboard Centre, 5234 Kelso Road, Milton, ON L9E 0C6",
                locationLink: "https://www.google.com/maps/search/?api=1&query=Glen+Eden+Ski+and+Snowboard+Centre+Milton+Ontario",
                title: "",
                photoBy: "",
                license: "",
                licenseLink: "",
                source: "",
                imageLink: ""
        },
        {
                name: "Dave & Buster's Oakville",
                image: "DaveAndBustersOakville.webp",
                description: "Dave & Buster’s Oakville combines a large arcade with a restaurant and sports-bar atmosphere, letting visitors switch between video games, ticket-redemption challenges, meals, and big-screen sports. It suits group outings and families wanting several activities under one roof with friends.",
                website: "https://www.daveandbusters.com/",
                location: "Dave & Buster's Oakville, 2021 Winston Park Drive, Unit E, Oakville, ON L6H 6P5",
                locationLink: "https://www.google.com/maps/search/?api=1&query=Dave+and+Busters+2021+Winston+Park+Drive+Oakville+Ontario",
                title: "",
                photoBy: "",
                license: "",
                licenseLink: "",
                source: "",
                imageLink: ""
        },
        {
                name: "Film.ca Cinemas",
                image: "FilmCaCinemas.webp",
                description: "Film.ca Cinemas is an independent Oakville movie theatre where visitors can watch current releases in a local cinema setting. Beyond screenings, it offers concessions and filmmaking bootcamps, giving film fans and young creators a community-focused alternative to large multiplex chains.",
                website: "https://film.ca/",
                location: "Film.ca Cinemas, 171 Speers Road, Oakville, ON L6K 3W8",
                locationLink: "https://www.google.com/maps/search/?api=1&query=Film.ca+Cinemas+171+Speers+Road+Oakville+Ontario",
                title: "",
                photoBy: "",
                license: "",
                licenseLink: "",
                source: "",
                imageLink: ""
        },
        {
                name: "5 Drive-In",
                image: "FiveDriveIn.webp",
                description: "5 Drive-In in Oakville offers outdoor movies where audiences watch films from their own vehicles beneath the evening sky. Its classic drive-in format creates a nostalgic alternative to indoor cinemas, making it distinctive for warm-weather date nights and family outings.",
                website: "https://5drivein.com/",
                location: "5 Drive-In, 2332 Ninth Line, Oakville, ON L6H 7G9",
                locationLink: "https://www.google.com/maps/search/?api=1&query=5+Drive-In+2332+Ninth+Line+Oakville+Ontario",
                title: "",
                photoBy: "",
                license: "",
                licenseLink: "",
                source: "",
                imageLink: ""
        },
        {
                name: "Hopedale Bowl",
                image: "HopedaleBowl.webp",
                description: "Hopedale Bowl is an Oakville bowling centre known for five-pin bowling, a Canadian variation using smaller balls and shorter pins. Visitors can enjoy casual games, glow bowling, birthday celebrations, and league play, making it an option for friends and families.",
                website: "https://www.hopedalebowl.com/",
                location: "Hopedale Bowl, 1515 Rebecca Street, Oakville, ON L6L 5G8",
                locationLink: "https://www.google.com/maps/search/?api=1&query=Hopedale+Bowl+1515+Rebecca+Street+Oakville+Ontario",
                title: "",
                photoBy: "",
                license: "",
                licenseLink: "",
                source: "",
                imageLink: ""
        },{
                name: "Activate Burlington",
                image: "ActivateBurlington.webp",
                description: "Activate Burlington turns physical movement into a video-game-style challenge through interactive rooms testing speed, memory, coordination, and teamwork. Groups earn scores by completing missions, creating a lively indoor experience that blends technology and exercise rather than relying on arcade machines.",
                website: "https://www.playactivate.com/",
                location: "Activate Burlington, 2030 Appleby Line, Unit D20, Burlington, ON L7L 6M6",
                locationLink: "https://www.google.com/maps/search/?api=1&query=Activate+2030+Appleby+Line+Burlington+Ontario",
                title: "",
                photoBy: "",
                license: "",
                licenseLink: "",
                source: "",
                imageLink: ""
        },
        {
                name: "Confundrum Escape Rooms",
                image: "ConfundrumEscapeRooms.webp",
                description: "Confundrum Escape Rooms in Burlington challenges teams to solve puzzles, uncover clues, and complete themed missions before time runs out. Its rooms combine observation, logic, and cooperation, offering an immersive indoor activity for friends, families, and groups seeking interactive entertainment.",
                website: "https://confundrum.com/",
                location: "Confundrum Escape Rooms, 775 Woodview Road, Burlington, ON L7N 3S1",
                locationLink: "https://www.google.com/maps/search/?api=1&query=Confundrum+Escape+Rooms+775+Woodview+Road+Burlington+Ontario",
                title: "",
                photoBy: "",
                license: "",
                licenseLink: "",
                source: "",
                imageLink: ""
        },
        {
                name: "Splitsville Bowl Burlington",
                image: "SplitsvilleBowlBurlington.webp",
                description: "Splitsville Bowl Burlington combines ten-pin bowling with arcade entertainment and group-friendly events. Visitors can compete on bowling lanes, enjoy games between frames, or organize celebrations, making it a flexible indoor destination for families and friends looking for an activity-led outing.",
                website: "https://splitsvillebowl.ca/",
                location: "Splitsville Bowl Burlington, 830 Laurentian Drive, Burlington, ON L7N 3V6",
                locationLink: "https://www.google.com/maps/search/?api=1&query=Splitsville+Bowl+830+Laurentian+Drive+Burlington+Ontario",
                title: "",
                photoBy: "",
                license: "",
                licenseLink: "",
                source: "",
                imageLink: ""
        },
];

const amusementContainer = document.getElementById("amusement-container");
const amusementSearchForm = document.getElementById("hotelSearchForm");
const amusementSearchInput = document.getElementById("hotel-search");

// Display amusement attractions
function displayAmusementPlaces(places) {
        amusementContainer.innerHTML = "";

        if (places.length === 0) {
                amusementContainer.innerHTML = `
            <p class="no-results">No attractions found. Try another search.</p>
        `;
                return;
        }

        places.forEach(place => {
                const card = document.createElement("div");
                card.classList.add("amusement-card");

                card.innerHTML = `
            <img src="${place.image}" alt="${place.name}" loading="lazy">

            <div class="amusement-info">
                <h2>${place.name}</h2>
                <p>${place.description}</p>
                <p>${place.location}</p>

                <a class="amusement-button"
                   href="${place.website}"
                   target="_blank"
                   rel="noopener noreferrer">
                    Learn More
                </a>

                <a class="amusement-location"
                   href="${place.locationLink}"
                   target="_blank"
                   rel="noopener noreferrer">
                    View Directions
                </a>
            </div>

            <div class="image-credit">
                <p>Title: ${place.Title}</p>
                <p>Photo by: ${place.photoBy}</p>

                <p>
                    License:
                    <a href="${place.licenseLink}"
                       target="_blank"
                       rel="noopener noreferrer">
                        ${place.license}
                    </a>
                </p>

                <p>Source: ${place.source}</p>

                <a href="${place.imageLink}"
                   target="_blank"
                   rel="noopener noreferrer">
                    Tap here to view image source
                </a>
            </div>
        `;

                amusementContainer.appendChild(card);
        });
}

// Search by attraction name, description, or location
function searchAmusementPlaces() {
        const query = amusementSearchInput.value.toLowerCase().trim();

        const filteredPlaces = amusementPlaces.filter(place =>
            place.name.toLowerCase().includes(query) ||
            place.description.toLowerCase().includes(query) ||
            place.location.toLowerCase().includes(query)
        );

        displayAmusementPlaces(filteredPlaces);
}

// Connect the search bar
amusementSearchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        searchAmusementPlaces();
});

amusementSearchInput.addEventListener("input", searchAmusementPlaces);

// Show all attractions when the page loads
displayAmusementPlaces(amusementPlaces);

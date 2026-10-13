const hotels = [
    {
        name: "Hampton Inn by Hilton Brampton Toronto",
        image: "HamptonInnByHiltonBramptonToronto.webp",
        description: "A highly rated Brampton hotel offering complimentary breakfast, an indoor pool, fitness facilities, and convenient access to the eastern GTA.",
        website: "https://www.hilton.com/",
        address: "8710 The Gore Rd, Brampton, ON L6P 0B1",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hampton+Inn+by+Hilton+Brampton+Toronto",
        title: "Hampton Inn by Hilton Brampton Toronto",
        photoBy: "Umar Ali",
        license: "Pexels License",
        licenseLink: "https://www.pexels.com/license/",
        source: "Pexels",
        imageLink: "https://www.pexels.com/photo/falsa-berry-fresh-juice-28053225/"
    },
    {
        name: "Homewood Suites by Hilton Toronto Mississauga",
        image: "HomewoodSuitesByHiltonTorontoMississauga.webp",
        description: "An all-suite extended-stay hotel with in-suite kitchens, complimentary breakfast, and convenient access to Mississauga's business district.",
        website: "https://www.hilton.com/",
        address: "6430 Edwards Blvd, Mississauga, ON L5T 2Y3",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Homewood+Suites+Toronto+Mississauga",
        title: "Homewood Suites by Hilton Toronto Mississauga",
        photoBy: "SlipcoverKAS",
        license: "Pexels License",
        licenseLink: "https://www.pexels.com/license/",
        source: "Pexels",
        imageLink: " https://www.pexels.com/photo/soft-green-fluffy-blanket-close-up-texture-30399211/"
    },
    {
        name: "Hyatt Place Toronto / Brampton",
        image: "HyattPlaceTorontoBrampton.webp",
        description: "A modern hotel with contemporary rooms, an indoor pool, fitness facilities, and convenient access to Brampton's eastern business district.",
        website: "https://www.hyatt.com/",
        address: "3455 Queen St E, Brampton, ON L6T 0J5",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hyatt+Place+Toronto+Brampton",
        title: "Hyatt Place Toronto / Brampton",
        photoBy: "Ramon Hernandez:",
        license: "Pexels License",
        licenseLink: "https://www.pexels.com/license/",
        source: "Photo by Ramon Hernandez:",
        imageLink: "Photo by Ramon Hernandez: https://www.pexels.com/photo/ripples-and-reflections-on-clear-water-surface-30296727/https://www.pexels.com/photo/ripples-and-reflections-on-clear-water-surface-30296727/"
    },
    {
        name: "Newton Villa",
        image: "NewtonVilla.webp",
        description: "A highly rated bed-and-breakfast in Brampton offering a quieter, residential setting and personalized accommodation for short stays and special occasions.",
        website: "https://www.google.com/maps/search/?api=1&query=Newton+Villa+Brampton",
        address: "8 Merrydale Ct, Brampton, ON L6P 0H4",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Newton+Villa+Brampton",
        title: "Newton Villa",
        photoBy: "Ana M",
        license: "Pexels License",
        licenseLink: "https://www.pexels.com/license/",
        source: "Pexels",
        imageLink: "https://www.pexels.com/photo/white-and-yellow-bokeh-lights-6152745/"
    },
    {
        name: "Hilton Mississauga/Meadowvale",
        image: "HiltonMississaugaMeadowvale.webp",
        description: "A full-service hotel with indoor and outdoor pools, dining, fitness amenities, and event facilities in the Meadowvale business district.",
        website: "https://www.hilton.com/en/hotels/yyzmohh-hilton-mississauga-meadowvale/",
        address: "6750 Mississauga Rd, Mississauga, ON L5N 2L3",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hilton+Mississauga+Meadowvale",
        title: "Hilton Mississauga/Meadowvale",
        photoBy: "alleksana",
        license: "Pexels License",
        licenseLink: "https://www.pexels.com/license/",
        source: "Pexels",
        imageLink: "https://www.pexels.com/photo/a-close-up-shot-of-pillows-on-a-bed-4271665/"
    },
    {
        name: "Hilton Garden Inn Toronto/Brampton",
        image: "HiltonGardenInnTorontoBrampton.webp",
        description: "A well-reviewed full-service hotel featuring a restaurant, indoor pool, fitness centre, and convenient access to Brampton's convention and business areas.",
        website: "https://www.hilton.com/",
        address: "2648 Steeles Ave E, Brampton, ON L6S 6J9",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hilton+Garden+Inn+Toronto+Brampton",
        title: "",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Hyatt Place Toronto/Mississauga Centre",
        image: "HyattPlaceTorontoMississaugaCentre.webp",
        description: "A contemporary Mississauga hotel with modern guest rooms, fitness facilities, and access to Square One, Celebration Square, and local restaurants.",
        website: "https://www.hyatt.com/",
        address: "5787 Hurontario St, Mississauga, ON L4Z 2H7",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hyatt+Place+Toronto+Mississauga+Centre",
        title: "",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Millcroft Inn & Spa",
        image: "MillcroftInnAndSpa.webp",
        description: "A countryside inn in Alton, Caledon, set in a historic mill property and known for its spa experiences, scenic grounds, and on-site restaurant.",
        website: "https://www.vintage-hotels.com/millcroft-inn/",
        address: "55 John St, Alton, ON L7K 0C4",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Millcroft+Inn+Spa+Alton+Ontario",
        title: "",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Inn on the Moraine",
        image: "InnOnTheMoraine.webp",
        description: "A countryside bed-and-breakfast in Caledon with a heritage-inspired setting, peaceful grounds, and convenient access to local trails and equestrian destinations.",
        website: "https://www.google.com/maps/search/?api=1&query=Inn+on+the+Moraine+Caledon",
        address: "15535 Mt Pleasant Rd, Caledon, ON L7E 3N2",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Inn+on+the+Moraine+Caledon",
        title: "",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
    {
        name: "Residence Inn by Marriott Toronto Mississauga West",
        image: "ResidenceInnByMarriottTorontoMississaugaWest.webp",
        description: "An all-suite extended-stay property with kitchen-equipped suites, complimentary breakfast, and convenient access to Mississauga's commercial districts.",
        website: "https://www.marriott.com/",
        address: "55 Courtneypark Dr W, Mississauga, ON L5W 0E3",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Residence+Inn+Toronto+Mississauga+West",
        title: "",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: "",
        imageLink: ""
    },
];

const hotelContainer = document.getElementById("hotel-container");



hotels.forEach(hotel => {

    const card = document.createElement("div");

    card.classList.add("hotel-card");



    card.innerHTML = `


        <img src="${hotel.image}" alt="${hotel.name}" loading="lazy">


        <div class="hotel-info">


            <h2>${hotel.name}</h2>


            <p>${hotel.description}</p>


            <p>
                Address:
                <a class="hotel-button" href="${hotel.addressLink}" target="_blank">
                    ${hotel.address}
                </a>
            </p>


            <a class="hotel-button" href="${hotel.website}" target="_blank">
                Visit Hotel Website
            </a>


        </div>



        <div class="image-credit">
        
        <p>Title: ${hotel.title}</p>

            <p>Photo by: ${hotel.photoBy}</p>

           <p>
    License:
    <a href="${hotel.licenseLink}" target="_blank">
        ${hotel.license}
    </a>
</p>
                                       
            <p>Source: ${hotel.source}</p>


            <p>
                Link:
                <a href="${hotel.imageLink}" target="_blank">
                    Click here to view image source
                </a>
            </p>


        </div>


    `;



    hotelContainer.appendChild(card);

});
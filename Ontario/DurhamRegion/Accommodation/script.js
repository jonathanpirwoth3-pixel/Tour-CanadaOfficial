const hotels = [
    {
        name: "Tru by Hilton Oshawa",
        image: "TruByHiltonOshawa.webp",
        description: "Tru by Hilton Oshawa is a modern hotel in Oshawa offering contemporary guest rooms, complimentary Wi-Fi, free parking, breakfast options, a fitness centre, and convenient access to Oshawa and Durham Region attractions.",
        website: "https://www.hilton.com/en/hotels/yyztrru-tru-oshawa/",
        address: "474 Aviator Lane, Oshawa, ON L1J 0B8",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Tru+by+Hilton+Oshawa",
        title: "TruByHiltonOshawa",
        photoBy: "Dom J",
        license: "",
        licenseLink: " https://www.pexels.com/photo/white-and-maroon-rugs-45980/",
        source: "Pexels"
    },
    {
        name: "Homewood Suites by Hilton Toronto-Ajax",
        image: "HomewoodSuitesByHiltonTorontoAjax.webp",
        description: "Homewood Suites by Hilton Toronto-Ajax is an extended-stay hotel in Ajax featuring spacious suites, fully equipped kitchens, complimentary breakfast, an indoor pool, fitness facilities, and convenient access to Durham Region.",
        website: "https://www.hilton.com/en/hotels/yyzajhw-homewood-suites-toronto-ajax/",
        address: "600 Beck Crescent, Ajax, ON L1Z 1C9",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Homewood+Suites+by+Hilton+Toronto-Ajax",
        title: "HomewoodSuitesByHiltonTorontoAjax",
        photoBy: "Plastic Lines",
        license: "",
        licenseLink: "https://www.pexels.com/photo/chair-in-a-swimming-pool-17773968/",
        source: "Pexels"
    },

    {
        name: "Hilton Garden Inn Toronto/Ajax",
        image: "HiltonGardenInnTorontoAjax.webp",
        description: "Hilton Garden Inn Toronto/Ajax is a modern hotel in Ajax offering comfortable guest rooms, an indoor pool, fitness centre, restaurant and bar, free parking, and easy access to Highway 401 and local attractions.",
        website: "https://www.hilton.com/en/hotels/yyzjagi-hilton-garden-inn-toronto-ajax/",
        address: "500 Beck Crescent, Ajax, ON L1Z 1C9",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Hilton+Garden+Inn+Toronto+Ajax",
        title: "HiltonGardenInnTorontoAjax",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: ""
    },

    {
        name: "Residence Inn by Marriott Whitby",
        image: "ResidenceInnByMarriottWhitby.webp",
        description: "Residence Inn by Marriott Whitby is an all-suite extended-stay hotel offering spacious accommodations, kitchen facilities, complimentary breakfast, an indoor pool, fitness facilities, and convenient access to Whitby and surrounding Durham Region attractions.",
        website: "https://www.marriott.com/en-us/hotels/yyzrw-residence-inn-whitby/",
        address: "160 Consumers Drive, Whitby, ON L1N 9S3",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Residence+Inn+by+Marriott+Whitby",
        title: "ResidenceInnByMarriottWhitby",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: ""
    },

    {
        name: "Holiday Inn Express Whitby Oshawa by IHG",
        image: "HolidayInnExpressWhitbyOshawa.webp",
        description: "Holiday Inn Express Whitby Oshawa is a convenient hotel in Whitby offering comfortable rooms, complimentary breakfast, an outdoor seasonal pool, fitness facilities, free Wi-Fi, and easy access to Highway 401 and nearby attractions.",
        website: "https://www.ihg.com/holidayinnexpress/hotels/us/en/whitby/yooho/hoteldetail",
        address: "180 Consumers Drive, Whitby, ON L1N 9S3",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Express+Whitby+Oshawa",
        title: "HolidayInnExpressWhitbyOshawa",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: ""
    },

    {
        name: "Courtyard by Marriott Oshawa",
        image: "CourtyardByMarriottOshawa.webp",
        description: "Courtyard by Marriott Oshawa is a modern hotel offering contemporary rooms, an on-site restaurant and bar, fitness facilities, meeting spaces, free Wi-Fi, and convenient access to Highway 401 and attractions in Oshawa.",
        website: "https://www.marriott.com/en-us/hotels/yyzco-courtyard-oshawa/",
        address: "1011 Bloor Street East, Oshawa, ON L1H 7K6",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Courtyard+by+Marriott+Oshawa",
        title: "CourtyardByMarriottOshawa",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: ""
    },

    {
        name: "TownePlace Suites by Marriott Oshawa",
        image: "TownePlaceSuitesByMarriottOshawa.webp",
        description: "TownePlace Suites by Marriott Oshawa is an extended-stay hotel featuring spacious suites with kitchen facilities, complimentary breakfast, fitness facilities, free Wi-Fi, and convenient access to Highway 401 and Oshawa attractions.",
        website: "https://www.marriott.com/en-us/hotels/yyztp-towneplace-suites-oshawa/",
        address: "1011 Bloor Street East, Oshawa, ON L1H 7K6",
        addressLink: "https://www.google.com/maps/search/?api=1&query=TownePlace+Suites+by+Marriott+Oshawa",
        title: "TownePlaceSuitesByMarriottOshawa",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: ""
    },

    {
        name: "Great Blue Heron Hotel",
        image: "GreatBlueHeronHotel.webp",
        description: "Great Blue Heron Hotel is a hotel in Port Perry overlooking the Lake Scugog area, offering comfortable accommodations, an on-site restaurant, and convenient access to Port Perry, Scugog, and surrounding Durham Region attractions.",
        website: "https://www.greatblueheroncasino.com/hotel/",
        address: "21777 Island Road, Port Perry, ON L9L 1B6",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Great+Blue+Heron+Hotel+Port+Perry",
        title: "GreatBlueHeronHotel",
        photoBy: "",
        license: "",
        licenseLink: "",
        source: ""
    }
]

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
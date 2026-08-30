const hotels = [

    {
        name: "Chelsea Hotel Toronto",

        image: "ChelseaHotel.jpg",

        description: "A major hotel located in downtown Toronto with easy access to many attractions.",

        website: "https://www.chelseatoronto.com",

        address: "33 Gerrard Street West, Toronto, ON",

        addressLink: "https://www.google.com/maps/search/?api=1&query=Chelsea+Hotel+Toronto",


        photoBy: "Canmenwalker",

        license: "CC BY 4.0",
        licenseLink: "",
        source: "Wikimedia Commons",

        imageLink: "https://commons.wikimedia.org/wiki/File:Chelsea_Hotel_Toronto_2022.jpg"
    },


    {
        name: "Sheraton Centre Toronto Hotel",

        image: "SheratonCentreTorontoHotel.jpg",

        description: "Sheraton Centre Toronto Hotel is located in downtown Toronto near Queen Street West and Nathan Phillips Square. The surrounding area includes Toronto’s central business district, city offices, shopping areas, and nearby urban landmarks.",

        website: "https://www.marriott.com/en-us/hotels/yyztc-sheraton-centre-toronto-hotel/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0",

        address: "123 Queen Street West, Toronto, ON",

        addressLink: "https://www.google.com/maps/search/?api=1&query=Sheraton+Centre+Toronto+Hotel",


        photoBy: "Canmenwalker",

        license: "CC BY 4.0",

        source: "Wikimedia Commons",

        imageLink: "https://commons.wikimedia.org/wiki/File:Sheraton_Centre_Toronto_Hotel_2023.jpg"
    },
    {
        name: "Fairmont Royal York Hotel, Toronto",
        image: "FairmontRoyalYorkHotelToronto.jpg",
        description: "Fairmont Royal York is located in downtown Toronto near Union Station and the Financial District. Opened in 1929, the hotel is known for its Châteauesque-style architecture, featuring a historic castle-like exterior that remains a recognizable part of Toronto’s skyline",
        website: "https://www.fairmont.com/",
        address: "100 Front St W, Toronto,",
        addressLink: "https://www.google.com/maps/place/Fairmont+Royal+York/@43.6460342,-79.3839629,17z/data=!3m2!4b1!5s0x882b34d33c2679e7:0xf67c1362b78cb68a!4m9!3m8!1s0x882b34d3152a8e61:0x154fe230e73270f!5m2!4m1!1i2!8m2!3d43.6460303!4d-79.381388!16zL20vMDRsbl9k?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D",
        photoBy: "Shankar S. from Dubai, United Arab Emirates",
        license: "CC BY 2.0",
        source: "Wikimedia Commons",
        imageLink: "https://commons.wikimedia.org/wiki/File:Fairmont_Royal_York_Hotel,_Toronto_(27823283571).jpg",
    }
];



const hotelContainer = document.getElementById("hotel-container");



hotels.forEach(hotel => {

    const card = document.createElement("div");

    card.classList.add("hotel-card");



    card.innerHTML = `


        <img src="${hotel.image}" alt="${hotel.name}">


        <div class="hotel-info">


            <h2>${hotel.name}</h2>


            <p>${hotel.description}</p>


            <p>
                Address:
                <a href="${hotel.addressLink}" target="_blank">
                    ${hotel.address}
                </a>
            </p>


            <a class="hotel-button" href="${hotel.website}" target="_blank">
                Visit Hotel Website
            </a>


        </div>



        <div class="image-credit">


            <p>Photo by: ${hotel.photoBy}</p>

            <a href="${hotel.license}" target="_blank">
            License: ${hotel.license}
            
            </a>
            
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
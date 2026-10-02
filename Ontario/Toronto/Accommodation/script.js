const hotels = [

    {
        name: "Chelsea Hotel Toronto",

        image: "ChelseaHotel.webp",

        description: "A major hotel located in downtown Toronto with easy access to many attractions.",

        website: "https://www.chelseatoronto.com",

        address: "33 Gerrard Street West, Toronto, ON",

        addressLink: "https://www.google.com/maps/search/?api=1&query=Chelsea+Hotel+Toronto",

        title: "Chelsea Hotel Toronto 2022",

        photoBy: "Canmenwalker",

        license: "CC BY 4.0",
        licenseLink: "https://creativecommons.org/licenses/by/4.0/deed.en",
        source: "Wikimedia Commons",

        imageLink: "https://commons.wikimedia.org/wiki/File:Chelsea_Hotel_Toronto_2022.jpg"
    },
    {
        name: "Four Seasons Hotel Toronto",
        image: "Fourseasons.webp",
        description: "The crown jewel of Yorkville and flagship property of the Toronto-born brand. Features bright, airy rooms decorated with local Canadian art, exceptional five-star service, and a world-class luxury spa.",
        website: "https://fourseasons.com",
        address: "60 Yorkville Ave, Toronto, ON M4W 0A4",
        addressLink: "https://google.com",
        title: "Four Seasons Hotel Toronto Lobby and Exterior",
        photoBy: "Reaperexpress",
        license: "CC By-SA 3.0",
        licenseLink: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
        source: "Wikimedia Commons",
        imageLink: "https://commons.wikimedia.org/wiki/File:New_Four_Seasons_Yorkville.jpg"
    },


    {
        name: "Sheraton Centre Toronto Hotel",

        image: "SheratonCentreTorontoHotel.webp",

        description: "Sheraton Centre Toronto Hotel is located in downtown Toronto near Queen Street West and Nathan Phillips Square. The surrounding area includes Toronto’s central business district, city offices, shopping areas, and nearby urban landmarks.",

        website: "https://www.marriott.com/en-us/hotels/yyztc-sheraton-centre-toronto-hotel/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0",

        address: "123 Queen Street West, Toronto, ON",

        addressLink: "https://www.google.com/maps/search/?api=1&query=Sheraton+Centre+Toronto+Hotel",

        title: "Sheraton Centre Toronto Hotel 2023",

        photoBy: "Canmenwalker",

        license: "CC BY 4.0",

        licenseLink: "https://creativecommons.org/licenses/by/4.0/deed.en",

        source: "Wikimedia Commons",

        imageLink: "https://commons.wikimedia.org/wiki/File:Sheraton_Centre_Toronto_Hotel_2023.jpg"
    },
    {
        name: "Fairmont Royal York Hotel, Toronto",
        image: "FairmountRoyalYork.webp",
        description: "Fairmont Royal York is located in downtown Toronto near Union Station and the Financial District. Opened in 1929, the hotel is known for its Châteauesque-style architecture, featuring a historic castle-like exterior that remains a recognizable part of Toronto’s skyline",
        website: "https://www.fairmont.com/en/hotels/toronto/fairmont-royal-york.html",
        address: "100 Front St W, Toronto,",
        addressLink: "https://www.google.com/maps/place/Fairmont+Royal+York/@43.6460342,-79.3839629,17z/data=!3m2!4b1!5s0x882b34d33c2679e7:0xf67c1362b78cb68a!4m9!3m8!1s0x882b34d3152a8e61:0x154fe230e73270f!5m2!4m1!1i2!8m2!3d43.6460303!4d-79.381388!16zL20vMDRsbl9k?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D",
        title: "Fairmont Royal York, Toronto, Southwest view 20170417 1",
        photoBy: "DXR",
        license: "CC BY-SA 4.0",
        licenseLink: "https://creativecommons.org/licenses/by-sa/4.0/deed.en",
        source: "Wikimedia Commons",
        imageLink: "https://commons.wikimedia.org/wiki/File:Fairmont_Royal_York,_Toronto,_Southwest_view_20170417_1.jpg",
    },
    {
        name: "The Ritz-Carlton, Toronto",
        image: "RitzCarltonToronto.webp",
        description: "A premier Entertainment District staple offering grand floor-to-ceiling windows with panoramic lake and CN Tower views. Known for its sophisticated indoor pool, upscale spa, and an Italian restaurant equipped with its own cheese cave.",
        website: "https://www.ritzcarlton.com/en/hotels/yyzrz-the-ritz-carlton-toronto/overview/",
        address: "181 Wellington St W, Toronto, ON M5V 0C3",
        addressLink: "https://google.com",
        title: "The Ritz-Carlton Toronto Tower",
        photoBy: "Arild Vågen",
        license: "CC BY-SA 4.0",
        licenseLink: "https://creativecommons.org/licenses/by-sa/4.0/deed.en",
        source: "Wikimedia Commons",
        imageLink: "https://commons.wikimedia.org/wiki/File:Ritz-Carlton_Toronto_August_2017_01.jpg"
    },
    {
        name: "The St. Regis Toronto",
        image: "StRegisToronto.webp",
        description: "Rising high above the Financial District, this soaring luxury hotel blends residential-style opulence with signature St. Regis perks. Offers ultra-spacious suites, sophisticated skyline views, and flawless butler service.",
        website: "https://marriott.com",
        address: "325 Bay St., Toronto, ON M5H 4G3",
        addressLink: "https://google.com",
        title: "The St. Regis Toronto Facade",
        photoBy: "Ken Lund from Reno, Nevada, USA",
        license: "CC BY-SA 2.0",
        licenseLink: "https://creativecommons.org/licenses/by-sa/2.0/deed.en",
        source: "Wikimedia Commons",
        imageLink: "https://commons.wikimedia.org/wiki/File:Trump_International_Hotel_and_Tower,_Toronto,_Ontario_(Now_St._Regis_Toronto)_(29889220112).jpg"
    },
    {
        name: "Bisha Hotel Toronto",
        image: "BishaHotel.webp",
        description: "A bold and contemporary take on luxury in the heart of the Entertainment District. It features decadent spaces clad in black marble, curated pop art, an entire floor of suites designed by Lenny Kravitz, and a spectacular rooftop infinity pool.",
        website: "https://marriott.com",
        address: "80 Blue Jays Way, Toronto, ON M5V 0L7",
        addressLink: "https://google.com",
        title: "Bisha Hotel Rooftop and Pool View",
        photoBy: "Alin Luna: ",
        license: "",
        licenseLink: "",
        source: "Pexels",
        imageLink: "Photo by Alin Luna: https://www.pexels.com/photo/the-sky-before-the-storm-15576516/"
    },
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
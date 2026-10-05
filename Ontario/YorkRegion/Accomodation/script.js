const hotels = [
    {
        name: "Hilton Toronto/Markham Suites Conference Centre & Spa ",
        image: "HiltonHotel.webp",
        description: "Hilton Toronto/Markham Suites Conference Centre & Spa is a hotel in Markham offering guest suites, dining, meeting and event spaces, a fitness centre, and spa services. It serves both business and leisure travellers",
        website: "https://www.hilton.com/en/hotels/yyzaphf-hilton-toronto-markham-suites-conference-centre-and-spa/?utm_source=chatgpt.com",
        address: "8500 Warden Avenue, Markham, ON L6G 1A5",
        addressLink: "https://www.google.com/maps/place/8500+Warden+Ave.,+Markham,+ON+L6G+1A5/@43.854086,-79.3367581,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4d457ea3f9009:0x583aadf27f6e2601!8m2!3d43.8540822!4d-79.3341832!16s%2Fg%2F11ckqm5yqx?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
        title: "Hilton Toronto Markham Suites Conference Centre & Spa",
        photoBy: "Silver Dovelet",
        license: "CC BY-SA 4.0",
        licenseLink: "https://creativecommons.org/licenses/by-sa/4.0/deed.en",
        source: "Wkimedia commons",
        imageLink: "https://commons.wikimedia.org/wiki/File:Hilton_Toronto_Markham_Suites_Conference_Centre_%26_Spa.jpg",
    },
    {
        name: ". Sheraton Parkway Toronto North Hotel & Suites",
        image: "SheratonParkway.webp",
        description: "Sheraton Parkway Toronto North Hotel & Suites is a hotel offering guest rooms and suites, on-site dining, indoor and outdoor pools, fitness facilities, and spaces for meetings and events.",
        website: "https://www.marriott.com/en-us/hotels/yyzsi-sheraton-parkway-toronto-north-hotel-and-suites/overview/?utm_source=chatgpt.com",
        address: "600 Highway 7, Richmond Hill, ON L4B 1B2",
        addressLink: "https://www.google.com/maps/place/600+Hwy+7,+Richmond+Hill,+ON+L4B+1B2/@43.8457547,-79.3819187,17.31z/data=!4m6!3m5!1s0x882b2b43463029e9:0x98ec8dfc70be856!8m2!3d43.8457627!4d-79.3813213!16s%2Fg%2F11csf70dd5?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
        title: "Sheraton Parkway Toronto North Hotel & Suites",
        photoBy: "OhanaUnited",
        license: "CC BY-SA 4.0",
        licenseLink: "https://creativecommons.org/licenses/by-sa/4.0/deed.en",
        source: "Wikimedia Commons",
        imageLink: "https://commons.wikimedia.org/wiki/File:Sheraton_Parkway_Toronto_North_Hotel_%26_Suites.jpg",
    },
    {
        name: "Toronto Marriott Markham ",
        image: "TorontoMarriottMarkham6.webp",
        description: "Toronto Marriott Markham is a hotel offering guest rooms and suites, on-site dining, an indoor pool, fitness facilities, and meeting and event spaces.",
        website: "https://www.marriott.com/en-us/hotels/yyzmr-toronto-marriott-markham/overview/?utm_source=chatgpt.com",
        address: "170 Enterprise Boulevard, Markham, ON L6G 0E6",
        addressLink: "https://www.google.com/maps/place/170+Enterprise+Blvd,+Markham,+ON+L6G+1B3/@43.8500272,-79.3242315,19.88z/data=!4m6!3m5!1s0x89d4d45b327b7c21:0xdac3bb818c97a941!8m2!3d43.8497187!4d-79.3240597!16s%2Fg%2F11vzt1lv_j?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
        title: "TorontoMarriottMarkham",
        photoBy: "Raysonho @ Open Grid Scheduler / Scalable Grid Engine",
        license: "CC0 1.0",
        licenseLink: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
        source: "Wikimedia Commons",
        imageLink: "https://commons.wikimedia.org/wiki/File:TorontoMarriottMarkham6.jpg",
    },
    {
        name: "Delta Hotels by Marriott Toronto Markham",
        image: "YRdelta.webp",
        description: "Delta Hotels by Marriott Toronto Markham is a full-service hotel featuring guest rooms, an indoor pool, fitness centre, restaurant and bar, room service, and meeting spaces.",
        website: "https://www.marriott.com/en-us/hotels/yyzdh-delta-hotels-toronto-markham/overview/",
        address: "50 East Valhalla Drive, Markham, ON L3R 0A3",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Delta+Hotels+by+Marriott+Toronto+Markham",
        title: "DeltaHotelsTorontoMarkham",
        photoBy: "Silver Dovelet",
        license: "CC BY-SA 4.0",
        licenseLink: "https://creativecommons.org/licenses/by-sa/4.0/deed.en",
        source: "Wikimedia Commons",
    },
    {
        name: "Courtyard by Marriott Toronto Northeast/Markham",
        image: "MartriotMarkham.webp",
        description: "Courtyard by Marriott Toronto Northeast/Markham is a hotel offering guest rooms and suites, two on-site restaurants, an indoor pool, fitness facilities, a spa, and meeting and event spaces.",
        website: "https://www.marriott.com/en-us/hotels/yyzmt-courtyard-toronto-northeast-markham/overview/?utm_source=chatgpt.com",
        address: "7095 Woodbine Avenue, Markham, ON L3R 1A3",
        addressLink: "https://www.google.com/maps/place/7095+Woodbine+Ave,+Markham,+ON+L3R+1A3/@43.8166885,-79.3483287,21z/data=!4m6!3m5!1s0x89d4d3656269e9ed:0x5b47cc626688e1e6!8m2!3d43.8167251!4d-79.3483281!16s%2Fg%2F11b8v61gxs?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
        title: "",
        photoBy: "Silver Dovelet",
        license: "CC BY-SA 3.0",
        licenseLink: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
        source: "Wikimedia Commons",
        imageLink: "https://commons.wikimedia.org/wiki/File:Courtyard_by_Marriott_Toronto_Northeast-Markham.jpg",
    },
    {
        name: "Residence Inn by Marriott Toronto Markham",
        image: "YRresidenceinn.webp",
        description: "Residence Inn by Marriott Toronto Markham is an extended-stay hotel featuring spacious suites with fully equipped kitchens, complimentary breakfast, an indoor pool, fitness centre, and outdoor sport court.",
        website: "https://www.marriott.com/en-us/hotels/yyzmh-residence-inn-toronto-markham/overview/",
        address: "55 Minthorn Boulevard, Markham, ON L3T 7Y9",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Residence+Inn+by+Marriott+Toronto+Markham",
        title: "ResidenceInnTorontoMarkham",
        photoBy: "Silver Dovelet",
        license: "CC BY-SA 3.0",
        licenseLink: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
        source: "Wikimedia commons"
    },
    {
        name: "Element by Marriott Vaughan Southwest",
        image: "YRelement.webp",
        description: "Element by Marriott Vaughan Southwest is an extended-stay hotel offering rooms and suites with fully equipped kitchens, workspaces, free Wi-Fi, fitness facilities, and an indoor pool.",
        website: "https://www.marriott.com/en-us/hotels/yyzel-element-vaughan-southwest/overview/",
        address: "6170 Highway 7, Vaughan, ON L4H 0R2",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Element+by+Marriott+Vaughan+Southwest",
        title: "ElementVaughanSouthwest",
        photoBy: "alleksana",
        license: "",
        licenseLink: " https://www.pexels.com/photo/a-stack-of-throw-pillows-4271729/",
        source: "Pexels"
    },
    {
        name: "Aloft Vaughan Mills",
        image: "YRaloft.webp",
        description: "Aloft Vaughan Mills is a modern Vaughan hotel near Vaughan Mills offering contemporary guest rooms, on-site dining and bar service, fitness facilities, free parking, and convenient access to local attractions and transit.",
        website: "https://www.marriott.com/en-us/hotels/yyzal-aloft-vaughan-mills/overview/",
        address: "151 Bass Pro Mills Drive, Vaughan, ON L4K 0E6",
        addressLink: "https://www.google.com/maps/search/?api=1&query=Aloft+Vaughan+Mills",
        title: "AloftVaughanMills",
        photoBy: "Silver Dovelet",
        license: "CC BY-SA 4.0",
        licenseLink: "https://creativecommons.org/licenses/by-sa/4.0/deed.en",
        source: "Wikimedia commons"
    },
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
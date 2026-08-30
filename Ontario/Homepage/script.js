const places = [
    {
        title: "Toronto",
        image: "Toronto.jpg",
        link: "../Toronto/Homepage/Toronto.html",
        description: `
        Areas: Toronto, Scarborough, North York, Etobicoke, York, East York`,
        imageTitle: "Toronto City Skyline",
        imageAuthor: "Jerry Steinfield",
        imageSource: "https://commons.wikimedia.org/wiki/File:Toronto_City_Skyline.jpg",
        imageLicense: "CC BY 4.0",
        licenseLink: "https://creativecommons.org/licenses/by/4.0/deed.en"
    },
    {
        title: "York Region",
        image: "YorkRegion.jpg",
        description: `
           Markham, Vaughan, Richmond Hill, Newmarket, Aurora, Whitchurch-Stouffville, East Gwillimbury, Georgina, King
            `,
        imageTitle: "AlpenFury in Canada's Wonderland",
        imageAuthor: "K2HWY",
        imageSource: "https://commons.wikimedia.org/wiki/File:AlpenFury_in_Canada%27s_Wonderland_01.jpg",
        imageLicense: "CC BY 4.0",
        licenseLink: "https://creativecommons.org/licenses/by/4.0/deed.en"
    },
    {
        title: "",
        image: "",
        description: ``,
        imageTitle: "",
        imageAuthor: "",
        imageSource: "",
        imageLicense: "",
        licenseLink: "",
    }
];

const container = document.getElementById("places");

places.forEach(place => {
    container.innerHTML += `
        <div class="place">

            <a href="${place.link ?? "#"}">
                <img
                    src="${place.image}"
                    alt="${place.title}"
                    loading="lazy"
                    decoding="async"
                >
            </a>

            <div class="place-info">
                <h2>${place.title}</h2>
                <p>${place.description ?? ""}</p>
            </div>

            ${
        place.imageAuthor
            ? `
                    <div class="image-credit">
                    <p>Image Title: ${place.imageTitle}</p>
                        <p>Photo by: ${place.imageAuthor}</p>

                        <p>
                            License:
                            <a href="${place.licenseLink}" target="_blank">
                                ${place.imageLicense}
                            </a>
                        </p>

                        <p>Source: Wikimedia Commons</p>

                        <p>
                            Link:
                            <a href="${place.imageSource}" target="_blank">
                                Click here to view image source
                            </a>
                        </p>
                    </div>
                    `
            : ""
    }

        </div>
    `;
});
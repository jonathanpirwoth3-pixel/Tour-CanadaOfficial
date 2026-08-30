const options = [
    {
        title: "Attractions",
        image: "TorontoAttractions.png",
        link: "../Attractions/Attractions.html",

        imageTitle: "TorontoAttractions.png",
        imageAuthor: "Throwaway618420",
        imageSource: "https://commons.wikimedia.org/wiki/File:CN_Tower_Ground_View_Looking_Up.png",
        imageLicense: "CC BY 4.0",
        licenseLink: "https://creativecommons.org/licenses/by/4.0/"
    },

    {
        title: "Accommodation",
        image: "TorontoAccommodation.jpg",
        link: "../Accommodation/Accomodation.html",

        imageTitle: "Sheraton Centre Toronto Hotel",
        imageAuthor: "Canmenwalker",
        imageSource: "https://commons.wikimedia.org/wiki/File:Sheraton_Centre_Toronto_Hotel_2022.jpg",
        imageLicense: "CC BY 4.0",
        licenseLink: "https://creativecommons.org/licenses/by/4.0/"
    },

    {
        title: "Amusement",
        image: "TorontoAmusement.jpg",
        link: "../Amusment/Amusment.html",

        imageTitle: "REC Room in Square One",
        imageAuthor: "Canmenwalker",
        imageSource: "https://commons.wikimedia.org/wiki/File:REC_Room_in_Square_One_2022.jpg",
        imageLicense: "CC BY 4.0",
        licenseLink: "https://creativecommons.org/licenses/by/4.0/"
    }
];


const container = document.getElementById("toronto-options");


options.forEach(option => {

    container.innerHTML += `
        <div class="toronto-option">

            <a href="${option.link}">
                <img
                    src="${option.image}"
                    alt="${option.title}"
                    loading="lazy"
                >
            </a>

            <h2>${option.title}</h2>


            <div class="image-credit">

                <p>Image Title: ${option.imageTitle}</p>

                <p>Photo by: ${option.imageAuthor}</p>

                <p>
                    License:
                    <a href="${option.licenseLink}" target="_blank">
                        ${option.imageLicense}
                    </a>
                </p>

                <p>Source: Wikimedia Commons</p>

                <p>
                    Link:
                    <a href="${option.imageSource}" target="_blank">
                        Click here to view image source
                    </a>
                </p>

            </div>

        </div>
    `;
});
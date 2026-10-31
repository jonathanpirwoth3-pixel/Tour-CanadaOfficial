const options = [
    {

    }
];
const container = document.getElementById("region-options");


options.forEach(option => {

    container.innerHTML += `
        <div class="region-option">

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
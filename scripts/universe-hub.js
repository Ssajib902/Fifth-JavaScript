let fetchData = [];
const fetchUniverseHub = async () => {
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
    const res = await fetch(url);
    const data = await res.json();
    displayFeatures(data.data);
};

const displayFeatures = cards => {

    const featuresContainer = document.getElementById('features-container');
    // console.log(cards);

    /*    
      **** Sort korte parchi but sort er kaj ta button click er maddhome hocche na....
      Ekhane eta bujhtechi na ki hocche... Button er sathe onclick e function call korle click er kaj korena... Automatik sort er kaj kore...
    */
    // --------------------------------------------------------------------------
    // const displayFeatures = cards => {

    //     function sortingArray() {
    //             const cardsArray = cards.tools;
    //             const sortByDate = document.getElementById('sort-date');
    //             // console.log("clicked");
    //             const customSort = (a, b) => {
    //                 const dataA = new Date(a.published_in);
    //                 const dataB = new Date(b.published_in);
    //                 if (dataA > dataB) {
    //                     return 1;
    //                 }
    //                 else if (dataA < dataB) {
    //                     return -1;
    //                 }
    //                 else {
    //                     return 0;
    //                 }
    //             }
    //             cardsArray.sort(customSort);
    //         }
    //     sortingArray();
    //     };
    //     displayFeatures();




    // -------------------------------show 6 cards with slice  ---------------------------
    // const cardsArray = cards.tools;
    // const cardsArraySlice = cardsArray.slice(0,6);
    // cardsArraySlice === cards;
    // console.log(cardsArraySlice);

    // cards = cards.slice(0,6);

    // console.log(cardsArray);

    cards.tools.forEach(card => {
        const featuresDiv = document.createElement('div');
        featuresDiv.classList.add('col');
        featuresDiv.innerHTML = `
        <div class="card h-100">
                            <img style ="height:180px" src="${card.image}" class="card-img-top rounded-3 p-1">
                            <div class="card-body">
                                <h5 class="card-title">Features</h5>
                                <ol>
                                    <li>${card.features[0]}</li>
                                    <li>${card.features[1]}</li>
                                    <li>${card.features[2]}</li>
                                </ol>
                                </p>
                                <hr class = "mb-2">
                                <h5 class="card-title">${card.name}</h5>
                                <div class = "mb-2 mt-4 d-flex justify-content-between">
                                <i class="fa-solid fa-calendar-days"> ${card.published_in}</i>
                                <i onclick="loadFeaturesDetails('${card.id}')" class="btn text-danger fa-solid fa-circle-arrow-right" style = "cursor:pointer" type="button" data-bs-toggle="modal" data-bs-target="#featuresNameModal"></i>
                                </div>
                                
                            </div>
                        </div>
        `
        featuresContainer.appendChild(featuresDiv);

    });

}

// load single data

const loadFeaturesDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayFeaturesDetails(data.data);
};

// Adding data in modals 

const displayFeaturesDetails = card => {
    const motaldescription = document.getElementById('modal-description');
    motaldescription.innerText = card.description;

    const pricing = document.getElementById('pricing-basic');
    pricing.innerHTML = `
    <div class="border rounded-2 p-1 mt-3 bg-warning-subtle text-success">
    <p>${card.pricing[0].price} </p>
    <h5>${card.pricing[0].plan} </h5>
    </div>
    <div class="border rounded-2 p-1 mt-3 bg-warning-subtle text-warning">
    <p>${card.pricing[1].price} </p>
    <h5>${card.pricing[1].plan} </h5>
    </div>
    <div class="border rounded-2 p-1 mt-3 bg-warning-subtle text-danger">
    <p>${card.pricing[2].price} </p>
    <h5>${card.pricing[2].plan} </h5>
    </div>
    `;

    const featuresDescription = document.getElementById('features-description');
    featuresDescription.innerHTML = `
    <h4>Features</h4>
    <ul>
        <li>${card.features[1].feature_name}</li>
        <li>${card.features[2].feature_name}</li>
        <li>${card.features[3].feature_name}</li>
    </ul>
    `;

    const integrationDescription = document.getElementById('integration-description');
    integrationDescription.innerHTML = `
    <h4>Integrations</h4>
    <ul>
        <li>${card.integrations[0] ? card.integrations[0] : "No Integration"}</li>
        <li>${card.integrations[1] ? card.integrations[1] : "No Integration"}</li>
        <li>${card.integrations[2] ? card.integrations[2] : "No Integration"}</li>
    </ul>
    `;


    const image = document.getElementById('image');
    image.innerHTML = `
                <p class="border bg-danger rounded text-center p-2 mt-1 mx-1" style="position:absolute; margin:0; padding-right:100px; color:white;" > <span>${card.accuracy.score * 100}%</span> accuracy<p/>
                <img class="w-100 rounded-3" src="${card.image_link[0]}">
                <h4 class="mt-4 p-3">${card.input_output_examples[0].input}</h4>
                <p class="mt-1 p-3">${card.input_output_examples[0].output}</p>
                
            `;
}

loadFeaturesDetails();


fetchUniverseHub();



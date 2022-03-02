// load data... 

const searchPhone = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(response => response.json())
        .then(data => displaySearchResult(data.data))

    // clean data .....
    searchInput.value = '';

}

const displaySearchResult = phoneItems => {
    const searchResult = document.getElementById('searchCardItem');
    searchResult.innerHTML = '';
    phoneItems.forEach(phoneItem => {
        console.log(phoneItem);
        const div = document.createElement('div');
        div.classList.add('col-3');
        div.innerHTML = `
                    <div class="col-3 card card-style">
                        <img src="${phoneItem.image}" class="card-img-top mt-3" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${phoneItem.phone_name}</h5>
                            <p class="card-text"> Brand: ${phoneItem.brand} </p>
                            <p class="card-text"> slug: ${phoneItem.slug}</p>
                            <button onclick="detailsButton('${phoneItem.slug}')" id="card-button" class="btn btn-primary">Details</button>
                        </div>
                    </div>
        `;
        searchResult.appendChild(div);

    });

}

// Phone Deatils ............

const detailsButton = detailsButtonId => {
    const urlDetails = `https://openapi.programming-hero.com/api/phone/${detailsButtonId}`
    fetch(urlDetails)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
}
const displayPhoneDetails = phoneDetails => {
    const mainfuture = phoneDetails.mainFeatures;
    const sensors = mainfuture.sensors;
    console.log(sensors);
    const mobileDetails = document.getElementById('phone-datails-single');
    // clear data .....
    mobileDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phoneDetails.image}" class="card-img-top" style="width: 18rem;" alt="...">
                <div class="card-body">
                    <h2>Name:  ${phoneDetails.name} </h2>
                    <h2>Brand:  ${phoneDetails.brand} </h2>
                    <h2>ReleaseDate:  ${phoneDetails.releaseDate} </h2>
                    <h2>slug:  ${phoneDetails.slug} </h2>
                    <h2>MainFeatures:</h2>
                    <p> class="card-text" Store: ${mainfuture.storage} </p>
                    <p> class="card-text" displaySize: ${mainfuture.displaySize} </p>
                    <p> class="card-text" chipSet: ${mainfuture.chipSet} </p>
                    <p> class="card-text" memory: ${mainfuture.memory} </p> 
                    
                </div>

    `;
    mobileDetails.appendChild(div);

}


// function loadFetch() {
//     fetch(' https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089')
//         .then(response => response.json())
//         .then(data => displayResult(data))
// }
// loadFetch();
// const LoadFetchArrow = () => {
//     fetch(' https://openapi.programming-hero.com/api/phone/${id}')
//         .then(response => response.json())
//         .then(data => displayResult(data))
// }
// LoadFetchArrow();
// const displayResult = (data) => {
//     const monir = data;
//     console.log(monir);
// }

const searchPhone = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(response => response.json())
        .then(data => displaySearchResult(data.data))
    searchInput.value = '';

}
const displaySearchResult = phoneItems => {
    const searchResult = document.getElementById('searchCardItem');
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
                            <button id="card-button" class="btn btn-primary">Details</button>
                        </div>
                    </div>
        `;
        searchResult.appendChild(div);
    });

}
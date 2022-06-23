function CountryRoad(){
    fetch`https://restcountries.com/v3.1/all`
    .then(res => res.json())
    .then(data => population(data))
}
CountryRoad();

function population(data){
    // console.log(data);
    let cardContainer = document.getElementById('card-container');

    for (let singleUser of data){

        let countryImg = document.createElement('img');
        countryImg.classList.add = ('flag');

        countryImg.setAttribute = ('img');

        let countryName = document.createElement('h1');

        let population = document.createElement('h3')

        countryName.classList.add=("name");

        countryImg.src = `${singleUser.flags.svg}`;
        countryName.innerHTML = singleUser.name.common;
        population.innerHTML = singleUser.population;

        cardContainer.appendChild(countryImg);
        cardContainer.appendChild(countryName);
        cardContainer.appendChild(population);
    }
}
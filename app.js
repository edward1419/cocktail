var search = document.getElementById('search');
var searchButton = document.getElementById('search-button')
var drinkName = search.value;

var section = document.getElementById('drinks');

async function loadData() {

    var drinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName;
    var response = await fetch(drinkUrl);
    var data = await response.json();
    var drinkList = data.drinks;

    console.log(drinkUrl);

    for (let i= 0; i < drinkList.length; i++) {
        var list = drinkList[i];

        var img = document.createElement('img');
        img.setAttribute('src', list.strDrinkThumb);
        img.setAttribute('alt', 'drinks');
        img.classList.add('images');
        
        var title = document.createElement('p');
        title.innerHTML = list.strDrink;

        var details = document.createElement('p');
        details.classList.add('ins');
        details.innerHTML = list.strInstructions;

        var div = document.createElement('div');
        div.classList.add('card');
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(details);

        section.appendChild(div);
    }

}


searchButton.addEventListener('click', loadData)



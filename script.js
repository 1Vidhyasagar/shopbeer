//Creating DOM
document.body.innerHTML = `
<div class="heading-container">
<h1>Brewery List</h1>
<img class="a" src="https://mb.cision.com/Public/14555/2986784/ab61f22cda7a88fc_800x800ar.png"
</div>
<input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search">

<div id="mainContainer" class="main-container"></div>
<div class="search"></div>
`;

const getData = async () => {
  try {
    const data = await fetch("https://api.openbrewerydb.org/breweries");
    const brewerys = await data.json();

    mainContainer.innerHTML = "";
    brewerys.forEach((brewery) => {
      displayData(brewery);
    });
  } catch (error) {
    console.log(error);
  }
};

getData();

const displayData = (obj) => {
  mainContainer.innerHTML += `
<div class="container">
<h3 class="blue">Brewery name :<span>${obj.name}</span></h3>
<p class="para blue"> Brewery Type:<span>${obj.brewery_type}</span></p>
<p class="para blue"> Brewery Address:<span>${obj.street}</span></p>
<p class="para blue"> Brewery State:<span>${obj.state}</span></p>
<p class="para blue"> Brewery Country:<span>${obj.country}</span></p>
<p class="para blue"> Brewery Website:<span>${obj.website_url}</span></p>
<p class="para blue"> Brewery Phone:<span>${obj.phone}</span></p>

</div>`;
};

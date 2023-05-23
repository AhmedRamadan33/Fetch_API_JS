   
let allRecipes ;
if(localStorage.getItem("ourProduct") == null){
  allRecipes = [] ;
}
else{
  allRecipes = JSON.parse(localStorage.getItem("ourProduct"))
  displayAllRecipes()
}


// fetch //

fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")
.then(response =>{
return response.json()
})
.then(data =>{
  allRecipes = data.recipes
  localStorage.setItem("ourProduct",JSON.stringify(allRecipes))    

  displayAllRecipes()
})



  function displayAllRecipes(){
    let allRecipesBox = ""
    for(let i = 0 ; i < allRecipes.length ; i++){
      allRecipesBox += `
      <div class="col-md-4">
            <div class="card">
              <img src="${allRecipes[i].image_url}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title"> ${allRecipes[i].title}</h5>
                <p class="card-text">${allRecipes[i].publisher} </p>
                <a href="${allRecipes[i].publisher_url}" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
      `
    }
    document.getElementById("row_pizza").innerHTML = allRecipesBox
  }

// search //

function searchProduct(byName){
  var allRecipesBox2 = "";
  for(var i=0 ; i<allRecipes.length; i++){
      if(allRecipes[i].title.toLowerCase().includes(byName.toLowerCase().trim())){
        allRecipesBox2 += `
        <div class="col-md-4">
        <div class="card">
          <img src="${allRecipes[i].image_url}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"> ${allRecipes[i].title}</h5>
            <p class="card-text">${allRecipes[i].publisher} </p>
            <a href="${allRecipes[i].publisher_url}" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div> `
      }
  }
  document.getElementById("row_pizza").innerHTML = allRecipesBox2

}




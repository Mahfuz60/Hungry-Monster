const searchMeal=()=>{
    const searchInput=document.getElementById('search-field').value;
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>
        displayMeal(data.meals))
    
}

const displayMeal=meals=>{
    const mealContainer=document.getElementById('meal-container');
       meals.forEach(meal => {
        mealContainer.innerHTMl="";
        const mealDiv=document.createElement('div');
        mealDiv.className="single-meal";
        mealDiv.innerHTML=`
       <div   class="row  row-cols-2 row-cols-md-4 g-4">
            <section class="singleMeal-count" >
            <img  class="card-img-top" alt="nothing" src="${meal.strMealThumb}" >
            <h4 class="card-title">${meal.strMeal}</h4>
            </section>
       </div>
      
       `;
       mealContainer.appendChild(mealDiv);
       
   });
}

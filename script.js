
async function getData() {
   let res;
   const x = document.getElementById("mytext").value;
   console.log(x);
   if (x == "") {
      error.innerHTML = "Please enter a name";
   }
   else {
      try { 
         const data = await fetch(
            `https://api.nationalize.io/?name=${x}`,  
            { 
               method: "GET", 
               headers: { 
                  "Content-Type": "application/json"
               },
            }  
         );
         res = await data.json();
         const object = res.country;
         // console.log(object);
         if (res.country.length == 0){
            mainContainer.innerHTML = `<h3>No Results Found</h3>`;
         }
         else {
            error.innerHTML = "";
            mainContainer.innerHTML = `
            <div class="d1-container">
             <h2>Country-1: ${object[0].country_id}</h2>
             <h3>Probability: ${object[0].probability}</h3>
            </div>
            <div class="d2-container">
             <h2>Country-2: ${object[1].country_id}</h2>
             <h3>Probability: ${object[1].probability}</h3>
            </div>
            `; 
         }
      }
      catch (error) {
         console.log(error); 
      }
   }
}

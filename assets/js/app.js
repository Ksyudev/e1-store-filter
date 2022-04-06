
const URL = 'https://fakestoreapi.com/products';

let Model = {
    cards: [],
    //searchText: '',
    sortDirection: null,

async load(){

let data = await fetch(URL);
    data = await data.json();

    this.cards = data;
  this.render();
        }, // load()
  
        render(){
          let info = document.querySelector('main');

          let output  = [...this.cards];

          //if(this.searchText){
          //    output = output.filter(i => i.txt
          //                                  .toLowerCase()
          //                                  .includes(this.searchText));
          //}

          if(this.sortDirection == 'up'){
              output.sort( (a, b) => a.price - b.price );
          }

          if(this.sortDirection == 'down'){
            output.sort((a, b) => b.price - a.price);
                    console.log(output);
          }
          
          info.innerHTML = output.map(card => `
          <div class='p-2'>
          <div class="card shadow">
            <img src="${card.image}" class="card-img-top" alt="...">
            <div class="card-body">
         <h5 class="card-title">
              ${card.category}        
         </h5>
             <p class="card-text">
               ${card.description}
              </p>
              <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
        
              </div>
              <p class="text-bolder">$ ${card.price}</p>
            </div>
            </div>
          </div>
        </div>
          `).join('');
  }, //render()
        
        
      sort(dir){
        this.sortDirection = dir;
        this.render();

    } //sort()

} 

let sortUp   = document.getElementById('sort-up');
    let sortDown = document.getElementById('sort-down');

    sortUp.addEventListener('click', function(){
        Model.sort('up');
    });

    sortDown.addEventListener('click', function(){
        Model.sort('down');
    });



    Model.load();


    

//async (function(){
//  const URL = 'https://fakestoreapi.com/products';
//  
//  let data = await fetch(URL);
//      data = await data.json();
//      //data = data.results;
//      let usersListTag  = document.getElementById('card-list');
//       usersListTag.innerHTML = data.map(card => `
//  <div class='p-2'>
//    <div class="card shadow">
//      <img src="${card.image}" class="card-img-top" alt="...">
//      <div class="card-body">
//   <h5 class="card-title">
//        ${card.category}        
//   </h5>
//       <p class="card-text">
//         ${card.description}
//        </p>
//        <div class="d-flex justify-content-between align-items-center">
//        <div class="btn-group">
//  
//        </div>
//        <p class="text-bolder">$ ${card.price}</p>
//      </div>
//      </div>
//    </div>
//  </div>
//    `).join('');
//     console.log(data);
//  })
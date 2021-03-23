
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);  
const searchTerm = urlParams.get('search');
var showProducts = [];


function productSearchByCategory(productCollections, category){
    
    for(let product of myProductArray){
        if(product.productCatalog.toLowerCase().includes(searchTerm.toLowerCase())){
            showProducts.push(product);
        }
    }
}

function productSearchByName(productCollections, name){
    for(let product of myProductArray){
        if(product.productName.toLowerCase().includes(searchTerm.toLowerCase())){
            if(!showProducts.includes(product)){
                showProducts.push(product);   
            }

        }
    }
}

function searchAllProducts(productCollections){
    for(let product of myProductArray){
        showProducts.push(product);
    }
    
}

function displayFeatureProducts(productCollections){
    for(let i=0; i<3; i++){
        document.write(myProductArray[i].productDetails());
    }
}

function productSearchByTerm(productCollections, term){
    if(term!=""){
        productSearchByCategory(productCollections, term);
        productSearchByName(productCollections, term);
        if(showProducts.length==0){
            document.write("<h2> No result found. </h2>");
            searchAllProducts(productCollections);
        }
    }
    else {
        searchAllProducts(productCollections);
    }
    displaySelectedProducts();   
}

function displaySelectedProducts(){
    for(let product of showProducts){
        document.write(product.productDetails());
    }  
}

//function to sort products
function sortProducts(arg) {
    if (arg.value == 'priceHighToLow') {
        showProducts.sort(function(a,b){
            return b.productPrice - a.productPrice;
        });
    }else if (arg.value == 'priceLowToHigh') {
        showProducts.sort(function(a,b){
            return a.productPrice - b.productPrice;
        });
    }else if (arg.value == 'ratingHighToLow') {
        showProducts.sort(function(a,b){
            return b.productRating - a.productRating;
        });
    }else if (arg.value == 'ratingLowToHigh') {
        showProducts.sort(function(a,b){
            return a.productRating - b.productRating;
        });
    }
    var SortedHTML="";
    for(let product of showProducts){
        SortedHTML+=product.productDetails();
    } 
    document.getElementById("product-list").innerHTML=SortedHTML;
    
}
    
/*function to filter products*/
function filter(field) {
    let filteredResult= [];
    if (field == 'price') {
        let low = +document.querySelector('#low-p').value || 0;
        let high = +document.querySelector('#high-p').value || 9999999;
        document.querySelector('#low-r').value ='';
        document.querySelector('#high-r').value = '';
        for(let product of showProducts){
            if((product.productPrice+0) >= low && (product.productPrice+0)<= high){
                filteredResult.push(product);
            }
        } 
    } else if (field == 'rating') {
        let low = document.querySelector('#low-r').value || 0;
        let high = document.querySelector('#high-r').value || 5;

        document.querySelector('#low-p').value = '';
        document.querySelector('#high-p').value = '';
        
        for(let product of showProducts){
            if(product.productRating >= low && product.productRating<= high){
                filteredResult.push(product);
            }
        } 
    }
    SortedHTML="";
    for(let product of filteredResult){
    SortedHTML+=product.productDetails();
    } 
    document.getElementById("product-list").innerHTML=SortedHTML;
}

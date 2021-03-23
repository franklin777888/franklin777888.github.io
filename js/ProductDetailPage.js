const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);  
const productID = urlParams.get('id');
var product =selectProduct();

function selectProduct(){
    for(let product of myProductArray){
        if(product.productID==productID){
            return product;
        }
    }
}

window.onload=function(){
    if(product!=""){
        document.querySelector('#title').innerHTML = product.productName;
        document.querySelector('#price').innerHTML = product.productPrice;
        
        var rateStars = "";
        for(let i=0;i<product.productRating;i++){
            rateStars +="<span class =\"fa fa-star checked\"></span>";
        }
        
        document.querySelector('#rating').innerHTML = rateStars;
        document.querySelector('#descriptions').innerHTML = product.productDescription;
        document.querySelector('#image1').src = product.productImage1;
        document.querySelector('#image2').src = product.productImage2;
        document.querySelector('#image3').src = product.productImage3;
        document.querySelector('#image4').src = product.productImage1;
        document.querySelector('#image5').src = product.productImage2;
        document.querySelector('#image6').src = product.productImage3;
    }
    
    var dotsImages=document.getElementsByClassName("dots")[0].children;
    var imgs = document.getElementsByClassName("imgs")[0].children;
    for (let i = 0; i < dotsImages.length; i++) {
          dotsImages[i].onclick = function () {
              for (let j = 0; j < dotsImages.length; j++) {
                  imgs[j].style.display = 'none';
                  dotsImages[j].className = "quiet";
              }
              dotsImages[i].className="active";
              imgs[i].style.display = 'block';
          }
    }
}
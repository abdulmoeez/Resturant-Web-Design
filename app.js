
// SELECT ELEMENTS
var pizzaMenu = document.querySelector(".menuPizzas");
var BurgerMenu = document.querySelector(".menuBurgers");
var drinksMenu = document.querySelector(".menuDrinks");
var saladMenu = document.querySelector(".menuSalads");
var burgerBtn = document.querySelector(".menuBurgerBtn");
var pizzaBtn = document.querySelector(".menuPizzaBtn");
var drinkBtn = document.querySelector(".menuDrinkBtn");
var saladBtn = document.querySelector(".menuSaladBtn");



function hideMenu(menuHide1,menuHide2,menuHide3, menuShow,btn1,btn2,btn3,btnShow){
    menuHide1.style.display = 'none';
    menuHide2.style.display = 'none';
    $(menuShow).fadeIn('slow');
    menuHide3.style.display = 'none';
    btn1.classList.remove('activeCustom');
    btn3.classList.remove('activeCustom');
    btn2.classList.remove('activeCustom');
    btnShow.classList.add('activeCustom');
}

function pizza(){
    hideMenu(BurgerMenu,drinksMenu,saladMenu,pizzaMenu,burgerBtn,drinkBtn,saladBtn,pizzaBtn);
    


} 

function burger(){
    hideMenu(drinksMenu,saladMenu,pizzaMenu,BurgerMenu,drinkBtn,saladBtn,pizzaBtn,burgerBtn);
   

}

function drink(){
    hideMenu(saladMenu,pizzaMenu,BurgerMenu,drinksMenu,burgerBtn,saladBtn,pizzaBtn,drinkBtn);
}

function salad(){
    hideMenu(drinksMenu,pizzaMenu,BurgerMenu,saladMenu,burgerBtn,drinkBtn,pizzaBtn,saladBtn);
}


function navbarActive(){
    document.querySelector("nav").style.display = 'block';
    document.querySelector(".hamburgerIcon").style.display = 'none';
}


function navbarHide(){
    document.querySelector("nav").style.display = 'none';
    document.querySelector(".hamburgerIcon").style.display = 'block';
}


    document.querySelector(".navbarHide").addEventListener("click", navbarHide);

    

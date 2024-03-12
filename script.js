const shop = ['Apple', 'apple', 'Banna', 'banna', 'Gava', 'gava', 'Mango', 'mango', 'Orange', 'orange', 'Strawberry', 'strawberry', 'Grapes', 'grapes'];
const input = document.querySelector('#input');
const h2 = document.querySelector('h2');

function getFurits(){
    console.log(input.value)
    if ( shop.includes(input.value)){
        console.log("Furit is Available... ")
        h2.innerHTML = `${input.value} is Available`
    }else{
        console.log('Furit is Not Available here...')
        h2.innerHTML = `${input.value} is Not Available`
    }

   input.value = '' ;

}
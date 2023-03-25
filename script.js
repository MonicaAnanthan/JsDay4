
// 1.How to compare two JSON have the same properties without order?
let obj1 = {
    name : 'person',
    age  :  5
};
let obj2 = {
    age  :  5,
    name : 'person'
};

//Answer:
JSON.stringify(obj1) === JSON.stringify(obj2);

// 2.Use the rest countries api url https://restcountries.com/v3.1/all and 
// display the country flag in console
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function(){
    if(xhr.status === 200){
        const data = JSON.parse(xhr.responseText);
        // console.log(data);
        for(let i = 0; i<data.length; i++){
            console.log(data[i].flags.svg);
        }
    }else{
        console.error('Error fetching data:', xhr.statusText);
    }
};
xhr.send();

// 3.Use the rest countries api url https://restcountries.com/v3.1/all and 
// print all countries name, regions, sub-regions and population console
const country = new XMLHttpRequest();
country.open('GET', 'https://restcountries.com/v3.1/all');
country.send();
country.onload = function(){
    if(country.status === 200){
        const data = JSON.parse(country.responseText);
        for(i=0; i<data.length; i++){
            console.log(data[i].name.common);
            console.log(data[i].region);
            console.log(data[i].subregion);
            console.log(data[i].population);
        }
    }else{
        console.log('Error fetching data:', country.statusText);
    }
};

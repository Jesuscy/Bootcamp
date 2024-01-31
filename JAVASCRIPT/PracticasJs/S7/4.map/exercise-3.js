//Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.

const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

const cityList = [];
cities.map(returnCity = (city) =>{
    if(city.isVisited){
        cityList.push(`${city.name} (Visitado)`);
    }else{
        cityList.push(city.name);
    }

});
console.log(cityList);
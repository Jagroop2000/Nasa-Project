// const planets =[];

// module.exports = planets;


const { parse } = require('csv-parse');

const data = require('../../Data/kepler_data.csv')

const fs = require('fs')

const results =[]

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol']<1
    && planet['koi_prad'] <1.6;
}


function loadPlanetsData(){

fs.createReadStream('../../Data/kepler_data.csv')
    .pipe(parse({
        comment : '#',
        columns : true
    }))
    .on('data',(data)=>{
        if(isHabitablePlanet(data)){
        results.push(data);
        }
    })
    .on('error', (err) =>{
        console.log("error",err);
    })
    .on('end',()=>{
        console.log(results.map((planet) =>{
            return planet['kepler_name']
        }));
        console.log(`Total Habitable Planets ${results.length}`);
    })

}


    module.exports ={
        planets : results
    };


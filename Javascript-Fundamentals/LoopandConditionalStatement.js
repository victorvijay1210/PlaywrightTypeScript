var cars =['Swift','Tiago','I10','Nexon']


//traditial for loop
for(let i=0;i<cars.length;i++){
    console.log(cars[i])
    if(cars[i]==='I10'){
        console.log('I10 found in this array')
    }
}

//Enhanced for loop
for(let car of cars){
    console.log(car)
}
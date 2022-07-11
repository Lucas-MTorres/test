const test = (array)=>{
    let acc = []; 
    for(i=0;i<array.length;i++){
        if(array[i] === array[i-1]){
        } else{
            let filteredNumber = array.filter(num=>num===array[i]);
            if(filteredNumber.length === 1){
                acc = acc.concat(filteredNumber);
                //console.log(acc);
                //console.log(filteredNumber);
            } else{ 
                filteredNumber = [filteredNumber];
                acc = acc.concat(filteredNumber);
                //console.log(acc, "acc");
                //console.log(filteredNumber, "filteredNumber");
            }
        }
    //console.log(acc);
    }  
    return acc;
}



const cleanTheRoom = (array)=>{					//comments here
    let sortedArray = array.sort((a,b)=>a-b);
    arrayNumber = sortedArray.filter(num=>typeof num==="number");
    arrayString = sortedArray.filter(num=>typeof num==="string");
    return test(arrayNumber).concat([test(arrayString)]) 
}

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]; 
const cleanedArray = cleanTheRoom(array); 


const findTarget = (array, target)=>{
    let arr = []; 
    array.forEach((num,i)=>{
        for(let j =1;j<array.length;j++){
            (array[i] + array[i+j] === target) ? (arr = arr.concat([[array[i], array[i+j]]])):(arr=arr)
        }
    })
    return arr;
}

//find duplicate occuance of words in a string 

function findDuplicateOccurance(s){
    let arr = s.split(" ");
    let countObj = {};
    for(let word of arr){
       countObj[word] = (countObj[word] || 0) + 1;
    }
    for(let item in countObj){
        if(countObj[item] > 1){
            console.log(`${item} : ${countObj[item]} times`)
        }
    }
}

let s = "How are you , are you happy";
findDuplicateOccurance(s);
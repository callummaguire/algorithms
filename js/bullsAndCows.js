/*
  place: leetcode
  difficult level: medium
  url: https://leetcode.com/problems/bulls-and-cows/?envType=study-plan&id=level-1
  tag: [hashmap]

1) two Variables for counts of bull and cows 
2) make a hashMap of the sercet going over it 
3) then go over the sercet again checking if there is a bull or a cow
4) if there is a bull then increase it and remove the counter of the hashmap if it is 1
5) if there is a cow then increase it and remove the counter 
6) incode string 


runtime: 0 (n * n)

*/

const getHint = (secret1, guess1) => {
  // 1 done
  let bullCount = 0;
  let cowCount = 0;

  const hashMapSercet = {};

  let secret = secret1.split("");
  let guess = guess1.split("");

  // 2 done
  for (let i= 0; i < secret.length; i++) {
    if (hashMapSercet[secret[i]] === undefined) {
      hashMapSercet[secret[i]] = 1;
    } else {
      hashMapSercet[secret[i]] = hashMapSercet[secret[i]] + 1;
    }
  }

  const hashMapCountCow = [];
  // 3 done
  for (let i = 0; i < secret.length; i++) {
    // 4 done
    if (guess[i] === secret[i] && hashMapSercet[secret[i]] > 0) {
      bullCount += 1
      hashMapSercet[secret[i]] = hashMapSercet[secret[i]] - 1;
    }
     else {
      hashMapCountCow.push(guess[i]);
    }
  }

  for (let i =0; i< hashMapCountCow.length; i++) {
    
    if (hashMapSercet[hashMapCountCow[i]] > 0) {

      cowCount += 1;
      hashMapSercet[hashMapCountCow[i]] = hashMapSercet[hashMapCountCow[i]] - 1;
    }
  }
  
  // 6 done
  return bullCount +"A" + (cowCount)+ "B"
}

console.log(getHint("1122", "2211", "A13B"))
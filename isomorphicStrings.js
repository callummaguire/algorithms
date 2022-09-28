const isomorphicStrings = (s,t) => {
  let hashmap1 = {};
  let hashmap2 = {};
  const sArray = s.split("");
  const tArray = t.split("");

  for (let i = 0; i < sArray.length; i++) {
    if (!hashmap1[tArray[i]] && !hashmap2[sArray[i]]) {
      hashmap1[tArray[i]] = sArray[i];
      hashmap2[sArray[i]] = tArray[i];
    }
    else if (!(hashmap1[tArray[i]] == sArray[i] && hashmap2[sArray[i]] === tArray[i])) {
      return false
    }
  }
 
  return true
}

console.log(isomorphicStrings('paper', 'title'))
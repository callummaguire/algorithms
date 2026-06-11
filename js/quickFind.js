
const quickFind = (nLength) => ({
  makeNArray: () => {
    return Array.from(Array(nLength).keys())
  }
});

const isConnected = (array1, node1, node2) => array1[node1] === array1[node2];

const array1 = quickFind(10).makeNArray();


const createUnion = (array1, node1, node2) => {
  const nodeId1 = array1[node1];
  const nodeId2 = array1[node2];

  for(let i = 0; i < array1.length; i++) {
    if (array1[i] === nodeId1) {
      array1[i] = nodeId2;
    }
  }

  return array1;
}

const array2 = createUnion(array1, 1,2);

console.log(array2);
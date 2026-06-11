const graph = {

}

graph['start'] = {a: 6, b: 2};
graph['a'] = {fin: 1};
graph['b'] = {a: 3,fin: 5};
graph['fin'] = {}

const costs = {};
costs['a'] = 6;
costs['b'] = 2;
costs['fin'] = Number.MAX_SAFE_INTEGER;

const parents = {};
const processed = [];

const findLowestCostNode = (costs) => {
  let lowestCost = Number.MAX_SAFE_INTEGER;
  let lowestCostNode = null;
  for (node in costs) {
    cost =  costs[node];
    console.log(processed.includes(node), node, processed)
    if (cost < lowestCost && !processed.find(element => element === node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
}

console.log(findLowestCostNode(costs));

const findLeastCostlyPath = () => {
  let node = findLowestCostNode(costs);
  while (node !== null) {
    let cost = costs[node];
    let neighbors = graph[node];

    for (n in neighbors) {
      let newCost = cost + neighbors[n];
      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }
    processed.push(node);
    const node1 = findLowestCostNode(costs);
    console.log(node1, 'node1')
    node = node1;
  }

  console.log(costs);
}


console.log(findLeastCostlyPath());
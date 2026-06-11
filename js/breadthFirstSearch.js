const graph = {};

graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = []


const breadthFirstSearch = () => {
  const queue= [];
  queue.push("you");

  while (queue.length !== 0) {
    const couldBeMangoSeller = queue.pop();

    if (isMangoSeller(couldBeMangoSeller)) {
      return couldBeMangoSeller;
    } else {
      queue.push(...graph[couldBeMangoSeller])
    }
    console.log(queue);
  }
 
}

const isMangoSeller = (person) => {
  if (person === "anuj") {
    return true;
  } 
  return false;
}

console.log(breadthFirstSearch(), "anuj");
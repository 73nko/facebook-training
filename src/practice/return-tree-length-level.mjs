class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}
const root = new Node("CEO");
const CTO = new Node("CTO");
const CMO = new Node("CMO");
const COO = new Node("COO");
const SeniorPM = new Node("Senior PM");
SeniorPM.children = [new Node("PM"), new Node("PM")];
CTO.children = [new Node("Director of Infra"), new Node("Director of Eng")];
CMO.children = [SeniorPM];
root.children = [CTO, CMO, COO];
console.log(traverseTree(root));

function traverseTree(root) {
  return collect(root);
}

function collect(node, res = [], level = 0) {
  const elem = res[level] ? res[level] : 0;
  res[level] = elem + 1;

  node.children.forEach((el) => collect(el, res, level + 1));

  return res;
}

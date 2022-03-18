import fs from "fs";

const contentArr = fs
  .readFileSync("./src/stories/FUET/input.txt", "utf8")
  .split("\n");

function fuet(content) {
  const identities = {};
  const devices = [];
  const accesses = [];
  for (const line of content) {
    const [identity, value] = line.split(".");
    if (!value) {
      identities[identity] = {};
    } else {
      devices.push(line);
    }
  }

  for (const line of devices) {
    const [identity, device] = line.split(".");

    if (device.length === 4) {
      if (identities[identity]) {
        identities[identity] = { ...identities[identity], [device]: [] };
      }
    } else {
      accesses.push(line);
    }
  }

  for (const line of accesses) {
    const [device, score] = line.split(".");

    for (const identity in identities) {
      if (identities[identity][device]) {
        identities[identity][device].push(score);
      }
    }
  }

  console.log(identities);

  const result = Object.entries(identities).map(calculateIndicator);

  console.log(result.sort());
}

function calculateIndicator([entity, devices]) {
  const totalScore = Object.values(devices).reduce((acc, scores) => {
    return acc + scores.reduce((a, b) => a + parseInt(b), 0);
  }, 0);

  const totalScores = Object.values(devices).reduce(
    (acc, scores) => acc + parseInt(scores.length),
    0
  );

  const avg = totalScore / totalScores;

  console.log(totalScore, totalScores, avg);

  let color;
  if (avg > 70) color = "red";
  if (avg > 25 && avg <= 70) color = "yellow";
  if (avg <= 25) color = "green";

  return `${entity} --> ${color}`;
}

fuet(contentArr);

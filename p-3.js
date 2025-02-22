function electionResult(votes) {
  const arrayCheck = Array.isArray(votes);
  if (arrayCheck === false) {
    return 'Invalid';
  }
  let mangoVoteCount = 0;
  let bananaVoteCount = 0;

  for (let vote of votes) {
    let voteStringLowercase = vote.toLowerCase();
    if (typeof vote === "string" && voteStringLowercase === "mango") {
      mangoVoteCount++;
    } else if (typeof vote === "string" && voteStringLowercase === "banana") {
      bananaVoteCount++;
    }
  }

  if (mangoVoteCount > bananaVoteCount) {
    return "Mango";
  } else if (mangoVoteCount < bananaVoteCount) {
    return "Banana";
  } else {
    return "Draw";
  }
}

console.log(electionResult(["mango", "banana", "mango", "banana", "mango"]));
console.log(electionResult([]));
console.log(electionResult(["mango", "banana", "jaker party", "no"]));
console.log(electionResult(["mango"]));
console.log(electionResult(["banana", "banana", "age e valo chilam", "no"]));
console.log(electionResult({ result: "mango , banana ,  mango" }));
console.log(electionResult("mango , banana"));
console.log(electionResult(["mango", "BananA", "na vote", "na vote"]));

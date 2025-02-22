function validEmail(email) {
  if (typeof email !== 'string'){
    return 'Invalid';
  }
  if (
    email[0] === "." ||
    email[0] === "-" ||
    email[0] === "_" ||
    email[0] === "+" ||
    email[0] === "@"
  ) {
    return false;
  }

  let checkAt = email.indexOf("@");
  if (checkAt === -1) {
    return false;
  }

  for (let whiteSpace of email) {
    if (whiteSpace === " ") {
      return false;
    }
  }

  let checkDotCom = email.slice(-4);
  if (checkDotCom !== ".com") {
    return false;
  }

  return true;
}

console.log(validEmail("ferdous@gmail.com"));
console.log(validEmail("1zihad@gmail.com"));
console.log(validEmail("-king@yahoo.com"));
console.log(validEmail(["jhankar@hero.com"]));
console.log(validEmail("Mewo@cat.com"));
console.log(validEmail("programming-hero.com"));
console.log(validEmail("chat420@gpt.net"));
console.log(validEmail(true));
console.log(validEmail("he ro@alom.com"));

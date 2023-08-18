const url = require("url");

const newUrl = new URL(
  "http://bexruz.ru:5000/user.html?name=Bexruz&status=active&age=24"
);

// Umumiy url manzili
console.log(newUrl.href);

// port bilan birga
console.log(newUrl.host);

// domenni o'zi
console.log(newUrl.hostname);

//path
console.log(newUrl.pathname);

// query parametr
console.log(newUrl.search);

// objected
console.log(newUrl.searchParams);

// add new params
newUrl.searchParams.append("firstName", "Xolmuminov");
console.log(newUrl.searchParams);

// tsikl
console.log(
  newUrl.searchParams.forEach((name, value) => {
    console.log(`${value}: ${name}`);
  })
);

function submitData(username, userEmail) {
  const login = {
    name: username,
    email: userEmail,
  };
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(login),
  })
    .then((resp) => resp.json())
    .then((json) => {
      const p = document.createElement("p");
      p.textContent = json.id;
      document.querySelector("body").appendChild(p);
    })
    .catch((error) => {
      const p = document.createElement("p");
      p.textContent = error.message;
      document.querySelector("body").appendChild(p);
    });
}

submitData("NJustin", "P@55W0RD");

let error = document.querySelector("#error");

if (localStorage.getItem("loggedInUser")) {
  console.log("this user is logged");
  window.location.href = "/";
} else {
  // console.log("it is new user");
}

// Load users.json
async function UserData() {
  const res = await fetch(location.origin+"/user.json");
  const data = await res.json();
  return data;
}

// Login function
async function login(userNameInput, passwordInput) {
  const data = await UserData();
  if (!userNameInput || !passwordInput) {
    error.textContent= "Enter a valid username and password"
    error.style.display = "flex";
    return "hoga"
  }
  // find a student by matching name AND password
  const foundUser = data.students.find(
    (student) =>
       String(student.user.id) === userNameInput && student.password === passwordInput
  );

  if (foundUser) {
    // console.log("✅ Login successful!");
    // console.log("User details:", foundUser);

    // Save token + name in localStorage
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        token: foundUser.token,
        name: foundUser.user.name,
        id : foundUser.user.id
      })
    );

    window.location.href = "/";
  } else {
    // console.log("❌ Invalid username or password");
    // alert("❌ Invalid username or password");
    error.style.display = "flex";
  }
}

// DOM references
let userNameInput = document.querySelector("#studentID");
let passwordInput = document.querySelector("#password");
let loginBtn = document.querySelector("#loginButton");

// Event listener
loginBtn.addEventListener("click", (e) => {
  e.preventDefault(); // prevent <a> default
  const username = userNameInput.value.trim();
  const password = passwordInput.value.trim();

  login(username, password);
});

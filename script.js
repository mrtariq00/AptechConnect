let savedUser = JSON.parse(localStorage.getItem("loggedInUser"));
let userDetailsBox = document.querySelector("#userDetails")
let logOut = document.querySelector("#Logout")
let d = new Date();
let date = d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
// console.log(date);


if (savedUser) {
  userDetailsBox.innerHTML = `
            <div class="flex items-center gap-2">
              <div
                class="bg-primary rounded-full size-12 flex items-center justify-center font-semibold text-xl"
              >
                 ${savedUser.name.split("")[0]}
              </div>
              <div>
                <p class="text-xl font-bold">Mr. ${savedUser.name}</p>
                <p class="text-md text-accent font-semibold">
                  StudentID: ${savedUser.id}
                </p>
                <p class="text-md text-accent font-semibold">
                  Date: ${date}
                </p>
              </div>
            </div>`
} else {
  window.location.href = 'login'
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = '/login'
}

logOut.addEventListener("click",()=>{logout()})

async function UserData() {
  const res = await fetch("user.json");
  const data = await res.json();
  return data;
}

// console.log(savedUser);

(async ()=>{
  const data = await UserData();
  const foundUser = data.students.find(
    (student) =>
      student.token == savedUser.token
  );
  // console.log(foundUser);
})()

setTimeout(function() {
  localStorage.removeItem("loggedInUser");
  window.location.href = '/login.html'
}, 1500000);
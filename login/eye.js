document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const toggleIcon = passwordInput.parentElement.querySelector("div");

  toggleIcon.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      // change icon to "eye open"
      toggleIcon.innerHTML = `
        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 576 512" height="1em" width="1em">
          <path d="M572.52 241.4C518.7 135.5 420.9 64 288 64S57.3 135.5 3.48 241.4a48.07 48.07 0 0 0 0 45.1C57.3 376.5 155.1 448 288 448s230.7-71.5 284.52-161.5a48.07 48.07 0 0 0 0-45.1zM288 400c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"/>
          <circle cx="288" cy="288" r="64"/>
        </svg>`;
    } else {
      passwordInput.type = "password";
      // change back to "eye slash"
      toggleIcon.innerHTML = `
        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 640 512" height="1em" width="1em">
          <path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45z"/>
        </svg>`;
    }
  });
});
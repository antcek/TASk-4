document.addEventListener("DOMContentLoaded", function () {
  const userList = document.getElementById("user-list");
  const userDetails = document.getElementById("user-details");
  const usersUl = document.getElementById("users");
  const backBtn = document.getElementById("back-btn");
  const userName = document.getElementById("user-name");
  const userEmail = document.getElementById("user-email");
  const userPhone = document.getElementById("user-phone");
  const userWebsite = document.getElementById("user-website");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      displayUsers(data);
    })
    .catch((error) => console.error("Error fetching users:", error));

  function displayUsers(users) {
    usersUl.innerHTML = "";
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      li.addEventListener("click", () => {
        showUserDetails(user);
      });
      usersUl.appendChild(li);
    });
    userList.classList.remove("hidden");
  }

  function showUserDetails(user) {
    userName.textContent = user.name;
    userEmail.textContent = `Email: ${user.email}`;
    userPhone.textContent = `Phone: ${user.phone}`;
    userWebsite.textContent = `Website: ${user.website}`;
    userList.classList.add("hidden");
    userDetails.classList.remove("hidden");
  }

  backBtn.addEventListener("click", () => {
    userList.classList.remove("hidden");
    userDetails.classList.add("hidden");
  });
});

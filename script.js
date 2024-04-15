document.addEventListener("DOMContentLoaded", function () {
  const logoLink = document.querySelector(".header__logo-link");
  const sidebar = document.getElementById("sidebar");
  let isOpen = false;

  logoLink.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
      sidebar.classList.add("sidebar--open");
    } else {
      sidebar.classList.remove("sidebar--open");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
  }

  // Handle toggle (event delegation — works with dynamic navbar)
  document.addEventListener("click", (e) => {
    const toggle = e.target.closest("#themeToggle");

    if (!toggle) return;

    const current = html.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // Update icon
    toggle.innerHTML =
      newTheme === "light"
        ? '<i class="bi bi-moon-stars-fill"></i>'
        : '<i class="bi bi-sun-fill"></i>';
  });
});
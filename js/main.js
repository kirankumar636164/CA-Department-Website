async function loadComponent(id, file) {
  try {
    const res = await fetch(file);

    if (!res.ok) {
      throw new Error(`Failed to load ${file}`);
    }

    const data = await res.text();
    document.getElementById(id).innerHTML = data;
  } catch (error) {
    console.error(error);
  }
}

// Load components
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar", "components/navbar.html");
  loadComponent("footer", "components/footer.html");
});
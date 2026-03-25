const current = document.body.dataset.page || "";
document.querySelectorAll(".nav a").forEach((link) => {
  if (link.dataset.page === current) link.classList.add("active");
});

const now = new Date();
const stamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
  now.getDate()
).padStart(2, "0")}`;
const stampNode = document.getElementById("build-date");
if (stampNode) stampNode.textContent = stamp;

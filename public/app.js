document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "remove") {
    const id = event.target.dataset.id;

    remove(id).then(() => {
      event.target.closest("li").remove();
    });
  }
});

async function remove(id) {
  await fetch(`/${id}`, { method: "DELETE" });
}

document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "edit") {
    const id = event.target.dataset.id;
    const newTitle = prompt("Enter new title");
    if (!newTitle) return;
    console.log(newTitle);
    const a = document.getElementById(id);
    edit(id, newTitle).then(() => {
      a.innerHTML = newTitle;
    });
  }
});

async function edit(id, newTitle) {
  await fetch(`/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ newTitle }),
  });
}

const addForm = document.querySelector(".add");
const tasks = document.querySelector(".task");
const clearAll = document.querySelector(".clear");
const messageSpan = document.querySelector(".message span");
const searchForm = document.querySelector(".search");

function updatedMessage() {
  const tasksLength = tasks.children.length;
  messageSpan.textContent = `You have ${tasksLength} task pending`;
}
updatedMessage();
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = addForm.task.value.trim();
  if (value.length) {
    tasks.innerHTML += `<li><span>${value}</span>
                            <i class="bi bi-trash delete"></i>
                        </li>`;
    addForm.reset();
    updatedMessage();
  }
});

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    updatedMessage();
  }
});

clearAll.addEventListener("click", (e) => {
  const taskItems = tasks.querySelectorAll("li");
  taskItems.forEach((task) => {
    task.remove();
    updatedMessage();
  });
});
function filterTask(term) {
  const list = Array.from(tasks.children)
    .filter((task) => {
      return !task.textContent.toLowerCase().includes(term);
    })
    .forEach((task) => {
      task.classList.add("hide");
    });

  Array.from(tasks.children)
    .filter((task) => {
      return task.textContent.toLowerCase().includes(term);
    })
    .forEach((task) => {
      task.classList.remove("hide");
    });
}

searchForm.addEventListener("keyup", (e) => {
  const term = searchForm.task.value.trim().toLowerCase();
  filterTask(term);
});

searchForm.addEventListener("click", (e) => {
  if (e.target.classList.contains("reset")) {
    searchForm.reset();
    const term = searchForm.task.value.trim();
    filterTask(term);
  }
});

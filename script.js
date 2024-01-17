const addForm = document.querySelector(".add");
const tasks = document.querySelector(".task");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = addForm.task.value.trim();
  if (value.length) {
    tasks.innerHTML += `<li><span>${value}</span>
                            <i class="bi bi-trash delete"></i>
                        </li>`;
    addForm.reset();
  }
});

const addForm = document.querySelector(".add");
const tasks = document.querySelector(".task");
const clearAll = document.querySelector(".clear");
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

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

clearAll.addEventListener("click" , (e)=>{
    const taskItems = tasks.querySelectorAll("li") ;
    taskItems.forEach((task)=>{
        task.remove();
    })
})

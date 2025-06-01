window.addEventListener("load", function () {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerText = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerText = "Delete";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

    task_edit_el.addEventListener("click", (e) => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_edit_el.innerText = "Save";
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
      } else {
        task_edit_el.innerText = "Edit";
        task_input_el.setAttribute("readonly", "readonly");
      }
    });

    task_delete_el.addEventListener("click", (e) => {
      list_el.removeChild(task_el);
    });
  });
});

// Theme Toggle Logic for To-Do List
const themeToggleToDo = document.getElementById('themeToggleToDo');
const bodyToDo = document.body;
const toDoThemeStatusKey = 'toDoThemeStatus';

function applyToDoTheme() {
  const currentTheme = localStorage.getItem(toDoThemeStatusKey);
  if (currentTheme === 'light') {
    bodyToDo.classList.add('light-mode');
    if (themeToggleToDo) themeToggleToDo.textContent = 'Toggle Dark Theme';
  } else {
    bodyToDo.classList.remove('light-mode');
    if (themeToggleToDo) themeToggleToDo.textContent = 'Toggle Light Theme';
  }
}

if (themeToggleToDo) {
  themeToggleToDo.addEventListener('click', () => {
    bodyToDo.classList.toggle('light-mode');
    if (bodyToDo.classList.contains('light-mode')) {
      localStorage.setItem(toDoThemeStatusKey, 'light');
      themeToggleToDo.textContent = 'Toggle Dark Theme';
    } else {
      localStorage.setItem(toDoThemeStatusKey, 'dark'); // Or removeItem for default dark
      themeToggleToDo.textContent = 'Toggle Light Theme';
    }
  });
}

// Apply theme after existing scripts have potentially run and DOM is fully ready.
// Since this script is at the end of body, direct execution here is usually fine.
// However, to be absolutely sure it runs after the 'load' event listener above,
// we can also wrap it in a 'DOMContentLoaded' or 'load' listener.
// For simplicity here, direct execution as the script is deferred by its position.
applyToDoTheme();

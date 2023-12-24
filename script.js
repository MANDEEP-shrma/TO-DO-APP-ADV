let add = document.querySelector("button");
let ulis = document.querySelector("ul");

add.addEventListener("click", function () {
  let list = document.createElement("li");
  let task = document.querySelector("input");

  let delbtn = document.createElement("button");
  delbtn.innerText = "DONE";
  delbtn.classList.add("delete");

  list.innerText = task.value;
  list.appendChild(delbtn);
  ulis.appendChild(list);
  task.value = "";
});

// event  delegation
ulis.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listTask = event.target.parentElement;
    listTask.remove();
  } // .target help us to tell that which element triggered the function
});

/*here eour these code will  not work for new elements that are adding by us with the help of javascript
 the reasonn behind this is the Event delegation.

let delbtns = document.querySelectorAll(".delete");
for (delbtn of delbtns) {
  delbtn.addEventListener("click", function () {
    let listdelete = this.parentElement;
    listdelete.remove();
  });
} */

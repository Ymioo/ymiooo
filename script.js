
let todoItems = [];//定义一个列表，存放待办事项

let finishedItems = [];//存放已完成的事项

function renderTodoItemList(todoItems, finishedItems) {
    //对待办事项的操作
    //待办事项的放置
    let paneEl = document.querySelector("#todolist > .list-pane");
    //查询节点函数querySelector
    paneEl.innerHTML = "";

    for (let i=0; i < todoItems.length; i++ ) {
        let item = todoItems[i];
        let itemDiv = document.createElement("div");
        //创建div节点
        itemDiv.className = "todo-item";

        itemDiv.className = "todo-item";

        let inputEl = document.createElement("input");
        //对完成事件的打勾选项
        inputEl.type = "checkbox";

        inputEl.addEventListener("change", (e) => {
            //完成的事项
            finishedItems.push(item);
            todoItems.splice(i, 1);
            //删除完成的事项

            console.log("finshed:", i, todoItems, finishedItems );
            renderTodoItemList(todoItems, finishedItems);

        });

        let titleEl = document.createElement("div");
        titleEl.className = "title";

        let importanceEl = document.createElement("div");
        //事件重要程度
        importanceEl.className = "important-flag"
        importanceEl.innerText = "!";

        if (item.isImportance) {
            importanceEl.classList.add("open");
        }

        importanceEl.addEventListener("click", (e) => {
            console.log("click: ", item);
            if (item.isImportance) {
                item.isImportance = false;
            } else {
                item.isImportance = true;
            }

            renderTodoItemList(todoItems, finishedItems);
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "X";

        deleteBtn.addEventListener("click",(e)=>{
            todoItems.splice(i,1)
            renderTodoItemList(todoItems,finishedItems);
            //删除事项

        });

        titleEl.addEventListener("click",(e)=>{
            //更改事项
            let changeE1 = prompt("换个什么任务嘞:","");
            titleEl.innerText= changeE1;
            todoItems[i]= changeE1.value;
            console.log(i);
        });

        titleEl.innerText = item.title;
        //往itemDiv加入节点
        itemDiv.append(inputEl);
        itemDiv.append(titleEl);
        itemDiv.append(importanceEl);
        itemDiv.append(deleteBtn);
        
        paneEl.append(itemDiv);
    }

}

function renderFinishedItemList(todoItems, finishedItems) {

    let paneEl = document.querySelector("#todolist > .list-pane");
    paneEl.innerHTML = "";

    for (let i=0; i < finishedItems.length; i++ ) {
        let item = finishedItems[i];
        let itemDiv = document.createElement("div");
        itemDiv.className = "todo-item";


        let titleEl = document.createElement("div");
        titleEl.className = "title";

        let importanceEl = document.createElement("div");
        importanceEl.className = "important-flag"
        importanceEl.innerText = "!";
        if (item.isImportance) {
            importanceEl.classList.add("open");
        }
        

        titleEl.innerText = item.title;

        itemDiv.append(titleEl);
        itemDiv.append(importanceEl);
        
        paneEl.append(itemDiv);
    }

}
function renderInputPane(todoItems) {
    let inputPaneEl = document.querySelector("#todolist > .input-pane");

    let addBtnEl = inputPaneEl.querySelector("#add-btn");
    let hisBtnEl = inputPaneEl.querySelector("#his-btn");

    addBtnEl.addEventListener("click", (e)=>{
        let inputEl = inputPaneEl.querySelector("input");

        todoItems.push({
            title: inputEl.value,
            isFinished: false,
            isImportance: false, 
        })
        
        console.log("add a item: ", inputEl.value);
        renderTodoItemList(todoItems, finishedItems);
    });

    hisBtnEl.addEventListener("click", (e)=>{
        if (hisBtnEl.classList.contains("open")) {
            hisBtnEl.classList.remove("open");
            renderTodoItemList(todoItems, finishedItems)
        } else {
            hisBtnEl.classList.add("open");
            renderFinishedItemList(todoItems, finishedItems)
        }
    });

}


renderInputPane(todoItems, finishedItems);
renderTodoItemList(todoItems, finishedItems);
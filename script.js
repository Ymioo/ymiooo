let todoItems = [];
//存放待办事项
let finishedItems = [];
//存放已完成的盒子id

function renderTodoItemList(todoItems, finishedItems) {
    //对代办事项的操作

    let paneEl = document.querySelector("#todolist > .list-pane");
    //querySelector是找节点的js内置函数
    paneEl.innerHTML = "";

    for (let i=0; i < todoItems.length; i++ ) {
        let item = todoItems[i];
        //console.log(item);
        let itemDiv = document.createElement("div");
        //创建div节点
        itemDiv.className = "todo-item";

        itemDiv.id="c"+ i;
    
        let inputEl = document.createElement("input");
        //设置勾选位置
        inputEl.type = "checkbox";
        //用来打勾

        inputEl.addEventListener("change", (e) => {
            finishedItems.push(item);
            //
            var  flag=document.getElementById('boxs'+i).checked;
            if (flag){
                document.getElementById(i).style.color="blue"
                //打勾后按钮就失效
                document.getElementById('boxs'+i).disabled=true
                };
                finishedid.push("boxs"+i);
                console.log(finishedid);

            
        });

        let titleEl = document.createElement("div");
        titleEl.className = "title";
        titleEl.className="title";
        titleEl.id=i;

        //感叹号打勾字体变红
        let importanceEl = document.createElement("div");
        importanceEl.className = "important-flag"
        importanceEl.innerText = "!";
        importanceEl.id="a"+i;

    

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

        titleEl.innerText = item.title;

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

    // let btnEl = document.querySelector("#todolist #add-btn");
}

renderInputPane(todoItems, finishedItems);
renderTodoItemList(todoItems, finishedItems);
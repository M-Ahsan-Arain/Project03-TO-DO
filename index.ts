import inquirer from "inquirer";

let todo:string[] = [];

async function createToDo(todos:string[]){
    do{
        let ans = await inquirer.prompt({
        type:"list",
        message:"select an operation",
        name:"select",
        choices:["add", "update", "view", "delete", "exit"]
        });

        if(ans.select === "add"){
            let add = await inquirer.prompt({
                type:"input",
                message:"add item: ",
                name:"item",
            });
            todos.push(add.item)
            console.log(todo);
        }
        if(ans.select === "update"){
            let updateTodo = await inquirer.prompt({
                type:"list",
                message:"select an item for update",
                name:"update",
                choices:todos.map(item => item)
            });
            let addtodo = await inquirer.prompt({
                type:"input",
                message:"add item: ",
                name:"item",
            })
            let newtodos = todos.filter(val => val !== updateTodo.update);
            todos = [...newtodos,addtodo.item];
            console.log(todos);
        }
        if(ans.select === "view"){
            console.log(todos);
        }
        if(ans.select === "delete"){
            let deleteTodo = await inquirer.prompt({
                type:"list",
                message:"select an item for delete",
                name:"delete",
                choices:todos.map(item => item)
            });
            let newtodos = todos.filter(val => val !== deleteTodo.delete);
            todos = [...newtodos];
        }
        if(ans.select === "exit"){
            break;
        }
        }while(true);
    
}

createToDo(todo);
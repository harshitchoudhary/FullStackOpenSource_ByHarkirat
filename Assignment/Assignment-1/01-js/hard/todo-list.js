class Todo {
    constructor(){
        this.result = [];
    }
    add(todo){
        this.result.push(todo);
    }
    remove(index){
        this.result.splice(index,1);
    }
    update(index, todo){
        if(index<this.result.length){
            this.result.splice(index,1,todo);
        }
    }
    getAll(){
        return this.result;
    }
    get(index){
        if(this.result[index] === undefined){
            return null;
        }
        else{
            return this.result[index];
        }
    }
    clear(){
        this.result = [];
    }
}
// let todoList = new Todo;
// // todoList.add('Task 1');
// // todoList.add('Task 2');
// // todoList.add('Task 3');
// todoList.add('Task 1');
// todoList.add('Task 2');
// todoList.add('Task 3');

// todoList.update(1, 'Updated Task 2');
// console.log(todoList.get(3));
    // todoList.get(1));


// todoList.update(3, 'Invalid Task');
// console.log(todoList.getAll());


module.exports = Todo;


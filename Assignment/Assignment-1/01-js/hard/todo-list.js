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


module.exports = Todo;


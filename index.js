let app = new Vue ({
    el: "#app",
    data: {
        taskId: 1,
        taskText: "",
        taskCounter: 0,
        todos: [],
        taskboofers: [],
        changeText: "",
    },
    methods: {
        addTaskToTuskList: function(){
            if(this.taskText == ""){
                return;
            }
            this.todos.push({ text: this.taskText, id: this.todos.length, active: false});
            this.taskText = "";
            this.taskCounter = this.todos.length;
        },
    
        deleteTask: function(key){
           console.log(key);
            this.todos.splice(key,1);
            this.taskCounter = this.todos.length;
        },

        changeTask: function(key){
            console.log(key);
            this.todos[key].active = true;
            this.changeText = this.todos[key].text;
            this.todos[key].text = "";
        },

        applyChange: function(key){
            console.log(this.changeText);
            this.todos[key].active = false;
            this.todos[key].text = this.changeText;
            
        }
             
    }
})


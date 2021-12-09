Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data:{
            toDoList:[
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Cucinare la pasta',
                    done: false
                },
                {
                    text: 'Far uscire il cane',
                    done: false
                }
            ]
        },
        methods:{
            toggleDone: function(index){
                this.toDoList[index].done = !this.toDoList[index].done;
            },
            deleteToDo: function(index){
                this.toDoList.splice(index, 1);
            }
        }
    }
)

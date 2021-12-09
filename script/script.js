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
                    done: true
                },
                {
                    text: 'Uscire il cane',
                    done: false
                }
            ]
        },
        methods:{
            toggleDone: function(index){
                this.toDoList[index].done = !this.toDoList[index].done;
            }
        }
    }
)
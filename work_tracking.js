new Vue({
    el: '#example',
    data:{
        goal_array:[
            {
                obj:'如何解决比较贫穷的问题，要想富先修路',
                estimate_tomato:10,
                cost_tomato:10
            }
        ],
        mygoal:'',
        mytomato:0,
        checkedGoals:[],
        tempgoals:[],
        checkedfeedback:[],
        feedback_goals:[],
        reasonarray:[],
        selectedreason:''
    },
    methods:{
        add: function () {
            var goal_object = {
                obj:'',
                estimate_tomato:0,
                cost_tomato:0
            };
            goal_object.obj = this.mygoal;
            goal_object.estimate_tomato = this.mytomato;
            this.goal_array.push(goal_object);
            console.log(this.goal_array);
        },
        check: function () {
            //
        }

    }
});
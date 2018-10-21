new Vue({
    el: '#example',
    data:{
        goal_array:[
            {
                obj:'如何解决比较贫穷的问题，要想富先修路',
                estimate_tomato:2,
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
        selectedreason:'',
        addgoals:[],
        count:0,
        readltomatonum:0,
        target_index:1,
        show_switch:false,
    },
    methods:{
        add: function () {
            let goal_object = {
                obj: '',
                estimate_tomato: 0,
                cost_tomato: 0
            };
            goal_object.obj = this.mygoal;
            goal_object.estimate_tomato = this.mytomato;
            this.goal_array.push(goal_object);
            this.count += 1;
            console.log(this.goal_array);
        },
        check: function (index) {
            let goal_object = {
                obj: '',
                gap_tomato: 0
            };
            gap = this.goal_array[index].cost_tomato - this.goal_array[index].estimate_tomato;
            if (parseInt(gap) > 0  && this.addgoals.indexOf(index) === -1){
                goal_object.obj = this.goal_array[index].obj;
                goal_object.gap_tomato = gap;
                this.feedback_goals.push(goal_object);
                this.addgoals.push(index);
            }
        },
        showmodaltomato: function (index) {
            $('#myModal').modal('show');
            this.target_index = index;
            console.log(this.target_index);
        },
        confirmrealtomato: function () {
            this.goal_array[this.target_index].cost_tomato = this.readltomatonum;
            $('#myModal').modal('hide');
        },
        showfeedback: function () {
            this.show_switch = true;
        }

    }
});
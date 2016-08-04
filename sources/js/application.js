var vm = new Vue({
    el : '#app',
    data: {
        tasks: [
            { text: 'task 1', done: false},
            { text: 'task 2', done: true},
            { text: 'task 3', done: false}
        ]
    },
    computed : {
        remaining: function () {
            var count = 0;
            for (var i = 0; i < this.tasks.length; i++) {
                if (!this.tasks[i].done) {
                    count++;
                }
            }
            return count;
        }
    },
    methods : {
        add : function () {
            if (this.newTask == '') return;
            this.tasks.push({
                text: this.newTask,
                done: false
            });
            this.newTask = ''
        },
        delete : function (index) {
            this.tasks.splice(index,1);
        },
        purge : function () {
            var i = this.tasks.length;
            while(i--) {
                if (this.tasks[i].done) {
                    this.tasks.splice(i,1);
                }
            }
        },
        selectAll: function () {
            var i = this.tasks.length;
            while(i--) {
                this.tasks[i].done = true;
            }
        },
        clearAll: function () {
            var i = this.tasks.length;
            while(i--) {
                this.tasks[i].done = false;
            }
        }
    }
});
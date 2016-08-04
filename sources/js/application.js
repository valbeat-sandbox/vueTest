var vm = new Vue({
    el : '#app',
    data: {
        title: 'testApp',
        side: 20
    },
    computed: {
        area: {
            get: function() {
                return this.side * this.side;
            },
            set: function (v) {
                this.side = Math.sqrt(v);
            }
        }
    }
});
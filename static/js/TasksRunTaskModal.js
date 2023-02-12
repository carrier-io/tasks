const TasksRunTaskModal = {
    data() {
        return {
            isLoading: false,
            testParams: [],
        }
    },
    mounted() {
        const vm = this;
        $("#RunTaskModal").on("show.bs.modal", function (e) {
            vm.fetchParameters().then((data) => {
                console.log(data)
            })
        });
    },
    methods: {
        async fetchParameters() {
            const res = await fetch (`/api/v1/tasks/tasks/${this.session}?get_parameters=true`,{
                method: 'GET',
            })
            return res.json();
        },
    },
    template: `
    <div class="modal modal-base fixed-left fade shadow-sm" tabindex="-1" role="dialog" id="RunTaskModal" xmlns="http://www.w3.org/1999/html">
            <div class="modal-dialog modal-dialog-aside" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="row w-100">
                            <div class="col">
                                <h2>Run Task</h2>
                            </div>
                            <div class="col-xs d-flex">
                                <button type="button" class="btn  btn-secondary mr-2" data-dismiss="modal" aria-label="Close">
                                    Cancel
                                </button>
                                <button type="button" 
                                    class="btn btn-basic d-flex align-items-center"
                                    >Run<i v-if="isLoading" class="preview-loader__white ml-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="section">
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}
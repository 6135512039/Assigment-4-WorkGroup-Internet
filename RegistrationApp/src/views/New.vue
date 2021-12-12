<template>
    
    <div align = 'center'>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h2>เพิ่มข้อมูลรายวิชา</h2>
        <br>
        <task-form @createOrUpdate="createOrUpdate"></task-form>
    </div>
    
</template>




<script>
    import taskForm from '../components/TaskForm.vue'
    import { api } from '../helpers/Helpers'


export default {
    name:'new-task',
    components: {
        'task-form': taskForm
    },
    methods:{
        createOrUpdate: async function(task){
            const res = await api.createtask(task);           
            this.$router.push(`/tasks/${res._id}`);
            this.$router.push(`/tasks/success`);
        }
    }




}
</script>

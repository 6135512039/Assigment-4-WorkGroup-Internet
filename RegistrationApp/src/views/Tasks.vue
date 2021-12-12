<template>
    <div>
        <h2  align = 'center'>ข้อมูลรายวิชา COE </h2>
        <flash-message></flash-message>
        <div v-if="tasks.length > 0 ">
            <table id="tasks" class = "ui celled compact table">
                <thead>
                    <tr>
                        <th><i></i>รหัสวิชา</th>
                        <th><i></i>รายวิชา</th>
                        <th><i class="trash icon"></i></th>
                    </tr>
                </thead>
                <tr v-for="(task,i) in tasks" :key="i">
                    <td>{{task.task1}}</td>
                    <td>{{task.task2}}</td>
                    <td width="50" class="center aligned" @click.prevent="onDestroy(task._id)">
                        <a :href="`/tasks/${task._id}`">ลบ</a>
                    </td>
                </tr>
            
            </table>

        </div>
        <div class="alert alert-danger" role="alert" v-else>
                ไม่พบข้อมูล
        </div>
    </div>
    
</template>


<script>
import { api } from '../helpers/Helpers'
export default {
    name: 'tasks',
    data() {
        return {
            tasks: []
        }
    },
    methods:{
        async onDestroy(id){
            const sure = window.confirm('Are you sure?');
            if(!sure) return;
            await api.deletetask(id);
        
            this.flash('ลบข้อมูลในตารางเรียบร้อยแล้ว','success')
            const newtasks = this.tasks.filter(task => task._id !== id);
            this.tasks = newtasks;

        }
    },

    async mounted() {
        this.tasks = await api.gettasks();

    }
    
}
</script>
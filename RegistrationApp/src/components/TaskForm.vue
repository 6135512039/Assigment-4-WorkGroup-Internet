<template>
    <form action="#" @submit.prevent="onSubmit">
        <p v-if="errorsPresent" class="error">กรุณากรอกข้อมูล</p>

        <div align = 'center'> 
        <div class="ui labeled input fluid1">
            <div class="ui label">
                <i></i>รหัสวิชา
            </div>
            <input type="text" placeholder="กรอกรหัสวิชา..." v-model="task.task1">
        </div>
        <br><br>
        <div class="ui labeled input fluid1">
            <div class="ui label">
                <i></i>รายวิชา
            </div>
            <input type="text" placeholder="กรอกรายวิชา..." v-model="task.task2">
        </div>
        <br><br>
        
        <button class="btn btn-outline-danger">ลงทะเบียน</button>
        
        </div>
    </form>
</template>

<script>
export default {
    name:'task-form',
    props:{
        task:{
            type:Object,
            required:false,
            default:() =>{
                return {
                    task1:'',
                    task2:''
                }
            }
        }
    },
    data() {
        return {
            errorsPresent: false
        }
    },
    methods: {
        onSubmit:function(){
            if(this.task.task1 ==='' || this.task.task2 === ''){
                this.errorsPresent = true;
            } else{
                this.$emit('createOrUpdate',this.task);
            }
        }
    }
}
</script>

<style  scoped>
    .error {
        color: tomato;
    }
</style>
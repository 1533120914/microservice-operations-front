<template >
    <div class="content" >
        <Login />  
    </div>
</template>

<script setup>
import Login from '../components/layout/login.vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const go = () => router.push('/home')

onMounted(() => {

})
</script>
<style>




.content{
    background-image: url('src/components/icons/loginBackgroud.jpg');
    height: 100vh;
    display:flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}
</style>

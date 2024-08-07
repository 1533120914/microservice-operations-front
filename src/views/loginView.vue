<template >
    <div class="content" >
        <Login />  
    </div>
</template>

<script setup>
import Login from '../components/layout/login.vue';

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

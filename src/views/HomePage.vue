<template>
    <h1>{{TestText}}</h1>
    <button @click=sendMsg>点击按钮发送</button>
 </template>
 <script>
 import { ref,watch,computed,onMounted,getCurrentInstance } from 'vue';
 export default{
   props:['TestText'],
   setup(props){
     let count=ref(0);
     const {proxy}=getCurrentInstance();
     const sendMsg=()=>{
         proxy.$http
         .get('/posts')
         .then((res)=>{
           console.log(res);
           console.log(`文章数量为${res.amount}`);
         })
     }
     return {
       sendMsg
     }
   }
 }
     
 </script>
 <style scoped>
 
 </style>
 
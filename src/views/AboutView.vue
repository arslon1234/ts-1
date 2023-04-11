<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-3">
        <div class="card">
          <div class="card-header">
            <h1 class="text-center">Login</h1>
          </div>
          <div class="card-body">
            <form>
             <input type="text" v-model="login.username" class="form-control my-2" placeholder="Username...">
             <input type="password" v-model="login.password" class="form-control my-2" placeholder="Password...">
           </form>
          </div>
          <div class="card-footer">
            <button class="btn btn-success" @click="send">send</button>
          </div>
        </div>
      </div>
    </div>
 </div>
</template>


<script lang="ts" setup>
import type { IAuth } from '@/interface';
import axios, { AxiosResponse } from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const login:IAuth = reactive({
  username:"",
  password:""
})
const send =()=>{
  axios.post('https://ravshandev.pythonanywhere.com/api/login/',{
    username: login.username,
    password:login.password,
  }).then((res:AxiosResponse)=>{
    if(res.status === 200){
      router.push({name: 'main'})
    }
  })
}
</script>

<style scoped>

</style>

<template>
 <div class="container">
    <div class="row">
      <div class="col-md-6 offset-3">
        <div class="card">
          <div class="card-header">
            <h1 class="text-center">Register</h1>
          </div>
          <div class="card-body">
            <form>
             <input type="text" v-model="register.username" class="form-control my-2" placeholder="Username...">
             <input type="password" v-model="register.password" class="form-control my-2" placeholder="Password...">
             <input type="password" v-model="register.password2" class="form-control my-2" placeholder="Password confirm...">
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

<script setup lang="ts">
import type { IAuth } from '@/interface';
import { reactive } from 'vue';
import axios, { AxiosResponse } from 'axios'
import { useRouter } from 'vue-router';
const router = useRouter()
const register:IAuth = reactive({
  username:"",
  password:"",
  password2:""
})
const send =()=>{
  axios.post('https://ravshandev.pythonanywhere.com/api/register/',{
    username: register.username,
    password:register.password,
    password2: register.password2
  }).then((res:AxiosResponse)=>{
    console.log(res.status)
    if(res.status === 201){
      router.push({name: 'about'})
    }
  })
}
</script>

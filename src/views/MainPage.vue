<template>
  <div>
    <p v-for="(item,index) in data" :key="index">{{ item.title }}</p>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { IPosts } from '@/interface';
import axios, { AxiosResponse } from "axios";

const data:any = ref([])
const arr = ref(data)
const getPosts:any =async()=>{
    await axios.get('https://jsonplaceholder.typicode.com/posts').then((res: AxiosResponse)=>{
        data.value = res.data
    })
}
getPosts()
</script>

<style>

</style>
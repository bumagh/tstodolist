import {defineStore} from 'pinia'
import axios from 'axios'
type todoItem =  {
        id:number
        name:string
}
type todoRes ={
    data:{
        channels:todoItem[]
    },
    message:string
}
export default defineStore('todolist',{
    state(){
        return {
            list:[] as todoItem[]
        }
    },
    actions:{
        async getList(){
            const res = await axios.get<todoRes>('http://geek.itheima.net/v1_0/channels')
            this.list = res.data.data.channels
        }
    },
    getters:{}
})
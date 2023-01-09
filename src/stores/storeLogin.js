import { defineStore } from "pinia";
export const useLoginStore = defineStore("login", {
    state:() => {
        return{
            isLogin : false
        }
    },
    actions:{
        loginCheck(){
            if(localStorage.access_token){
                this.isLogin = true
            }
        },
        login(){
            this.isLogin = true
            localStorage.setItem("access_token", "access_token")
            this.$router.push('/')
            Swal.fire({
                icon: "success",
                title: "Welcome!",
                showConfirmButton: false,
                timer: 1500,
              });
        },
        logout(){
            this.isLogin = false
            localStorage.clear()
            this.$router.push('/login')
            Swal.fire({
                icon: "success",
                title: "Good Bye!",
                showConfirmButton: false,
                timer: 1500,
              });
        }
    }
})
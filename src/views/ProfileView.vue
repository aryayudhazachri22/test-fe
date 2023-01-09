<script>
import { useLoginStore } from "../stores/storeLogin";
import { mapActions } from 'pinia';
export default {
  name: "Profile",
  methods:{
    ...mapActions(useLoginStore, ["loginCheck"])
  },
  created(){
    this.loginCheck()
  }
};
</script>

<template>
  <div class="container profile">
    <div class="card text-center mt-5">
      <div class="card-header">Your Profile</div>
      <div class="card-body">
        <div class="text-center">
          <img src="../assets/profile.jpg" class="rounded" width="150px" />
        </div>
        <h5 class="card-title mt-2">Arya Yudha Zachri</h5>
        <h6>Junior Software Engineer</h6>
        <p class="card-text">
          Kota Depok, Jawa Barat
        </p>
      </div>
    </div>
  </div>
</template>

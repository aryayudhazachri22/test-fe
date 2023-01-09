<script>
import { useLoginStore } from "../stores/storeLogin";
import { mapActions } from "pinia";
export default {
  name: "Profile",
  methods: {
    ...mapActions(useLoginStore, ["loginCheck"]),
  },
  created() {
    this.loginCheck();
  },
};
</script>

<template>
  <div class="container profile">
    <div class="row">
      <div class="col-7 mx-auto">
        <div class="card text-center mt-5">
          <div class="card-header"><b>Your Profile</b></div>
          <div class="card-body">
            <div class="text-center">
              <img src="../assets/profile.jpg" class="rounded" width="150px" />
            </div>
            <h5 class="card-title mt-2">Arya Yudha Zachri</h5>
            <h6>Junior Software Engineer</h6>
            <p class="card-text">Kota Depok, Jawa Barat</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

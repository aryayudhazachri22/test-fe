<script>
import { useLoginStore } from "../stores/storeLogin";
import { mapActions } from "pinia";
export default {
  name: "Home",
  methods: {
    ...mapActions(useLoginStore, ["loginCheck"]),
  },
  created() {
    this.loginCheck();
  },
};
</script>

<template>
  <div class="container mt-5" style="height: 20vh">
    <div class="card">
      <div class="card-header">Absent</div>
      <div class="card-body">
        <h4 class="status"></h4>
        <h4 class="other"></h4>
        <button class="find-state btn btn-dark">
          Let's Absent! <i class="bi bi-calendar-check"></i>
        </button>
      </div>
    </div>
  </div>
</template>

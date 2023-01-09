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
  }
};
</script>

<template>
  <div class="d-flex text-center" style="height: 20vh">
    <div class="m-auto">
      <h4 class="status"></h4>
      <button class="btn btn-dark">Find My State</button>
    </div>
  </div>
</template>

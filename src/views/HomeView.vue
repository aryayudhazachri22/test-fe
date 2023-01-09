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
  <div class="container mt-5">
    <div class="row">
      <div class="col-7 mx-auto">
        <div class="card">
          <div class="card-header text-center">Absent</div>
          <div class="card-body">
            <h4 class="status text-center"></h4>
            <h4 class="other text-center"></h4>
            <div class="d-flex justify-content-center">
              <button class="find-state btn btn-dark">
                Let's Absent! <i class="bi bi-calendar-check"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

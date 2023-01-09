<script>
import { useLoginStore } from "../stores/storeLogin";
import { mapActions } from 'pinia';
export default {
  name: "ListAbsensi",
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
    <h3>List Attendance</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Name</th>
          <th scope="col">Time</th>
          <th scope="col">Job Title</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Arya Yudha Zachri</td>
          <td>07.00</td>
          <td>Junior Software Engineer</td>
          <td>Mampang, Jakarta Selatan</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Arya Yudha Zachri</td>
          <td>07.20</td>
          <td>Junior Software Engineer</td>
          <td>Mampang, Jakarta Selatan</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

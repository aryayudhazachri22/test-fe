<script>
import { mapActions, mapState } from 'pinia';
import { useLoginStore } from '../stores/storeLogin';
export default {
  name: "Navbar",
  computed:{
    ...mapState(useLoginStore, ["isLogin"])
  },
  methods:{
    ...mapActions(useLoginStore, ["logout"])
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Attendance App</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li v-if="isLogin" class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click.prevent="$router.push('/')"
              >Absent</a
            >
          </li>
          <li v-if="isLogin" class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click.prevent="$router.push('/list-absensi')"
              >List Attendance</a
            >
          </li>
          <li v-if="isLogin" class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click.prevent="$router.push('/profile')"
              >Profile</a
            >
          </li>
          <li v-if="isLogin" class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click.prevent="logout"
              >Logout <i class="bi bi-arrow-bar-right"></i></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

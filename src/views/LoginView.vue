<script>
import { mapActions } from 'pinia';
import { useLoginStore } from '../stores/storeLogin';
export default {
  name: "Login",
  methods:{
    ...mapActions(useLoginStore, ['login']),
    loginHandler(){
        this.login()
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-7 mx-auto">
        <div class="card shadow-lg">
          <div class="card-body">
            <h3>Login</h3>
            <p>Welcome!</p>
            <form action="" method="post" class="mb-3" @submit.prevent="loginHandler">
                <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                name="username"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                name="password"
                class="form-control"
                required
              />
            </div>
            <button
              type="submit"
              class="btn btn-dark me-3"
            >
              Login <i class="bi bi-arrow-bar-right"></i>
            </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link class="nav-link" to="/homepage">Home</router-link>
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link class="nav-link" to="/signup">Signup</router-link>
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link class="nav-link" to="/UserPage">User profile</router-link>
          </li>
          <form class="d-flex" role="search" action="https://www.google.com" method="get">
            <input
              class="form-control me-2"
              type="search"
              name="q"
              placeholder="Search"
              aria-label="Search"
              style="width: 200px; height: 35px;"
            />
            <button class="btn btn-outline-success" type="submit" style="width: 80px; height: 34px;">
              Search
            </button>
          </form>
          <li class="nav-item" v-if="isAuthenticated">
            <router-link class="nav-link" to="/posts">Posts</router-link>
          </li>
          <li class="nav-item" v-if="isAuthenticated">
            <a href="#" class="nav-link" @click.prevent="onLogout()">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isAuthenticated: false, // Change this based on the user's authentication status
      };
    },
    methods: {
      onLogout() {
        // Add your logout logic here
        this.isAuthenticated = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar-nav {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: white;
    color: black;
  }
  
  .nav-item {
    color: black;
    margin: 0 10px;
    border-radius: 10px;
  }
 .nav-item:hover{
    background-color: rgb(94, 218, 243);
 
 }
  
  .d-flex {
    margin-left: 10px; /* Add margin to the left to keep spacing balanced */
  }
  </style>
  
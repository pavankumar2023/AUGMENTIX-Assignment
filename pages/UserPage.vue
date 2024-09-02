<template>
    <div class="userpage">
      <h1>Welcome, Pavan Kumar!</h1>
      <p>this your user profile page.</p>
      <!-- Display user information here -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: 'User', // Replace this with actual user data
        // Other user data properties...
      }
    },
    created() {
      // Fetch user data when component is created
      // this.username = fetchUserData() or similar
    }
  }
  </script>
  
  <style scoped>
  .user {
    text-align: center;
    background-color: rgb(238, 110, 110);
  }
  
  .user h1 {
    text-align: center;
    background-color: rgb(104, 244, 66);

    margin-top: 50px; 
  }
  
  .user p {
    text-align: center;
    margin: 50px;
    width: 100%;
    background-color: black;
  }
  .userpage p1 image{
    width: 10px;

  }
  </style>
  
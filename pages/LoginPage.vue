<template>
    <div class="row">
        <div class="col-md-6 offset-md-0">   
<div>
    <div> 
        <h3> Login </h3>
        <hr />
    </div>
    </div>
    </div>
<form>
     <div class="form-group">
        <label> Email </label>
        <input type= "text" placeholder= "Enter your email" style="width: 300px;" class="form-control"/>
    </div>
    <div class="form-group">
        <label> Password </label>
        <input type="password" placeholder= "Enter your password" style="width: 300px;" class="form-control">
        
        
    </div>
    
    <div class="my-3">
        <button type="submit" class="btn btn-primary">
            Login </button>
</div>
</form>
</div>
</template>

<script>

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      // Login logic...
      // eslint-disable-next-line no-undef
      if (loginSuccessful) {
        this.$router.push('/profile');
      }
    }
  }
}
</script>
  
<template>
  <div> 
    <h3> Signup </h3>
    <hr />
    <form @submit.prevent="signup">
      <div class="form-group">
        <label> First Name </label>
        <input v-model="firstName" type="text" class="form-control" placeholder="First Name" style="width: 300px;"/>

        <label>Last Name </label>
        <input v-model="lastName" type="text" class="form-control" placeholder="Last Name" style="width: 300px;"/>

        <label>Email</label>
        <input v-model="email" type="text" class="form-control" placeholder="Email" style="width: 300px;"/>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" placeholder="Enter your password" style="width: 300px;" class="form-control">
      </div>
      <div class="my-3">
        <button type="submit" class="btn btn-primary">Signup</button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      name: '',
      email: ''
    }
  },
  validations: {
    name: { required },
    email: { required, email }
  },
  methods: {
    submitForm() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        // Form is invalid
      } else {
        // Form is valid, proceed with form submission
      }
    }
  }
}
</script>
  

  
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  },
  validations: {
    firstName: {
      required,
      minLength: minLength(2)
    },
    lastName: {
      required,
      minLength: minLength(2)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    validateInput() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        // Show error messages
      } else {
        // Proceed with form submission
      }
    }
  }
}

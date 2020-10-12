<template>
    <div id="register">
        <v-container>
            <v-row justify="space-around">
                <v-card width="600" elevation="5" shaped>
                    <v-col>
                        <v-card-title>
                            Register
                        </v-card-title>
                        <v-card-text>
                            <form>
                                <v-text-field
                                    v-model="name"
                                    :error-messages="nameErrors"
                                    :counter="20"
                                    label="Name"
                                    required
                                    @input="$v.name.$touch()"
                                    @blur="$v.name.$touch()"
                                >
                                </v-text-field>
                                <v-text-field
                                    v-model="email"
                                    :error-messages="emailErrors"
                                    label="E-mail"
                                    required
                                    @input="$v.email.$touch()"
                                    @blur="$v.email.$touch()"
                                    >
                                </v-text-field>
                                <v-text-field
                                    v-model="phoneNumber"
                                    :error-messages="phoneNumberErrors"
                                    label="Phone Number"
                                    required
                                    @input="$v.phoneNumber.$touch()"
                                    @blur="$v.phoneNumber.$touch()"
                                    >
                                </v-text-field>
                                <v-text-field
                                    v-model="password"
                                    type="password"
                                    :error-messages="passwordErrors"
                                    label="Password"
                                    required
                                    @input="$v.password.$touch()"
                                    @blur="$v.password.$touch()"
                                    >
                                </v-text-field>
                                <v-text-field
                                    v-model="confirmPassword"
                                    type="password"
                                    :error-messages="confirmPasswordErrors"
                                    label="Confirm Password"
                                    required
                                    @input="$v.confirmPassword.$touch()"
                                    @blur="$v.confirmPassword.$touch()"
                                    >
                                </v-text-field>
                                <br>
                                <v-btn
                                    class="mr-4"
                                    @click="submit"
                                >
                                submit
                                </v-btn>
                                <v-btn @click="clear">
                                    clear
                                </v-btn>
                            </form>
                        </v-card-text>
                    </v-col>
                </v-card>
            </v-row>
        </v-container>
    </div>
</template>
<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email, sameAs, numeric, minLength } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(20) },
      email: { required, email },
      phoneNumber: { required, numeric, maxLength: maxLength(10), minLength: minLength(10)},
      password: { required, minLength: minLength(6)},
      confirmPassword: { required, sameAsPassword: sameAs('password') }
    },
    data: () => ({
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    }),
    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 20 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Email must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      phoneNumberErrors () {
        const errors = []
        if (!this.$v.phoneNumber.$dirty) return errors
        !this.$v.phoneNumber.numeric && errors.push('Phone Number must be number')
        !this.$v.phoneNumber.maxLength && errors.push('Phone Number must be exact 10 digits long')
        !this.$v.phoneNumber.minLength && errors.push('Phone Number must be exact 10 digits long')
        !this.$v.phoneNumber.required && errors.push('Phone Number is required')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.minLength && errors.push('Password must be atleast 6 characters long')
        !this.$v.password.required && errors.push('Password is required')
        return errors
      },
      confirmPasswordErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.confirmPassword.sameAsPassword && errors.push('Confirm Password must be same as password')
        !this.$v.confirmPassword.required && errors.push('Confirm Password is required')
        return errors
      },
    },
    methods: {
        async submit () {
            this.$v.$touch()
            console.log(this.$v.$invalid)
            if (!this.$v.$invalid) {
                try {
                    const userObj = {
                        name: this.name,
                        email: this.email,
                        phoneNumber: this.phoneNumber,
                        password: this.password
                    }

                    console.log(userObj)

                    await this.$store.dispatch('User/register', userObj)
                } catch (err) {
                    // Have to handle error via alert message
                    console.log(err)
                }
            }
        },
        clear () {
            this.$v.$reset()
            this.name = ''
            this.email = ''
        },
    },
  }
</script>

<style>

</style>
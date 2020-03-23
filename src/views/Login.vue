<template>
    <div>

        <div class="container">
            <h1 v-if="notification.error !== null" class="notification is-warning mt-5 mx-5">
                {{this.notification.error}} </h1>
            <h1 v-if="notification.success !== null" class="notification is-success mt-5 mx-5">
                {{this.notification.success}} </h1>


            <h1 class="is-size-2 is-size-5-touch py-3">Login Now</h1>

            <div class="columns is-mobile">
                <div class="column  is-7-desktop is-offset-3-desktop ">

                    <div class="mx-5 has-background-white px-3 py-4 my-5">
                        <div class="has-text-left">
                            <label class="has-text-left">Email:</label>

                            <div class="control">
                                <input v-model="form.email" class="input" type="email"
                                       placeholder="e.g. alexsmith@gmail.com">
                            </div>
                        </div>
                        <br>
                        <div class="has-text-left">
                            <label class="has-text-left">Password:</label>
                            <div class="control">
                                <input v-model="form.password" class="input" type="password"
                                       placeholder="e.g Alex Smith">
                            </div>
                        </div>

                        <div class="my-5">

                            <button @click="login" class="button is-success mx-3"> Login</button>
                            <br>
                            <p>To become a member, please use contact form</p>
                            <router-link :to="{name:'contact'}"> Contact Us</router-link>

                        </div>
                    </div>
                </div>
            </div>


            <div class="">
                <div class="  has-background-white ">

                </div>
            </div>


        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                notification: {
                    success: null,
                    error: null
                },
                form: {
                    email: '',
                    password: '',
                }
            }
        },


        methods: {

            async login() {
                function navigate(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                try {
                    const {data} = await axios.post('/api/user/login', this.form);

                    this.notification.success = `welcome back`;
                    localStorage.setItem('token', data.token);
                    await navigate(3000);
                    this.$router.push({name: 'allTraders'});

                } catch (e) {

                    this.notification.error = 'Invalid Details'
                }

            },


        },

    }
</script>

<style scoped>


</style>

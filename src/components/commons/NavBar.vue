<template>
    <div id="nav">
        <!--     top header-->
        <div class="has-background-primary py-2">

            <div class="columns">
                <div class="column">
                    item one
                </div>
                <div class="column">
                    item one
                </div>

            </div>
        </div>
        <!--     top header-->

        <!--main nav bar-->
<div >
    <div class="container">
        <nav class="navbar py-3 mx-2" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">

                <router-link :to="{name:'home'}" class="navbar-brand">

                    <img class="logo" src="/img/logo.png">

                    <span class="navbar-item">Company name</span></router-link>


                <a @click="toggle" role="button" :class="{'is-active':isActive}" class=" navbar-burger burger"
                   aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" :class="{'is-active':isActive}" class="navbar-menu">
                <div class="navbar-start">

                    <router-link :to="{name:'home'}" class="navbar-item">
                        Home
                    </router-link>

                    <router-link :to="{name:'service'}" class="navbar-item">
                        Services
                    </router-link>

                    <router-link :to="{name:'about'}" class="navbar-item">
                        About
                    </router-link>

                    <div class=" navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            Components
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                sliders
                            </a>
                            <a class="navbar-item">
                                Testimonials
                            </a>

                            <router-link :to="{name:'tabs'}" class="navbar-item">
                                Tab contents
                            </router-link>

                            <a class="navbar-item">
                                Forms
                            </a>
                            <hr class="navbar-divider">
                            <router-link class="dropdown-item" to="/setting">Settings</router-link>

                            <a class="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>

                    <router-link class="navbar-item" :to="{name:'setting'}">Settings</router-link>
                    <router-link class="navbar-item" :to="{name:'contact'}">Contact</router-link>


                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <router-link :to="{name:'login'}" class="button is-light">
                                Log in
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    </div>
</div>
        <!--main nav bar-->


    </div>
</template>

<script>
    export default {
        data() {
            return {
                isActive: false
            }
        },

        methods: {
            toggle() {
                this.isActive = !this.isActive;
            }
        }
    }
</script>

<style lang="scss" scoped>


    .logo {
        height: 60px;
    }

    #nav {


        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
        border-bottom: #e3edf4 solid thin;
    }


</style>

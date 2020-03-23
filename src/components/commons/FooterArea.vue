<template>
    <div class="">
        <div class="container">
            <div class="columns py-4">

                <div class="column">
                    <img class="logo" src="/img/logo.png">

                    <h4 class="text-capitalize pt-3"> Kick Start you Project</h4>
                    <p>
                        We’re a team of experienced designers developers. We can combine modern designs with clean,
                        functional and high-performance code to produce stunning websites.
                    </p>
                    <a href="https://www.npmjs.com/package/vue-bulma-accordion#example" target="_blank">Use this accordion</a>

                </div>


                <div class="column pt-5">
                    <h4 class="is-size-5 font-weight-bold">Useful link</h4>

                    <p>Faq</p>
                    <router-link :to="{name:'components'}">All components</router-link>
                    <p>Services</p>
                    <p>About</p>
                    <p>Testimonials</p>
                    <p>Pricing</p>
                    <router-link CLASS="text-danger" :to="{name:'setting'}">Setting</router-link>


                </div>

                <div class="column pt-5">
                    <h4 class="is-size-5 font-weight-bold">Components</h4>

                    <ul>
                        <li>
                            <router-link :to="{name:'tabs'}">Tabs</router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'accordion'}">Accordions</router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'slider'}">SlideShow</router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'testifyG'}">Testimonial</router-link>
                        </li>

                        <li>
                            <router-link :to="{name:'faqPage'}">Frequently Asked</router-link>

                        </li>
                        <li>
                            <router-link :to="{name:'quickTips'}">QuickTips</router-link>

                        </li>

                    </ul>

                    <p>Forms</p>

                </div>
            </div>

        </div>

    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .logo {
        height: 60px;
    }

    p {
        color: #040b07;
    }
</style>

<template>

    <div class="container">
        <div class="columns">
            <div class="column">

                <h3 class="has-background-primary">Theme main Colors</h3>


                <div class="row">
                    <div v-for="color in colors" :key="color" class="col-6">
                        <div v-bind:class="color.name" id="box"></div>
                        <p class="text-left text-capitalize">{{color.label}}</p>

                    </div>

                </div>


                <div class="about">


                </div>
            </div>
            <div class="column">
                <h3>
                    Reference Websites
                </h3>

                <ul class="text-left">
                    <li> <a href="http://netizensstore.com/netbizz_theme/netbizz_HTML/multipage_1/faq.html" target="_blank">
                        Table design
                    </a>
                    </li>
                    <li>  <a href="http://quomodosoft.com/html/build/" target="_blank">
                        Construction Website
                    </a></li>
                    <li>
                        <a href="https://sendgrid.com/solutions/email-api/" target="_blank">
                            Sendgrid
                        </a></li>
                    <li> <a href="https://wp.xpeedstudio.com/blo/faq/" target="_blank">
                        FAq
                    </a></li>
                </ul>





            </div>
        </div>


    </div>


</template>

<script>
    export default {

        data() {
            return {
                colors: [
                    {
                        name: "has-background-primary",
                        label: "primary",
                    },
                    {
                        name: "has-background-danger",
                        label: "danger",
                    },
                    {
                        name: "has-background-warning",
                        label: "warning",
                    },
                    {
                        name: "has-background-info",
                        label: "info",
                    },
                    {
                        name: "has-background-dark",
                        label: "dark",
                    },
                    {
                        name: "has-background-light",
                        label: "light",
                    },
                    {
                        name: "has-background-success",
                        label: "success",
                    },

                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

    #box {
        height: 100px;
        width: 100px;
    }

    #text {
        background-color: #FFA500;
    }

</style>




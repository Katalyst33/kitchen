<template>
    <div>


        <div class="columns">
            <div class="column">
                <p>
                    this is a computed class
                </p>
                <div>
                    <h1 :class="classObject" class=" font-weight-bold">i am a Slider</h1>
                </div>

                <div>
                    <p class="space">spacer</p>
                </div>
                <button @click="bigText" class="button is-info">Big Text</button>
                <br>
                <br>
                <button @click="colorText" class="button is-danger">Color Text</button>
            </div>
            <div class="column"></div>
            <div class="column"></div>
        </div>

    </div>
</template>

<script>
    export default {

        data() {
            return {

                isBig: false,
                error: false

            }
        },

        computed: {

            classObject() {
                return {
                    'has-text-danger': this.error,
                    'is-size-1 ': this.isBig

                }
            }
        },

        methods: {
            bigText() {
                this.isBig = !this.isBig;

            },
            colorText() {
                this.error = !this.error;

            }

        }


    }
</script>

<style scoped>

    .space {
        height: 100px;
    }

</style>

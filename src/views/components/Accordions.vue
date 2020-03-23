<template>
    <div>
        <h1 class="is-size-1">I am an accordion</h1>

        <div class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <template v-for="(faq1, faqIndex) in faq1s">
                            <div :key="faqIndex" class="pt-3">
                                <article class="message" :class="accordionClasses">
                                    <div class="message-header" @click="toggleAccordion(faqIndex)">
                                        {{faq1.question}}
                                        <span class="delete" aria-label="delete"></span>
                                    </div>
                                    <div class="message-body">
                                        <div v-if="currentFaq === faqIndex ">
                                            {{faq1.answer}}
                                        </div>
                                    </div>


                                </article>
                            </div>
                        </template>


                    </div>
                    <div class="column">

                        <h1 class="is-closed">hey css</h1>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from "./component_data";

    export default {
        data() {
            return {
                isOpen: true,
                faq1s: data.faq1s,
                currentFaq: 'Qst1',

            }
        },

        methods: {
            toggleAccordion(faqIndex) {

                if (this.isOpen) {
                    this.isOpen = !this.isOpen;
                }
                if(!this.isOpen) {
                    this.isOpen = !this.isOpen;
                }else {
                    this.isOpen = !this.isOpen;

                }

           /*
               */
                this.currentFaq = faqIndex;

                {
                }
            }
        },
        computed: {
            accordionClasses() {
                return {
                    'is-closed': !this.isOpen,
                    'is-info': this.isOpen,
                    'is-dark': !this.isOpen

                };
            }
        },


    }
</script>

<style scoped>

    .message {
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
    }

    .message-header {
        cursor: pointer;
    }


    .message-body {
        padding: 0;
        max-height: 20em;
        overflow: hidden;
        transition: 0.9s ease all;
    }


    .is-closed .message-body {
        max-height: 0;


    }

    .message-content {
        padding: 20px;
    }


</style>

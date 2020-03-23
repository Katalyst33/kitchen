<template>
    <div id="app">




        <div >

            <FAQ    class="faqs "
                    v-for="(faq, i) in faqs"
                    :faq="faq"
                    :index="i"
                    :key="i"
                    :open="faq.open"
                    @toggleOpen="toggleOpen"
            />
        </div>
    </div>
</template>

<script>
    import FAQ from "../../components/FAQ";

    export default {
        name: 'app',
        components: {
            FAQ
        },
        data () {
            return {
                faqs: [
                    {
                        question: "Who is the best Superhero?",
                        answer: "I'm not sure but we love him 3000",
                        open: false
                    },
                    {
                        question: "What is Goku's form called with White Hair?",
                        answer: "Mastered Ultra Instinct",
                        open: false
                    },
                    {
                        question: "Have you liked & subscried yet?",
                        answer: "YES",
                        open: false
                    }
                ]
            }
        },
        methods: {
            toggleOpen: function (index) {
                this.faqs = this.faqs.map((faq, i) => {
                    if (index === i) {
                        faq.open = !faq.open;
                    } else {
                        faq.open = false;
                    }

                    return faq;
                });
            }
        }
    }
</script>

<style>





    .faq {
        display: block;
        width: 100%;
        max-width: 500px;
        margin:  auto;
    }

    .faq .message-header {
        position: relative;
        font-size: 20px;
        transition: all 0.4s linear;
        cursor: pointer;
    }

    .faq .message-header::after {
        content: '';

        position: absolute;
        top: 50%;
        right: 0px;
        transform: translateY(-50%) rotate(0deg);

        width: 30px;
        height: 30px;
        /*background-image: url('./arrow-down-mint.svg');*/
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;

        transition: all 0.2s linear;
    }

    .faq.open .message-header::after {
        transform: translateY(-50%) rotate(90deg);
    }
    .faq .message-body {
        font-size: 18px;
        opacity: 0;
        max-height: 1px;
        overflow-y: hidden;
        transition: all 0.2s linear;
    }
    .faq.open .message-body {
        opacity: 1;
        max-height: 1000px;
    }
</style>

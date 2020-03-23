<template>
    <div>
        <SliderPagination/>
        <SliderNormal/>
        <SliderProgress/>

        <br>
        <p>Api docummentation can be found here <span><a href="https://swiperjs.com/api/#navigation" target="_blank">here</a></span></p>
<p>Slideshow Github repo can be found here <a href="https://github.com/surmon-china/vue-awesome-swiper" target="_blank">github</a></p>
        <br>
        <div class="columns">
            <div class="column mx-3">
                <h1 class="has-text-weight-bold">Buttons and Colors</h1>
           <p class="has-text-left">Slide buttons are svg, edit with illustrator to change colors.</p>
            <p>
                Progress bar colors can also be changed
            </p>
            </div>
            <div class="column">
                <h1 class="has-text-weight-bold">Auto Play</h1>

                <p>You can set autoplay speed in data attribute</p>
            </div>
            <div class="column">
                <p>Text can be added on every image</p>
            </div>
        </div>


    </div>
</template>

<script>
    import SliderPagination from "../../components/commons/slider/SliderPagination";
    import SliderProgress from "../../components/commons/slider/SliderProgress";
    import SliderNormal from "../../components/commons/slider/SliderNormal";

    export default {
        components: {
            SliderProgress,
            SliderNormal,
            SliderPagination
        },

    }
</script>

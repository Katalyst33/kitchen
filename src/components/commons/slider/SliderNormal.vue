<template>
    <div>
        <div>
            <img src="../../../../public/img/arrow/arrow.svg">
            <div class="md-subhead">
                <h1 class="is-size-3 has-text-success">I am a Perfect Slide Show !!</h1>

            </div>


        </div>
        <div>
            <!-- swiper -->
            <swiper :options="swiperOption">
                <swiper-slide>
                    <img src="../../../../public/img/slide/camera.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img src="../../../../public/img/slide/fireworks.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img src="../../../../public/img/slide/food.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img src="../../../../public/img/slide/snow-tree.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img src="../../../../public/img/slide/woman-ballon.jpg">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
<!--                <i class="fas fa-chevron-left"></i>-->
                <div class="swiper-button-prev" slot="button-prev">

                </div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                swiperOption: {
                    autoplay: {
                        delay: 1000,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
            }
        },

    }
</script>

<style scoped>

    .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
        background-image: url('../../../../public/img/arrow/angle-right-solid.svg');
        right: 10px;
        left: auto;
    }

    .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
        background-image: url('../../../../public/img/arrow/angle-left-solid.svg');
        left: 10px;
        right: auto;
    }
</style>

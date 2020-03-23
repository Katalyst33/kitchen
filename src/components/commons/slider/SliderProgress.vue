
<template>
    <div>
        <div>
            <div class="md-subhead mx-3">
                <h1 class="is-size-4 font-weight-bold">Slide show with Progress Pagination</h1>
               <p class="has-text-grey">The Icons and progress bar  colors are editable from css</p>
            </div>

        </div>
        <div>
            <!-- swiper -->
            <swiper :options="swiperOption">
                <swiper-slide>
                    <div>
                        <div class="centered is-size-1 has-text-light">LOOK AT ME NOW</div>
                        <img src="../../../../public/img/slide/camera.jpg">

                    </div>
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

                <div class="swiper-button-prev" slot="button-prev"></div>
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
                        delay: 5000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'progressbar'
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        }
    }
</script>

<style>
    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
        background: deeppink;
    }
</style>

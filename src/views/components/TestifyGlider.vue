

<!--start here-->




<template>
    <div>
        <div>
        </div>
        <div>
            <!-- swiper -->
            <swiper :options="swiperOption">
                <swiper-slide>
                    <!--               -->
                    <img src="../../../public/img/slide/camera.jpg">


                </swiper-slide>
                <swiper-slide>
                    <img src="../../../public/img/slide/fireworks.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img src="../../../public/img/slide/food.jpg">
                </swiper-slide>
                <swiper-slide>

                    <img src="../../../public/img/slide/snow-tree.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img src="../../../public/img/slide/woman-ballon.jpg">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>

                <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>

                <div class="swiper-scrollbar" slot="scrollbar"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOption: {
                    slidesPerView: 3,
                    autoplay: {
                        delay: 1000,
                    },
                    scrollbar: {
                        el: '.swiper-scrollbar',
                        hide: true
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .swiper-slide {
        width: 250px;
    }

    .swiper-scrollbar-drag {
        height: 100%;
        width: 100%;
        position: relative;
         background: rgb(255, 108, 69);
        border-radius: 10px;
        left: 0;
        top: 0;
    }
</style>

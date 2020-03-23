<template>
    <div>
        <div>
            <div class="md-subhead">
                <span>Slid show with Pagination</span>

            </div>
            <div class="md-icon-button"
                       target="_blank"
                       href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/07-pagination-custom.vue">

            </div>
        </div>
        <div>
            <!-- swiper -->
            <swiper :options="swiperOption">
                <swiper-slide>
                    <div>
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

                <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>

            </swiper>

            <!-- swiper -->



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
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        renderBullet(index, className) {
                            return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
                        }
                    }
                }
            }
        }
    }
</script>

<style>
    .swiper-pagination-bullet-custom {
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        color: #ff3653;
        opacity: 1;
        background: rgba(255, 115, 62, 0.25);
    }
    .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
        color: #fff;
        background: #FF520E;
    }
</style>

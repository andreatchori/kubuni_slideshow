<template>
    <main class="page-content left-vertical-header">
        <div class="kubuni-slider-area">
            <div class="fullscreen-slider-activation swiper-dot-vertical-center">
                <div class="kubuni-element-carousel">
                    <swiper :options="swiperOption">
                        <div class="swiper-slide" v-for="slider in sliders" :key="slider.id">
                            <div class="slide-portfolio-single fullscreen d-flex align-items-center" :style="{ backgroundImage: `url(${slider.bgImage})` }">
                                <div class="content">
                                    <h5 class="heading heading-h5 text-white">{{ slider.category }}</h5>
                                    <h2 class="heading heading-h2 text-white">
                                        <n-link :to="slider.btnUrl">{{ slider.heading }}</n-link>
                                    </h2>
                                    <div class="slide-btn">
                                        <n-link :to="slider.btnUrl" class="kubuni-btn bk-btn-white-border btn-sd-size btn-rounded space-between">
                                            View Project
                                        </n-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        data () {
            return {
                swiperOption: {
                    spaceBetween: 20,
                    loop: true,
                    speed: 1000,
                    mousewheel: true,
                    direction: 'vertical',
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                },

                sliders: [
                    {
                        id: 1,
                        category: "Digital",
                        heading: "Enchanting Portrait Hacks",
                        btnUrl: "/",
                        bgImage: "/img/bg--kubuni-3.png"
                    },
                    {
                        id: 2,
                        category: "Marketing",
                        heading: "Graphic Design Decoding",
                        btnUrl: "/",
                        bgImage: "/img/bg--kubuni-2.png"
                    },
                    {
                        id: 3,
                        category: "Digital",
                        heading: "Enchanting Portrait Hacks",
                        btnUrl: "/",
                        bgImage: "/img/bg--kubuni-1.png"
                    },
                    {
                        id: 4,
                        category: "Marketing",
                        heading: "Graphic Design Decoding",
                        btnUrl: "/",
                        bgImage: "/img/bg--kubuni-4.png"
                    },
                    {
                        id: 5,
                        category: "Digital",
                        heading: "Enchanting Portrait Hacks",
                        btnUrl: "/",
                        bgImage: "/img/bg--kubuni-5.png"
                    },
                    {
                        id: 6,
                        category: "Marketing",
                        heading: "Graphic Design Decoding",
                        btnUrl: "/",
                        bgImage: "/img/bg--kubuni-6.png"
                    },
                ]
            }
        }
    };
</script>

<style lang="scss">
    .fullscreen-slider-activation {
        .swiper-wrapper {
            max-height: 100vh;
        }
    }
</style>
<template>
    <div class="vertical-slider-area">
        <div class="kubuni-element-carousel swiper-custom-arrow swiper-arrow-hover">
            <swiper :options="swiperOption">
                <div class="swiper-slide" v-for="slider in sliders" :key="slider.id">
                    <div class="single-vertical-slide fullscreen bg-cover d-flex align-items-end" :style="{ backgroundImage: `url(${slider.bgImage})` }">
                        <div class="slide-inner">
                            <div class="info">
                                <h2 class="heading heading-h2 text-white">
                                    <n-link to="/portfolio/portfolio-details">{{ slider.heading }}</n-link>
                                </h2>
                                <div class="category">{{ slider.category }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper>

            <!-- slider arrow navigation -->
            <button class="swiper-btn swiper-btn-prev">
                <i class="ion ion-ios-arrow-back"></i>
            </button>
            <button class="swiper-btn swiper-btn-next">
                <i class="ion ion-ios-arrow-forward"></i>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                swiperOption: {
                    loop: true,
                    speed: 1000,
                    autoplay: {
                        delay: 5000
                    },
                    navigation: {
                        nextEl: '.swiper-btn-next',
                        prevEl: '.swiper-btn-prev'
                    },
                    // Responsive breakpoints
                    breakpoints: {
                        1200:{
                            slidesPerView : 4
                        },
                        992:{
                            slidesPerView : 3
                        },
                        768:{
                            slidesPerView : 2
                        }
                    }
                },

                sliders: [
                    {
                        id: 1,
                        heading: "B-sharp High-end Audio",
                        category: "Digital",
                        bgImage: "/img/slider/vertical-slide/vertical-slide-1.jpg"
                    },
                    {
                        id: 2,
                        heading: "Measure Digital Progress",
                        category: "Digital",
                        bgImage: "/img/slider/vertical-slide/vertical-slide-2.jpg"
                    },
                    {
                        id: 3,
                        heading: "Graphic Design Decoding",
                        category: "Digital",
                        bgImage: "/img/slider/vertical-slide/vertical-slide-3.jpg"
                    },
                    {
                        id: 4,
                        heading: "Sharing Creative Process",
                        category: "Digital",
                        bgImage: "/img/slider/vertical-slide/vertical-slide-4.jpg"
                    },
                    {
                        id: 5,
                        heading: "Graphic Design Decoding",
                        category: "Digital",
                        bgImage: "/img/slider/vertical-slide/vertical-slide-5.jpg"
                    }
                ]
            }
        }
    };
</script>
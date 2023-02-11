<template>
    <div class="kubuni-testimonial-area" :class="addClass">
        <div class="container">
            <div class="row">
                <div class="col-12 pb--30">
                    <div class="kubuni-element-carousel">
                        <swiper :options="swiperOption">
                            <div class="swiper-slide" v-for="testimonial in data.testimonials" :key="testimonial.id">
                                <TestimonialItem :testimonial="testimonial" />
                            </div>
                        </swiper>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination swiper-dots-bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '@/data/testimonial.json';

    export default {
        components: {
            TestimonialItem: () => import('./TestimonialList')
        },

        props: ["addClass"],

        data () {
            return {
                data,
                swiperOption: {
                    spaceBetween: 20,
                    autoplay: false,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    breakpoints: {

                        992:{
                            slidesPerView : 3
                        },

                        576:{
                            slidesPerView : 2
                        },

                        300:{
                            slidesPerView : 1
                        }
                    }
                }
            }
        }
    };
</script>
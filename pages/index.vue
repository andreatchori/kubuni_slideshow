<template>

    <div class="main-container">
        <Header @togglenav="navOpen = !navOpen" />
        <MobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
        <Hero />
    </div>

</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            MobileMenu: () => import('@/components/MobileMenu'),
            Hero: () => import('@/components/Hero')
        },
        data() {
          return {
            navOpen: false
          }
        },
        head() {
          return {
              title: 'Kubuni - Creative Template'
          }
        }
    };
</script>
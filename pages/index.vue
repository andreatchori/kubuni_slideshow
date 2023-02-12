<template>

    <div class="main-container">
        <Header @togglenav="navOpen = !navOpen" />
        <Hero />
    </div>

</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            Hero: () => import('@/components/Hero')
        },

        head() {
          return {
              title: 'Kubuni - Creative Portfolio Template'
          }
        }
    };
</script>
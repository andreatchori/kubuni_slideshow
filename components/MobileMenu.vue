<template>
    <div class="popup-mobile-menu popup-mobile-visiable">
        <div class="mobile-menu-overlay" @click="$emit('togglenav')"></div>
        <div class="inner">
            <div class="mobileheader">
                <div class="logo">
                    <n-link to="/">
                        <img src="logo--kubuni.png" alt="brand logo">
                    </n-link>
                </div>
                <button class="mobile-close" @click="$emit('togglenav')"></button>
            </div>
            <div class="menu-content">
                <MobileNavigation />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            MobileNavigation: () => import('@/components/MobileNavigation'),
        },
    };
</script>
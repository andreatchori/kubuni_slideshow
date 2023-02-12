<template>
    <header class="kb_left-vertical-header">
        <div class="side-header-inner">
            <div class="header-wrap">
                <div class="header-top">
                    <div class="branding">
                        <n-link to="/">
                            <img src="logo--kubuni.png" alt="brand logo">
                        </n-link>
                    </div>
                </div>
                <div class="header-center d-none d-xl-block">
                    <div class="vertical-menu-wrapper header-default black-logo--version secondary-font">
                        <!-- Start Menu -->
                        <div class="mainmenu-wrapper d-none d-lg-block">
                            <Navigation />
                        </div>
                        <!-- End Menu -->
                    </div>
                </div>
                <div class="header-bottom">
                    <div class="inner">
                        <ul class="social-icon icon-size-medium text-left tooltip-layout text-dark d-none d-sm-block">
                            <li class="facebook">
                                <a href="https://www.facebook.com/" target="_blank" class="link hint--bounce hint--top hint--dark" aria-label="Facebook">
                                    <i class="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li class="twitter">
                                <a href="https://twitter.com/" target="_blank" class="link hint--bounce hint--top hint--dark" aria-label="Twitter">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li class="instagram">
                                <a href="https://www.instagram.com/" target="_blank" class="link hint--bounce hint--top hint--dark" aria-label="Instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                        <div class="copyright mt--30 d-none d-xl-block">
                            <p class="bk_pra secondary-font">© Kubuni 2023. <br> All Rights Reserved.</p>
                        </div>

                        <!-- Start Hamberger -->
                        <div class="manu-hamber popup-mobile-click d-block d-xl-none gray-version d-block d-xl-none" @click="$emit('togglenav')">
                            <div>
                                <i></i>
                            </div>
                        </div>
                        <!-- End Hamberger -->

                    </div>      
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        components: {
            Navigation: () => import('@/components/Navigation'),
        },
    };
</script>
<template>
    <nav class="page_nav">
        <ul class="mainmenu">
            <li class="lavel-1 with--drop slide--megamenu">
                <n-link to="/">
                    <span>Home</span>
                </n-link>
            </li>

            <li class="lavel-1 with--drop slide--megamenu">
                <n-link to="/">
                    <span>Pages</span>
                </n-link>
            </li>

            <li class="lavel-1 with--drop slide--megamenu">
                <n-link to="/">
                    <span>Portfolio</span>
                </n-link>
            </li>

            <li class="lavel-1 with--drop slide--megamenu">
                <n-link to="">
                    <span>Elements</span>
                </n-link>
            </li>

            <li class="lavel-1 with--drop slide--megamenu">
                <n-link to="/">
                    <span>Blog</span>
                </n-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .mega__list {
        display: flex;
        li {
            flex-basis: 25%;
        }
    }
</style>
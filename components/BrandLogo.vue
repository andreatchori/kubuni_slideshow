<template>
    <div class="brand-wrapper">
        <div class="brand__list brand-default brand-style--2">
            <div class="brand" v-for="brand in data" :key="brand.id">
                <n-link to="">
                    <img :src="brand.logo" alt="logo image">
                </n-link>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../data/brandLogo.json';
    
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>
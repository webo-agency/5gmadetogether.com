<template>
    <div class="parallax-container">
        <div class="inset-0 absolute" :style="parallaxStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EffectParallax',
    data() {
        return {
            scrollY: 0,
        };
    },
    computed: {
        parallaxStyle() {
            const offsetY = this.scrollY / 5;
            return {
                transform: `translateY(${offsetY}px)`,
            };
        },
    },
    methods: {
        handleScroll() {
            this.scrollY = window.scrollY;
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>

<style scoped>
.parallax-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
}
</style>

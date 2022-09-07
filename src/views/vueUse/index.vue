<template>
    <h1>测试vueUse的鼠标坐标</h1>
    <h3>鼠标坐标 x: {{x}}  y: {{y}}</h3>
</template>

<script>
    import { defineComponent } from 'vue'
    import { useMouse } from '@vueuse/core'

    export default {
        name: "vueUse",
        setup() {
            const {x , y} = useMouse()
            return {
                x,
                y
            }
        }
    }
</script>

<style scoped>

</style>

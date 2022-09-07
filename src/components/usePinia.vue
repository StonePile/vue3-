<template>
    <div>{{userStore.name}}</div>
</template>
<script lang="ts" setup>
    import { useUserStore } from "../store/user";
    const userStore = useUserStore()
    userStore.updateName('李四')

    const index: number = 1
    const params: { index:number } = { index }
    console.log(params)
</script>
<style>

</style>

<template>
    <div>
        {{name}}
    </div>
</template>

<script>
    import { useUserStore } from "../store/user";

    export default {
        name: "index",
        setup() {
          const user = useUserStore()
          user.updateName('王小二')
          return {
              name: user.name
          }
        },
    }
</script>

<style scoped>

</style>

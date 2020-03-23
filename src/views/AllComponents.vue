<template>
    <div>
<template v-if="$route.name === 'components'" >
    <div>
        <h1>
            All the tools you need to create a better world
        </h1>
    </div>
</template>


        <router-view/>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        data() {
            return {
                // key: value
            }
        },

        methods:{

        }

    }
</script>

<style scoped>

</style>

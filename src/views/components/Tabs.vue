<template>
    <div>
        <!--        DYNAMIC VERSION-->
        <div class="container">
            <div class="section ">


                <div class="tabs is-centered">
                    <ul>
                        <template v-for="(tabContent, id ) in tabContents">
                            <div :key="id">
                                <li :class="activeTab === id ? 'is-active':'' " @click="activeTab = id">
                                    <a>
                                            <span class="icon is-small"><span v-html="tabContent.icon"
                                                                              aria-hidden="true"/></span>
                                        <span>{{tabContent.title}}</span>
                                    </a>
                                </li>
                            </div>
                        </template>
                    </ul>
                </div>
                <div>
                    <div v-html="tabContents[activeTab].text">
                    </div>
                </div>


            </div>

        </div>
        <!--        DYNAMIC VERSION-->


    </div>
</template>

<script>
    import data from "./component_data";

    export default {
        data() {
            return {
                tabContents: data.tabContents,
                activeTab: 'picture'


            }
        },


    }
</script>

<style scoped>

</style>

<template>

    <div class="my-3" :class="open ? 'faq open' : 'faq'" @click="$emit('toggleOpen', index)">


        <div class="question message-header">{{ faq.question }}
            <i class="far fa-eye-slash "></i>
        </div>
        <div class=" message-body">{{ faq.answer }}</div>

    </div>
</template>

<script>
    export default {
        name: 'FAQ',
        props: ['faq', 'index', 'open']
    }
</script>

<style>
    .message-header{
        background-color:#00aa91 ;
    }

    .message-body{
        background-color: rgba(0, 170, 145, 0.38);

    }
</style>

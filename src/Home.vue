<template>
    <app-server-status></app-server-status>
</template>

<script>
    import ServerStatus from './ServerStatus.vue';

    export default {
        components: {
            AppServerStatus,
            'app-server-status': ServerStatus
        }
    }

</script>
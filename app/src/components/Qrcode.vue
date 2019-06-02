<template>
    <qrcode value="http://localhost:3000/#/photo" :options="{ width: 200 }"></qrcode>
</template>

<script>
    import qrcode from '@chenfengyuan/vue-qrcode';

    export default {
        name: 'Qrcode',
        components: {
            qrcode,
        }
    }
</script>
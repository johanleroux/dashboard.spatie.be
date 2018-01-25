<template>
    <tile :position="position">
        <section class="crypto">
            speedtest
        </section>
    </tile>
</template>

<script>
    import Tile from './atoms/Tile';
    import SpeedTest from 'speedtest-net';

    export default {

        components: {
            Tile,
        },

        props: ['position'],

        data() {
            return {
                value: {
                    price_usd: 0
                },
            };
        },


        created() {
            this.speedtest();
            setInterval(this.speedtest, 15 * 60 * 1000); // 15 mins
        },

        methods: {
            async speedtest() {
                const test = SpeedTest({
                    maxTime: 5000
                });
                
                test.on('data', data => {
                    console.dir(data);
                });
                
                test.on('error', err => {
                    console.error(err);
                });
            },
        },
    };
</script>
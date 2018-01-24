<template>
    <tile :position="position">
        <section class="crypto">
            <time class="crypto__content">
                <span class="crypto__icon">
                    <i class="cf" v-bind:class="icon"></i>
                </span>
                <span class="crypto__title">{{ title }}</span>
                <span class="crypto__amount">{{ value.price_usd | currency }}</span>
                <span class="crypto__date">
                    <span :class="change1h">{{ value.percent_change_1h }}%</span> | 
                    <span :class="change24h">{{ value.percent_change_24h }}%</span> | 
                    <span :class="change7d">{{ value.percent_change_7d }}%</span>
                </span>
            </time>
        </section>
    </tile>
</template>

<script>
    import Tile from './atoms/Tile';
    import crypto from '../services/crypto/Crypto';

    export default {

        components: {
            Tile,
        },

        props: ['position', 'coin', 'title', 'icon'],

        data() {
            return {
                value: {
                    price_usd: 0
                },
            };
        },


        created() {
            this.fetchCoin();
            setInterval(this.fetchCoin, 10 * 30 * 1000); // 5 mins
        },

        methods: {
            async fetchCoin() {
                const coin = await crypto.coinData(this.coin);

                this.value = coin;
            },

            cryptoChange(value) {
                if (Number.parseFloat(value) > 0)
                    return 'crypto__positive';
                
                return 'crypto__negative';
            },
        },

        computed: {
            change1h() {
                return this.cryptoChange(this.value.percent_change_1h);
            },
            
            change24h() {
                return this.cryptoChange(this.value.percent_change_24h);
            },
            
            change7d() {
                return this.cryptoChange(this.value.percent_change_7d);
            },
        },
    };
</script>
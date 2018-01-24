<template>
    <tile :position="position" modifiers="overflow">
        <section class="calendar">
            <h1 class="calendar__title">{{ title }}</h1>
            <ul class="calendar__events">
                <li v-for="event in events" class="calendar__event">
                    <h2 class="calendar__event__title">{{ event.name }}</h2>
                    <div class="calendar__event__date">{{ relativeDate(event.date) }}</div>
                </li>
            </ul>
        </section>
    </tile>
</template>

<script>
    import echo from '../mixins/echo';
    import Tile from './atoms/Tile';
    import saveState from 'vue-save-state';
    import { relativeDate } from '../helpers';

    export default {

        components: {
            Tile,
        },

        mixins: [echo, saveState],

        props: ['position', 'calendar'],

        data() {
            return {
                events: [],
                calendarTitle: '',
            };
        },

        methods: {
            relativeDate,

            getEventHandlers() {
                return {
                    'Calendar.EventsFetched': response => {
                        if (this.calendar === response.calendarTitle) {
                            this.events = response.events;
                            this.calendarTitle = response.calendarTitle;
                        } else if (!this.calendar) {
                            this.events = response.events;
                            this.calendarTitle = '';
                        }
                    },
                };
            },

            getSaveStateConfig() {
                let cacheKey = 'calendar';

                if (this.calendar)
                    cacheKey = cacheKey + '_' + this.calendar;

                return {
                    cacheKey: cacheKey,
                };
            },
        },

        computed: {
            title() {
                if (this.calendarTitle)
                    return this.calendarTitle;
                return 'Upcoming';
            },
        },
    };

</script>

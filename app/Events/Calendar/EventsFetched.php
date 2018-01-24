<?php

namespace App\Events\Calendar;

use App\Events\DashboardEvent;

class EventsFetched extends DashboardEvent
{
    /** @var array */
    public $events;

    /** @var string */
    public $calendarTitle;

    public function __construct(array $events, string $calendarTitle = null)
    {
        $this->events = $events;

        if ($calendarTitle) {
            $this->calendarTitle = $calendarTitle;
        }
    }
}

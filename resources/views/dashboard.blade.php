@extends('layouts/master')

@section('content')

@javascript(compact('pusherKey', 'pusherCluster', 'usingNodeServer'))

<dashboard id="dashboard" columns="5" rows="3">
    <crypto-coin 
        position="a3"
        coin="bitcoin"
        title="Bitcoin"
        icon="cf-btc">
    </crypto-coin>
    <crypto-coin 
        position="b3"
        coin="ethereum"
        title="Ethereum"
        icon="cf-eth">
    </crypto-coin>
    <crypto-coin 
        position="c3"
        coin="dash"
        title="Dash"
        icon="cf-dash">
    </crypto-coin>
    <crypto-coin 
        position="d3"
        coin="vertcoin"
        title="Vertcoin"
        icon="cf-vrc">
    </crypto-coin>

    <calendar 
        position="e2"
        calendar="class"></calendar>

    <calendar 
        position="e3"
        calendar="university"></calendar>

    <calendar 
        position="a1:a2"
        calendar="personal"></calendar>

    <time-weather 
        position="e1"
        date-format="ddd DD/MM"
        time-zone="Africa/Johannesburg"
        weather-city="Johannesburg">
    </time-weather>

    <speedtest position="b2"></speedtest>
    
    <internet-connection></internet-connection>
</dashboard>

@endsection

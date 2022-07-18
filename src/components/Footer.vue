<script >
    import "../assets/style.scss";
    import Payment from "./Payment.vue"

    export default {
        components: {
            'Payment': Payment
        }
    }
</script>

<template>
    <div className="footer">
        <h4>Join our Team of Writers</h4>
        <p> 
            On dasdas, writers earn a living doing what they love.<br/>
            Getting started is easy. Just pay a one time <span>$25 fee</span> and everything is ready to go.
        </p>
        <Payment/>
    </div>
</template>
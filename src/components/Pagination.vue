<template>
    <nav className="pagination">
        <span className="page-stats">{{pagination.from}} - {{pagination.to}} of {{pagination.total}}</span>
        <a v-if="pagination.prevPage" @click="$emit('prev')" className="button previous">
            Prev
        </a>
        <a className="disabled" v-else disabled>
            Prev
        </a>

        <a v-if="pagination.nextPage" @click="$emit('next')" className="button next">
            Next
        </a>
        <a className="button next" v-else disabled>
            Next
        </a>
    </nav>
</template>

<script>
import "../assets/style.scss";
    export default {
        props: ['pagination'],
        
    }
</script>
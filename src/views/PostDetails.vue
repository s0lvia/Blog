<script>
    import "../assets/style.scss";
    import Header from "../components/Header.vue";
    import MoreArticles from "../components/MoreArticles.vue";
    import readingTime from "../components/ReadingTime.vue";
    import axios from "axios";
    import moment from "moment";

    export default {

    components: {
    'Header': Header,
    'MoreArticles' :MoreArticles,
    'readingTime':readingTime,

  },
        data() {
        return {
        queryOptions: {
        _embed: true
      },
            posts: {},
        }
        },
        methods: {
            getPostDate(date) {
            return moment(date).startOf('hour').fromNow(); ;
    }
        },
        created() {
            axios.get("https://techcrunch.com/wp-json/wp/v2/posts/"+ this.$route.params.id, {params: this.queryOptions})
            .then(response => {
            this.posts = response.data;
            console.log("Posts retrieved!");
            console.log(this.posts);
            })
            .catch(error => {
            console.log(error);
            });
        }
       } 
</script>

<template>
    <div className="container">
        <Header/>
        <div className="post-details">
            <p className="p">By {{posts._embedded.author[0].name}} <span> {{getPostDate(posts.date)}}</span> </p>
            <h4>{{posts.title.rendered}}</h4>
            <p id="content" v-html="posts.content.rendered"></p>
        </div>
        <MoreArticles/>
    </div>
</template>
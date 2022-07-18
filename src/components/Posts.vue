<script >
    import "../assets/style.scss";
    import Header from "../components/Header.vue";
    import Footer from "../components/Footer.vue";
    import readingTime from "../components/ReadingTime.vue";
    import pagination from '../components/Pagination.vue'
    import axios from "axios";
    import moment from "moment";
export default {
components: {
    'Header': Header,
    'Footer': Footer,
    'pagination':pagination,
    'readingTime':readingTime,
  },
  data() {
    return {
      postsUrl: "https://techcrunch.com/wp-json/wp/v2/posts",
      queryOptions: {
        per_page: 10, 
        page: 1, 
        _embed: true
      },
      posts: [],
      pagination: {
                    prevPage: '',
                    nextPage: '',
                    totalPages: '',
                    from: '',
                    to: '',
                    total: '',
                },
    };
  },
  methods: {
    getPosts() {
      axios
        .get(this.postsUrl, {params: this.queryOptions})
        .then(response => {
          this.posts = response.data;
          this.configPagination(response.headers);
          console.log("Posts retrieved!");
          console.log(this.posts);
        })
        .catch(error => {
          console.log(error);
        });
    },
    configPagination(headers) {
                this.pagination.total = +headers['x-wp-total'];
                this.pagination.totalPages = +headers['x-wp-totalpages'];
                this.pagination.from = this.pagination.total ? ((this.queryOptions.page - 1) * this.queryOptions.per_page) + 1 : ' ';
                this.pagination.to = (this.queryOptions.page * this.queryOptions.per_page) > this.pagination.total ? this.pagination.total : this.queryOptions.page * this.queryOptions.per_page;
                this.pagination.prevPage = this.queryOptions.page > 1 ? this.queryOptions.page : '';
                this.pagination.nextPage = this.queryOptions.page < this.pagination.totalPages ? this.queryOptions.page + 1 : '';
            },
    getPostDate(date) {
      return moment(date).startOf('hour').fromNow(); ;
    }
  },
  mounted() {
    this.getPosts();
  }
};
</script>

<template>
    <div className="container">
            <div className="blog-body">
            <div className="blog-item-container" v-for="(post, index) in posts" :key="index">
                <img
                    alt="Blog Image"
                    className="image"
                    v-if="post._embedded['wp:featuredmedia']"
                    :src="post._embedded['wp:featuredmedia'][0].source_url"
                />
                <div className="content">
                    <p className="p">{{post._embedded.author[0].name}}<span> . {{getPostDate(post.date)}}</span> </p>
                    <h4> {{ post.title.rendered }}</h4>
                    <p className="paragraph truncate-overflow"  v-html="post.excerpt.rendered">
                        
                    </p>
                    <div className="post-footer">
                        <reading-time :content="post.content.rendered"></reading-time>
                        <router-link :to="'/post/' + post.id" className="button">
                            Read Full 
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16669 10H15.8334" stroke="#1473E6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.5 13.3333L15.8333 10" stroke="#1473E6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.5 6.66666L15.8333 9.99999" stroke="#1473E6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </router-link>
                    </div>
                </div>
                
            </div>
            
        
    </div>
        <pagination :pagination="pagination"
                    @prev="--queryOptions.page; getPosts();"
                    @next="queryOptions.page++; getPosts();">
        </pagination>
    </div>
</template>
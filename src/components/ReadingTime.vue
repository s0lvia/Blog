

Adding estimated reading time to my blog posts
September 15th 2018 by Mads Rasmussen - 3 min. read
Learn how I created a simple estimated reading time component in Vue.js for my blog posts.
When visiting different blogs, I like the small estimation of how long time it will take to read a blog post. It gives me an idea whether the post is something I want to read now or save for later.

I know the reading time is not precise. People read at different speed, and various content takes different time to digest. Blog posts with images, presentations, videos, pdf's, code examples, etc. take a longer time to read than blog posts with text only. Despite this, I want to add the reading time both for fun but hopefully also to give a little value to the reader in the end.

I built my blog on Vue.js, Nuxt.js, and Umbraco Headless (more on that in a later blog post) so I want to make a small Vue component which I can reuse on my blog posts and in my blog post lists.

The challenge
My website gets all its content from a REST API. Therefore all the content of a blog post is in a complex JSON object including metadata that isn't part of the final presentation (sections metadata, image metadata, etc.). How do I best estimate the reading time with this extra data?

The process

<template>
  <span className="p-bottom">{{readingTime}} min read</span>
</template>

<script>
  import "../assets/style.scss";
export default {
  name: 'readingTime',
  props: ['content'],
  computed: {
    readingTime () {
      let minutes = 0;
      const contentString = JSON.stringify(this.content);
      const words = contentString.split(" ").length;
      const wordsPerMinute = 200;
      minutes = Math.ceil(words / wordsPerMinute);
      return minutes;
    }
  }
}
</script>
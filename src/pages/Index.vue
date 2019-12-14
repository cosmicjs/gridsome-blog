<template>
  <Layout :hero=true :settings=$page.settings.edges[0].node>
    <Bio :settings=$page.settings.edges[0].node />
    <div v-for="item in $page.posts.edges" :key="item.slug">
      <h3>
        <g-link :to="`posts/${item.node.slug}`">{{item.node.title}}</g-link>
      </h3>
      <small>{{item.node.created_at}}</small>
      <p>{{ item.node.metadata.description }}</p>
    </div>
  </Layout>
</template>

<page-query>
  query IndexQuery {
    posts: allCosmicjsPosts {
      edges {
        node {
          metadata {
            description
          }
          id
          slug
          title
          created_at(format: "MMMM DD, YYYY")
        }
      }
    }
    settings: allCosmicjsSettings {
      edges {
        node {
          metadata {
            site_title,
            site_heading,
            homepage_hero {
              imgix_url
            },
            author_bio, 
            author_name,
            author_avatar{
              imgix_url
            },
          }
        }
      }
    }
  }
</page-query>
<script>
import Bio from "../components/Bio";

export default {
  name: 'Home',
  metaInfo: {
    title: 'Home'
  },
  components: {
    Bio
  }
};
</script>

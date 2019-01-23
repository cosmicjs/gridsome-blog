<template>
 <Layout :hero=false :settings=$page.settings.edges[0].node >
    <h3>{{$page.settings.edges[0].node.metadata.siteHeading}}</h3>
    <g-link :to="`/`"> ← Back to Posts</g-link>
    <h1 :style="{marginTop: rhythm(1)}">{{$page.post.title}}</h1>
    <p :style="{
      ...scale(-1 / 5),
      display: 'block',
      marginBottom: rhythm(0.6),
      marginTop: rhythm(-0.6),
    }">{{$page.post.createdAt}}</p>
    <div :style="{
        backgroundColor: '#007ACC',
        backgroundImage: `url(${$page.post.metadata.hero.imgixUrl.src}?w=2000)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBottom: `${rhythm(1)}`,
        position: 'relative',
        width: `calc(100% + ${rhythm(8)})`,
        height: `${rhythm(18)}`,
        marginLeft: `${rhythm(-4)}`
      }">
    </div>
    <div v-html="$page.post.content" class="content"></div>
    <hr
      :style="{
        marginBottom: `${rhythm(1)}`
      }"
    />
    <Bio :settings=$page.settings.edges[0].node />
    <ul
      :style="{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: 0,
      }"
    >
      <li v-if="$page.post.prevPath">
        <g-link :to="'/'+$page.post.prevPath" rel="prev">
          ← {{$page.post.prevTitle}}
        </g-link>
      </li>
      <li v-if="$page.post.nextPath">
        <g-link :to="'/'+$page.post.nextPath" rel="next">
         {{$page.post.nextTitle}} →
        </g-link>
      </li>
    </ul>
 </Layout>
</template>

<page-query>
  query postQuery($path: String!) {
    post: cosmicjsPosts(path: $path) {
      id
      content
      title
      prevPath
      nextPath
      nextTitle
      prevTitle
      createdAt(format: "MMMM DD, YYYY")
      metadata {
        hero {
          imgixUrl
        }
      }
    }
    settings: allCosmicjsSettings {
      edges {
        node {
          metadata {
            siteTitle,
            siteHeading,
            homepageHero {
              imgixUrl
            },
            authorBio, 
            authorName,
            authorAvatar{
              imgixUrl
            },
          }
        }
      }
    }
  }
</page-query>

<script>
import Bio from '../components/Bio';
import mixins from '../utils/mixins'

export default {
  mixins: [mixins],
  metaInfo() {
    return {
      title: this.$page.post.title,
    }
  },
  components: {
    Bio
  }
};
</script>

<style>
  .content {
    text-align: justify;
  }
</style>

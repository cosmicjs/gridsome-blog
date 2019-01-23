<template>
 <Layout :hero=false :settings=$page.settings.edges[0].node >
    <h3>{{$page.settings.edges[0].node.metadata.siteHeading}}</h3>
    <g-link :to="`/`"> ← Back to Posts</g-link>
    <h1 :style="{marginTop: rhythmMethod(1)}">{{$page.post.title}}</h1>
    <p :style="{
      ...scaleMethod(-1 / 5),
      display: 'block',
      marginBottom: rhythmMethod(0.6),
      marginTop: rhythmMethod(-0.6),
    }">{{$page.post.createdAt}}</p>
    <div :style="{
        backgroundColor: '#007ACC',
        backgroundImage: `url(${$page.post.metadata.hero.imgixUrl.src}?w=2000)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBottom: `${rhythmMethod(1)}`,
        position: 'relative',
        width: `calc(100% + ${rhythmMethod(8)})`,
        height: `${rhythmMethod(18)}`,
        marginLeft: `${rhythmMethod(-4)}`
      }">
    </div>
    <div v-html="$page.post.content" class="content"></div>
    <hr
      :style="{
        marginBottom: `${rhythmMethod(1)}`
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
import { rhythm, scale } from '../utils/typography';

export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    }
  },
  components: {
    Bio
  },
  methods: {
    rhythmMethod(value) {
      return rhythm(value);
    },
    scaleMethod(value) {
      return scale(value);
    },
  }
};
</script>

<style>
  .content {
    text-align: justify;
  }
</style>

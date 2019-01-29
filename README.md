# Gridsome + Cosmic JS

> This repo contains an example blog website that is built with [Gridsome](https://gridsome.org/), and [Cosmic JS](https://www.cosmicjs.com).

> [See live demo hosted on Netlify](https://gridsome-blog-cosmicjs.netlify.com/)

> Uses the [Cosmic JS Gridsome Source Plugin](https://www.npmjs.com/package/gridsome-source-cosmicjs)

## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gridsome CLI](https://gridsome.org/docs)

## Install

``` bash
# Make sure that you have the Gatsby CLI program installed
npm install --global @gridsome/cli

# run from your CLI
gridsome new gridsome-blog https://github.com/cosmicjs/gridsome-blog
```
In `gridsome.config.js` you need to add configuration for your Cosmic JS Bucket

``` javascript
plugins: [
  {
    resolve: 'gridsome-source-cosmicjs',
    options: {
      bucketSlug: '', /* bucket slug */
      objectTypes: ['posts', 'settings'], /* object slugs you want to populate */
      apiAccess: {
        read_key: '', /* optional but recommended */
      }
    }
  }
],
```

Then

``` bash
# Then you can run it by
cd gridsome-blog
npm run develop
```

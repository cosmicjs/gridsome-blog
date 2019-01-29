// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome Blog Cosmic JS',
  plugins: [
    {
      use: 'gridsome-source-cosmicjs',
      options: {
        bucketSlug: process.env.COSMIC_BUCKET || 'gridsome-blog-cosmicjs',
        objectTypes: [`posts`, `settings`],
        apiAccess: {
          read_key: process.env.COSMIC_READ_KEY
        }
      },
    }
  ]
}

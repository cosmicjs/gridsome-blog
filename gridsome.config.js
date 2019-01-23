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
        bucketSlug: 'gridsome-blog-cosmicjs',
        objectTypes: [`posts`, `settings`],
        apiAccess: {
          read_key: 'g9FO33DH9ZyVfpM76b3EAx9b0dBc22ihePxI3BvlBxtYiTzITR'
        }
      },
    }
  ]
}
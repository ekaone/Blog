module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        // basePath: `/`,
        // contentPath: `content/posts`,
        // assetPath: `content/assets`
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `JS Discovery`,
    author: `Eka Prasetia`,
    description: `Awesome tech bring your life more better`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/dannyeka`
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`
      }
    ]
  }
}

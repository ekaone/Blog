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
    title: `Eka Prasetia`,
    author: `Eka Prasetia`,
    description: `Awesome codes bring your life more amazing`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/dannyeka`
      },
      {
        name: `github`,
        url: `https://github.com/`
      }
    ]
  }
}

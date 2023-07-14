import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    siteTitle: `Adam Cooke`,
    siteTitleAlt: `Adam Cooke - Personal Site`,
    siteHeadline: `Adam Cooke - Peronsal Site`,
    siteUrl: `https://adamcooke.xyz`,
    siteDescription: `Adam Cooke - Peronsal Site including projects links and contact details. Canada.`,
    // siteImage: `/banner.jpg`,
    author: `Adam Cooke`,
  },
  trailingSlash: `never`,
  plugins: [
    `gatsby-plugin-sitemap`,
  ].filter(Boolean) as Array<PluginRef>,
}

export default config

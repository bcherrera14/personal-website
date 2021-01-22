const { author, siteTitle, siteShortTitle, siteDescription, siteIcon, siteUrl, colors } = require(`./config`);

module.exports = {
	siteMetadata: {
		author: author,
		title: siteTitle,
		description: siteDescription,
		siteUrl: siteUrl
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		'gatsby-plugin-eslint',
		`gatsby-plugin-robots-txt`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-fontawesome-css`,
		`gatsby-plugin-netlify`,
		// {
		//   resolve: `gatsby-plugin-gtag`,
		//   options: {
		//     trackingId: `UA-XXXXXXXX-X`,
		//     head: false,
		//     anonymize: true,
		//   },
		// },
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: siteTitle,
				short_name: siteShortTitle,
				start_url: `/`,
				background_color: colors.lightTheme.background,
				theme_color: colors.lightTheme.primary,
				display: `minimal-ui`,
				icon: siteIcon // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [ `.mdx`, `.md` ],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1000,
							quality: 80
						}
					}
				]
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content`,
				name: `content`
			}
		},
		{
			resolve: `gatsby-plugin-eslint`,
			options: {
				test: /\.js$|\.jsx$/,
				exclude: /(node_modules|.cache|public)/,
				stages: [ `develop` ],
				options: {
					emitWarning: true,
					failOnError: false
				}
			}
		},
		{
			resolve: 'gatsby-plugin-eslint',
			options: {
				test: /\.js$|\.jsx$/,
				exclude: /(node_modules|cache|public)/,
				options: {
					emitWarning: true,
					failOnError: false
				}
			}
		},
		{
			resolve: 'gatsby-plugin-prettier-eslint',
			options: {
				prettier: {
					patterns: [
						// the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
						'**/*.{css,scss,less}',
						'**/*.{json,json5}',
						'**/*.{graphql}',
						'**/*.{md,mdx}',
						'**/*.{html}',
						'**/*.{yaml,yml}'
					]
				},
				eslint: {
					patterns: '**/*.{js,jsx,ts,tsx}',
					customOptions: {
						fix: true,
						cache: true
					}
				}
			}
		}
	]
};

const withMDX = require('@next/mdx')()

module.exports = withMDX({
  //   basePath: "/new",
  pageExtensions: ['js', 'jsx', 'tsx', 'md', 'mdx'],
  async redirects() {
    return [
      {
        source: '/*',
        destination: 'https://supabase.com/docs/guides/auth/auth-helpers/auth-ui',
        permanent: true,
        basePath: false,
      },
    ]
  },
})

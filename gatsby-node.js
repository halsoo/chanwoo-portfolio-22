const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query ProjectDetails {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    slug
                }
            }
        }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    const { frontmatter } = node
    const { slug } = frontmatter
    actions.createPage({
      path: '/projects/'+ slug,
      component: path.resolve('./src/templates/project-details.jsx'),
      context: { slug }
    })
  })
}
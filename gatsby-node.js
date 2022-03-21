/* This is a confusing file but we are registering our
   notes so we can use their urls
*/

const path = require('path')

exports.createPages  =  async ({actions, graphql}) => {
  const {createPage} = actions

  const postTemplate = path.resolve('src/templates/note-post.js')

  return graphql(`
  {
    allMarkdownRemark{
      edges{
        node{
          html
          id
          frontmatter{
            path
            title
            date
            author
            }
          }
        }
      }
    }
    `).then(res => {
    if(res.errors){
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({node}) => {

      createPage({
         path: node.frontmatter.path,
         component: postTemplate
      })
      
    })
  })
}

// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

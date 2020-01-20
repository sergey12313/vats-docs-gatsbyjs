const path = require(`path`)
const { menu } = require("./src/summary")

const getPathsFromMenuItems = items => {
  return items.reduce((acc, curr) => {
    if (!curr.path) {
      return acc
    }
    if (curr.child) {
      return [
        ...acc,
        ...[{ path: curr.path }],
        ...getPathsFromMenuItems(curr.child),
      ]
    } else {
      return [...acc, ...[{ path: curr.path }]]
    }
  }, [])
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  getPathsFromMenuItems(menu).forEach(node => {
    createPage({
      path: node.path,
      component: path.resolve(`./src/templates/doc-template.js`),
      context: {
        slug: `/^.*${node.path}/`,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
    if (stage === 'build-javascript') {
        const config = getConfig()
        const miniCssExtractPlugin = config.plugins.find(
            plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
        )
        if (miniCssExtractPlugin) {
            miniCssExtractPlugin.options.ignoreOrder = true
        }
        actions.replaceWebpackConfig(config)
    }
}

exports.createSchemaCustomization = ({ actions, schema }) => {
    const { createTypes } = actions

    const typeDefs = [
      "type MarkdownRemark implements Node { frontmatter: Frontmatter }",
      schema.buildObjectType({
        name: "Frontmatter",
        fields: {
          speakers: {
            type: "[Node]",
            resolve: (source, args, context, info) => {
                return context.nodeModel.runQuery({
                    type: `MarkdownRemark`,
                    query: {
                        filter: {
                            fields: {
                                type: {
                                    eq: "person"
                                }
                            },
                            frontmatter: {
                                name: {
                                    in: source.speakers
                                }
                            }
                        }
                    }
                }).then(result => result || [])
            },
          },
        },
      }),
    ]
    createTypes(typeDefs)
  }
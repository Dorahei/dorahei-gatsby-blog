import { useStaticQuery, graphql } from "gatsby"

export default assetUrl => {
  const { allContentfulAsset } = useStaticQuery(graphql`
    query {
      allContentfulAsset {
        nodes {
          file {
            url
          }
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `)

  return allContentfulAsset.nodes.find(n => n.file.url === assetUrl).fluid
}

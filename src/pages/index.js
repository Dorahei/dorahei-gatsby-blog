import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import Seo from "../components/seo"

const Home = ({ data }) => (
  <Layout>
    <Seo />
    <section className="hero">
      <figure>
        <GatsbyImage
          image={data.hero.childImageSharp.gatsbyImageData}
          alt=""
          style={{ height: "100%" }}
        />
      </figure>
      <div className="catch">
        <h1>
          ドラヘイの生活
          <br /> うつ病を通して見る世界
        </h1>
        <p>うつ病はどんなに強靭な心身を持っていても罹患する病気</p>
      </div>
      <div className="wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1366 229.5"
          fill="#fff"
        >
          <path
            d="M1369,6.3C1222.5-12.2,1189.5,8,919.2,96.6C665,179.8,160,141.7-2,53.1v150l1371-14.2V6.3z"
            opacity=".53"
          />
          <path d="M1369 229.5V55.8c-9.5-2.4-19.2-4.4-28.9-5.8-196.9-29.9-203.4-15.8-503.9 82.6-219.8 72-627.6 53.2-838.2-10.5v107.4h1371z" />
        </svg>
      </div>
    </section>
    <section className="food">
      <div className="container">
        <h2 className="bar">
          ブログの内容
        </h2>
        <div className="details">
          <div className="detail">
            <figure>
              <GatsbyImage
                image={data.nayamu_boy.childImageSharp.gatsbyImageData}
                alt=""
              />
            </figure>
            <h3>うつ病について</h3>
            <p>Depression</p>
            <p>
              うつ病は誰しもが罹る病気です。
              <br />
              気分の落ち込みなど様々な症状が出ます。
            </p>
          </div>
          <div className="detail">
            <figure>
              <GatsbyImage
                image={data.fukusyoku.childImageSharp.gatsbyImageData}
                alt=""
              />
            </figure>
            <h3>社会復帰</h3>
            <p>Rehabilitation</p>
            <p>
              うつ病になると社会と断絶される場合があります。
              <br />
              いろんな制度を利用して復帰できます。
            </p>
          </div>
          <div className="detail">
            <figure>
              <GatsbyImage
                image={data.sick.childImageSharp.gatsbyImageData}
                alt=""
              />
            </figure>
            <h3>再発予防</h3>
            <p>Prevention</p>
            <p>
              再発予防にはうつ病にとってかかせません。
              <br />
              もし悪くなった場合は休職など利用しましょう。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="photo">
      <h2 className="sr-only">Photo</h2>
      <figure>
        <GatsbyImage
          image={data.banner.childImageSharp.gatsbyImageData}
          alt="banner"
          style={{ height: "100%" }}
        />
      </figure>
    </section>

    <section>
      <div className="container">
        <h2 className="sr-only">RECENT POSTS</h2>
        <div className="posts">
          {data.allContentfulBlogPost.edges.map(({ node }) => (
            <article className="post" key={node.id}>
              <Link to={`/blog/post/${node.slug}/`}>
                <figure>
                  <GatsbyImage
                    image={node.eyecatch.gatsbyImageData}
                    alt={node.eyecatch.description}
                    style={{ height: "100%" }}
                  />
                </figure>
                <h3>{node.title}</h3>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "bg_green.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    nayamu_boy: file(relativePath: { eq: "nayamu_boy.png" }) {
      childImageSharp {
        gatsbyImageData(width: 320, layout: CONSTRAINED)
      }
    }
    fukusyoku: file(relativePath: { eq: "fukusyoku_nayamu_man.png" }) {
      childImageSharp {
        gatsbyImageData(width: 320, layout: CONSTRAINED)
      }
    }
    sick: file(relativePath: { eq: "sick_syougaisya_techou.png" }) {
      childImageSharp {
        gatsbyImageData(width: 320, layout: CONSTRAINED)
      }
    }
    banner: file(relativePath: { eq: "banner_green.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    pattern: file(relativePath: { eq: "pattern_edited.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 90, layout: FULL_WIDTH)
      }
    }

    allContentfulBlogPost(
      sort: { order: DESC, fields: publishDate }
      skip: 0
      limit: 4
    ) {
      edges {
        node {
          title
          id
          slug
          eyecatch {
            gatsbyImageData(width: 573, layout: CONSTRAINED)
            description
          }
        }
      }
    }
  }
`

export default Home

import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare, faBook } from "@fortawesome/free-solid-svg-icons"

import Seo from "../components/seo"

const About = ({ data, location }) => (
  <Layout>
    <Seo
      pagetitle="DORAHEI について"
      pagedesc="うつ病、社会復帰などの情報を発信しているサイトです。"
      pagepath={location.pathname}
      pageimg={data.about.childImageSharp.original.src}
      pageimgw={data.about.childImageSharp.original.width}
      pageimgh={data.about.childImageSharp.original.height}
    />
    <div className="eyecatch">
      <figure>
        <GatsbyImage
          image={data.about.childImageSharp.gatsbyImageData}
          alt="背景画像の草原"
        />
      </figure>
    </div>
    <article className="content">
      <div className="container">
        <h1 className="bar">DORAHEIについて</h1>
        <aside className="info">
          <div className="subtitle">
            <FontAwesomeIcon icon={faCheckSquare} />
            ABOUT DORAHEI
          </div>
        </aside>
        <div className="postbody">
          <p>
            2013年にパワハラ、サービス残業、長時間労働によりうつ病を発症。3度の離職と復職の後、A型作業所を利用し、2021年から障害者雇用で公務員になりました。
          </p>
          <h2>
            <FontAwesomeIcon icon={faCheckSquare} />
            公開している記事
          </h2>
          <p>
            これらについて、次のような記事を書いて公開しています。
          </p>
          <ul>
            <li>うつ病の闘病記</li>
            <li>休職、復職、転職などの体験記</li>
            <li>日頃の生活、うつ病を通して感じる物事</li>
          </ul>
          <h2>
            <FontAwesomeIcon icon={faCheckSquare} />
            よく聞かれること
          </h2>
          <p>
            うつ病は脳の病気です。精神科に通うことに抵抗を持たれる方も少なからずいると思います。しかし、病気は時間が経てばより重くなります。早めに通院することをおすすめします。
          </p>
          <p>うつ病は障害者になってしまうほど重い病気、気長にお付き合していくしかないです。</p>
          <h2>
            <FontAwesomeIcon icon={faBook} />
            このサイトの参考は・・・
          </h2>
          <p>
            Webサイト高速化のための 静的サイトジェネレーター活用入門 (Compass Booksシリーズ) Kindle版<br />
            を参考に構築しています。
          </p>
          <Link to={`https://www.amazon.co.jp/gp/offer-listing/B088WJWJK9/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B088WJWJK9&linkCode=am2&tag=doraheiwebs06-22&linkId=79ba436004e36ad702bceffdd2c39324`}>
            <h3>書籍購入はこちらから</h3>
          </Link>
        </div>
      </div>
    </article>
  </Layout>
)

export const query = graphql`
  query {
    about: file(relativePath: { eq: "bg_natural_sougen.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
        original {
          src
          height
          width
        }
      }
    }
  }
`

export default About

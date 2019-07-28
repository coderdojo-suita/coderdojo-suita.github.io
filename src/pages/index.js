import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi!</h1>
    <p>CoderDojo吹田の各リンクはここにあります 👉 </p>
    <ul>
      <li>Doorkeeper: <a href="https://coderdojo-suita.doorkeeper.jp/">https://coderdojo-suita.doorkeeper.jp/</a></li>
      <li>Facebook: <a href="https://www.facebook.com/coderdojosuita/">https://www.facebook.com/coderdojosuita/</a></li>
      <li>Instagram: <a href="https://www.instagram.com/coderdojosuita/">https://www.instagram.com/coderdojosuita/</a> </li>
    </ul>
  </Layout>
)

export default IndexPage

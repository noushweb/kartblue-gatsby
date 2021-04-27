import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Success = () => (
  <Layout>
    <Seo title="Message Sent" />
    <section className="notfound">
      <h1>Thank You</h1>
      <p>Your message has been send Successfully</p>
    </section>
  </Layout>
)

export default Success

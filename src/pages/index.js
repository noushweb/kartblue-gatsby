import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
const Index = () => {
  return (
    <Layout>
      <Seo title="Kartblue" />
      <section className="main bodyimage">
        <div className="container">
          <div className="leftcontent">
            <h1 className="mainheading">
              You have a great idea,
              <span className="lightfont"> but now what?</span>
            </h1>
            <p className="highlights">
              Worry not, as KartBlue will fill in the void, and help you make
              your worthy idea a grand reality.
            </p>
            <p>
              Watch as your projects come to life in exceptional quality,
              carefully made with the best resources from our trusted allies.
            </p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="aboutwrapper">
            <div className="aboutdiv">
              <h1>about</h1>
              <h2 className="subtitile">our belief</h2>
              <p>
                Karblue is a technology company that connects business and the
                customers by providing consultancy, technology , skilled
                resources and innovative ideas. We at Kartblue nurtures
                innovation and product ideas, by combining the technology and
                investment it needs.
              </p>
              <p>
                We build the bridge between businesses and IT companies,
                providing expertise and bringing all our skills in project
                management to the table. Our contract and values will help
                companies to develop without any hassle.
              </p>
            </div>
            <div className="mainservices">
              <h3>Consultancy</h3>
              <p>
                ECommerce Consultancy, Ecommerce Applications, Software
                Consultancy, Mobile Web Apps Consulting and Prototype
                Development
              </p>
              <h3>Digital Marketing</h3>
              <p>
                Complete social media management including Instagram, Facebook,
                YouTube, Linkedin and Twitter
              </p>
              <h3>Marketplace Management</h3>
              <p>
                Sell your products online marketplace website like flipkart and
                Amazon.
              </p>
              <h3>Resource Placement</h3>
              <p>Get qualified resources to develop your IT Applications</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <div className="serviceswrpper">
            <div className="consultancydiv">
              <h1>Consultancy</h1>
              <p>
                We are a group of more than 20 years experienced IT experts, who
                have served many companies to achieve their best in their
                application. At kartblue, we help customers to design their
                business ideas, an end to end prototype formalisation and
                helping our customers to find the best companies to develop
                their dream apps.
              </p>
              <p>
                We guarantee the results by signing with our authorised
                partners, so you can have smooth running, impeccable business
                apps. Find us if you have any business ideas in your mind!
              </p>
              <a href="#contact">
                <p className="linktoform">Discuss with an expert now </p>
              </a>
            </div>

            <StaticImage
              src="../images/consultimage.jpg"
              alt="consultationimage"
              placeholder="blurred"
            />
          </div>

          <div className="digitalserviceswrpper">
            <StaticImage
              src="../images/digitalimage.jpg"
              alt="digital image"
              placeholder="blurred"
            />

            <div className="digitaldiv">
              <h1>Digital Marketing </h1>
              <p>
                Digital marketing is a key area currently where businesses want
                to invest for marketing themselves. Get optimised promo done
                ideal to your business needs and wants. Let the world know you,
                in the way you want them to.
              </p>
              <h4>SEO/ Promotions</h4>
              <p>
                97% of shoppers go virtual to find local services, and 82% of
                device users use a search engine when looking for a native
                business. How do you connect with them? With local search engine
                optimization (SEO) from one of the finest SEO Company can help
                you this. Your customers are searching for your business—let
                kart blue help them find you.
              </p>
              <p>We are tied with many digital agencies in the region,</p>
              <a href="#contact">
                <p className="linktoform">Discuss with an expert now </p>
              </a>
            </div>
          </div>

          <div className="serviceswrpper">
            <div className="resourcediv">
              <h1>Resource Placement</h1>
              <p>
                We have a pool of resources specialised in different domain. We
                can provide you the best contract to accomplish your IT
                projects. We can place them monthly or for a period of 3 months
                or even for a year. They are specialised in different domain
                like . Net, Php, Laravel, Node Js, Mongo DB, Ms Sql, My Sql and
                even for Azure and Aws management.
              </p>

              <a href="#contact">
                <p className="linktoform">Discuss your requirements now. </p>
              </a>
            </div>

            <StaticImage
              src="../images/resourceimage.jpg"
              alt="resource"
              placeholder="blurred"
            />
          </div>
        </div>
      </section>

      <section className="marketplace bodyimage1">
        <div className="container">
          <h1>Marketplace Management</h1>
          <div className="marketplacewrapper">
            <div className="colum1">
              <h2>
                Looking for someone to manage your marketplace and to develop
                your online business ?
              </h2>
              <p>
                Search no further, Kartblue is your winner. We are a team of
                e-commerce professionals with expertise in creating wealthy
                revenue using your online presence. We manage all e-marketplaces
                there is, for you. Stop wasting time to wrap your head around
                how they work, we at kart blue know all and can do all about it.
              </p>
            </div>
            <div className="column2">
              <h3>Why do we management market place ?</h3>
              <p>
                The answer is : Our team have past experience in building online
                businesses.
              </p>
              <p>
                We have seen many good products in rural areas suffering to get
                marketing reach. There is always a big gap between the seller
                and the shopper and obviously it is not practical for the seller
                to spend precious limited time learning complex concepts like
                online marketing. We keep this promise to our customers to make
                their online presence hale and hearty so they can get orders
                online, investing much time to create their online catalogue and
                generate sales through various channels. We have only succeeded
                when your business earns and becomes successful. We want to make
                this happen with our full heart approach, with the help of our
                dedicated team. We believe we can empower our people by helping
                them to build a remarkable market place.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="marketplacewrapper1">
            <div className="subbox1">
              <h5>Amazon Advert</h5>
              <div className="bgimage">
                <div className="bluebg">
                  <StaticImage
                    src="../images/amazon-icon.svg"
                    alt="amazon icon"
                    placeholder="tracedSVG"
                  />
                  <p>
                    From using AV to sponsored ads and everything in between,
                    Kartblue can help your product to catch and demand your
                    target audiences’ attention, on the prominent global
                    e-commerce platform, Amazon.
                  </p>
                </div>
              </div>
            </div>

            <div className="subbox2">
              <h5>E-com Cataloguing </h5>
              <div className="bgimage">
                <div className="greyebg">
                  <StaticImage
                    src="../images/ecat-icon.svg"
                    alt="catalogu icon"
                    placeholder="tracedSVG"
                  />
                  <p>
                    List ALL your products on leading e-commerce platforms, with
                    persuasive and informing descriptions, making sure that the
                    significance of your product is known to prospective
                    customers and shoppers. With absolutely no misinformation,
                    our clients can enjoy passionate loyalty and goodwill.
                  </p>
                </div>
              </div>
            </div>

            <div className="subbox3">
              <h5>E-com Branding</h5>
              <div className="bgimage">
                <div className="greyebg">
                  <StaticImage
                    src="../images/branding-icon.svg"
                    alt="branding icon"
                    placeholder="tracedSVG"
                  />
                  <p>
                    Make your brand known among shoppers galore. Intensify your
                    reach, plus extend your name and generate goodwill, within
                    and beyond borders.
                  </p>
                </div>
              </div>
            </div>

            <div className="subbox4">
              <h5>E-com Cataloguing </h5>
              <div className="bgimage">
                <div className="bluebg">
                  <StaticImage src="../images/account-icon.svg" alt="" />
                  <p>
                    The best part of all is, you don’t have to worry about
                    keeping track of your products and services online. We
                    create seller registration account for your firm in all
                    major marketplaces including flipkart and amazon. We offer
                    to manage your account needs promptly and efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benifits">
        <div className="container">
          <h1>Benefits of working with us</h1>
          <div className="benifitswrapper">
            <div className="colum1">
              <StaticImage
                src="../images/best.jpg"
                alt="benifits image"
                placeholder="blurred"
              />

              <h3>Best analysis of your competitors.</h3>
              <p>
                We do perfect market analysis to come up with right approach to
                bring your products to your audience. It is difficult for you to
                stand out from the crowd without the help of an experienced team
                like Kartblue. Thousands of products are available in the market
                place like amazon and flipkart, thus it is vital to put oneself
                to out there to while they’re searching for your kind of
                offerings.
              </p>
            </div>

            <div className="colum2">
              <StaticImage
                src="../images/solution.jpg"
                alt="marketing image"
                placeholder="blurred"
              />

              <h3>Solutions for Best Marketing approach</h3>
              <p>
                We will find the best approach to give you the most desirable
                result whether it is on flipkart or amazon marketplace. Our team
                can guide you cost effective marketing tips with the help of
                experienced service providers so that the result is guaranteed.
              </p>
            </div>

            <div className="colum3">
              <StaticImage
                src="../images/comprehensive.jpg"
                alt="digital marketing image"
                placeholder="blurred"
              />

              <h3>Comprehensive Digital Marketing</h3>
              <p>
                We are well versed with the digital approach in marketplaces
                like amazon and flipkart. We can guide to build your product
                catalogue, appropriate description and search algorithm to put
                your products always ahead of your competitors. A result driven
                approach will be designed and advised for your comprehensive
                digital presence within your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="form" id="contact">
        <div className="container">
          <div className="formwrapper">
            <h1>Get in touch!</h1>
            <h4>
              Contact is key, unlock your ideas and discuss with us your needs.
            </h4>
            <div className="sendform">
              <form
                name="kartblue"
                method="POST"
                action="/success"
                data-netlify-recaptcha="true"
                data-netlify="true"
              >
                <div className="fields">
                  <div className="field">
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Name"
                      id="name"
                    />
                  </div>
                  <div className="field">
                    <input
                      required
                      type="number"
                      name="number"
                      placeholder="Mobile Number"
                      id="mobilenumber"
                    />
                  </div>
                  <div className="field">
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="email"
                    />
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      name="Address"
                      placeholder="Address"
                      id="address"
                    />
                  </div>
                </div>
                <div className="fields1">
                  <div className="field">
                    <select required type="text" name="services" id="services">
                      <option value="" disabled selected>
                        Select Services
                      </option>
                      <option value="Consultancy">Consultancy</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="Marketplace Management">
                        Marketplace Management
                      </option>
                      <option value="Resource Placement">
                        Resource Placement
                      </option>
                    </select>
                  </div>

                  <div className="field">
                    <textarea
                      required
                      name="message"
                      placeholder="Message"
                      rows="7"
                    ></textarea>
                  </div>

                  <div data-netlify-recaptcha="true"></div>
                </div>
                <div className="actions">
                  <input
                    type="submit"
                    value="Send Message"
                    className="buttonsubmit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index

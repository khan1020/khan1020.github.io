import React, { Fragment } from 'react'
import Head from 'next/head'

import { DateTimePrimitive } from '@teleporthq/react-components'

import Navbar from '../components/navbar'
import Banner2 from '../components/banner2'
import Hero from '../components/hero'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Pricing from '../components/pricing'
import Steps from '../components/steps'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Spotless Hungry Crocodile</title>
        </Head>
        <Navbar></Navbar>
        <Banner2
          action1={
            <Fragment>
              <span className="home-text1">Get Started</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text2">
                Your one-stop solution for all your healthcare needs
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text3">
                Welcome to Smart Healthcare Portal
              </span>
            </Fragment>
          }
        ></Banner2>
        <Hero></Hero>
        <span>
          <DateTimePrimitive
            format="DD/MM/YYYY"
            date="Fri Dec 06 2024 20:50:28 GMT+0500 (Pakistan Standard Time)"
          ></DateTimePrimitive>
        </span>
        <Features1></Features1>
        <CTA></CTA>
        <Features2></Features2>
        <Pricing></Pricing>
        <Steps></Steps>
        <Testimonial></Testimonial>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text1 {
            display: inline-block;
          }
          .home-text2 {
            display: inline-block;
          }
          .home-text3 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home

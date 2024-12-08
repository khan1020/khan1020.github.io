import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Banner2 = (props) => {
  return (
    <>
      <div className="banner2-container1 thq-section-padding">
        <div className="banner2-max-width thq-section-max-width">
          <div className="banner2-container2">
            <h2 className="banner2-title thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="banner2-text5">
                    Welcome to Smart Healthcare Portal
                  </span>
                </Fragment>
              )}
            </h2>
            <h3 className="banner2-text1 thq-heading-3">
              {props.content1 ?? (
                <Fragment>
                  <span className="banner2-text3">
                    Your one-stop solution for all your healthcare needs
                  </span>
                </Fragment>
              )}
            </h3>
          </div>
          <button type="button" className="banner2-button thq-button-filled">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="banner2-text4">Get Started</span>
                </Fragment>
              )}
            </span>
          </button>
          <video
            src={props.video1Src}
            loop="true"
            muted="true"
            poster={props.video1Poster}
            autoPlay="true"
            className="banner2-video"
          ></video>
        </div>
      </div>
      <style jsx>
        {`
          .banner2-container1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .banner2-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner2-container2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .banner2-title {
            text-align: center;
          }
          .banner2-text1 {
            text-align: center;
          }
          .banner2-button {
            z-index: 100;
          }
          .banner2-video {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .banner2-text3 {
            display: inline-block;
          }
          .banner2-text4 {
            display: inline-block;
          }
          .banner2-text5 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Banner2.defaultProps = {
  video1Src:
    'https://videos.pexels.com/video-files/5083290/5083290-hd_2048_1080_25fps.mp4',
  content1: undefined,
  action1: undefined,
  heading1: undefined,
  video1Poster:
    'https://images.pexels.com/videos/5083290/pictures/preview-0.jpg',
}

Banner2.propTypes = {
  video1Src: PropTypes.string,
  content1: PropTypes.element,
  action1: PropTypes.element,
  heading1: PropTypes.element,
  video1Poster: PropTypes.string,
}

export default Banner2

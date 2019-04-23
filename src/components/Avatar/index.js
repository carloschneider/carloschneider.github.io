import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Avatar = () => (
  <div className="avatar">
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "carlo-schneider.jpg" }) {
            childImageSharp {
              fixed(quality: 100, width: 200, height: 200) {
                src
                srcSet
                width
                height
              }
            }
          }
        }
      `}
      render={data => (
        <Img fixed={data.file.childImageSharp.fixed} alt="Carlo Schneider" />
      )}
    />
  </div>
)

export default Avatar

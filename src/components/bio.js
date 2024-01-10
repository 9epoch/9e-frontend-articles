/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import CycleScrambler from "./CycleScrambler";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/9epoch-logo.png"
        width={50}
        height={50}
        quality={95}
        alt="9epoch logo"
      />
      {author?.name && (
        <p>
          <p>
            9epoch is a team of{"  "}
            <CycleScrambler
              style={{color:'#2c04b7' }}
              intervalMs={3000}
              iterations={9}
              scrambleTextLength={12}
              charset={[
                "#",
                "$",
                "@",
                "%",
                "&",
                "*",
                "o",
                "0",
                ":",
                "8",
                "x",
                "X",
                "O",
                "Q",
              ]}
              textList={[
                "data scientists",
                "quant engineers",
                "cloud architects",
                "quantitative analysts",
                "software engineers",
              ]}
            />
            {". "}
          </p>
          <p>We build impactful solutions in finance and tech.</p>

        </p>
      )}
    </div>
  )
}

export default Bio

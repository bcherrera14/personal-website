// SECTION TEMPLATE
// If you want to add more sections to your page, you can use this component as a template

import React, { useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { motion } from "framer-motion"
import Button from "react-bootstrap/Button"

import { useOnScreen } from "../../hooks"
import ContentWrapper from "../../styles/contentWrapper"
import Underlining from "../../styles/underlining"
import Social from "../social"

// Full Width Section
const StyledSection = styled(motion.section)`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 6rem;
  display: flex;
  justify-content: center;
`

// Fixed width container for content stuff
const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    /* Don't stretch container over the full page width */
    max-width: 45rem;
    height: 100%;
    display: inline-block;
    p {
      margin-top: 0;
      margin-bottom: 0;
    }
    .profile {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 3rem;
      margin-bottom: 2rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: row;
        align-items: center;
        margin-bottom: 3rem;
      }
      .avatar {
        width: 100%;
        max-width: 8.75rem;
        border-radius: 50%;
        margin-right: 4rem;
        margin-bottom: 2rem;
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          margin-bottom: 0;
        }
      }
      .details {
        font-size: 1.125rem;
        line-height: 2rem;
      }
    }
  }
`

// Add more styled components here

const ContactForm = ({ content }) => {
  const { body, frontmatter } = content[0].node

  // Required for animation
  const ref = useRef()
  const onScreen = useOnScreen(ref)
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <StyledSection id="contactform">
      <StyledContentWrapper>
        <h3>Contact</h3>
        <Button>Submit</Button>
        {/* ____SectionContent____ */}
      </StyledContentWrapper>
    </StyledSection>
  )
}

ContactForm.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        body: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default ContactForm

import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Hi, see my other{" "}
    <Styled.a href="https://github.com/ekaone" target="_blank">
      stuff
    </Styled.a>{" "}
    app.
  </Fragment>
)

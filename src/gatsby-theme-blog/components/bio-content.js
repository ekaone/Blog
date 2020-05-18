import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Hi, see my{" "}
    <Styled.a href="https://twolevel.net/" target="_blank">
      scratch
    </Styled.a>{" "}
    app, join my <Styled.a href="https://discord.gg/Hwze4FS">Discord</Styled.a>
  </Fragment>
)

import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import GamesList from "../../components/GamesList"

const GamesIndex = (props, { collection }) => {
  const games = enhanceCollection(collection, {
    filter: { layout: "Game" },
    sort: "date",
    reverse: true,
  })

  return (
    <Page { ...props }>
      <GamesList games={ games } />
    </Page>
  )
}

GamesIndex.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default GamesIndex

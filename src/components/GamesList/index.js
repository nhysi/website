import React, { PropTypes } from "react"
import { Link } from "phenomic"

import Button from "../../components/Button"
import styles from "./index.css"

const GamesList = ({ games }) => {
  return (
    <ul className={ styles.listContainer }>
        {
          games.map((game) => (
            <li key={ game.__url } className={ styles.listItem }>
                {
                  game.hero &&
                  <div className={ styles.heroBackground }>
                    {
                      game.hero.match(/(jpg|jpeg|png|gif)/gi)
                      ? <img src={ game.hero } />
                      : <video src={ game.hero } autoPlay loop muted playsInline />
                    }
                  </div>
                }
                <div className={ styles.wrapper }>
                  <h1 className={ styles.heading }>
                    {
                      game.logolight && game.logodark
                      ? [<img key="logolight" src={ game.logolight } alt={ game.title } className={ styles.logolight }/>,
                         <img key="logodark" src={ game.logodark } alt={ game.title } className={ styles.logodark }/>]
                      : game.title
                    }
                  </h1>
                  {
                    game.blurb &&
                    <p className={ styles.blurb }>{ game.blurb }</p>
                  }
                  <Link to={ game.__url }>
                    <Button className={ styles.cta } light>
                      { game.name }
                    </Button>
                  </Link>
                </div>
            </li>
          ))
        }
    </ul>
  )
}

GamesList.propTypes = {
  games: PropTypes.array.isRequired,
}

export default GamesList

import React, { PropTypes } from "react"
import { Link } from "phenomic"

import Button from "../../components/Button"
import styles from "./index.css"

const JobsList = ({ jobs }) => {
  return (
    <ul className={ styles.listContainer}>
        {
          jobs.map((job) => (
            <li key={ job.__url } className={ styles.listItem }>
              {
                job.background &&
                <div className={ styles.heroBackground }>
                  <img src={ job.background} />
                </div>
              }

              <div className={ styles.wrapper }>
                <Link to={ job.__url }>
                  <h2 className={ styles.heading }>{ job.title }</h2>
                  {
                    job.blurb &&
                    <p className={ styles.blurb }>{ job.blurb }</p>
                  }
                  <Button className={ styles.cta }>
                    { `More about the role` }
                  </Button>
                </Link>
              </div>
            </li>
          ))
        }
    </ul>
  )
}

JobsList.propTypes = {
  jobs: PropTypes.array.isRequired,
}

export default JobsList

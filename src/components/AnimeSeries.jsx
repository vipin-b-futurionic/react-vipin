import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesCard"

const AnimeSeries = () => {
    return (
      <ul>
        {seriesData.map( (curElem) => (
          <SeriesCard key={curElem.id} data={curElem} />

        ))}
        
      </ul>
    )
  }

export default AnimeSeries

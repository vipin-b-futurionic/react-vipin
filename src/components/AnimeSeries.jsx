import seriesData from "../api/seriesData.json"

const AnimeSeries = () =>{
    return (
      <ul>
        {seriesData.map( (curElem) => {
          return (
            <li key = {curElem.id}>
              <div>
                <img 
                src={curElem.img_url} 
                alt="qot.jpg"
                width="40%"
                height="40%"
                />
              </div>

              <h2>Name: {curElem.name}</h2>
              <h3>Rating:{curElem.rating} </h3>
              <p> Summary: {curElem.description}</p>
              <p> genre: {curElem.genre}</p>
              <p> cast: {curElem.cast}</p>
              <a href={curElem.watch_url} target="_blank">
              <button>Watch Now</button>
              
              </a>

            </li>
          )

        })}
        
      </ul>
    )
  }

export default AnimeSeries

import seriesData from "../api/seriesData.json"

const AnimeSeries = () =>{
    return (
      <div>
        <div>
          <img 
          src={seriesData[0].img_url} 
          alt="qot.jpg"
          width="40%"
          height="40%"
           />
        </div>

        <h2>Name: {seriesData[0].name}</h2>
        <h3>Rating:{seriesData[0].rating} </h3>
        <p> Summary: {seriesData[0].description}</p>
        <p> genre: {seriesData[0].genre}</p>
        <p> cast: {seriesData[0].cast}</p>
        <a href={seriesData[0].watch_url} target="_blank">
          <button>Watch Now</button>
        </a>

      </div>
    )
  }

export default AnimeSeries

import './App.css';
import Header from './components/Header';
import Card from './components/Card';

const App = () => {
  return (
    <div className = "App">
     <Header />

     <div className='container'>

     <Card>
      <img class ="cardImg" src="https://upload.wikimedia.org/wikipedia/en/7/79/The_Glory_TV_series.jpg" alt="The Glory"/>
        <h3>The Glory</h3>
        <h4>Thriller</h4>
        <a href="https://www.netflix.com/title/81519223">
            <button>Watch Now</button>
        </a>
      </Card>

      <Card>
      <img class ="cardImg" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQM_lw1oUVsZinPc9ZjxYeNUBZPAPOrQYLXzUNhYy3kyD6dFZ4u" alt="The Rookie"/>
        <h3>The Rookie</h3>
        <h4>Drama</h4>
        <a href="https://www.hulu.com/series/the-rookie-1138ee62-b9d9-4561-8094-3f7cda4bbd22?entity_id=fc827d73-3a1b-4f35-b387-56eeda93a22a">
            <button>Watch Now</button>
        </a>
      </Card>
      
      <Card>
      <img class ="cardImg" src="https://upload.wikimedia.org/wikipedia/en/1/12/The_Queen%27s_Gambit_%28miniseries%29.png" alt="The Queen's Gambit"/>
        <h3>The Queen's Gambit</h3>
        <h4>Drama</h4>
        <a href="https://www.netflix.com/title/80234304">
            <button>Watch Now</button>
        </a>
      </Card>

      <Card>
      <img class ="cardImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEeuUlzHcyhPBEoF0y1nJNu3yLErqPHYe0w&s" alt='The Crown'/>
        <h3>The Crown</h3>
        <h4>History</h4>
        <a href="https://www.netflix.com/title/80025678">
            <button>Watch Now</button>
        </a>
      </Card>

      <Card>
      <img class ="cardImg" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQmh7udlDdVsRWs2Jc8yU4zcpLjnbqCrGJham3-H-Lt2PIHabmx" alt="Bridgerton"/>
        <h3>Bridgerton</h3>
        <h4>Drama</h4>
        <a href="https://www.netflix.com/title/80232398">
            <button>Watch Now</button>
        </a>
      </Card>

      <Card>
      <img class ="cardImg" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRSJIlzi2lBoRz45vP_NjtM_DymgN_uPrH0TU7ufcF5CwDrMU9A" alt="Suits"/>
        <h3>Suits</h3>
        <h4>Drama</h4>
        <a href="https://www.netflix.com/title/70195800">
            <button>Watch Now</button>
        </a>
      </Card>

      <Card>
      <img class ="cardImg" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSiogYxtTl08WbEkj71vnapcaLHcx9op6JM97Kn2w5Oft_yBuC_" alt="Death Note"/>
        <h3>Death Note</h3>
        <h4>Thriller</h4>
        <a href="https://www.youtube.com/show/SCwbfpcvP2THiJht2ZvnYa0w?season=1&sbp=CgEx">
            <button>Watch Now</button>
        </a>
      </Card>

      <Card>
      <img class ="cardImg" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4GoFHkVFb5Xj-wk5nkv0PN5MaEXJujF9NyZ_pFUW6HU1EQex8" alt="You"/>
        <h3>You</h3>
        <h4>Thriller</h4>
        <a href="https://www.netflix.com/title/80211991">
            <button>Watch Now</button>
        </a>
      </Card>

      <Card>
      <img class ="cardImg" src="https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_FMjpg_UY1922_.jpg" alt="The Office"/>
        <h3>The Office</h3>
        <h4>Sitcom</h4>
        <a href="https://www.peacocktv.com/stream-tv/the-office">
            <button>Watch Now</button>
        </a>
      </Card>

      <Card>
      <img class ="cardImg" src="https://image.tmdb.org/t/p/original/mUb2bkbRAZHjU4N0y4wb7BoRKBq.jpg" alt="Modern Family"/>
        <h3>Modern Family</h3>
        <h4>Sitcom</h4>
        <a href="https://www.hulu.com/series/modern-family-883c414c-34a3-4fcc-b50a-0ad5a184c977">
            <button>Watch Now</button>
        </a>
      </Card>


     </div>

    </div>
  )
}
export default App
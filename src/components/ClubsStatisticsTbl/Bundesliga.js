import React from "react";

function Bundesliga(props) {
  return (
    <div>
      <div>
        <button
          className="btn btn-outline-info"
          onClick={props.TblBundesligaEvent}
        >
          Get back to see for another League
        </button>
      </div>
      <br />
      <table className="table table-active table-hover">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>F</th>
            <th>A</th>
            <th>GD</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FC Bayern München</td>
            <td>25</td>
            <td>17</td>
            <td>4</td>
            <td>4</td>
            <td>73</td>
            <td>26</td>
            <td>47</td>
            <td>55</td>
          </tr>
          <tr>
            <td>Borussia Dortmund</td>
            <td>25</td>
            <td>15</td>
            <td>6</td>
            <td>4</td>
            <td>68</td>
            <td>33</td>
            <td>35</td>
            <td>51</td>
          </tr>
          <tr>
            <td>RasenBallsport Leipzig</td>
            <td>25</td>
            <td>14</td>
            <td>8</td>
            <td>3</td>
            <td>62</td>
            <td>26</td>
            <td>36</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Borussia Mönchengladbach</td>
            <td>25</td>
            <td>15</td>
            <td>4</td>
            <td>6</td>
            <td>49</td>
            <td>30</td>
            <td>19</td>
            <td>49</td>
          </tr>
          <tr>
            <td>Bayer Leverkusen</td>
            <td>25</td>
            <td>14</td>
            <td>5</td>
            <td>6</td>
            <td>45</td>
            <td>30</td>
            <td>15</td>
            <td>47</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Bundesliga;

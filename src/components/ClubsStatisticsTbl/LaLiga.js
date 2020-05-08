import React from "react";

function LaLiga(props) {
  return (
    <div>
      <div>
        <button className="btn btn-outline-info" onClick={props.TblLaLigaEvent}>
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
            <td>Barcelona</td>
            <td>27</td>
            <td>18</td>
            <td>4</td>
            <td>5</td>
            <td>63</td>
            <td>31</td>
            <td>32</td>
            <td>58</td>
          </tr>
          <tr>
            <td>Real Madrid</td>
            <td>27</td>
            <td>16</td>
            <td>8</td>
            <td>3</td>
            <td>49</td>
            <td>19</td>
            <td>30</td>
            <td>56</td>
          </tr>
          <tr>
            <td>Sevilla</td>
            <td>27</td>
            <td>13</td>
            <td>8</td>
            <td>6</td>
            <td>39</td>
            <td>29</td>
            <td>10</td>
            <td>47</td>
          </tr>
          <tr>
            <td>Real Sociedad</td>
            <td>27</td>
            <td>14</td>
            <td>4</td>
            <td>9</td>
            <td>45</td>
            <td>33</td>
            <td>12</td>
            <td>46</td>
          </tr>
          <tr>
            <td>Getafe</td>
            <td>27</td>
            <td>13</td>
            <td>7</td>
            <td>7</td>
            <td>37</td>
            <td>25</td>
            <td>12</td>
            <td>46</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LaLiga;

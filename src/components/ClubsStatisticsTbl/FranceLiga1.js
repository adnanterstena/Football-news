import React from "react";

function FranceLiga1(props) {
  return (
    <div>
      <div>
        <button
          className="btn btn-outline-info"
          onClick={props.TblFranceLiga1Event}
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
            <td>Paris Saint-Germain</td>
            <td>27</td>
            <td>22</td>
            <td>2</td>
            <td>3</td>
            <td>75</td>
            <td>24</td>
            <td>51</td>
            <td>68</td>
          </tr>
          <tr>
            <td>Marseille</td>
            <td>28</td>
            <td>16</td>
            <td>8</td>
            <td>4</td>
            <td>41</td>
            <td>29</td>
            <td>12</td>
            <td>56</td>
          </tr>
          <tr>
            <td>Rennes</td>
            <td>29</td>
            <td>15</td>
            <td>5</td>
            <td>8</td>
            <td>38</td>
            <td>24</td>
            <td>14</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Lille 28 15 4 9 35 27 8 49</td>
            <td>28</td>
            <td>15</td>
            <td>4</td>
            <td>9</td>
            <td>35</td>
            <td>27</td>
            <td>8</td>
            <td>49</td>
          </tr>
          <tr>
            <td>Nice</td>
            <td>28</td>
            <td>11</td>
            <td>8</td>
            <td>9</td>
            <td>41</td>
            <td>38</td>
            <td>3</td>
            <td>41</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FranceLiga1;

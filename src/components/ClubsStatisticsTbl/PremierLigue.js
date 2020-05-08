import React from "react";

function PremierLigue(props) {
  return (
    <div>
      <div>
        <button
          className="btn btn-outline-info"
          onClick={props.TblPremierLigueEvent}
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
            <td>Liverpool</td>
            <td>29</td>
            <td>27</td>
            <td>1</td>
            <td>1</td>
            <td>66</td>
            <td>21</td>
            <td>45</td>
            <td>82</td>
          </tr>
          <tr>
            <td>Manchester City</td>
            <td>28</td>
            <td>18</td>
            <td>3</td>
            <td>7</td>
            <td>68</td>
            <td>31</td>
            <td>37</td>
            <td>57</td>
          </tr>
          <tr>
            <td>Leicester City</td>
            <td>29</td>
            <td>16</td>
            <td>5</td>
            <td>8</td>
            <td>58</td>
            <td>28</td>
            <td>30</td>
            <td>53</td>
          </tr>
          <tr>
            <td>Chelsea</td>
            <td>29</td>
            <td>14</td>
            <td>6</td>
            <td>9</td>
            <td>51</td>
            <td>39</td>
            <td>12</td>
            <td>48</td>
          </tr>
          <tr>
            <td>Manchester United</td>
            <td>29</td>
            <td>12</td>
            <td>9</td>
            <td>8</td>
            <td>44</td>
            <td>30</td>
            <td>14</td>
            <td>45</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PremierLigue;

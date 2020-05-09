import React from "react";

function SeriaA(props) {
  return (
    <div>
      <div>
        <button className="btn btn-outline-info" onClick={props.TblSeriaAEvent}>
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
            <td>Juventus</td>
            <td>26</td>
            <td>20</td>
            <td>3</td>
            <td>3</td>
            <td>50</td>
            <td>24</td>
            <td>26</td>
            <td>63</td>
          </tr>
          <tr>
            <td>Lazio</td>
            <td>26</td>
            <td>19</td>
            <td>5</td>
            <td>2</td>
            <td>60</td>
            <td>23</td>
            <td>37</td>
            <td>62</td>
          </tr>
          <tr>
            <td>Inter</td>
            <td>25</td>
            <td>16</td>
            <td>6</td>
            <td>3</td>
            <td>49</td>
            <td>24</td>
            <td>25</td>
            <td>54</td>
          </tr>
          <tr>
            <td>Atalanta</td>
            <td>25</td>
            <td>14</td>
            <td>6</td>
            <td>5</td>
            <td>70</td>
            <td>34</td>
            <td>36</td>
            <td>48</td>
          </tr>
          <tr>
            <td>Roma</td>
            <td>26</td>
            <td>13</td>
            <td>6</td>
            <td>7</td>
            <td>51</td>
            <td>35</td>
            <td>16</td>
            <td>45</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SeriaA;

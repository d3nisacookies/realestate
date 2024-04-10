import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js';

function Dashboard() {
  const [propertyViewsData, setPropertyViewsData] = useState([]);

  useEffect(() => {
    fetch('/api/property-views')
     .then(response => response.json())
      .then(data => setPropertyViewsData(data));
  }, []);

  const propertyViewsChart = new Chart(document.getElementById('property-views-chart'), {
    type: 'bar',
    data: {
      labels: propertyViewsData.map(data => data.month),
      datasets: [{
        label: 'Property Views',
        data: propertyViewsData.map(data => data.views),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  return (
    <div className="dashboard">
      <h1>Welcome, {username}!</h1>
      <p>You are now logged in.</p>
      <div className="charts">
        <div className="chart">
          <h2>Property Views</h2>
          <canvas id="property-views-chart"></canvas>
        </div>
        <div className="chart">
          <h2>Saved Properties</h2>
          <canvas id="saved-properties-chart"></canvas>
        </div>
      </div>
      <input type="text" placeholder="search for properties"/>
      <button>search</button>
      <ul>
        <li>
          <Link to="/dashboard/recent-activity">Recent Activity</Link>
        </li>
        <li>
          <Link to="/dashboard/saved-properties">Saved Properties</Link>
        </li>
      </ul>
      <button>log out</button>
      <Link to="/system-admin">
        <button>System Admin Menu</button>
      </Link>
    </div>
  );
}

export default Dashboard;
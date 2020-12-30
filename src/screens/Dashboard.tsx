/* eslint-disable prettier/prettier */
import React from 'react';

interface DashboardProps {
  userName?: string;
}

const Dashboard = (props: DashboardProps) : JSX.Element => {
  return (
		<div>
			<h1>{props.userName}</h1>
			<p>Dashboard</p>
		</div>
  );
};

export default Dashboard;

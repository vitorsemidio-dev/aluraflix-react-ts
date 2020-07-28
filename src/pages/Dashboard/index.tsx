import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Link to="/cadastro/video"> Cadastro Video</Link>
    </div>
  );
};

export default Dashboard;

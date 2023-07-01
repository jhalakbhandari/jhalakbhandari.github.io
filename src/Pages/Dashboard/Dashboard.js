import React from "react";
import Layout from "../../Layout/Layout";
import { NavLink } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Layout>
      <div>
        <button>
          <NavLink to="/dashboard/user/addproject">Add projects</NavLink>
        </button>
      </div>
      <div>
        <button>Add Skills</button>
      </div>
    </Layout>
  );
};

export default Dashboard;

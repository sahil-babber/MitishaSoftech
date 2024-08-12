import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
function Employes() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  const fetchEmployees = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_BASE_URL}/employees/getEmploye`,
        {
          method: "POST",
          headers: {
            Authorization: token,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Fetched data:", data.body); // Check the structure of data.body

      // Adjust data handling based on actual structure
      setEmployees(data.body || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

 

  // =======delete employee ========
  const deleteEmploye = async (id) =>{
   try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_BASE_URL}/employees/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    
    const responseText = await response.text();
    console.log("Response Text:", responseText);
    
    if (response.ok) {
      const data = JSON.parse(responseText); 
      console.log("DELETED USER:", data.body);
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    
  } catch (error) {
    console.error('Error deleting employee:', error);
  }
  
  }

  useEffect(() => {
    fetchEmployees();
  }, [deleteEmploye ]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="container">
      <h2 className="text-center syne">Employees Data</h2>
      <div className="container mt-5">
      {employees.length > 0 ? (
  <table className="table">
    <thead>
      <tr>
        <th className="p-4">EmpID</th>
        <th className="p-4">Name</th>
        <th className="p-4">Designation</th>
        <th className="p-4">Delete</th>
      </tr>
    </thead>
    <tbody>
      {employees.map((employee) => (
        <tr key={employee._id} className="align-middle">
          <td className="p-4">{employee.empID}</td>
          <td className="p-4">{employee.employename}</td>
          <td className="p-4">{employee.designation}</td>
          <td className="p-4">
          <IconButton aria-label="delete" style={{ color: 'red' }} onClick={()=>{deleteEmploye(employee._id)}}>
              <DeleteIcon />
            </IconButton>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
) : (
  <p>No employees found</p>
)}

      </div>
      </div>
    </>
  );
}

export default Employes;

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Form, Button, Table } from 'react-bootstrap';
import './Verify.css'; // Import the CSS file

function VerifyEmploye() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [employeeData, setEmployeeData] = useState(null); // State to hold employee data
    const [errorMessage, setErrorMessage] = useState(''); // State to hold error messages

    // Function to handle form submission
    const onSubmit = async (data) => {
        try {
            // Log form data for debugging
            console.log("Form data submitted:", data);

            // Call the API with the form data
            const response = await axios.post('/interns/findIntern', data);

            if (response.status === 200 && response.data.success) {
                setEmployeeData(response.data.body); // Save employee data to state
                setErrorMessage(''); // Clear any previous error messages
            } else {
                setEmployeeData(null); // Clear employee data
                setErrorMessage(response.data.message || 'Unexpected response');
            }
        } catch (error) {
            console.error("Error fetching employee:", error);
            setEmployeeData(null); // Clear employee data
            setErrorMessage('Please Enter Valid registration No');
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Control
                    type="text"
                    placeholder="Enter your Registration no."
                    {...register("regNO", { required: "Registration no. is required" })} // Changed field name to match backend
                    className="rounded-0 border form-footer verify-input rounded-pill mb-2"
                />
                {errors.regNO && <p className="text-danger">{errors.regNO.message}</p>} {/* Changed field name to match backend */}
                <div className="">
                    <Button type="submit" className="w-100 mt-4 rounded-pill btn-footer">
                        Verify Intern
                    </Button>
                </div>
            </Form>

            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        {errorMessage && (
                            <div className="alert alert-danger">
                                {errorMessage}
                            </div>
                        )}
                        {employeeData ? (
                            <Table striped bordered hover>
                                <tbody>
                                    <tr className="bg-s">
                                        <th>Registration No.</th> {/* Updated to match backend field */}
                                        <td>{employeeData.regNO}</td> {/* Updated to match backend field */}
                                    </tr>
                                    <tr className="table-row-odd">
                                        <th>Name</th>
                                        <td className='text-capitalize'>{employeeData.intername}</td> {/* Updated to match backend field */}
                                    </tr>
                                    <tr className="table-row-even">
                                        <th>Designation</th>
                                        <td className='text-capitalize'>{employeeData.designation}</td> {/* Updated to match backend field */}
                                    </tr>
                                    <tr className="table-row-even">
                                        <th>Adhar no.</th>
                                        <td>{employeeData.adharno}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        ) : (
                            <p></p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default VerifyEmploye;

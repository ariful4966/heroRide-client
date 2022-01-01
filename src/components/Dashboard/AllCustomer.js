import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from 'react-redux';

const AllCustomer = () => {
    const customerData = useSelector(state=>state.customer)
    const table = ["Name", "Email", "Age", "Phone","Address", "Vihicals"]
  return (
    <div>
      <h1>All Customer</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
              <th>SL No:</th>
            {
                table.map((tb, idx)=><th key={idx}>{tb}</th>)
            }
          </tr>
        </thead>
        <tbody>
         {
            customerData && customerData.map((customer, i)=>
                <tr key={customer._id}>
                <td>{i+1}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.age}</td>
                <td>{customer.phone}</td>
                <td>{customer.address}</td>
                <td>{customer.vihicalType}</td>
              </tr>
                )
         }
          
        </tbody>
      </Table>
    </div>
  );
};

export default AllCustomer;

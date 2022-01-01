import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const AllRider = () => {
  const riderData = useSelector((state) => state.rider);
  const table = [
    "Name",
    "Email",
    "Age",
    "Phone",
    "Address",
    "Vihical",
    "Car Information",
    "Area",
  ];

  return (
    <div>
      <h1>See All Rider</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SL No:</th>
            {table.map((tb, idx) => (
              <th key={idx}>{tb}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {riderData && riderData.map((rider, i) => (
            <tr key={rider._id}>
              <td>{i + 1}</td>
              <td>{rider.name}</td>
              <td>{rider.email}</td>
              <td>{rider.age}</td>
              <td>{rider.phone}</td>
              <td>{rider.address}</td>
              <td>{rider.vihicalType}</td>
              <td>
                {rider.carInfo.name} -
                {rider.carInfo.model}
              </td>
              <td>{rider.area}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllRider;

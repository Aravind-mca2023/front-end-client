import { useState, useEffect } from "react";
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

export default function Alldata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://back-end-server-qggz.onrender.com/data');
      setData(response.data);
    };
    fetchData();
  }, []);

  function handleDelete(index) {
    const deleteItem = data[index];
    axios.delete(`https://back-end-server-qggz.onrender.com/delete/${deleteItem._id}`).then(() => {
      alert(`Account ${deleteItem.id} Deleted from Database`);
      const updatedData = [...data];
      updatedData.splice(index, 1);
      setData(updatedData);
    });
  }

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th id="tab">USER ID</th>
            <th id="tab1">NAME</th>
            <th id="tab2">EMAIL</th>
            <th id="tab3">BALANCE</th>
            <th id="tab4">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item._id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.amount}</td>
              <td><Button onClick={() => handleDelete(index)}>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

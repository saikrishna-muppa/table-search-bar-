import { useState } from "react";
import { data } from "./FilterizationData";
export default function App() {
  const [filterdata, setfilterData] = useState(data);
  const [condition, setCondition] = useState(false);
  const [first, setFirst] = useState("age");
  const [second, setSecond] = useState("attendance");
  const filterFunction = (searchTerm, objKey) => {
    const filteredData = filterdata.filter((obj) => {
      return obj[objKey].toLowerCase().includes(searchTerm.toLowerCase());
    });
    setfilterData(filteredData);
    if (searchTerm !== "") {
      return filteredData;
    } else {
      setfilterData(data);
    }
  };
  //

  const sortArray = (type) => {
    const types = {
      age: "age",
      rating: "rating",
      attendance: "attendance"
    };
    console.log(sortArray, "type");
    const sortProperty = types[type];
    console.log(sortProperty, "sortProperty");
    var sorted;
    if (type === "ratingandattendance") {
      sorted = [...data].sort((a, b) => {
        console.log(b.attendance - a.attendance || b.rating - a.rating, "ww");

        return b.attendance - a.attendance || b.rating - a.rating;
      });
    } else {
      sorted = [...data].sort((a, b) => b[sortProperty] - a[sortProperty]);
    }
    console.log(sortArray, "sorted");
    setfilterData(sorted);
  };

  const tableData = () => {
    return filterdata.map((user, index) => {
      return (
        <tr key={index}>
          <td> {user.name} </td>
          <td> {user.age} </td>
          <td>{user.attendance} </td>
          <td>{user.rating} </td>
          <td> {user.college} </td>
        </tr>
      );
    });
  };

  const applyFilter = () => {
    if (condition) {
      var sorted;
      sorted = [...data].sort((a, b) => {
        // console.log(b.attendance - a.attendance || b.rating - a.rating, "ww");

        return b[first] - a[first] || b[second] - a[second];
      });
      console.log("filterData:", first + "AND" + second);
      setfilterData(sorted);
    } else {
      // var sorted;
      sorted = [...data].sort((a, b) => {
        // console.log(b.attendance - a.attendance || b.rating - a.rating, "ww");

        return b[second] - a[second] || b[first] - a[first];
      });

      setfilterData(sorted);
      console.log("filterData:", first + "OR" + second);
    }
  };
  return (
    <div className="App">
      <select onChange={(e) => setFirst(e.target.value)}>
        <option value="age">age</option>
        <option value="rating">rating</option>
        <option value="attendance">attendance</option>
      </select>
      <button onClick={() => setCondition(!condition)}>
        {condition ? <div>AND</div> : <div>OR</div>}{" "}
      </button>
      <select onChange={(e) => setSecond(e.target.value)}>
        <option value="age">age</option>
        <option value="rating">rating</option>
        <option value="attendance">attendance</option>
      </select>
      <button onClick={() => applyFilter()}>Apply</button>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => filterFunction(e.target.value, "name")}
      ></input>
      <input
        type="text"
        name="age"
        placeholder="Age"
        onChange={(e) => filterFunction(e.target.value, "age")}
      ></input>
      <input
        type="text"
        name="college"
        placeholder="College"
        onChange={(e) => filterFunction(e.target.value, "college")}
      ></input>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>attendance </th>
            <th> rating</th>
            <th>college</th>
          </tr>
        </thead>
        {tableData()}
        {/* {data
          .filter((item) => {
            if (filterdata === "") {
              return item;
            } else if (
              item.name.toLowerCase().includes(filterdata.toLowerCase())
            ) {
              return item.name.toLowerCase().includes(filterdata.toLowerCase());
            } else if (
              item.college.toLowerCase().includes(filterdata.toLowerCase())
            ) {
        return item.college.toLowerCase().includes(filterdata.toLowerCase());
            }
          })
          .map((user, index) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.age} </td>
                <td>{user.college} </td>
              </tr>
            );
          })} */}
      </table>
    </div>
  );
}

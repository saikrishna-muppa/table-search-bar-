import { useState } from "react";
import { data } from "./data";
import "./styles.css";

export const SearchValue = () => {
  const [appData] = useState(data);
  const [filterdata, setfilterData] = useState(appData);

  // const searchJobs = (searchKey) => {
  //   const text = data.filter((obj) =>
  //     Object.keys(obj).some((key) =>
  //       obj[key].toLowerCase().includes(searchKey.toLowerCase())
  //     )
  //   );
  //   setfilterData(text);
  //   if (searchKey !== "") {
  //     return text;
  //   } else {
  //     setfilterData(data);
  //   }
  // };

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

  const tableData = () => {
    return filterdata.map((user, index) => {
      return (
        <tr key={index}>
          <td> {user.name} </td>
          <td> {user.age} </td>
          <td> {user.college} </td>
        </tr>
      );
    });
  };
  return (
    <div className="App">
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
            <th>College</th>
          </tr>
        </thead>
        {tableData()}
      </table>
    </div>
  );
};

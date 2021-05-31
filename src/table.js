import { useState } from "react";
// import { data } from "./data";
import "./styles.css";

export const SearchValue = () => {
  const data = [
    {
      name: "sai",
      age: "22",
      attendance: "50",
      rating: "5",
      college: "vits"
    },
    {
      name: "sai",
      age: "22",
      attendance: "75",
      rating: "3",
      college: "vits"
    },
    {
      name: "saifknfkf",
      age: "29",
      attendance: "65",
      rating: "3",
      college: "vits"
    },
    {
      name: "dfgffgsai",
      age: "21",
      attendance: "99",
      rating: "5",
      college: "vits"
    },
    {
      name: "sadsfai",
      age: "28",
      attendance: "55",
      rating: "3",
      college: "vits"
    },
    {
      name: "sharavni",
      age: "22",
      attendance: "35",
      rating: "3",
      college: "kamala"
    },
    {
      name: "saikrishna",
      age: "18",
      attendance: "95",
      rating: "3",
      college: "jits"
    },
    {
      name: "krishna",
      age: "26",
      attendance: "75",
      rating: "5",
      college: "krmr"
    },
    {
      name: "madhu",
      age: "20",
      attendance: "65",
      rating: "3",
      college: "Jntu"
    },
    {
      name: "dev",
      age: "25",
      attendance: "65",
      rating: "4",
      college: "kits"
    },
    {
      name: "rohith",
      age: "22",
      attendance: "85",
      rating: "5",
      college: "5its"
    },
    {
      name: "mobin",
      age: "21",
      attendance: "95",
      rating: "3",
      college: "22vits"
    }
  ];

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

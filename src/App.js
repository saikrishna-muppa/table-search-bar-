import { useState } from "react";
import "./styles.css";

export default function App() {
  const data = [
    {
      name: "sai",
      age: "22",
      college: "vits"
    },
    {
      name: "sai",
      age: "22",
      college: "vits"
    },
    {
      name: "saifknfkf",
      age: "29",
      college: "vits"
    },
    {
      name: "dfgffgsai",
      age: "21",
      college: "vits"
    },
    {
      name: "sadsfai",
      age: "28",
      college: "vits"
    },
    {
      name: "sharavni",
      age: "22",
      college: "kamala"
    },
    {
      name: "saikrishna",
      age: "18",
      college: "jits"
    },
    {
      name: "krishna",
      age: "26",
      college: "krmr"
    },
    {
      name: "madhu",
      age: "20",
      college: "jntu"
    },
    {
      name: "dev",
      age: "25",
      college: "kits"
    },
    {
      name: "rohith",
      age: "22",
      college: "5its"
    },
    {
      name: "mobin",
      age: "21",
      college: "22vits"
    }
  ];
  const [filterdata, setfilterData] = useState(data);

  const searchJobs = (searchKey) => {
    const text = data.filter((obj) =>
      Object.keys(obj)
      .some((key) => obj[key].includes(searchKey.toLowerCase()))
    );
    setfilterData(text);
    if (searchKey !== "") {
      return text;
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
        onChange={(e) => searchJobs(e.target.value.toString())}
      ></input>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>Country</th>
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

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

  const searchJobs = (searchWord) => {
    console.log("searchWord", searchWord);
    if (searchWord !== "") {
      // console.log(searchWord);

      const newData = data.filter((item) => {
        const name = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const college = item.college
          ? item.college.toUpperCase()
          : "".toUpperCase();
        const age = item.age;
        const searchWordData = searchWord.toUpperCase();

        if (name.indexOf(searchWordData) > -1) {
          return name.indexOf(searchWordData) > -1;
        } else if (college.indexOf(searchWordData) > -1) {
          return college.indexOf(searchWordData) > -1;
        } else if (age.indexOf(searchWordData) > -1) {
          return age.indexOf(searchWordData) > -1;
        }
      });
      setfilterData(newData);
    } else {
      // console.log("null");
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
      </table>
    </div>
  );
}

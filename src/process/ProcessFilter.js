import { useState } from "react";
import { data } from "../ClausesFilter/FilterizationData";
import { Modal, Button } from "antd";
import { FiFilter } from "react-icons/fi";
import { Multiselect } from "multiselect-react-dropdown";
import "antd/dist/antd.css";

export default function App() {
  const objectArray = [
    { key: "Option 1", cat: "Group 1" },
    { key: "Option 2", cat: "Group 1" },
    { key: "Option 3", cat: "Group 1" },
    { key: "Option 4", cat: "Group 2" },
    { key: "Option 5", cat: "Group 2" },
    { key: "Option 6", cat: "Group 2" },
    { key: "Option 7", cat: "Group 2" }
  ];

  const [fields, setFields] = useState([{ value: null }]);
  const [filterdata, setfilterData] = useState(data);
  const [condition, setCondition] = useState(false);
  const [first, setFirst] = useState("age");
  const [second, setSecond] = useState("attendance");
  const [isChecked, setIsChecked] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [loading, setLoading] = useState(true);
  const filterFunction = (searchKey) => {
    const text = data.filter((obj) =>
      Object.keys(obj).some((key) =>
        obj[key].toLowerCase().includes(searchKey.toLowerCase())
      )
    );
    setfilterData(text);
    if (searchKey !== "") {
      return text;
    } else {
      setfilterData(data);
    }
  };
  //

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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  const handleSingleCheck = (e) => {
    setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
  };
  const checkedItemList = () => {
    filterdata.map((test, index) => (
      <div key={index}>
        <label>{test.name}</label>
        <input
          type="checkbox"
          name={test.name}
          checked={isChecked[test.name]}
          onChange={handleSingleCheck}
        />
      </div>
    ));
    // setfilterData(checktedItemData);
  };
  // const icon = <FiFilter />;
  return (
    <div className="App">
      <input
        className="main-search"
        type="text"
        placeholder="Search here"
        onChange={(e) => filterFunction(e.target.value.toString())}
      ></input>
      <Button type="primary" onClick={showModal}>
        <FiFilter /> Filter
      </Button>
      <Modal
        // title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* <button type="button" onClick={() => handleAdd()}>
          + addFilter
        </button> */}

        {fields.map((field, idx) => {
          if (idx === 0) {
            return (
              <div key={`${field}-${idx}`} className="filter-options">
                <button
                  className="cross-btn"
                  type="button"
                  onClick={() => handleRemove(idx)}
                >
                  X
                </button>
                <button
                  className="condition-btn"
                  //  onClick={() => setCondition(!condition)}
                >
                  {/* {condition ? <div>sh</div> : <div>OR</div>}{" "} */}
                  show
                </button>
                <select onChange={(e) => setFirst(e.target.value)}>
                  <option value="age">age</option>
                  <option value="rating">rating</option>
                  <option value="attendance">attendance</option>
                </select>
                <select onChange={(e) => setSecond(e.target.value)}>
                  <option value="age">age</option>
                  <option value="rating">rating</option>
                  <option value="attendance">attendance</option>
                </select>
                <button onClick={() => applyFilter()}>Apply</button>
                <Multiselect
                  options={objectArray}
                  onSelect={checkedItemList}
                  displayValue="key"
                  showCheckbox={true}
                />
              </div>
            );
          } else {
            return (
              <div key={`${field}-${idx}`} className="filter-options">
                <button
                  className="cross-btn"
                  type="button"
                  onClick={() => handleRemove(idx)}
                >
                  X
                </button>
                <button
                  className="condition-btn"
                  onClick={() => setCondition(!condition)}
                >
                  {condition ? <div>AND</div> : <div>OR</div>}{" "}
                </button>
                <select onChange={(e) => setFirst(e.target.value)}>
                  <option value="age">age</option>
                  <option value="rating">rating</option>
                  <option value="attendance">attendance</option>
                </select>
                <select onChange={(e) => setSecond(e.target.value)}>
                  <option value="age">age</option>
                  <option value="rating">rating</option>
                  <option value="attendance">attendance</option>
                </select>
                <button onClick={() => applyFilter()}>Apply</button>
                <Multiselect
                  options={objectArray}
                  onSelect={checkedItemList}
                  displayValue="key"
                  showCheckbox={true}
                />
              </div>
            );
          }
        })}
        <button type="button" onClick={() => handleAdd()}>
          + addFilter
        </button>
      </Modal>

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

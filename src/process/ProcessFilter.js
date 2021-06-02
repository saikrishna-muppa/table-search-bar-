import { useState } from "react";
import { data } from "../ClausesFilter/FilterizationData";
import { Modal, Button, Popover } from "antd";
import { FiFilter } from "react-icons/fi";
// import { Multiselect } from "multiselect-react-dropdown";
import MultiSelect from "react-multi-select-component";
import "antd/dist/antd.css";
// import {
//   CheckBoxSelection,
//   Inject,
//   MultiSelectComponent
// } from "@syncfusion/ej2-react-dropdowns";
export default function App() {
  const objectArray = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry" }
  ];
  const firstDropDownList = [
    {
      name: "Name",
      status: "input",
      content: [
        { text: "contains" },
        { text: "isequal" },
        { text: "is not equal" },
        { text: "does not equal" }
      ]
    },
    {
      name: "Assigness",
      status: "mutliplenames",
      content: [{ text: "contains" }, { text: "does not contains" }]
    },
    {
      name: "Started",
      status: "inputdate",
      content: [
        { text: "isbefore" },
        { text: "is after" },
        { text: "is between" }
      ]
    },
    {
      name: "Activity",
      status: "inputdate",
      content: [
        { text: "isbefore" },
        { text: "is after" },
        { text: "is between" }
      ]
    },
    {
      name: "Due",
      status: "inputdate",
      content: [
        { text: "isbefore" },
        { text: "is after" },
        { text: "is between" }
      ]
    },
    {
      name: "Completed",
      status: "inputdate",
      content: [
        { text: "isbefore" },
        { text: "is after" },
        { text: "is between" }
      ]
    },
    {
      name: "Status",
      status: "mutliplecolors",
      content: [{ text: "contains" }, { text: "does not contains" }]
    },
    {
      name: "OverDueTask",
      status: "mutliplecolors",
      content: [{ text: "contains" }, { text: "does not contains" }]
    },
    {
      name: "TaskCOmpleted",
      status: "mutliplecolors",
      content: [{ text: "contains" }, { text: "does not contains" }]
    }
  ];

  const [fields, setFields] = useState([{ value: null }]);
  const [filterdata, setfilterData] = useState(data);
  const [condition, setCondition] = useState(false);
  const [first, setFirst] = useState("age");
  const [second, setSecond] = useState("age");
  const [firstValue, setFirstValue] = useState("age");
  const [secondValue, setSecondValue] = useState("age");
  const [isChecked, setIsChecked] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selected, setSelected] = useState([]);

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

  // const handleSingleCheck = (e) => {
  //   setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
  // };
  // const checkedItemList = () => {
  //   filterdata.map((test, index) => (
  //     <div key={index}>
  //       <label>{test.name}</label>
  //       <input
  //         type="checkbox"
  //         name={test.name}
  //         checked={isChecked[test.name]}
  //         onChange={handleSingleCheck}
  //       />
  //     </div>
  //   ));
  //   // setfilterData(checktedItemData);
  // };
  const content = (idx) => (
    <div className="pop-over-modal">
      {/* <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      > */}
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
              <button className="condition-btn">
                <div>SHOW</div>
              </button>

              <select
                id="store"
                onChange={(e) => setFirst(e.target.value)}
                onClick={() => applyFilter()}
              >
                {firstDropDownList.map((item, index) => {
                  return <option value={item.name}>{item.name}</option>;
                })}
              </select>

              <select
                onChange={(e) => {
                  setSecond(e.target.value);

                  // setSecond(e.target.value);
                }}
                onClick={() => applyFilter()}
              >
                {firstDropDownList.map((item, index) => {
                  return (
                    item.name === first &&
                    item.content.map((val, idx) => {
                      return <option key={val.text}>{val.text}</option>;
                    })
                  );
                })}
              </select>
              {
                <div>
                  {" "}
                  {firstDropDownList.map((i, n) => {
                    console.log(i.status, "status");
                    if (i.status === "input") {
                      return (
                        // <select><option>{i.status}</option> </select>
                        <input placeholder="hee" />
                      );
                    } else if (i.status === "mutliplenames") {
                      <select>
                        <option>{i.status}</option>{" "}
                      </select>;
                    }
                  })}{" "}
                </div>
              }
              <MultiSelect
                options={objectArray}
                value={selected}
                onChange={setSecond}
                displayValue="key"
                labelledBy={"Select"}
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
                {condition ? <div>AND</div> : <div>OR</div>}
              </button>
              <select
                onChange={(e) => setFirstValue(e.target.value)}
                onClick={() => applyFilter()}
              >
                {firstDropDownList.map((item, index) => {
                  return <option value={item.name}>{item.name}</option>;
                })}
                {/* <option value="Name">Name</option>
                <option value="Assigness">Assigness</option>
                <option value="Started">Started</option>
                <option value="Activity">Activity</option>
                <option value="Due">Due</option>
                <option value="Completed">Completed</option>
                <option value="Status">Status</option> */}
              </select>
              <select
                onChange={(e) => setSecondValue(e.target.value)}
                onClick={() => applyFilter()}
              >
                {firstDropDownList.map((item, index) => {
                  return (
                    item.name === firstValue &&
                    item.content.map((val, idx) => {
                      return <option value={val.text}>{val.text}</option>;
                    })
                  );
                })}
              </select>

              <MultiSelect
                options={firstDropDownList}
                value={selected}
                onChange={setSelected}
                displayValue="status"
                labelledBy={"Select"}
              />
            </div>
          );
        }
      })}
      <button
        className="addfilter-btn"
        type="button"
        onClick={() => handleAdd()}
      >
        + addFilter
      </button>
      {/* </Modal> */}
    </div>
  );

  return (
    <div className="App">
      <input
        className="main-search"
        type="text"
        placeholder="Search here"
        onChange={(e) => filterFunction(e.target.value.toString())}
      ></input>
      <Popover content={content}>
        <Button className="filter-btn" onClick={showModal}>
          <div className="filter-btn-text">
            <FiFilter /> Filter
          </div>
        </Button>
      </Popover>
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
        <tbody>{tableData()}</tbody>
      </table>
    </div>
  );
}

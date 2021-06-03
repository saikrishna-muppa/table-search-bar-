import { useState } from "react";
import { data } from "./FF";
import { firstDropDownList } from "./FirstDropDownList";
import { objectArray } from "./ObjectArray";
import { Modal, Button, Popover } from "antd";
import { FiFilter } from "react-icons/fi";
import MultiSelect from "react-multi-select-component";
import "antd/dist/antd.css";

export default function App() {
  const [fields, setFields] = useState([{ value: null, condition: " " }]);
  const [filterdata, setfilterData] = useState(data);
  const [condition, setCondition] = useState(false);
  const [first, setFirst] = useState("Name");
  const [second, setSecond] = useState("Name");
  const [third, setThird] = useState("Name");
  const [firstValue, setFirstValue] = useState("Name");
  const [secondValue, setSecondValue] = useState("Name");
  const [thirdValue, setThirdValue] = useState("Name");
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
          <td> {user.Name} </td>
          <td> {user.WORKFLOW} </td>
          <td>{user.ASSIGNESS} </td>
          <td>{user.ACTIVITY} </td>
          <td> {user.TASKCOMPLETED} </td>
          <td>{user.Status}</td>
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

              {first === "status" ||
              first === "OverDueTask" ||
              first === "TaskCompleted" ? (
                <select onChange={() => setThird(e.target.value)}>
                  {firstDropDownList.map((i, n) => {
                    return (
                      first === i.name &&
                      i.content.map((item, idx) => {
                        return <option key={n}>{item.text}</option>;
                      })
                    );
                  })}
                </select>
              ) : first === "Name" ? (
                <input type="tetx" />
              ) : first === "Assigness" ? (
                <select onChange={() => setThird(e.target.value)}>
                  {firstDropDownList.map((i, n) => {
                    return (
                      first === i.name &&
                      i.content.map((item, idx) => {
                        return <option key={idx}>{item.text}</option>;
                      })
                    );
                  })}
                </select>
              ) : (
                <input type="date" />
              )}
              {/* <MultiSelect
                options={objectArray}
                value={selected}
                onChange={setSecond}
                displayValue="key"
                labelledBy={"Select"}
              /> */}
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
              {firstValue === "status" ||
              firstValue === "OverDueTask" ||
              firstValue === "TaskCompleted" ? (
                <select onChange={(e) => setThirdValue(e.target.value)}>
                  {firstDropDownList.map((item, idx) => {
                    return (
                      firstValue === item.name &&
                      item.content.map((item, idx) => {
                        return <option key={idx}>{item.text}</option>;
                      })
                    );
                  })}
                </select>
              ) : firstValue === "Name" ? (
                <input type="text" />
              ) : firstValue === "Assigness" ? (
                <select onChange={(e) => setThirdValue(e.target.value)}>
                  {firstDropDownList.map((i, d) => {
                    return (
                      firstValue === i.name &&
                      i.content.map((item, idx) => {
                        return (
                          <option key={idx} value={item.name}>
                            {item.text}
                          </option>
                        );
                      })
                    );
                  })}
                </select>
              ) : (
                <input type="date" />
              )}

              {/* <MultiSelect
                options={firstDropDownList}
                value={selected}
                onChange={setSelected}
                displayValue="status"
                labelledBy={"Select"}
              /> */}
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
      <div className="input-filter-btn">
        <div>
          <input
            className="main-search"
            type="text"
            placeholder="Search here"
            onChange={(e) => filterFunction(e.target.value.toString())}
          ></input>
        </div>

        <div className="filter">
          <Popover content={content} trigger="click">
            <div className="filter-btn">
              <div className="ft-text">
                <FiFilter /> Filters
              </div>
            </div>
          </Popover>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>WORKFLOW</th>
            <th>ASSIGNESS </th>
            <th> ACTIVITY</th>
            <th>TASK COMPLETED</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{tableData()}</tbody>
      </table>
    </div>
  );
}

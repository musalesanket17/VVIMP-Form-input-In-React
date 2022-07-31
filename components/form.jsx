import React, { useState } from "react";

let obj = {
  name: "",
  married: "",
  gender: ""
};

export default function Form() {
  const [data, setData] = useState(obj);
  const fileref = React.useRef();
  const { name, married, gender } = data;

  const handleAdd = (e) => {
    let { name, value, checked, type } = e.target;

    value = type === "checkbox" ? checked : value;

    setData({ ...data, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    console.log(fileref.current.files[0]);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={handleAdd}
          value={name}
          name="name"
          placeholder="Enter your Name"
        />
        <label>
          Married
          <input
            type="checkbox"
            onChange={handleAdd}
            checked={married}
            name="married"
            placeholder="Enter your Name"
          />
        </label>

        <select value={gender} name="gender" onChange={handleAdd}>
          <option value=""> select Gender </option>
          <option value="male"> male </option>
          <option value="female">female </option>
        </select>
        <input type="file" ref={fileref} />
        <input type="submit" />
      </form>
    </>
  );
}

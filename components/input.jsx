import React, { useState } from "react";

let obj = {
  name: "",
  email: "",
  age: ""
};
export default function Input() {
  const [data, setData] = useState(obj);
  // console.log(data)

  const { name, email, age } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  return (
    <>
      <input value={name} name="name" onChange={handleChange} />
      <input value={email} name="email" onChange={handleChange} />
      <input value={age} name="age" onChange={handleChange} />
      <button onClick={() => console.log(data)}>Show</button>
    </>
  );
}

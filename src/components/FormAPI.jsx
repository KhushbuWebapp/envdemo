import React, { useEffect, useState } from "react";

const FormAPI = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <>
      <form style={{ marginTop: "2rem" }}>
        Email:
        <input
          type="email"
          placeholder="Enter Your Email..."
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <br />
        Password:
        <input
          type="current-password"
          placeholder="Enter your password..."
          onChange={(e) => setpassword(e.target.value)}
        />
        <br />
        <br />
        <input
          type="submit"
          value="Submit"
          onClick={(e) => {
            e.preventDefault();
            console.log(email, password);
          }}
        />
      </form>
    </>
  );
};

export default FormAPI;

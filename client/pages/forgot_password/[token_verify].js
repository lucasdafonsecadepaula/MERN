import React, { useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const URL_CHANGED_PASSWORD = ""



function token_verify() {
  const router = useRouter("");
  const pass = useRef("");
  const confirmPass = useRef();

  const token = router.query.token;

  console.log(router.query);

  const changePassword = (e) => {
    e.preventDefault();

    axios
      .post(`${URL_CHANGED_PASSWORD}`, {
        token
      })
      .then(function (response) {
      })
      .catch(function (error) {});
    
  };

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            onChange={(e) => (pass.current = e.target.value)}
          ></input>
          <input
            type="text"
            onChange={(e) => (confirmPass.current = e.target.value)}
          ></input>
          <input type="submit" onClick={(e) => changePassword(e)}></input>
        </form>
      </div>
    </>
  );
}

export default token_verify;

import React, { useEffect, useState } from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from './Footer'

function Users() {
  const [Data, SetData] = useState([]);
  const Navigate = useNavigate();
  const ProfileTab = (id) => {
    localStorage.setItem('UserProfileID' , id)
    Navigate("/ClickProfile");
  };
  const token = localStorage.getItem("access-token");
  const GetPosts = () => {
    axios
      .get("http://localhost:8000/api/v1/blog/profile/all/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        SetData(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    GetPosts();
  }, []);
  return (
    <div className="p-3">
      

      <h1
       
        style={{ marginTop: 30, marginLeft: 10, fontSize: 35 ,color:"rgb(238, 64, 93)"}}
      >
        {" "}
        <span
          style={{
            backgroundColor: "rgb(238, 64, 93)",
            borderRadius: 10,
            padding: 3,
            color:'white',
          }}
        >
          Bloweb
        </span>{" "}
        Users
      </h1>
      <div className="UserContainer">
        {Data.map((item) => (
          <div className="UserCard" onClick={() => ProfileTab(item.id)}>
            <div className="UserCardLogo">
              <img
                src={item.avatar_img}
                alt=""
              />
            </div>
            <div className="UserCardBottom">
              <h3 className="text-light">{item.username}</h3>
              <h5 className="text-light">{item.Department}</h5>
              <div className="BottomRating">
                {/* <Button variant="outline-warning" className="mx-2 fs-5 btn">
              Login
            </Button> */}
                <h5>
                <i class="bi bi-file-earmark-post"></i> {item.total_posts}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Users;

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from './Footer'

function SignUp() {
  const [UserName, SetUserName] = useState("");
  const [Email, SetEmail] = useState("");
  const [PassWord, SetPassWord] = useState("");
  const [FirstName, SetFirstName] = useState("");
  const [LastName, SetLastName] = useState("");
  const [Department, SetDepartment] = useState("");
  const [Year, SetYear] = useState("");
  const [StudentId, SetStudentId] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleProfileSubmit = async () => {
   
    try {
      const formData = new FormData();
      formData.append('img', image);
      formData.append('FirstName' ,FirstName )
      formData.append('LastName' ,LastName )
      formData.append('Department' ,Department )
      formData.append('UserName' ,UserName )
      formData.append('Year' ,Year )
      formData.append('StudentId' ,StudentId )
      formData.append('Email' ,Email )
      await axios.post("http://localhost:8000/api/v1/blog/profile/buildProfile/", formData);  

      alert('successfully created Account ...')
      navigate('/')
      
  } catch (error) {
      console.log(error);
  }
}


  const HandleUserSignUp = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/auth/create/", {
        username: UserName,
        password: PassWord,
        email: Email,
        first_name : FirstName,
        last_name : LastName,
      })
      .then((res) => {
        console.log(res.data.status_code);
        if (res.data.status_code == 5000) {
          handleProfileSubmit()
          
        } else {
          alert('same username exists,try another!!')
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      style={{
        backgroundImage: 'url("https://wallpapercave.com/wp/wp6693935.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        className="text-light text-center amita-bold"
        style={{
          textShadow: "2px 3px rgb(238, 64, 93)",
        }}
      >
        Sign Up Now!
      </h1>
      <div
        className="SignUp"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          style={{
            padding: 25,
            width: "80%",
            borderRadius: 10,
            marginTop: "50px",
            border: "2px solid #302f2f",
            boxShadow: " 2px 2px #161617",
            marginBottom: 30,
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fs-4 text-light">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter User"
              style={{ height: "60px", fontSize: 20 }}
              value={UserName}
              onChange={(e) => SetUserName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fs-4 text-light">First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              style={{ height: "60px", fontSize: 20 }}
              value={FirstName}
              onChange={(e) => SetFirstName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fs-4 text-light">Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              style={{ height: "60px", fontSize: 20 }}
              value={LastName}
              onChange={(e) => SetLastName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fs-4 text-light">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              style={{ height: "60px", fontSize: 20 }}
              value={Email}
              onChange={(e) => SetEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fs-4 text-light">Profession</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter profession"
              style={{ height: "60px", fontSize: 20 }}
              value={Department}
              onChange={(e) => SetDepartment(e.target.value)}
              required
            />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fs-4 text-light">Facebook ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter FacebookID"
              style={{ height: "60px", fontSize: 20 }}
              value={Year}
              onChange={(e) => SetYear(e.target.value)}
              required
            />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fs-4 text-light">TwitterID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Twitter id"
              style={{ height: "60px", fontSize: 20 }}
              value={StudentId}
              onChange={(e) => SetStudentId(e.target.value)}
              required
            />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fs-4 text-light">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              style={{ height: "60px", fontSize: 20 }}
              value={PassWord}
              onChange={(e) => SetPassWord(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label
              style={{ fontSize: 25, fontWeight: 200, color: "wheat" }}
              className="amita-regular"
            >
              UPLOAD PROFILE PIC
            </Form.Label>
            <Form.Control
              type="file"
              required
              placeholder="profile pic"
              accept="image/*"
              style={{ height: 60, fontSize: 20 }}
              onChange={(e) =>  setImage(e.target.files[0]) }
              
            />
          </Form.Group>
          <Button
            variant="danger"
            type="submit"
            style={{ width: "100%", height: 50, fontSize: 20, marginTop: 15 }}
            onClick={HandleUserSignUp}
          >
            <i class="bi bi-check-circle"></i> NEXT
          </Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;

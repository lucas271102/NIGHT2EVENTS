import React from "react";
import { Link } from "react-router-dom";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import logo from "../assets/png/logo-no-background.png";
import axios from "axios";
import { useRef } from "react";
import { useToast } from "@chakra-ui/react";
import apiUrl from "../../api.js";
import { useNavigate } from "react-router-dom";
import userLogin_action from '../store/actions/userLogin.js'
import { useDispatch, useSelector } from 'react-redux'
const {saveUserInfo} = userLogin_action

const CatAndLogoNavbar = () => {
  let token = localStorage.getItem("token");
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const { userLogin } = useSelector(store => store)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const toast = useToast();
  const name = useRef();
  const price = useRef();
  const photo = useRef();
  const stock_available = useRef();
  const category_id = useRef();

  const publish = (e) => {
    let newName = name.current.value;
    let newPrice = price.current.value;
    let newPhoto = photo.current.value;
    let newCategory = category_id.current.value;
    let newStock = stock_available.current.value;
    let publicData = {
      name: newName,
      price: newPrice,
      photo: newPhoto,
      category_id: newCategory,
      stock_available: newStock,
    };

    axios
      .post(apiUrl + "/tickets/publish", publicData)
      .then((res) => {
        console.log(res);
        toast({
          title: "Ticket published successfully",
          description: "Now, you can see it",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setTimeout(() => {
          navigate("/buytickets");
        }, 1000);
      })
      .catch((err) => {
        toast({
          title: "Something went wrong...",
          description: "",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        console.log(err);
      });
  };
  const user = JSON.parse(localStorage.getItem('user')) || ""
  const email = userLogin.email ? userLogin.email : user.email
  const tokenLocalStorage = localStorage.getItem('token');
  const userLocalStorage = JSON.parse(localStorage.getItem('user'));


  let tokenCurrent = ""
  userLogin.token.length > 0 ? tokenCurrent = userLogin.token : tokenCurrent = tokenLocalStorage
  //console.log(tokenCurrent);

  let userCurrent = {}
  userLogin.user.length > 0 ? userCurrent = userLogin.user : userCurrent = userLocalStorage
  //console.log(userCurrent);
  return (
    <header className="bg-black p-10 shadow-white-500/50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-44 md:h-16 flex-col md:flex-row items-center  justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600">
              <Link to="/">
                {" "}
                <img src={logo} className="w-32 p-4 h-24" />
              </Link>
            </a>
          </div>

          <div className="block ">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 p-4 text-sm">
                <li>
                  <div>
                    <Button
                      auto
                      color="secondary"
                      className="font-sans font-light text-xl "
                      shadow
                      onPress={handler}
                    >
                      Vender
                    </Button>
                    <Modal
                      closeButton
                      aria-labelledby="modal-title"
                      open={visible}
                      onClose={closeHandler}
                    >
                      <Modal.Header>
                        <Text id="modal-title" className="font-sans" size={18}>
                          Publish your
                          <Text b size={18}>
                            ticket
                          </Text>
                        </Text>
                      </Modal.Header>
                      <Modal.Body>
                        <Input
                          clearable
                          bordered
                          fullWidth
                          color="primary"
                          size="lg"
                          placeholder="Name"
                          ref={name}
                        />
                        <Input
                          clearable
                          bordered
                          fullWidth
                          color="primary"
                          size="lg"
                          placeholder="Price"
                          ref={price}
                        />
                        <Input
                          clearable
                          bordered
                          fullWidth
                          color="primary"
                          size="lg"
                          placeholder="Photo"
                          ref={photo}
                        />
                        <Input
                          clearable
                          bordered
                          fullWidth
                          color="primary"
                          size="lg"
                          placeholder="Category"
                          ref={category_id}
                        />
                        <Input
                          clearable
                          bordered
                          fullWidth
                          color="primary"
                          size="lg"
                          placeholder="Stock"
                          ref={stock_available}
                        />
                        <Row justify="space-between">
                          <Checkbox>
                            <Text size={14}>Remember me</Text>
                          </Checkbox>
                          <Text size={14}>Forgot password?</Text>
                        </Row>
                      </Modal.Body>
                      <Modal.Footer className="flex justify-between">
                        <button
                          className="bg-red-500 p-2 text-white font-sans font-semibold text-lg  font-sans border rounded-lg w-24"
                          onClick={closeHandler}
                        >
                          Close
                        </button>
                        <button
                          className="bg-violet-700 font-sans p-2 font-sans text-white font-semibold text-lg border rounded-lg w-24"
                          onClick={publish}
                        >
                          Publish
                        </button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </li>

                <li>
                  <Link
                    to="/buytickets"
                    className="text-white  font-sans font-light transition text-xl hover:text-violet-600"
                  >
                    Comprar
                  </Link>
                </li>
                <Link to="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="white"
                    class="bi bi-bag"
                    className="text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </Link>
              </ul>
            </nav>
          </div>
          {!tokenCurrent ? (
            <div className="flex items-center gap-6">
              <div className="sm:flex  p-4 gap-6">
                <Link
                  to="/login"
                  className="rounded-md font-sans bg-violet-700 px-5 py-2.5 text-md font-light text-white shadow"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="rounded-md font-sans bg-white px-5 py-2.5 text-md font-lgfht text-black"
                >
                  Register
                </Link>
              </div>
            </div>
          ) : ( <div className="min-w-40 justify-center items-center gap-2 font-medium flex">
            <img src={user.profilePicture} className="w-10 h-10 rounded-full object-cover border-2 border-[#7847E0]" />
          <p className="text-white font-light">{user.email}</p>
        </div>) }
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </header>
  );
};
export default CatAndLogoNavbar;

import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useJwt } from "react-jwt";
import { useEffect, useState } from "react";

export function SignIn() {

  //     const [user, setUser] = useState({});
  //     function handleCallbackResponse(response) {
  //         console.log("encode jwt id toke:" + response.credential);
  //         var userObject = jwt_decode(response.credential);
  //         console.log(userObject)
  //         setUser(userObject)
  //         document.getElementById("signInDiv").hidden = true
  //     }

  //     function handleSignOut(event) {
  //         setUser({});
  //         document.getElementById("signInDiv").hidden = false

  //     }

  //     useEffect(() => {
  //         google.accounts.id.initialize({
  //             client_id: "1004252359413-5vdssg45vum5bvkuk1ok53c6itbt998f.apps.googleusercontent.com",
  //             callback: handleCallbackResponse
  //         });
  //         google.accounts.id.renderButton(
  //             document.getElementById("signInDiv"),
  //             {theme: "outline",size:"large"}
  //         )
  //         google.accounts.id.prompt();
  // },[])

  return (
    <>
      <img
        src="https://i.ibb.co/Yh9hZGF/beranda.png"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input type="email" label="Email" size="lg" />
            <Input type="password" label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/auth/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignIn;

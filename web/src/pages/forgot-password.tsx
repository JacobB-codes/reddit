import { Box, Button, Flex, Link } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import React, { useState } from "react";
import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";
import { useForgotPasswordMutation } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import NextLink from "next/link";

const ForgotPassword: React.FC<{}> = ({}) => {
  const [complete, setComplete] = useState(false);
  const [, forgotPassword] = useForgotPasswordMutation();
  return (
    <Wrapper variant="small">
      {!complete ? (
        <Formik
          initialValues={{ email: "" }}
          onSubmit={(values) => {
            forgotPassword({ email: values.email });
            setComplete(true);
          }}
        >
          <Form>
            <InputField
              name="email"
              placeholder="Email"
              label="Email"
              type="email"
            />
            <Button mt={4} type="submit" colorScheme="teal">
              submit
            </Button>
          </Form>
        </Formik>
      ) : (
        <Box>
          <Box mx="auto">Thanks! check your email to reset your password</Box>
          <Flex>
            <NextLink href="/">
              <Link mx="auto">Back to homepage</Link>
            </NextLink>
          </Flex>
        </Box>
      )}
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(ForgotPassword);

import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useJobsQuery } from "../generated/graphql";
import Layout from "../components/Layout";
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

const Index = () => {
  const [{ data, fetching }] = useJobsQuery({
    variables: {
      limit: 10,
    },
  });

  if (!fetching && !data) {
    return <div>your query failed for some reason</div>;
  }

  return (
    <Layout>
      <Flex align="center">
        <Heading>Thirdjob</Heading>
        <NextLink href="/create-job">
          <Link ml="auto">create job</Link>
        </NextLink>
      </Flex>
      {!data && fetching ? (
        <div>loading...</div>
      ) : (
        <Stack spacing={8}>
          {data!.jobs.map((j) => (
            <Box key={j.id} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{j.title}</Heading>
              <Text mt={4}>{j.descriptionSnippet}</Text>
            </Box>
          ))}
        </Stack>
      )}
      {data ? (
        <Flex>
          <Button colorScheme="teal" m="auto" my={8}>
            load more
          </Button>
        </Flex>
      ) : null}
    </Layout>
  );
};

// TODO: fix ssr
export default withUrqlClient(
  createUrqlClient
  // { ssr: true }
)(Index);

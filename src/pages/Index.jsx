import { Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Your React App</Text>
        <Text>This is an empty React app. Start building your amazing application!</Text>
      </VStack>
    </Container>
  );
};

export default Index;
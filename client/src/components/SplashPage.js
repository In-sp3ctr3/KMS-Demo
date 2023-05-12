import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SplashPage = () => {
  return (
    <Box bg="#FFFFFF" minHeight="100vh">
      <Box bg="#FF0000" py={8}>
        <Flex maxW="container.lg" mx="auto" justifyContent="space-between" alignItems="center">
          <Image src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1275,h_396/https://idiro.com/wp-content/uploads/2019/02/logo_digicel.png" alt="Logo" w={100} />
          <Flex>
            <Link as={RouterLink} to="/login" mr={4}>
              <Button colorScheme="whatsapp" variant="solid">
                Login
              </Button>
            </Link>
            <Link as={RouterLink} to="/signup">
              <Button colorScheme="linkedin">Sign up</Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
      <Box maxW="container.lg" mx="auto" py={16}>
        <Flex justifyContent="space-between" alignItems="center">
          <Box w={1 / 2}>
            <Heading as="h1" size="3xl" color="#FF0000" mb={8}>
              Manage your knowledge with ease
            </Heading>
            <Text fontSize="xl" color="#6C6C6C" mb={8}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
              mi at ligula eleifend, quis tincidunt nisl finibus. Nullam vel enim
              vel odio iaculis vulputate vel vel nisl.
            </Text>
            <Link as={RouterLink} to="/features">
              <Button colorScheme="red" size="lg">
                Learn more
              </Button>
            </Link>
          </Box>
          <Box w={1 / 2} overflow="hidden">
            <Image src="https://digicelinternational.com/sites/default/files/2020-10/Download-the-app-1440x540_0.jpg" alt="Splash image" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default SplashPage;
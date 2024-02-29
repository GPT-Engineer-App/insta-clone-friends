import React from "react";
import { Box, Flex, Image, Text, IconButton, Stack, Input, Avatar, Container, Heading, Spacer, VStack, Link } from "@chakra-ui/react";
import { FaHeart, FaRegHeart, FaComment, FaPlusSquare, FaFilm } from "react-icons/fa";

const posts = [
  { id: 1, user: "user1", image: "https://cdn2.thecatapi.com/images/MTY3ODI4OA.jpg", likes: 10, comments: 2 },
  { id: 2, user: "user2", image: "https://cdn2.thecatapi.com/images/MTY3MTkxMA.jpg", likes: 5, comments: 1 },
  // Additional cat posts could be added here
];

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Box bg="gray.100" px={5} py={3} shadow="sm">
        <Flex align="center" justify="space-between">
          <Heading size="lg">Instaclone</Heading>
          <IconButton icon={<FaPlusSquare />} aria-label="Add Post" variant="ghost" />
          <IconButton icon={<FaFilm />} aria-label="Reels Feed" variant="ghost" as={Link} to="/reels" />
        </Flex>
      </Box>

      {/* Feed */}
      <Container maxW="container.md" py={5}>
        <VStack spacing={5}>
          {posts.map((post) => (
            <Box key={post.id} shadow="md" rounded="md" overflow="hidden">
              <Image src={post.image} alt={`Post by ${post.user}`} />
              <Box p={3}>
                <Flex align="center" mb={2}>
                  <Avatar name={post.user} size="sm" />
                  <Text fontWeight="bold" ml={2}>
                    {post.user}
                  </Text>
                  <Spacer />
                  <IconButton icon={<FaRegHeart />} aria-label="Like Post" variant="ghost" />
                </Flex>
                <Text fontSize="sm">
                  <b>{post.likes}</b> likes
                </Text>
                <Stack direction="row" mt={2}>
                  <IconButton icon={<FaComment />} aria-label="Comment" variant="ghost" />
                  <Input placeholder="Add a comment..." size="sm" />
                </Stack>
              </Box>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;

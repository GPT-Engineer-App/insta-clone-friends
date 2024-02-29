import React from "react";
import { Box, Flex, Image, Text, IconButton, Stack, Input, Avatar, Center, Container, Heading, Spacer, VStack } from "@chakra-ui/react";
import { FaHeart, FaRegHeart, FaComment, FaPlusSquare } from "react-icons/fa";

const posts = [
  { id: 1, user: "user1", image: 'https://images.unsplash.com/photo-1589807867840-aca1258de008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzY2VuaWMlMjB2aWV3fGVufDB8fHx8MTcwOTE5NzU5MXww&ixlib=rb-4.0.3&q=80&w=1080', likes: 10, comments: 2 },
  { id: 2, user: "user2", image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWx8ZW58MHx8fHwxNzA5MTk3NTkxfDA&ixlib=rb-4.0.3&q=80&w=1080', likes: 5, comments: 1 },
  // Add more posts here
];

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Box bg="gray.100" px={5} py={3} shadow="sm">
        <Flex align="center" justify="space-between">
          <Heading size="lg">Instaclone</Heading>
          <IconButton icon={<FaPlusSquare />} aria-label="Add Post" variant="ghost" />
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

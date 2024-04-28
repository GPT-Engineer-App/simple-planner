import { Box, Text, Input, Button, VStack, HStack, Image, useColorModeValue } from '@chakra-ui/react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { useState } from 'react';

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const bg = useColorModeValue('gray.50', 'gray.800');

  return (
    <Box bgImage="url('/images/todo-background.jpg')" bgSize="cover" minHeight="100vh" py={10}>
      <VStack spacing={8}>
        <Text fontSize="4xl" fontWeight="bold" color="white">Your Todo List</Text>
        <HStack>
          <Input
            placeholder="Add a new task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            size="lg"
          />
          <Button onClick={handleAddTodo} colorScheme="blue" px={8} size="lg">
            Add <FaPlus />
          </Button>
        </HStack>
        <VStack spacing={4} w="100%" maxW="md">
          {todos.map((todo, index) => (
            <HStack key={index} w="100%" bg={bg} p={4} borderRadius="lg" justifyContent="space-between">
              <Text>{todo}</Text>
              <Button onClick={() => handleDeleteTodo(index)} colorScheme="red">
                Delete <FaTrash />
              </Button>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;
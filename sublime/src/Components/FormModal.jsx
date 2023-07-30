import {
  Button,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function ManualClose({ isOpen, onClose, onSubmit }) {
 
  const [question, setQuestion] = useState("");
  const [answerType, setAnswerType] = useState("Text");
  const [choices, setChoices] = useState("");
 
 // console.log(answerType)

  const handleAdd = () => {
    const questionData = { title: question, answerType,
        
      choices: answerType === 'Multichoice Checkbox' || answerType === 'Single Select radio' ? choices.split('\n').map((choice) => choice.trim()) : [],
  };
  onSubmit(questionData);
  setQuestion('');
  setAnswerType('Text');
  setChoices('');
    
  };

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Question</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
           <FormLabel>Type your Question Below:</FormLabel>
            <Input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="enter your question here ?"
           />
            <Select
              value={answerType}
              onChange={(e) => setAnswerType(e.target.value)}
            >
              <option value="Text">Text</option>
              <option value="Multichoice Checkbox">Multichoice Checkbox</option>
              <option value="Single Select radio">Single Select radio</option>
            </Select>
            <Textarea 
            value={choices}
            onChange={(e) => setChoices(e.target.value)}
             />
                       
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAdd}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuestion } from "../Reducer/formSlice";

const FormList = () => {
  const dispatch = useDispatch();

  const forms = useSelector((state) => state.form.forms);
  console.log(forms);

  const handleDelete = (title) => {
    dispatch(deleteQuestion(title));
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        alignContent: "center",
        margin: "auto",
      }}
    >
      <Heading size="3xl">Form List</Heading>
      <Table>
        <Thead>
          <Tr>
            <Th>Form Title</Th>
            <Th>Created At</Th>
            <Th>Form URL</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {forms &&
            forms.map((form, ind) => (
              <Tr key={ind}>
                <Td>{form.title}</Td>
                <Td>{form.createdAt}</Td>
                <Td>{form.url}</Td>
                <Td>
                  <Button onClick={() => handleDelete(form.title)}>
                    delete
                  </Button>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default FormList;


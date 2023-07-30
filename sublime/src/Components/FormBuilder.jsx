import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ManualClose from "./FormModal";
import { Box, Button } from "@chakra-ui/react";
import { addQuestion } from "../Reducer/formSlice";

const FormBuilder = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddQuestion = (questionData) => {
    const slug = generateSlug(questionData.title); // Generate the Slug based on the form title
    const formData = { ...questionData, slug }; // Add the Slug to the form data
    const new_Data = {
      ...questionData,
      url: window.location.href + slug,
      createdAt: new Date().toLocaleString(),
    };
    dispatch(addQuestion(new_Data));
    setIsModalOpen(false);
  };
  const generateSlug = (title) => {
    // Replace spaces with dashes and convert to lowercase
    return title.replace(/\s+/g, '-').toLowerCase();
  };

  return (
    <Box
      style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
    >
      <Button onClick={() => setIsModalOpen(true)}>Create New Form</Button>
      <ManualClose
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddQuestion}
      />
    </Box>
  );
};

export default FormBuilder;

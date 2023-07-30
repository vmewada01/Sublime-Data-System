import { Box, Button, Heading, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion } from '../Reducer/formSlice';

const FormList = () => {
 const dispatch = useDispatch()

  const forms = useSelector((state) => state.form.forms);
console.log(forms)

const handleDelete=(title)=> {
  let new_form=  forms.filter((item)=> item.title !== title)
  dispatch(addQuestion(new_form));
 // alert("deleted successfully") 
}
const handleEdit =()=>{

}


  return (
    <Box style={{display: "flex", justifyContent:"center",textAlign:"center" ,flexDirection:"column"}}>
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
          {forms && forms.map((form) => (
            <Tr key={form.slug}>
              <Td>{form.title}</Td>
              <Td>{form.createdAt}</Td>
              <Td>{form.url}</Td>
              <Td>
                <Button onClick={()=>handleEdit(form.title)}>Edit</Button>
                <Button onClick={()=>handleDelete(form.title)}>Delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default FormList;

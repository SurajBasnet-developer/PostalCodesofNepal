import React, { useState, useEffect } from "react";
import axios from "axios";
import { parse } from "papaparse";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

function PostalCode() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/nirmalrizal/data-scrapper/master/src/postal-codes-of-nepal/data.csv"
      )
      .then((response) => {
        const parsedData = parse(response.data).data;
        setData(parsedData);
      });
  }, []);

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="blue">
        <TableCaption>Postal Codes of Nepal</TableCaption>
        <Thead>
          <Tr>
            <Th>Postal Code</Th>
            <Th>City</Th>
            <Th>District</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <Td>{row[0]}</Td>
              <Td>{row[1]}</Td>
              <Td>{row[2]}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default PostalCode;

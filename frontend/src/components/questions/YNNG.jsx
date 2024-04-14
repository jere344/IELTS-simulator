import React, { useState } from 'react';
import { Radio } from '@mantine/core';
import { Question } from "./commons/Question";
import { Container, Typography } from "@mui/material";
import { Text } from '@mantine/core';

const options = ["YES", "NO", "NOT GIVEN"];

export const YNNG = ({ q }) => {
  const [values, setValues] = useState(new Array(q.numStatements.length).fill(undefined));

  const handleRadioChange = (idx, newValue) => {
    const newValues = [...values];
    newValues[idx] = newValue;
    setValues(newValues);
  };

  return (
    <Container className='TFNG'>
      <Text size="md">{q.questionHeader}</Text>
      {q.numStatements.map((item, idx) => (
        <div key={idx}>
          <Text pt={10}>{item}</Text>
          <Radio.Group
            value={values[idx]}
            onChange={(newValue) => handleRadioChange(idx, newValue)}
          >
            {options.map((option, index) => (
              <Radio
                key={index}
                pt={10}
                color={"lime.4"}
                value={option}
                label={option}
              />
            ))}
          </Radio.Group>
        </div>
      ))}
    </Container>
  );
};

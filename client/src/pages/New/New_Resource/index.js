import React from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import * as Yup from 'yup';
import { Container, Inputs } from './styles';

const schema = Yup.object().shape({
  resource_field: Yup.string().required('Custom required message'),
  resource_tool: Yup.string().required('Custom required message'),
  resource_cost: Yup.number().required('Custom required message'),
  task_able_resource: Yup.boolean().required('Custom required message')
});

const options = [
  { id: 'react', title: 'ReactJS' },
  { id: 'node', title: 'NodeJS' },
  { id: 'rn', title: 'Teste' }
];

const PurpleSwitch = withStyles({
  switchBase: {
    color: 'rgba(81, 203, 238, 0.5)',
    '&$checked': {
      color: 'rgba(81, 203, 238, 1)'
    },

    '&$checked + $track': {
      backgroundColor: 'rgba(81, 203, 238, 1)'
    }
  },
  checked: {},
  track: {}
})(Switch);

export default function New_Resource() {
  const [state, setState] = React.useState({
    checkedA: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  function handleSubmit() {}
  return (
    <Container>
      <h1>New Resource</h1>
      <Form className="form" schema={schema} onSubmit={handleSubmit}>
        <Inputs>
          <Select
            name="resource_field"
            placeholder="Resource field"
            options={options}
          />
          <Input name="resource_tool" placeholder="Resource tool" />
          <Input
            name="resource_cost"
            type="number"
            placeholder="Resource cost"
          />
        </Inputs>

        <PurpleSwitch
          checked={state.checkedA}
          onChange={handleChange('checkedA')}
          value="checkedA"
        />

        <button type="submit">Send</button>
      </Form>
    </Container>
  );
}

import React from 'react';
import { Form, Input, Select, Check } from '@rocketseat/unform';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container } from './styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const schema = Yup.object().shape({
  resource_field: Yup.string().required('Custom required message'),
  resource_tool: Yup.string().required('Custom required message'),
  resource_cost: Yup.number().required('Custom required message'),
  task_able_resource: Yup.boolean().required('Custom required message')
});

const options = [
  { id: 'react', title: 'ReactJS' },
  { id: 'node', title: 'NodeJS' },
  { id: 'rn', title: 'React Native' }
];

export default function New_Resource() {
  const classes = useStyles();
  function handleSubmit() {}
  return (
    <Container>
      <h1>New Resource</h1>
      <Form className="form" schema={schema} onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          name="resource_field"
          className={classes.textField}
          label="Outlined"
          margin="normal"
          variant="outlined"
          style={{ color: '#fff', borderColor: '#fff' }}
        />
        <br />
        <Input name="resource_tool" />
        <br />
        <Input name="resource_cost" />
        <br />
        <Check name="task_able_resource" />
        <br />
        <Select name="tech" options={options} />
        <button type="submit">Send</button>
      </Form>
    </Container>
  );
}

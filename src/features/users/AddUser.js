import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { addUser } from "./userSlice"

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: ''
  });

  const handleAddUser = () => {
    setValues({ name: '', email: '' });
    dispatch(addUser({
      id: uuidv4(),
      name: values.name,
      email: values.email
    }));
    navigate('/');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Имя"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Иван Иванов' }}
      />
      <br />
      <TextField
        label="Е-майл"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'ivanivanov@mail.com' }}
      />
      <Button onClick={handleAddUser}>Подтвердить</Button>
    </div>
  )
}

export default AddUser
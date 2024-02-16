import axios from "axios";
import { useState } from "react";
import { Form, FormGroup, Input, Label} from "reactstrap";
import { Link } from "react-router-dom";
import './soru.css'

const initialForm = {
  karar:''
}

export default function Soru(){
  const[form, setForm] = useState(initialForm);

  function handleChange (e) {
    const{ name, value,  } = e.target ;
    setForm({...form, [name]: value})
    console.log(setForm)
  
  }

  axios.post("https://reqres.in/api/users",form)
  .then(res => console.log(res.data))


    return(
        <div className="bgc">
            <Form className="extrem">
            <FormGroup className="soru">
                <p>Extrem sipariş ile siparişiniz 15dk kapınızda</p>
                <div>
                    <Input
                      id="evet"
                      name="extrem"
                      type="radio"
                      value="evet"
                      /* checked={form.karar == 'evet' ? true : false} */
                      onChange={handleChange}
                    />
                    <Label for="karar">İstiyorum</Label>
                    <br />
                    <Input
                      id="hayır"
                      name="extrem"
                      type="radio"
                      value="hayır"
                      onChange={handleChange}
                      /* checked={form.karar == 'hayır' ? true : false} */
                    />
                    <Label for="karar">istemiyorum</Label>
                    </div>
                    <Link to="/orderConfirmation">
                    <button>sipariş ver</button>
                    </Link>
            </FormGroup>
            </Form>
        </div>
    )
}
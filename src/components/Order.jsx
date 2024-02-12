import { useState } from "react";
import Header from '../layouts/Header.jsx'
import { Card, Form, FormGroup, Input, Label } from "reactstrap";
import PizzaOrder from "./PizzaOrder.jsx";

const initialForm = {
    boyutSec: '',
    hamurSec: '',
    siparisNotu: '',
    availableToppings: []
  };

const orderForm = {
    boyutSec: '',
    hamurSec: '',
    siparisNotu: '',
    count:'',
    availableToppings: [],
}

function Order(props){
    const [formData, setFormData] = useState(initialForm);
    const [users, setUsers] = useState([]);
    const [totalPrice, settotalPrice] = useState(0);
    const [count, setCount] = useState(0)
    const [selections, setSelections] = useState([])
    const selectionPrice = 5;


    function handleSubmit(){
        return
    }

    function handleChange(){
        return
    }


    return (<>
    <div> 
        <Header />
        <div className="container">
            <Card>
            <h2>Positon Absolute Acılı Pizza</h2>
             <h3>
                 <ul>
                 <li>85.50₺</li>
                 <li>4.9</li>
                 <li>(200)</li>
                 </ul>
             </h3>
             <p className='pizzaInfo'>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
             <Form onSubmit={handleSubmit}>
                <div className="pizzaSize">
                    <FormGroup>
                        <p>Boyut Seç *</p>
                        {formData.boyutSec == '' && <p>Pizza boyutunu seçmelisiniz.</p>}
                        <Input
                        id="kucukBoy"
                        name="boyutSec"
                        type="radio"
                        value="small"
                        onChange={handleChange}
                        />
                        <Label for="boyutSec">Küçük</Label>
                        <br />
                        <Input  
                        id="ortaBoy"
                        name="boyutSec"
                        type="radio"
                        value="medium"
                        onChange={handleChange}
                        />
                        <Label for="boyutSec">Orta</Label>
                        <br />
                        <Input  
                        id="buyukBoy"
                        name="boyutSec"
                        type="radio"
                        value="large"
                        onChange={handleChange}
                        />
                        <Label for="boyutSec">Büyük</Label>
                        <br />
                    </FormGroup>
                    <FormGroup>
                        <Label for="hamurSec">Hamur Seç *</Label><br />
                        {formData.hamurSec == '' && <p>Pizza hamurunu seçmelisiniz.</p>}
                        <Input
                        id="hamurSec"
                        name="hamurSec"
                        type="select"
                        value={formData.hamurSec}
                        onChange={handleChange}
                        >
                            <option>Normal</option>
                            <option>İnce Kenar</option>
                            <option>Kalın Kenar</option>
                        </Input>
                    </FormGroup>
                </div>
                <FormGroup>
                 <h2>Ek Malzemeler</h2>
                 <p>En Fazla 10 malzeme seçebilirsiniz. Her seçim 5₺ </p>
                 <PizzaOrder selections={selections} setSelections={setSelections}/>
            {selections.length < 4 && <p>En az 4 malzeme seçmelisiniz.</p>}
  {selections.length > 10 && <p>En fazla 10 malzeme seçebilirsiniz. Her seçim 5₺</p>}
          </FormGroup>
          <br /><br />
             </Form>
            </Card>
        </div>

    </div>
    </>)
}

export default Order;
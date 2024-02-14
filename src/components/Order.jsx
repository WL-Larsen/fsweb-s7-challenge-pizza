import { useEffect, useState } from "react";
import Header from '../layouts/Header.jsx'
import { Card, Form, FormGroup, Input, Label, Button } from "reactstrap";
import PizzaOrder from "./PizzaOrder.jsx";
import { Link } from "react-router-dom";
import './Order.css';
import axios from "axios";

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
    /* const [isValid, setIsValid] = useState(false); */
    const selectionPrice = 5;


    useEffect(()=> {
        settotalPrice(selections.length * selectionPrice + count * 85.50 );
    },[selections, count])

    function handleChange(e){
        let {name, value} = e.target;
        setFormData(f =>({...f,[name]: value}));
    }

    function handleSubmit(e){
        e.preventDefault();
        if(selections[0].length <4){
            <p>En az 4 malzeme seçmelisiniz.</p>
            return;
        }
        if(count < 1 ){
            alert('Pizza adedi en az 1 olmalıdır.')
            return;
        }
        if (formData.boyutSec  == '') {
            alert('Pizza boyutu seçmelisiniz.');
            return;
        }
    }

const formData2 = { ...formData, count, 
    availableToppings: selections };

useEffect(() => {
    axios.get('https://reqres.in/api/users')
            .then(response => {
            setUsers(response.data.data); 
          })
          .catch(error => {
            console.error('API isteği başarısız: ', error);
          });
      }, []);
 /*    axios
    .post('https://reqres.in/api/users', formData2)
    .then((res) => props.setCurrentOrder(res.data))
    .catch((err) => console.warn(err));
    //3.1.3. formu sıfırla -Yöntem 2: controlled
    /* setFormData(initialForm);
    history.push(`/SiparisOnay`);
    console.log(formData2);
     */ 

    function setOrder(e, i) {
        e.preventDefault();
        setCount((count) => count + i);
    }

/* useEffect(()=>{
    const values = Object.values(formData);

},[Form])
 */

    return (<>
    <div>
    <Header /> 
        <div className="container">
        
            <Card>
            <h2>Positon Absolute Acılı Pizza</h2>
             <h3>
                 <p>85.50₺</p>
                 <p className="Bb">4.9</p>
                 <p className="Bb">(200)</p> 
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
                        <Label className='hamurSec' for="hamurSec">Hamur Seç *</Label><br />
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

                <FormGroup className="ekMalzeme">
                 <h2>Ek Malzemeler</h2>
                 <p>En Fazla 10 malzeme seçebilirsiniz. Her seçim 5₺ </p>
                 <PizzaOrder selections={selections} setSelections={setSelections}/>
                  {selections.length < 4 && <p>En az 4 malzeme seçmelisiniz.</p>}
                  {selections.length > 10 && <p>En fazla 10 malzeme seçebilirsiniz. Her seçim 5₺</p>}
                </FormGroup>
                <br /><br />

                <FormGroup className="borderSiparis">
                 <Label for="siparisNotu">Sipariş Notu</Label><br />
                 <Input
                   id="siparisNotu"
                   name="siparisNotu"
                   placeholder="Siparişine eklemek istediğin bir not var mı?"
                   type="textarea"
                   value={formData.siparisNotu}
                   onChange={handleChange}
                 />
                </FormGroup>
                <div className="line"></div>

                {count < 1 && <p className="adet">Pizza Adedi Giriniz.</p>}
                <div className="order-confirm">
                <div className="complex-buttons">
                    <button onClick={(e)=>setOrder(e, -1)}>-</button>
                    <button className="count" disabled>{count}</button>
                    <button onClick={(e)=>setOrder(e, 1)}>+</button>
                </div>
                <div className="order-summary">
                <div className="summary-card">
                    <h3>Sipariş Toplamı</h3>
                    <div className="value-group">
                     <div className="tag">Seçimler</div>
                     <div className="value">{selections.length * selectionPrice}</div>
                    </div>
                    <div className="value-group">
                     <div className="tag">Toplam</div>
                     <div className="value">{totalPrice}</div>
                    </div>
                </div>
               <Link to='/orderConfirmation'><button /* disabled={!isValid} */>SİPARİŞ VER</button></Link>
                
                </div>
                </div>
             </Form>
            </Card>
        </div>
    </div>
    </>)}


export default Order;
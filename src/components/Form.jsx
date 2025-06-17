import '../styling/Form.css';
import Modal from './Modal';
import { useState } from 'react';

export default function Form() {
    const [errorMessage , setErrorMessage] = useState(null)
    const [showModel, setShowModal] = useState(false)
    const [formData, setFormData] = useState( {
        name: "",
        phone : "",
        age : '',
        employee : false,
        salary : 0
    } )
    function handelFormSubmit(event){
        event.preventDefault();
        setErrorMessage(null);
        const {age , phone} = formData;
        if( age < 18 || age > 100){
            setErrorMessage("The age not allowed")
        }else if(phone.length <10 || phone.length > 12){
            setErrorMessage("Phone number format is wrong")
        }
        setShowModal(true)
    }

    function handelDivClick(){
        if(showModel){
            setShowModal(false)
        }
    }
    let formNotEmpty = true;
    if (formData.name != "" || formData.phone != "" || formData.age != "" ){
        formNotEmpty = false
    }
    return(
        
        <div className="form"
        onClick={handelDivClick}
        >
            <h1>Requesting a Loan</h1>
            <form>
                <label>Name :</label>
                <input type="text"
                    value={formData.name}
                    onChange={(n) => {
                        setFormData({...formData, name : n.target.value})
                    }}
                    
                />

                <label htmlFor="term">Phone Number :</label>
                <input type="text"
                    value={formData.phone}
                    onChange={(n) => {
                        setFormData({...formData, phone : n.target.value})
                    }}
                    
                />

                <label>Age :</label>
                <input type="text"
                    value={formData.age}
                    onChange={(n) => {
                        setFormData({...formData, age : n.target.value})
                    }}
                    
                />

                <label>Are you an employee? :</label>
                <input type="checkbox" 
                    checked={formData.employee}
                    onChange={(e)=>{
                        setFormData({...formData, employee : e.target.checked})

                    }}
                />

                <label>Salary :</label>
                <select 
                    value={formData.salary}
                    onChange={(n) => {
                        setFormData({...formData, salary : n.target.value})
                    }}
                    
                >
                    <option value="0">less then 500$</option>
                    <option value="1">500$ - 1000$</option>
                    <option value="2">1000$ - 2000$</option>
                    <option value="3">2000$ - 3000$</option>
                </select>

                <button onClick={handelFormSubmit} className={formNotEmpty ? 'disabled' : ""} disabled={formNotEmpty} >Submit</button>
            </form>
            <Modal errorMessage={errorMessage} isVisible={showModel} />
        </div>
    )
}
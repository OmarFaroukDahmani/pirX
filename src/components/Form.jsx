import '../styling/Form.css';
import { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState( {
        name: "",
        phone : "",
        age : '',
        employee : false,
        salary : 0
    } )
    function handelButtonClick(){
        if(formData.phone.length()>=12 ||  formData.phone.length()<=10  ){
            alert("wrong phone number")
        }if(formData.age >100 || formData.age < 18){
            alert("wrong age")
        }
    }
    return(
        <div className="form">
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

                <button onClick={handelButtonClick}  >Submit</button>
            </form>
        </div>
    )
}
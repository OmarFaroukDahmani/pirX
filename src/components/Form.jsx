import '../styling/Form.css';

export default function Form() {
    return(
        <div className="form">
            <h1>Requesting a Loan</h1>
            <form>
                <label>Name :</label>
                <input type="text"/>

                <label htmlFor="term">Phone Number :</label>
                <input type="text"/>

                <label>Age :</label>
                <input type="text" />

                <label>Are you an employee? :</label>
                <input type="checkbox" />

                <label>Salary :</label>
                <select >
                    <option value="0">less then 500$</option>
                    <option value="1">500$ - 1000$</option>
                    <option value="2">1000$ - 2000$</option>
                    <option value="3">2000$ - 3000$</option>
                </select>

                <button>Submit</button>
            </form>
        </div>
    )
}
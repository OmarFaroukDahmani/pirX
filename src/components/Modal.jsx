import '../styling/Form.css'


export default function Modal({isVisible, errorMessage=null}){
    if (isVisible){
        return (
            <div className="comtainer">
                <div className="content">
                    <h1 style={{color : errorMessage ? "red": "green"}}>{errorMessage != null ? errorMessage : "Form has been successfully submited"}</h1>
                </div>
            </div>
        )
    }else {
        return <></>;
    }
}
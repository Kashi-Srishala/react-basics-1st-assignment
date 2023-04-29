import './ExpenseItem.css';

function ExpenseItem(){

    const date_string = new Date (2022, 2, 2);
    const data_description = "Car Insurance";
    const data_price = 250;

    return (
        <div className="expense-item">
            <div>{date_string.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{data_description}</h2>
                <div className="expense-item__price">${data_description}</div>

            </div>
            
        </div>
        
        
    );
    
}

export default ExpenseItem;
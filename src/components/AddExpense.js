import React from 'react';
import { Button, Icon } from 'react-materialize';

const AddExpense = () => {
    return (
        <div className="add-expense">
            <Button waves="light" large>Expense
                <Icon right>add</Icon>
            </Button>
        </div>
    );
}

export default AddExpense;
import React,{useContext} from "react";
import { Container} from "react-bootstrap";
import { Card} from "react-bootstrap";
import { Button } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";

export const AccountsCard = () => {

  const {transactions} = useContext(GlobalContext)

  console.log(transactions);
  const amounts = transactions.map(transaction => transaction.amount)
  const total =amounts.reduce((sum,amount) => sum + amount,0).toFixed(2)
  const income = amounts.filter(amount => amount > 0).reduce((sum,amount) => sum + amount,0).toFixed(2)
  const expenses = amounts.filter(amount => amount < 0).reduce((sum,amount) => sum + amount,0).toFixed(2)



  return (
    <Container >
      <Card  className=" m-top text-center account-container bg-warning" >
        <Card.Body className=" text-light">
          <Card.Title className="  p-top ">Your Balance:</Card.Title>
          <Card.Text className="fs-600  balance">
        NGN{total}
          </Card.Text>
          <div className="flex p-top">
            <div className="income-container p-bottom">
            <Card.Text>
            Income : {income}
          </Card.Text>
            </div>
            <div className="expense-container p-bottom">
            <Card.Text>
            Expense : {expenses}
          </Card.Text>
            </div>
          </div>
          
        </Card.Body>
      </Card>
      <div className="btn-container flex">
      <Button className=" btn-success btn-budget m-top "> Add Budget</Button>
      <Button className=" btn-danger btn-expense  m-top "> Add Expense</Button>
      </div>
    </Container>
  );
};

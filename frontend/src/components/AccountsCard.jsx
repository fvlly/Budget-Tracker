import React from "react";
import { Container} from "react-bootstrap";
import { Card} from "react-bootstrap";
import { Button } from "react-bootstrap";

export const AccountsCard = () => {
  return (
    <Container >
      <Card  className=" m-top text-center account-container bg-warning" >
        <Card.Body className=" text-light">
          <Card.Title className=" fs-600  p-top">Your Balance:</Card.Title>
          <Card.Text>
            N350000.00
          </Card.Text>
          <div className="flex p-top">
            <div className="income-container p-bottom">
            <Card.Text>
            Income : N600000.00
          </Card.Text>
            </div>
            <div className="expense-container p-bottom">
            <Card.Text>
            Expense : N250000.00
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

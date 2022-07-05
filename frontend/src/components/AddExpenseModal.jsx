import { useContext } from "react";
import { useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from "../context/GlobalState";

export default function AddExpenseModal({ show, handleClose }) {
    const {addTransaction}= useContext(GlobalContext)
    const nameRef = useRef()
    const amountRef = useRef()
  function handleSubmit(e) {
    e.preventDefault()
    const newTransaction = {
        id:uuidv4(),
        description:nameRef.current.value,
        amount:parseFloat(amountRef.current.value)
    }
    addTransaction(newTransaction)
    handleClose()
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>New Expense</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3 text-left ">
              <Form.Label>Name</Form.Label>
              <Form.Control ref={nameRef} type="text" required />
            </Form.Group>
            <Form.Group className="mb-3 text-left">
              <Form.Label>Amount</Form.Label>
              <Form.Control ref={amountRef} type="text" required />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="danger" type="submit">
                Add
              </Button>
            </div>
          </Modal.Body>
        </Form>
      </Modal>
    </>
  );
}

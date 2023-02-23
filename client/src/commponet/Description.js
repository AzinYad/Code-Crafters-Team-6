import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Row, Col } from "react-bootstrap";
import  Button from "react-bootstrap/Button";


const Description = () =>{
const [addingEnergiser, setAddingEnergiser] = useState(false);
const [energiserData, setEneriserData] = useState(null);
// const [energiserId, setEnergiserId] = useState();
const [name, setName] = useState("");
const [description, setDescription] = useState("");


const handleEnergiserAdder = (e) => {
    e.preventDefault();


        let energiser = {
      name: name,
      description: description,
    };

     fetch("/api/energizers",{
            method:"POST",
            headers:{ "Content-Type": "application/json" },
            body: JSON.stringify(energiser),
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            //  setEneriserData(data);
          }).
          catch((error)=> {
        console.log(error.message);
    });
    setEneriserData([...energiserData, energiser ]);
    setName("");
    setDescription("");
};


return(
    <div>
      <Container>
        <Form onSubmit={handleEnergiserAdder}>
          <Row>
            <Col md>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={(e) => setName(e.target.value)}
                  className="input shadow-sm bg-white rounded"
                  name="name"
                  type="text"
                  required
                  placeholder="Name....." />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group controlId="desription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  onChange={(e) => setDescription(e.target.value)}
                  className="input shadow-sm bg-white rounded"
                  name="name"
                  type="text"
                  required
                  placeholder="Description....." />
              </Form.Group>
            </Col>
          </Row>
          <Button
            className=" mt-3 mb-3 shadow rounded"
            variant="info"
            type="submit">
            ADD
          </Button>
          <Button
            onClick={() => setAddingEnergiser(!addingEnergiser)}
            className="ml-5 mt-3 mb-3 shadow rounded"
            variant="warning"
            type="cancel">
            Cancel
          </Button>
        </Form>
      </Container>
    </div>
);

};

export default Description;
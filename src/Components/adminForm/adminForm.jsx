import React from "react";
import {useState} from  'react';
import axios from 'axios';
import { Row, Col, FormGroup, Label, Form, Input, Container,Button } from "reactstrap";

const AdminForm = (props) => {

    const [inputFields, setInputFields] = useState({
        productBrand: "",
        productName: "",
        productModel: "",
        productColor: "",
        MRPPrice: "",
        RAM: "",
        internalStorage: "",
        battery: "",
        os: "",
        frontCamera: "",
        backCamera: "",
        processor: "",
        boxIncludes: "",
        screenSize: "",
        chargerType: "",
        manufacturer: "",
        displayType: "",
        splFeature: "",
        resolution: "",
        itemWeight: "",
        description: "",
        productImg: ""
    })


    const inputHandler = (e) => {
        setInputFields({...inputFields,[e.target.name]:e.target.value})
    }

    const formSubmit = (e) => {
        e.preventDefault();
        var formData = {
            productBrand:inputFields.productBrand,
            productName:inputFields.productName,
            productModel:inputFields.productModel,
            productColor:inputFields.productColor,
            MRPPrice: inputFields.MRPPrice,
            RAM: inputFields.RAM,
            internalStorage: inputFields.internalStorage,
            battery: inputFields.battery,
            os: inputFields.os,
            frontCamera: inputFields.frontCamera,
            backCamera: inputFields.backCamera,
            processor: inputFields.processor,
            boxIncludes: inputFields.boxIncludes,
            screenSize: inputFields.screenSize,
            chargerType: inputFields.chargerType,
            manufacturer: inputFields.manufacturer,
            displayType: inputFields.displayType,
            splFeature: inputFields.splFeature,
            resolution: inputFields.resolution,
            itemWeight: inputFields.itemWeight,
            description: inputFields.description, 
            productImg: inputFields.productImg
        }
        axios.post("http://localhost:3000/api/products",formData)
          .then(res => {
              let result = res.data;
              console.log(result);              
          })
    }


  return (
    <Container>
      <Form className="form-horizontal" onSubmit={formSubmit}>
        <Row className="mt-3">
          <Col md="6">
            <FormGroup row>
              <Label for="productBrand" sm={4}>
                Product Brand
              </Label>
              <Col sm={8}>
                <Input type="text" name="productBrand" id="productBrand" onChange={inputHandler} onChange={inputHandler} value={inputFields.productBrand} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="productName" sm={4}>
                Product Name
              </Label>
              <Col sm={8}>
                <Input type="text" name="productName" id="productName" onChange={inputHandler} value={inputFields.productName} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="productModel" sm={4}>
                Product Model
              </Label>
              <Col sm={8}>
                <Input type="text" name="productModel" id="productModel" onChange={inputHandler} value={inputFields.productModel} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="MRPPrice" sm={4}>
                MRP Price
              </Label>
              <Col sm={8}>
                <Input type="number" name="MRPPrice" id="MRPPrice" onChange={inputHandler} value={inputFields.MRPPrice} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="frontCamera" sm={4}>
              Front Camera
              </Label>
              <Col sm={8}>
                <Input type="number" name="frontCamera" id="frontCamera" onChange={inputHandler} value={inputFields.frontCamera} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="backCamera" sm={4}>
              Back Camera
              </Label>
              <Col sm={8}>
                <Input type="number" name="backCamera" id="backCamera" onChange={inputHandler} value={inputFields.backCamera} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="processor" sm={4}>
              Processor
              </Label>
              <Col sm={8}>
                <Input type="text" name="processor" id="processor" onChange={inputHandler} value={inputFields.processor} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="screenSize" sm={4}>
                Screen Size
              </Label>
              <Col sm={8}>
                <Input type="number" name="screenSize" id="screenSize" onChange={inputHandler} value={inputFields.screenSize} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="manufacturer" sm={4}>
                Manufacturer
              </Label>
              <Col sm={8}>
                <Input type="text" name="manufacturer" id="manufacturer" onChange={inputHandler} value={inputFields.manufacturer} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="displayType" sm={4}>
                Display Type
              </Label>
              <Col sm={8}>
                <Input type="text" name="displayType" id="displayType" onChange={inputHandler} value={inputFields.displayType} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="resolution" sm={4}>
                Resolution
              </Label>
              <Col sm={8}>
                <Input type="number" name="resolution" id="resolution" onChange={inputHandler} value={inputFields.resolution} />
              </Col>
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup row>
              <Label for="productColor" sm={4}>
                Product Color
              </Label>
              <Col sm={8}>
                <Input type="text" name="productColor" id="productColor" onChange={inputHandler} value={inputFields.productColor} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="RAM" sm={4}>
                RAM
              </Label>
              <Col sm={8}>
                <Input type="number" name="RAM" id="RAM" onChange={inputHandler} value={inputFields.RAM} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="internalStorage" sm={4}>
                Internal Storage
              </Label>
              <Col sm={8}>
                <Input
                  type="number"
                  name="internalStorage"
                  id="internalStorage"
                  onChange={inputHandler} value={inputFields.internalStorage}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="battery" sm={4}>
                Battery
              </Label>
              <Col sm={8}>
                <Input type="number" name="battery" id="battery" onChange={inputHandler} value={inputFields.battery} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="os" sm={4}>
                Operating System
              </Label>
              <Col sm={8}>
                <Input type="text" name="os" id="os" onChange={inputHandler} value={inputFields.os} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="boxIncludes" sm={4}>
                Box Includes
              </Label>
              <Col sm={8}>
                <Input type="text" name="boxIncludes" id="boxIncludes" onChange={inputHandler} value={inputFields.boxIncludes} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="chargerType" sm={4}>
                Charger Type
              </Label>
              <Col sm={8}>
                <Input type="text" name="chargerType" id="chargerType" onChange={inputHandler} value={inputFields.chargerType} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="itemWeight" sm={4}>
                Item Weight
              </Label>
              <Col sm={8}>
                <Input type="number" name="itemWeight" id="itemWeight" onChange={inputHandler} value={inputFields.itemWeight} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="splFeature" sm={4}>
                Special Feature
              </Label>
              <Col sm={8}>
                <Input type="text" name="splFeature" id="splFeature" onChange={inputHandler} value={inputFields.splFeature} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="description" sm={4}>
              Description
              </Label>
              <Col sm={8}>
                <Input type="text" name="description" id="description" onChange={inputHandler} value={inputFields.description} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="productImg" sm={4}>
                Product Image
              </Label>
              <Col sm={8}>
                <Input type="text" name="productImg" id="productImg" onChange={inputHandler} value={inputFields.productImg} />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row className="mb-3">
            <Col md="2 offset-md-10">
            <Button outline color="success">Save</Button>{' '}
            <Button outline color="danger">Cancel</Button>
            </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AdminForm;

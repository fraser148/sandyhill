import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PriceDesc = ({index, selected, setSelected, name}) => {
    console.log(name)
    if (index===selected) {
        return <li style={{backgroundColor: '#8bd09d'}} key={index} onClick={() => setSelected(index)}>{name}</li>
    } else {
        return <li key={index} onClick={() => setSelected(index)}>{name}</li>
    }
    
}

const PricesAlter = (data) => {
    const [selected, setSelected] = useState(0)

    console.log(data.data[selected])
    return (
        <div className="pricing-alter">
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="services">
                            <ul>
                                {data.data.map((service, index) =>
                                    <PriceDesc
                                        index={index}
                                        selected={selected}
                                        setSelected={setSelected}
                                        name={service.name}
                                    />
                                )}
                            </ul>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="prices">
                            <h2>{data.data[selected].name}</h2>
                            <table>
                                <tbody>
                                    {data.data[selected].prices.map((price) => 
                                        <tr key={price.desc}>
                                            <td>{price.desc}</td>
                                            <td>£{price.price}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default PricesAlter
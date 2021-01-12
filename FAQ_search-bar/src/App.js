import React, { Component } from 'react';
import { Button, Input, Footer, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';



import faq from './components/faq.json'
class App extends Component {

    state = {
        search : ""
    }

    renderFaq = faq =>{
        const {search} = this.state;
        var code = faq.question.toLowerCase()

        if( search === "" ){
            return null
        }

        return <div className="col-md-4 col-sm-6 mt-5 d-flex align-items-stretch">
            <Card>
                <CardBody>
                    <p className=""> </p>
                    <CardTitle title={faq.question}>{faq.question.substring(0, 100)} </CardTitle>
                    <CardText>{faq.resolution}</CardText>
                    
                </CardBody>
            </Card>
        </div>
    }

    onchange = e =>{
        this.setState({ search : e.target.value });
    }

    render() {

        const {search} = this.state;
        const filteredfaq = faq.filter( faq =>{
            return faq.question.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })

        return (
            <div className="flyout">
            <main style={{marginTop: '30rem'}}>
            </main>
                <div className="containerBig">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-lg">
                            <Input label="What do you need help with?" font="1000px" icon="search"  onChange={this.onchange} />
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        {
                            filteredfaq.map( faq =>{
                                return this.renderFaq(faq)
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
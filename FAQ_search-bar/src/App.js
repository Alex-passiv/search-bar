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

        return <div>
            <Grid columns="1fr 1fr">
                <div>
                    <p className=""> </p>
                    <H1 title={faq.question}>{faq.question.substring(0, 100)} </H1>
                    <CardText>{faq.resolution}</CardText>
                    
                </CardBody>
            </Grid>
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
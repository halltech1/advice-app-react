import React, { Component } from 'react'
import axios from 'axios'
import { Container, Card, Button } from 'react-bootstrap'
import './App.css'

class App extends Component {
  state = {
    advice : '',
    id : ''
  }

  componentDidMount () {
    this.fetchAdvice()
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      const {advice, id} = response.data.slip
      this.setState({
        advice,
        id
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }
  render() {
    const {advice, id} = this.state
    return (
    <Container>
      <Card className ='p-4'>
        <Card.Header>Advice - code - {id}</Card.Header>
        <Card.Text>{advice}</Card.Text>
        <Button onClick = {this.fetchAdvice} className ='border rounded-pill'>GIVE ME ADVICE</Button>
      </Card>
    </Container>
    )
  }
}

export default App
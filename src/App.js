import React, { Component } from 'react';
import './App.css';
import SingleQuestionForm from './components/SingleQuestionForm/SingleQuestionForm';
import {data} from './server/data';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentStage: 0,
            answers: []
        };
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    handlePreviousClick(event) {
        event.preventDefault();
        const {currentStage, answers} = this.state;
        if(answers.length > 0) {
            answers.pop()
        }

        const allAns = answers;

        this.setState({currentStage: currentStage - 1 < 0 ? 0 : currentStage - 1, answers: allAns});
    }

    handleNextClick(event) {
        event.preventDefault();
        const {currentStage, answers = []} = this.state;
        const formData = new FormData(event.target);
        const currentAnswer = formData.get('answer');

        if (answers.length > currentStage ) {
            answers.splice(answers.length - 1);
        }

        const allAns = [...answers, currentAnswer];

        this.setState({currentStage: currentStage + 1 > 2 ? 2 : currentStage + 1, answers: allAns});
    }

    displayAnswer() {
        const {answers} = this.state;
        return answers.map((answer, index) => {
            return (
                <div className="output__answer" key={index}>Answer {index + 1}: {answer}</div>
            )
        });
    }

    render() {
        const {currentStage} = this.state;

        return (
          <div className="App">
              <form name="singleQuestionForm" action="return false" onSubmit={this.handleNextClick.bind(this)}>
                <header className="App__header">
                  <h1 className="App__title">{data.title}</h1>
                </header>
                  {
                      <SingleQuestionForm key={data.questions[currentStage].id} title={data.questions[currentStage].prompt} mandatory={data.questions[currentStage].is_required} />
                  }
                <footer>
                    <div className="input__group">
                        <button className="input__button__previous" onClick={this.handlePreviousClick.bind(this)}>Previous</button>
                        <button className="input__button_next" type="submit">Next</button>
                    </div>
                    {
                        this.displayAnswer()
                    }
                </footer>
              </form>
          </div>
        );
    }
}

export default App;

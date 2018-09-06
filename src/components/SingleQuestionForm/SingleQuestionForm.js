import React, { Component } from 'react';
import styles from './SingleQuestionForm.css';
import PropTypes from 'prop-types';

class SingleQuestionForm extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        mandatory: PropTypes.bool,
        minCharLength: PropTypes.number,
        questionType: PropTypes.string
    };

    render() {
        const {title, mandatory} = this.props;

        return (
            <div>
                <label className="form__title">
                    {title}
                </label>
                <div>
                    { mandatory &&
                    <div className="mandatory">
                        <span className="mandatory__symbol">*</span>
                        <div>Required!</div>
                    </div>
                    }
                </div>
                <div className="input__answer">
                    <textarea rows="5" maxLength={200} name="answer"/>
                </div>
            </div>
        );
    }
}

export default SingleQuestionForm;
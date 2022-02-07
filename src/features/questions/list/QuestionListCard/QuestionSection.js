import React from 'react'

function calculatePercentage(votes, total) {
    return Math.round((votes / total) * 100)
}

function CardPollOption({ side, children, value, selected, ...props }) {
    return (
        <div className={`poll poll-${side} ${selected ? "selected" : "unselected"}`} {...props}>
            <span className="text">{children}</span>
            
        </div>
    )
}

export default function QuestionSection({ question, mode, update, ...props }) {
    return (
        <div className="question" {...props}>
            <div className="arrow-up" />
            <h4>Would You Rather</h4>
            <div className={`pollOptions mode-${mode}`}>
                <CardPollOption side="left"
                    selected={question.answered == "optionOne"}
                >{question.optionOne.text}</CardPollOption>
                <div>OR</div>
                <CardPollOption side="right"
                    selected={question.answered == "optionTwo"}
                >{question.optionTwo.text}</CardPollOption>
            </div>
        </div>
    )
}

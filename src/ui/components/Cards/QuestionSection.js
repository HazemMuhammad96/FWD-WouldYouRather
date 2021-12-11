import React from 'react'

function CardPollOption({ side, children, value, selected, ...props }) {
    return (
        <div className={`poll poll-${side} ${selected ? "selected" : "unselected"}`} {...props}>
            <progress max="100" value={value ?? 0} />
            <span className="text">{children}</span>
            
        </div>
    )
}


function calculatePercentage(votes, total) {
    return Math.round((votes / total) * 100)
}

export default function QuestionSection({ question, mode, update, ...props }) {
    return (
        <div className="question" {...props}>
            <div className="arrow-up" />
            <h4>Would You Rather</h4>
            <div className={`pollOptions mode-${mode}`}>
                <CardPollOption side="left"
                    value={
                        calculatePercentage(
                            question.optionOne.votes.length,
                            question.optionOne.votes.length + question.optionTwo.votes.length
                        )
                    }
                    onClick={() => update?.('optionOne')}
                    selected={question.answered == "optionOne"}
                >{question.optionOne.text}</CardPollOption>
                <div>OR</div>
                <CardPollOption side="right"
                    value={
                        calculatePercentage(
                            question.optionTwo.votes.length,
                            question.optionOne.votes.length + question.optionTwo.votes.length
                        )
                    }
                    onClick={() => update?.('optionTwo')}
                    selected={question.answered == "optionTwo"}
                >{question.optionTwo.text}</CardPollOption>
            </div>
        </div>
    )
}

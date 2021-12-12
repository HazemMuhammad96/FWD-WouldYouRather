import React from 'react'
import './SingleQuestionCard.css'

function calculatePercentage(votes, total) {
    return Math.round((votes / total) * 100)
}

function CardAnswerOption({ side, children, value, selected, ...props }) {
    return (
        <div className={`option ${selected ? "selected" : "unselected"}`} {...props}>
            {/* <progress max="100" value={value ?? 0} /> */}
            <div className='bullet'></div>
            <div className='bulletItems'>
                <ul className='noBulletsList'>
                    <li>
                        {children}
                    </li>
                </ul>
            </div>
        </div>
    )
}

function QuestionSection({ question, mode, update, ...props }) {
    return (
        <div  {...props}>
            <div className={`answers`}>
                <CardAnswerOption side="left"
                    value={
                        calculatePercentage(
                            question.optionOne.votes.length,
                            question.optionOne.votes.length + question.optionTwo.votes.length
                        )
                    }
                    onClick={() => update?.('optionOne')}
                    selected={question.answered == "optionOne"}
                >{question.optionOne.text}</CardAnswerOption>
                <div className='bullet'>OR</div>
                <CardAnswerOption side="right"
                    value={
                        calculatePercentage(
                            question.optionTwo.votes.length,
                            question.optionOne.votes.length + question.optionTwo.votes.length
                        )
                    }
                    onClick={() => update?.('optionTwo')}
                    selected={question.answered == "optionTwo"}
                >{`${question.optionTwo.text}`}</CardAnswerOption>
            </div>
        </div>
    )
}
export default function SingleQuestionCard({ question, mode, update, ...props }) {
    return (
        <div className='filledCard'>
            <h3>Hazem Asks</h3>
            <h3>Would you rather</h3>
            <QuestionSection
                question={question}
            />
        </div>
    )
}

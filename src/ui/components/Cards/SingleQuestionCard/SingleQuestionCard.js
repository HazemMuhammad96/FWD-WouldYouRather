import React from 'react'
import ProgressContainer from '../../ProgressContainer/ProgressContainer'
import QuestionsBulletList from '../../QuestionsBulletList/QuestionsBulletList'
import LargeAvatarHeader from '../LargeAvatarHeader'
import QuestionDetailsHeader from './QuestionDetailsHeader'
import './SingleQuestionCard.css'

function calculatePercentage(votes, total) {
    return [votes, Math.round((votes / total) * 100)]
}



function CardAnswerOption({ children, votes, selected, mode, ...props }) {
    return (
        <div className={`option ${selected ? "selected" : "unselected"}`} {...props}>
            <QuestionsBulletList content={children}>
                {
                    mode === 'answered' &&
                    <li className='progressWrapper'>
                        <ProgressContainer
                            value={votes[1]}
                        >
                            <div>
                                {`${votes[0]} people voted this.`}
                            </div>
                            <div>
                                {`${votes[1]}%`}
                            </div>
                        </ProgressContainer>
                    </li>
                }
            </QuestionsBulletList>
        </div>
    )
}

function QuestionSection({ question, mode, update, ...props }) {



    return (
        <div  {...props}>
            <div className={`answers detailsMode-${mode}`}>


                <CardAnswerOption
                    votes={
                        calculatePercentage(
                            question.optionOne.votes.length,
                            question.optionOne.votes.length + question.optionTwo.votes.length
                        )
                    }
                    onClick={() => update?.('optionOne')}
                    selected={question.answered == "optionOne"}
                    mode={mode}
                >{question.optionOne.text}</CardAnswerOption>



                <CardAnswerOption
                    votes={
                        calculatePercentage(
                            question.optionTwo.votes.length,
                            question.optionOne.votes.length + question.optionTwo.votes.length
                        )
                    }
                    onClick={() => update?.('optionTwo')}
                    selected={question.answered == "optionTwo"}
                    mode={mode}
                >{question.optionTwo.text}
                </CardAnswerOption>


            </div>
        </div>
    )
}

export default function SingleQuestionCard({ question, mode, update, author, ...props }) {
    return (
        <div className='filledCard'>
            <LargeAvatarHeader
                name={author.name}
                avatarURL={author.avatarURL}
                detailsSection={<h4>Would You Rather</h4>}
            />
            
            <QuestionSection
                question={question}
                mode={mode}
                update={update}
            />
        </div>
    )
}

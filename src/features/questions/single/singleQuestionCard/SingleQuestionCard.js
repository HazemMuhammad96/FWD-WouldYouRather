import React from 'react'
import CardDetails from '../../../common/cards/CardDetails'
import ProgressContainer from '../../../common/progressContainer/ProgressContainer'
import OptionBox from '../../common/OptionBox'
import '../../common/PollQuestionCard.css'

function calculatePercentage(votes, total) {
    return [votes, Math.round((votes / total) * 100)]
}



function CardAnswerOption({ children, votes, selected, mode, ...props }) {
    return (
        <div
            className={
                `mode-${mode} ${selected ? "selected" : "unselected"}`
            }
            {...props}
        >

            <OptionBox
                extraContent={
                    mode === 'answered' &&
                    <div className='questionBox-extra '>
                        <div className='progressWrapper'>

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

                        </div>
                    </div>
                }>
                {children}
            </OptionBox>

        </div>
    )
}

function QuestionSection({ question, mode, update, ...props }) {


    const [clicked, setClicked] = React.useState(update ? false : true);

    const onClick = (option) => {
        
        if (!clicked) update?.(option);
        setClicked(true);
    }
    
    return (
        <div  {...props}>
            <div className={`questionBoxContainer detailsMode-${mode}`}>


                <CardAnswerOption
                    votes={
                        calculatePercentage(
                            question.optionOne.votes.length,
                            question.optionOne.votes.length + question.optionTwo.votes.length
                        )
                    }
                    onClick={() => onClick('optionOne')}
                    selected={question.answered === "optionOne"}
                    mode={mode}
                >{question.optionOne.text}</CardAnswerOption>



                <CardAnswerOption
                    votes={
                        calculatePercentage(
                            question.optionTwo.votes.length,
                            question.optionOne.votes.length + question.optionTwo.votes.length
                        )
                    }
                    onClick={() => onClick('optionTwo')}
                    selected={question.answered === "optionTwo"}
                    mode={mode}
                >{question.optionTwo.text}
                </CardAnswerOption>


            </div>
        </div>
    )
}

export default function SingleQuestionCard({ question, mode, update, author, ...props }) {
    return (
        <div className='filledCard questionDetailsCard'>
            <CardDetails
                imageUrl={question.author.avatarURL}
                primary={question.author.name}
                secondary={question.date}
            />

            <h1>Would You Rather</h1>
            <QuestionSection
                question={question}
                mode={mode}
                update={update}
            />
        </div>
    )
}

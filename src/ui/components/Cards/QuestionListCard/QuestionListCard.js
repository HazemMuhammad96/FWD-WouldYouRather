import React from 'react'
import "../Card.css"
import CardDetails from '../CardDetails'
import CardFooter from '../CardFooter'
import FilledCard from '../FilledCard'
import QuestionSection from './QuestionSection'
import "./QuestionCard.css"
import { ReactComponent as OpenIcon}from '../../../assets/open.svg'


export default function QuestionCard({ question, mode, action, update, ...props }) {
    return (
        <FilledCard {...props}>
            <QuestionSection
                question={question}
                mode={mode}
                update={update}
            />
            <CardDetails
                imageUrl={question.author.avatarURL}
                primary={question.author.name}
                secondary={question.date}
            >
                {
                    mode === "static" &&
                    <button className='clear' onClick={() => action()}>
                        <OpenIcon className="open-icon"/>
                    </button>
                }
            </CardDetails>
        </FilledCard>
    )
}

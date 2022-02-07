import React from 'react'
// import "../Card.css"
import QuestionSection from './QuestionSection'
import "./QuestionCard.css"
import { ReactComponent as OpenIcon}from '../../../../ui/assets/open.svg'
import FilledCard from "../../../common/cards/FilledCard";
import CardDetails from '../../../common/cards/CardDetails'


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
                    <button className='clear circle' onClick={() => action()}>
                        <OpenIcon className="open-icon"/>
                    </button>
                }
            </CardDetails>
        </FilledCard>
    )
}

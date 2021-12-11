import React from 'react'
import "./Card.css"
import CardDetails from './CardDetails'
import CardFooter from './CardFooter'
import FilledCard from './FilledCard'
import QuestionSection from './QuestionSection'


export default function QuestionCard({ question, mode, action, update, ...props }) {
    return (
        <FilledCard {...props}>
            <CardDetails
                imageUrl={question.author.avatarURL}
                primary={question.author.name}
                secondary={question.date}
            />
            <QuestionSection
                question={question}
                mode={mode}
                update={update}
            />
            {
                mode === "static" &&
                <CardFooter
                    action={action}
                />
            }
        </FilledCard>
    )
}

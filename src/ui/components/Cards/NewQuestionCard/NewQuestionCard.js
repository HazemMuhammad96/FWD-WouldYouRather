import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addQuestion } from '../../../../data/state/questionsSlice'
import ProgressContainer from '../../ProgressContainer/ProgressContainer'
import QuestionsBulletList from '../../QuestionsBulletList/QuestionsBulletList'
import LargeAvatarHeader from '../LargeAvatarHeader'



function CardAnswerOption({ children, votes, selected, mode, ...props }) {
    return (
        <div className={`option ${selected ? "selected" : "unselected"}`} {...props}>
            <QuestionsBulletList content={
                <input type='text' {...props} />
            }>

            </QuestionsBulletList>
        </div>
    )
}

function QuestionSection({ question, mode, update, onChangeFirst, onChangeSecond, ...props }) {




    return (
        <div  {...props}>
            <div className={`answers detailsMode-${mode}`}>


                <CardAnswerOption
                    onChange={(e) => onChangeFirst(e.target.value)}
                ></CardAnswerOption>



                <CardAnswerOption
                    onChange={(e) => onChangeSecond(e.target.value)}
                ></CardAnswerOption>


            </div>
        </div>
    )
}

export default function NewQuestionCard({ user,onFinish, onChange, ...props }) {

    const [question, setQuestion] = React.useState({
        optionOneText: "",
        optionTwoText: "",
    });

    React.useEffect(() => {
        onChange(question);
    }, [question]);

    return (
        <div className='filledCard'>
            <LargeAvatarHeader
                name={user.name}
                avatarURL={user.avatarURL}
                detailsSection={<h4>Would You Rather</h4>}
            />

            <QuestionSection
                question={question}
                onChangeFirst={(optionOne) => setQuestion(prev => ({ ...prev, optionOneText: optionOne }))}
                onChangeSecond={(optionTwo) => setQuestion(prev => ({ ...prev, optionTwoText: optionTwo }))}

            />

            <button onClick={onFinish}>
                Ask
            </button>
        </div>
    )
}

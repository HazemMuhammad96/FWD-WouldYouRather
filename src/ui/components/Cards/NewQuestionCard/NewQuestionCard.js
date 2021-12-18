import React from 'react'
import LoadingButton from '../../Buttons/LoadingButton'
import CardDetails from '../CardDetails'
import OptionBox from '../SingleQuestionCard/OptionBox'



function CardAnswerOption({ children, mode, ...props }) {
    return (
        <div {...props}>
            <OptionBox >
                <div className='optionBox-inputWrapper'>
                    <input type='text' {...props}
                    placeholder='option'/>
                </div>
            </OptionBox>
        </div>
    )
}

function QuestionSection({ question, mode, update, onChangeFirst, onChangeSecond, ...props }) {




    return (
        <div  {...props}>
            <div className='questionBoxContainer questionBoxStretch'>


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
        <div className='filledCard questionDetailsCard'>
          
            <CardDetails
                imageUrl={user.avatarURL}
                primary={user.name}
            />

            <h1>Would You Rather</h1>

            <QuestionSection
                question={question}
                onChangeFirst={(optionOne) => setQuestion(prev => ({ ...prev, optionOneText: optionOne.trim() }))}
                onChangeSecond={(optionTwo) => setQuestion(prev => ({ ...prev, optionTwoText: optionTwo.trim() }))}

            />

            <LoadingButton
                className="submit"
                disabled={!question.optionOneText || !question.optionTwoText}
                onClick={onFinish}>
                Submit
            </LoadingButton>
        </div>
    )
}

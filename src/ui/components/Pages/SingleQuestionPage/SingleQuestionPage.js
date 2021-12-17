import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchQuestions, update } from '../../../../data/state/questionsSlice';
import { useFetchSelector } from '../../../hooks/reduxHooks';
import QuestionCard from '../../Cards/SingleQuestionCard/SingleQuestionCard';
import { updateQuestion } from '../../../../data/state/questionsSlice';
import PageSection from '../../PageSection/PageSection';
export default function SingleQuestionPage() {

    const params = useParams();
    const question = useFetchSelector(
        state => state.questions.questions[params.id],
        fetchQuestions,
        document.user
    )

    const dispatch = useDispatch();

    function update(option) {

        dispatch(updateQuestion({
            id: question.id,
            option: option,
            user: document.user,
        }));
    }

    return (
        <PageSection
            header={"Question's Poll"}
            loading={!question}
        >
            {question &&

                <QuestionCard
                    author={question.author}
                    style={{ width: "50%" }}
                    question={question}
                    mode={
                        question.answered ?
                            "answered" :
                            "question"
                    }
                    update={
                        question.answered ?
                            () => { } :
                            update}

                />
            }
        </PageSection>
    )
}

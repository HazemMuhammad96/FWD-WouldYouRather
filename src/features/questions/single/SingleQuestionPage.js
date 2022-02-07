import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchQuestions, fetchSingleQuestion, selectSingle } from '../questionsSlice';
import { useFetchSelector } from '../../../ui/hooks/reduxHooks';
import QuestionCard from './singleQuestionCard/SingleQuestionCard';
import { updateQuestion } from '../questionsSlice';
import { Navigate } from 'react-router-dom';
import PageSection from '../../common/PageSection/PageSection';
export default function SingleQuestionPage() {

    const params = useParams();
    const { question, loading } = useFetchSelector(
        selectSingle,
        fetchSingleQuestion,
        params.id,
    )

    const dispatch = useDispatch();

    function update(option) {

        dispatch(updateQuestion(
            {
                id: question.id,
                option: option,
                user: document.user,
            },
        ));
    }

    return (
        <PageSection
            header={"Question's Poll"}
            loading={loading}
            style={{
                maxWidth: "600px"
            }}
        >
            {question ?

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
                :
                <Navigate to="/404" />
            }
        </PageSection>
    )
}

import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { fetchQuestions } from '../../../../data/state/questionsSlice'
import { useStickyObserver } from '../../../hooks/observers';
import { useFetchSelector } from '../../../hooks/reduxHooks'
import QuestionCard from '../../Cards/QuestionListCard/QuestionListCard';
import './QuestionsPage.css';

export default function QuestionsPage() {

    const { questions, loading } = useFetchSelector(
        state => state.questions,
        fetchQuestions,
        document.user
    )

    const tabs = {
        answered: {
            tabName: "Answered",
            filterFunction: (it) => it.answered,
        },
        unanswered: {
            tabName: "Unanswered",
            filterFunction: it => !it.answered,
        }
    }
    const [tab, setTab] = useState("unanswered");

    useStickyObserver('tabs', 'stuck');

    const navigate = useNavigate();
    return (
        <section>
            <div className="tabs">
                <button
                    onClick={() => setTab("unanswered")}
                >Unanswered</button>
                <button
                    onClick={() => setTab("answered")}
                >Answered</button>
            </div>

            <div className="questionsGrid">
                {
                    Object.values(questions)
                        .sort((a, b) => b.timestamp - a.timestamp)
                        .map(
                            it => tabs[tab].filterFunction(it) &&
                                <QuestionCard
                                    key={it.id}
                                    question={it}
                                    mode="static"
                                action={
                                    () => navigate(`/questions/${it.id}`)
                                    }
                                />
                        )
                }
            </div>
        </section>
    )
}

import { _getQuestions, _getUsers } from "./api";


function getQuestionsWithUsers(currentId) {
    return new Promise((resolve, reject) => {
        _getUsers().then(users => {

            _getQuestions().then(res => {
                Object.keys(res).forEach(
                    it => {
                        const current = res[it];

                        res[it] = {
                            ...current,
                            author: users[current.author],
                            date: new Date(current.timestamp).toLocaleDateString(),
                        }
                    }
                )

                resolve(res);
            })

        })
            .catch(err => reject(err));
    });
}
export function getKeyedQuestions(currentId) {

    
    return new Promise((resolve, reject) => {
        getQuestionsWithUsers(currentId).then(res => {
            Object.keys(res).forEach(
                it => {
                    const current = res[it];
                    let answered = undefined
                    if (current.optionOne.votes.includes(currentId)) {
                        answered = "optionOne";
                    }
                    else if (current.optionTwo.votes.includes(currentId)) {
                        answered = "optionTwo";
                    }

                    res[it] = {
                        ...current,
                        answered,
                    }
                }
            )

            resolve(res);
        }).catch(err => reject(err));
    });
}


export function getLeaderboard() {
    return new Promise((resolve, reject) => {

        _getUsers().then(users => {

            const leaderboard = Object.keys(users).map(it => {
                const current = users[it];
                return {
                    ...current,
                    answered: Object.keys(current.answers).length ?? 0,
                    created: current.questions.length ?? 0,
                    score: Object.keys(current.answers).length + current.questions.length ?? 0,
                }
            });

            resolve(leaderboard.sort((a, b) => b.score - a.score));
            

        });

    });
}
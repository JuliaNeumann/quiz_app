package com.example.quiz.models

class AggregatedUserSubmissions(val username: String, private val submissions: List<Submission>) {
    val averageScore: Double = this.computeAverageScore();

    private fun computeAverageScore(): Double {
        var sumAverages = 0.0;
        this.submissions.forEach {
            sumAverages += it.score.toDouble() / it.numQuestions;
        }
        return sumAverages / this.submissions.size;
    }
}
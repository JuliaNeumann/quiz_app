package com.example.quiz.repository

import org.springframework.data.jpa.repository.JpaRepository
import com.example.quiz.models.Submission
import org.springframework.stereotype.Repository

@Repository
interface SubmissionRepository : JpaRepository<Submission, Long>{
}
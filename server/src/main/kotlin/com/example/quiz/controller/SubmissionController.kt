package com.example.quiz.controller

import com.example.quiz.models.AggregatedUserSubmissions
import com.example.quiz.models.Submission
import com.example.quiz.repository.SubmissionRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@CrossOrigin("http://localhost:8081")
@RestController
@RequestMapping("/api/submissions")
class SubmissionController(@Autowired private val submissionRepository: SubmissionRepository) {
    @GetMapping("")
    fun getAllSubmissions() : List<Submission> = submissionRepository.findAll()

    @PostMapping("")
    fun createSubmission(@Valid @RequestBody submission: Submission) : Submission =
            submissionRepository.save(submission)

    @GetMapping("/aggregated/{name}")
    fun getAggregatedSubmission(@PathVariable name: String) : AggregatedUserSubmissions =
            AggregatedUserSubmissions(name, submissionRepository.findAll())
}
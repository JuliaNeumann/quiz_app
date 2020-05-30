package com.example.quiz.models

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.validation.constraints.NotBlank

@Entity(name = "submissions")
data class Submission(
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id : Long = 0,
	@get: NotBlank val username : String = "",
	@get: NotBlank val score : Int = 0,
	@get: NotBlank val numQuestions : Int = 0){
}
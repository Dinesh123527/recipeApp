package com.example.demo.exceptions;

import javax.persistence.EntityNotFoundException;

import org.hibernate.exception.ConstraintViolationException;
import org.springframework.boot.context.properties.bind.BindException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import com.example.demo.model.ErrorMessage;

@RestControllerAdvice
public class ControllerExceptionHandler {
	
	@ExceptionHandler(value= {RecipeException.class})
	public ResponseEntity<ErrorMessage> RecipeException(RecipeException ex, WebRequest request){
		ErrorMessage message = new ErrorMessage(HttpStatus.INTERNAL_SERVER_ERROR.value(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<ErrorMessage>(message, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@ExceptionHandler(value= {UserException.class})
	public ResponseEntity<ErrorMessage> UserException(UserException ex, WebRequest request){
		ErrorMessage message = new ErrorMessage(HttpStatus.INTERNAL_SERVER_ERROR.value(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<ErrorMessage>(message, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@ExceptionHandler(value= {AdminException.class})
	public ResponseEntity<ErrorMessage> AdminException(AdminException ex, WebRequest request){
		ErrorMessage message = new ErrorMessage(HttpStatus.INTERNAL_SERVER_ERROR.value(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<ErrorMessage>(message, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@ExceptionHandler(value= {ResourceException.class})
	public ResponseEntity<ErrorMessage> ResourceException(ResourceException ex, WebRequest request){
		ErrorMessage message = new ErrorMessage(HttpStatus.INTERNAL_SERVER_ERROR.value(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<ErrorMessage>(message, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@ExceptionHandler(value= {Exception.class})
	public ResponseEntity<ErrorMessage> internalServerHandler(Exception ex, WebRequest request){
		ErrorMessage message = new ErrorMessage(HttpStatus.INTERNAL_SERVER_ERROR.value(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<ErrorMessage>(message, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@ExceptionHandler(value= {MissingServletRequestParameterException.class})
	public ResponseEntity<ErrorMessage> requestParameterHandler(Exception ex, WebRequest request){
		ErrorMessage message = new ErrorMessage(HttpStatus.BAD_REQUEST.value(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<ErrorMessage>(message, HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(value= {HttpRequestMethodNotSupportedException.class})
	public ResponseEntity<ErrorMessage> handleHttpRequestMethod(HttpRequestMethodNotSupportedException ex, WebRequest request){
		ErrorMessage message = new ErrorMessage(HttpStatus.METHOD_NOT_ALLOWED.value(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<ErrorMessage>(message, HttpStatus.METHOD_NOT_ALLOWED);
	}
	
	@ExceptionHandler(value= {EntityNotFoundException.class})
	public ResponseEntity<ErrorMessage> missingServletRequestParameter(Exception ex, WebRequest request){
		ErrorMessage message = new ErrorMessage(HttpStatus.NOT_FOUND.value(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<ErrorMessage>(message, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(value= {MethodArgumentNotValidException.class})
	public ResponseEntity<ErrorMessage> methodArgumenHandler(Exception ex, WebRequest request){
		ErrorMessage message = new ErrorMessage(HttpStatus.BAD_REQUEST.value(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<ErrorMessage>(message, HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(value= {MethodArgumentTypeMismatchException.class})
	public ResponseEntity<ErrorMessage> methodArgumenTypeHandler(Exception ex, WebRequest request){
		ErrorMessage message = new ErrorMessage(HttpStatus.BAD_REQUEST.value(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<ErrorMessage>(message, HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(value= {BindException.class})
	public ResponseEntity<ErrorMessage> bindHandler(Exception ex, WebRequest request){
		ErrorMessage message = new ErrorMessage(HttpStatus.BAD_REQUEST.value(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<ErrorMessage>(message, HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(value= {IllegalArgumentException.class})
	public ResponseEntity<ErrorMessage> argumentHandler(Exception ex, WebRequest request){
		ErrorMessage message = new ErrorMessage(HttpStatus.BAD_REQUEST.value(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<ErrorMessage>(message, HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(value= {ConstraintViolationException.class})
	public ResponseEntity<ErrorMessage> constraintHandler(Exception ex, WebRequest request){
		ErrorMessage message = new ErrorMessage(HttpStatus.BAD_REQUEST.value(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<ErrorMessage>(message, HttpStatus.BAD_REQUEST);
	}

}

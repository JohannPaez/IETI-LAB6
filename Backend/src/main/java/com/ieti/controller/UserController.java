package com.ieti.controller;

import com.ieti.model.User;
import com.ieti.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(value = "/users")
public class UserController {

    @Autowired
    UserService service;

    @GetMapping
    public ResponseEntity<?> getUsers() {
        return ResponseEntity.ok(service.getAll());
    }

    @RequestMapping(path = "/{email}", method = RequestMethod.GET)
    public ResponseEntity<?> getUser(@PathVariable String email) {
        return new ResponseEntity<>(service.getById(email), HttpStatus.ACCEPTED);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> addUser(@RequestBody User user) {
        service.create(user);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> putUser(@RequestBody User user) {
        service.update(user);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteUser(@RequestBody User user) {
        service.remove(user.getEmail());
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

}

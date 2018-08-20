package com.aaronmagloire.healthappuser;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	public List<User> getAllUsers() {
		return (List<User>) userRepository.findAll();
	}

	public User getUser(Integer id) {
		return userRepository.findById(id).orElse(null);
	}

	public void addUser(User user) {
		userRepository.save(user);
	}

	public void updateUser(Integer id, User user) {
		userRepository.save(user);
	}

	public void deleteUser(Integer id) {
		userRepository.deleteById(id);
	}

}

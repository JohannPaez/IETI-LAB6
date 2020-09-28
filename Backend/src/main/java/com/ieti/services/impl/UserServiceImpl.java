package com.ieti.services.impl;

import com.ieti.model.User;
import com.ieti.services.UserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class UserServiceImpl implements UserService {
    List<User> users = new CopyOnWriteArrayList<>();

    public UserServiceImpl() {
        users.add(new User("Edwin Rodriguez", "edwin@mail.com", "edwin123"));
        users.add(new User("Nikolai Bermudez", "niko@mail.com", "niko123"));
        users.add(new User("Johann Paez", "johann@mail.com", "johann123"));
    }

    @Override
    public List<User> getAll() {
        return users;
    }

    @Override
    public User getById(String userId) {
        for (User u: users) {
            if (u.getEmail().equals(userId)) return u;
        }
        return null;
    }

    @Override
    public User create(User user) {
        users.add(user);
        return user;
    }

    @Override
    public User update(User user) {
        User u = getById(user.getEmail());
        u.setName(user.getName());
        u.setPassword(user.getPassword());
        return u;
    }

    @Override
    public void remove(String userId) {
        for (int i = 0; i < users.size(); i++) {
            if (users.get(i).getEmail().equals(userId)) {
                users.remove(i);
            }
        }
    }
}

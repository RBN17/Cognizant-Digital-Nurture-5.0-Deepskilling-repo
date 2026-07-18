package com.cognizant.springlearn.controller;


import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.nio.charset.StandardCharsets;


import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(
            @RequestHeader("Authorization") String authHeader) {

        LOGGER.info("START");
        LOGGER.debug("Authorization Header : {}", authHeader);

        Map<String, String> map = new HashMap<>();
        String user = getUser(authHeader);

        LOGGER.debug("User: {}", user);

        String token = generateJwt(user);

        LOGGER.debug("Token: {}", token);

        map.put("token", token);

        LOGGER.info("END");
        return map;
    }
    
    private String getUser(String authHeader) {

        LOGGER.debug("Authorization Header: {}", authHeader);

        String encodedCredentials = authHeader.substring("Basic ".length());

        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);

        String credentials = new String(decodedBytes, StandardCharsets.UTF_8);

        LOGGER.debug("Decoded Credentials: {}", credentials);

        return credentials.substring(0, credentials.indexOf(":"));
    }
    
    private String generateJwt(String user) {

        Key key = Keys.hmacShaKeyFor(
                "secretkeysecretkeysecretkey12345".getBytes(StandardCharsets.UTF_8));

        return Jwts.builder()
                .setSubject(user)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1200000))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }
    }

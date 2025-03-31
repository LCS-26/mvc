package edu.comillas.icai.gitt.pat.spring.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SSR {

    @GetMapping("/login")
    public String showLoginPage() {
        return "login";
    }

    @GetMapping("/foro")
    public String showForoPage() {
        return "foro";
    }
}
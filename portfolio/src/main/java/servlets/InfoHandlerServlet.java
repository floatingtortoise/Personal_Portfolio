package servlets;

import java.io.IOException;
import java.net.http.HttpRequest;
import java.util.Date;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/info-handler")
public class InfoHandlerServlet extends HttpServlet {

    @Override

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
        String message = request.getParameter("message-input");
        String email = request.getParameter("email-input");
        Date date = new Date();
        String json = convertToJson(message, email, date);
        response.setContentType("application/json;");
        response.getWriter().println(json);
    }

    private String convertToJson(String message, String email, Date date){
        String json = "{";
        json += "\"message\": ";
        json += "\"" + message + "\"";
        json += ", ";
        json += "\"email\": ";
        json += "\"" + email + "\"";
        json += ", ";
        json += "\"date\": ";
        json += "\"" + date + "\"";
        json += "}";
        return json;
    }
    
}

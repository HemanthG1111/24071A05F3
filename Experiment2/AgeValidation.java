import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class AgeValidation extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws IOException {

        res.setContentType("text/html");
        PrintWriter out = res.getWriter();

        String agenum = req.getParameter("age");
	
	int agen = Integer.parseInt(agenum);
	
        if(agen>=18) {
            out.println("<h3>User Is Eligible</h3>");

        } else {
            out.println("<h3>"+ agen + " is not an eligible age</h3>");
        }

        out.println("<h2>@24071A05F3</h2>");
    }
}
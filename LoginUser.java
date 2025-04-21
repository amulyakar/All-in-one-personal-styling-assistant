import java.sql.*;
import java.util.Scanner;

public class LoginUser {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("=== AI Styling Assistant - User Login ===");
        System.out.print("Enter Email: ");
        String email = sc.nextLine();

        System.out.print("Enter Password: ");
        String password = sc.nextLine();

        try {
            // Load MySQL JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Connect to Database
            Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/ai_styling", "root", ""
            );

            // SQL Query to check login
            String sql = "SELECT * FROM users WHERE email = ? AND password = ?";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, email);
            stmt.setString(2, password);

            ResultSet rs = stmt.executeQuery();

            if (rs.next()) {
                System.out.println("✅ Login successful! Welcome back ✨");
            } else {
                System.out.println("❌ Login failed. Wrong email or password.");
            }

            // Close
            rs.close();
            stmt.close();
            conn.close();

        } catch (Exception e) {
            e.printStackTrace();
        }

        sc.close();
    }
}

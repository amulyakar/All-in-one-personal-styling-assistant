import java.sql.*;
import java.util.Scanner;

public class RegisterUser {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("=== AI Styling Assistant - User Registration ===");
        System.out.print("Enter Email: ");
        String email = sc.nextLine();

        System.out.print("Enter Password: ");
        String password = sc.nextLine();

        try {
            // 1. Load MySQL JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // 2. Connect to Database
            Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/ai_styling", "root", ""
            );

            // 3. Prepare SQL Query
            String sql = "INSERT INTO users (email, password) VALUES (?, ?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, email);
            stmt.setString(2, password);

            // 4. Execute
            int rowsInserted = stmt.executeUpdate();
            if (rowsInserted > 0) {
                System.out.println("✅ User registered successfully!");
            }

            // 5. Close
            stmt.close();
            conn.close();

        } catch (Exception e) {
            e.printStackTrace();
        }

        sc.close();
    }
}


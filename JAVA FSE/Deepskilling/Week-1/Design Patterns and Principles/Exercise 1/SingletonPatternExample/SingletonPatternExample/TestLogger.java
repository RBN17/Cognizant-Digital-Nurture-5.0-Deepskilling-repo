public class TestLogger {

    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("Application started");
        logger2.log("Logging another message");

        if (logger1 == logger2) {
            System.out.println("Only one instance of Logger is created.");
        } else {
            System.out.println("Different Logger instances are created.");
        }
    }
}
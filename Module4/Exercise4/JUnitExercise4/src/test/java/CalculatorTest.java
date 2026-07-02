import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    Calculator calculator;

    @BeforeEach
    void setUp() {
        calculator = new Calculator();
        System.out.println("The Setup is done");
    }

    @Test
    void testAdd() {

        // Arrange
        int a = 11;
        int b = 22;

        // Act
        int result1 = calculator.add(a, b);

        // Assert
        assertEquals(33, result1);

    }

    @Test
    void testSub() {

        // Arrange
        int a = 26;
        int b = 13;

        // Act
        int result2 = calculator.sub(a, b);

        // Assert
        assertEquals(13, result2);

    }

    @AfterEach
    void tearDown() {
        System.out.println("The Teardown is done");
    }
}
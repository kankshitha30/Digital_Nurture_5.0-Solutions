package org.example;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    @Test
    public void testAddition() {
        int result = 3 + 5;
        assertEquals("Incorrect answer", 8, result);
    }
}
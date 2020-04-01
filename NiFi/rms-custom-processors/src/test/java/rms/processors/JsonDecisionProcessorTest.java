package rms.processors;

import org.apache.nifi.util.TestRunner;
import org.apache.nifi.util.TestRunners;
import org.junit.Before;
import org.junit.Test;
import rms.processors.json.JsonDecisionProcessor;

public class JsonDecisionProcessorTest {

    private TestRunner testRunner;

    @Before
    public void init() {
        testRunner = TestRunners.newTestRunner(JsonDecisionProcessor.class);
    }

    @Test
    public void testProcessor() {

    }

}

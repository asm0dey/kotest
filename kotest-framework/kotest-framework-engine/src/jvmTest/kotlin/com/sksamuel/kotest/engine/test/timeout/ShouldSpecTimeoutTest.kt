package com.sksamuel.kotest.engine.test.timeout

import io.kotest.core.annotation.EnabledIf
import io.kotest.core.annotation.LinuxOnlyGithubCondition
import io.kotest.core.spec.style.ShouldSpec
import io.kotest.engine.test.TestResult
import io.kotest.engine.test.TestResultBuilder
import kotlinx.coroutines.delay
import kotlin.time.Duration.Companion.milliseconds
import kotlin.time.Duration.Companion.minutes

@EnabledIf(LinuxOnlyGithubCondition::class)
class ShouldSpecTimeoutTest : ShouldSpec() {
   init {

      extension { (testCase, execute) ->
         val result = execute(testCase)
         if (testCase.name.name.contains("timeout:") && result.isSuccess) {
            TestResultBuilder.builder()
               .withError(AssertionError("${testCase.descriptor.id.value} passed but should fail"))
               .build()
         } else {
            TestResult.Success(0.milliseconds)
         }
      }

      should("timeout: root test case should timeout when duration longer than config").config(
         timeout = 10.milliseconds
      ) {
         delay(20.milliseconds)
      }

      context("timeout: container should timeout when duration longer than config").config(
         timeout = 10.milliseconds
      ) {
         delay(20.milliseconds)
      }

      context("timeout: container should timeout when nested test duration longer than container config").config(
         timeout = 10.milliseconds
      ) {
         should("timeout: a") {
            delay(20.milliseconds)
         }
      }

      context("container should allow tests to have shorter timeouts").config(timeout = 1.minutes) {

         should("timeout: nested test should override container timeouts").config(timeout = 10.milliseconds) {
            delay(20.milliseconds)
         }

         context("timeout: nested container should override container timeouts").config(
            timeout = 10.milliseconds
         ) {
            delay(20.milliseconds)
         }
      }

      context("containers should allow tests to have longer timeouts").config(timeout = 10.milliseconds) {
         should("nested test should override container timeouts").config(timeout = 25.milliseconds) {
            delay(20.milliseconds)
         }

         context("nested container should override container timeouts").config(timeout = 25.milliseconds) {
            delay(20.milliseconds)
         }
      }
   }
}

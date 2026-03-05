// commonMain/kotlin/com/example/shared/Greeting.kt
package com.example.shared

// All shared business logic lives in commonMain.
// Platform-specific code goes in androidMain / iosMain via expect/actual.
class Greeting {
    fun greet(): String = "Hello from shared Kotlin! Copilot SKILL.md is active."
}

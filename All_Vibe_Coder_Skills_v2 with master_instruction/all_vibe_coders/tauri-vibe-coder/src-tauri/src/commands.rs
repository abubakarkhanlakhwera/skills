// src-tauri/src/commands.rs
// Place all Tauri command handlers here. Import into main.rs.

/// Example command — replace with your real logic.
/// Always return Result<T, String> so errors surface in the frontend.
#[tauri::command]
pub fn greet(name: &str) -> Result<String, String> {
    if name.is_empty() {
        return Err("Name cannot be empty".into());
    }
    Ok(format!("Hello, {}! Copilot SKILL.md is active.", name))
}

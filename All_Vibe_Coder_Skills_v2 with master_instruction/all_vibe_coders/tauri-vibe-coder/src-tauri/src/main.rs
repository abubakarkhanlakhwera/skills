// src-tauri/src/main.rs
// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

mod commands;

#[cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![commands::greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

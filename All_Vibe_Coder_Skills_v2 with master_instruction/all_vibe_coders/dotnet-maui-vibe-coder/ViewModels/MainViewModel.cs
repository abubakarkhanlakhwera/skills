using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;

namespace MauiVibeCoderApp.ViewModels;

public partial class MainViewModel : ObservableObject
{
    [ObservableProperty]
    private string title = ".NET MAUI Vibe Coder";

    [ObservableProperty]
    private string buttonLabel = "Say Hello";

    [RelayCommand]
    private void Greet()
    {
        ButtonLabel = "👋 SKILL.md is active!";
    }
}

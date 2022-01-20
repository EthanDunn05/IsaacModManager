using IsaacModManager.Models;

namespace IsaacModManager.Databases
{
    public static class GameDatabase
    {
        public static Game Game { get; set; } = Game.Default();
    }
}
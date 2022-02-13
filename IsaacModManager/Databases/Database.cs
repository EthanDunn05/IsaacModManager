using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using IsaacModManager.Models;

namespace IsaacModManager.Databases
{
    public static class Database
    {
        public static string GameDirectory { get; set; } =
            @"G:\SteamLibrary\steamapps\common\The Binding of Isaac Rebirth";
        public static List<Mod> Mods
        {
            get
            {
                try
                {
                    var modDirectories = System.IO.Directory.GetDirectories(GameDirectory + @"\mods");
                    return modDirectories.Select(directory => new Mod(directory)).ToList();
                }
                catch (DirectoryNotFoundException e)
                {
                    Console.Error.WriteLine(e.Message);
                    return new List<Mod>();
                }
            }
        }
    }
}
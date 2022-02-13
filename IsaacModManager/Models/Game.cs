using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Xml;
using System.Xml.Linq;

namespace IsaacModManager.Models
{
    public class Game
    {
        public Game(string directory)
        {
            Directory = directory;
        }

        public string Directory { get; }

        public List<Mod> Mods 
        {
            get
            {
                try
                {
                    var modDirectories = System.IO.Directory.GetDirectories(Directory + @"\mods");
                    return modDirectories.Select(directory => new Mod(directory)).ToList();
                }
                catch (DirectoryNotFoundException e)
                {
                    Console.Error.WriteLine(e.Message);
                    return new List<Mod>();
                }
            }
        }

        public static Game Default()
        {
            return new Game(@"G:\SteamLibrary\steamapps\common\The Binding of Isaac Rebirth");
        }
    }
}
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
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
                var modDirectories = System.IO.Directory.GetDirectories(Directory + @"\mods");
                return modDirectories.Select(directory => new Mod(directory)).ToList();
            }
            set {}
        }
    }
}
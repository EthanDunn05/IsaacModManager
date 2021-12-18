using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Xml.Linq;

namespace IsaacModManager.Models
{
    public class Mod
    {
        public Mod(string directory)
        {
            Directory = directory;
        }

        public string Directory { get; }
        public string Name => XDocument.Load(Directory + @"\metadata.xml").Root?.Element("name")?.Value ?? "Unknown";
        public bool Enabled => !System.IO.Directory.GetFiles(Directory).Contains(Directory + @"\disable.it");
    }
}
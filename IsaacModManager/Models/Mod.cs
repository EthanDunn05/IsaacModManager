using System;
using System.Diagnostics.CodeAnalysis;
using System.IO;
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

        public bool Enabled
        {
            get
            {
                var files = System.IO.Directory.GetFiles(Directory);
                return !files.Contains(Directory + @"\disable.it");
            }
            set
            {
                // TODO: Implement exception handling
                if (value) File.Delete(Directory + @"\disable.it");
                else File.Create(Directory + @"\disable.it").Close();
            }
        }
    }
}
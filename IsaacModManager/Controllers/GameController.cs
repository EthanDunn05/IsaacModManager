using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using IsaacModManager.Databases;
using IsaacModManager.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace IsaacModManager.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class GameController : ControllerBase
    {

        [HttpGet]
        public Game Get() => GameDatabase.Game;
        
        [HttpPut("{index:int}")]
        public IActionResult PutMod(int index, Mod mod)
        {
            GameDatabase.Game.Mods[index] = mod;
            return NoContent();
        }

        [HttpPut]
        public IActionResult PutDirectory(Text directory)
        {
            GameDatabase.Game = new Game(directory.Body);
            return NoContent();
        }
    }
}
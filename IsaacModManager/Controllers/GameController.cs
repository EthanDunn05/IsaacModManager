using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using IsaacModManager.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace IsaacModManager.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GameController : ControllerBase
    {
        private readonly Game _game = new(@"G:\SteamLibrary\steamapps\common\The Binding of Isaac Rebirth");

        [HttpGet]
        public Game Get() => _game;

        [HttpPut("{index:int}")]
        public IActionResult Put(int index, Mod mod)
        {
            _game.Mods[index] = mod;
            return NoContent();
        }
    }
}
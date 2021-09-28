  
using System;
using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{
    [ApiController]
    [Route("api/filme")]
    public class FilmeController : ControllerBase
    {
        private readonly DataContext _context;
        public FilmeController(DataContext context)
        {
            _context = context;
        }
    

    //POST: api/filme/create
    [HttpPost]
    [Route("create")]
    public IActionResult Create([FromBody] Filme filme)
    {
        _context.Filmes.Add(filme);
        _context.SaveChanges();
        return Created("", filme);
    }

    //GET: api/filme/list
    [HttpGet]
    [Route("list")]
    public IActionResult List() => Ok(_context.Filmes.ToList());
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MichaelsQuizApp.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MichaelsQuizApp.Controllers
{
    [Produces("application/json")]
    [Route("api/Quiz")]
    public class QuizController : Controller
    {
        private readonly ApplicationDbContext _context;

        public QuizController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/Quiz
        [HttpGet]
        public async Task<IEnumerable<Question>> Get()
        {
            return await _context.Questions.ToListAsync();
        }

        // GET: api/Quiz/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/Quiz
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }
        
        // PUT: api/Quiz/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

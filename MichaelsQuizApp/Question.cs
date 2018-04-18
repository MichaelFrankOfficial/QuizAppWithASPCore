using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text;

namespace MichaelsQuizApp
{
    public class Question
    {
        public int Id { get; set; }
        public string QuestionText { get; set; }
        public int Answer1Id { get; set; }
        public string Answer1Text { get; set; }
        public Boolean IsAnswer1Correct { get; set; }
        public int Answer2Id { get; set; }
        public string Answer2Text { get; set; }
        public Boolean IsAnswer2Correct { get; set; }
        public int Answer3Id { get; set; }
        public string Answer3Text { get; set; }
        public Boolean IsAnswer3Correct { get; set; }
        public int Answer4Id { get; set; }
        public string Answer4Text { get; set; }
        public Boolean IsAnswer4Correct { get; set; }
    }
}

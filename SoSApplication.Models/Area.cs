using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoSApplication.Models
{
    public class Area
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public List<Subarea> Subareas { get; set; }
        public Subarea Subarea { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeWebApiService.Controllers
{
    public class EmployeesController : ApiController
    {
       // EmployeesController employee = new EmployeesController();
       public IEnumerable<employee> getdata()
        {

            DetailsEntities entities = new DetailsEntities();
           // return   entities.employees.ToList();
        }
        public employee getdata(string code)
        {

            DetailsEntities entities = new DetailsEntities();
                return entities.employees.FirstOrDefault(e =>e.code==code);
        }
    }
}

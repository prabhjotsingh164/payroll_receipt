let salary_per_hour;
const teaching_allowance_master=1500;
const teaching_allowance_bachelor=600;
let flat_fixed_salary;
let fixed_salary;
let hourly_rate;
let extra_hours;
let total_salary;
let gross_salary;
let salary_after_deduction;
let net_pay;
let deduction;
let employee_type;
function submit()
{
let employee_number = document.getElementById('emp_number').value;
let employee_name = document.getElementById('emp_name').value;
let employee_department = document.getElementById('emp_department').value;
let employee_hours = document.getElementById('emp_hours').value;
let employee_code = document.getElementById('emp_code').value;
    console.log("Employee Number:"+employee_number);
    console.log("Name:"+employee_name);
    console.log("Department:"+employee_department);
    console.log("Number of hours worked:"+employee_hours);
    //console.log(employee_code);
    





   if(employee_code=="F" || employee_code=="f")
    { 
        
        console.log("Employee Type:"+" Faculty");
        let qualification_code = prompt("Enter Qualification Code");
    if(qualification_code=="M")
    {
        salary_per_hour=175; 
        fixed_salary = salary_per_hour*employee_hours + teaching_allowance_master;
        console.log("Gross Salary:"+fixed_salary);
        if(fixed_salary>3000)
        {
          deduction = (fixed_salary*0.25)-33;
          net_pay = fixed_salary +2500 -deduction;
          console.log("Deduction:"+deduction);
          console.log("Net Pay:"+net_pay);
          document.getElementById('employeeNumber').innerHTML=`Employee Number:${employee_number}`;
          document.getElementById('employeeName').innerHTML=`Employee Name:${employee_name}`;
          document.getElementById('employeeDepartment').innerHTML=`Department:${employee_department}`;
          document.getElementById('employeeHours').innerHTML=`Number of hours worked:${employee_number}`;
          document.getElementById('employeeType').innerHTML=`Employee Type:Faculty`;

          document.getElementById('employeeGrossSalary').innerHTML=`Gross Salary:$${fixed_salary}`;
          document.getElementById('employeeDeduction').innerHTML=`Deduction:$${deduction}`;
          document.getElementById('employeeNetPay').innerHTML=`Net Pay:$${net_pay}`;
        }
        else if(fixed_salary<=3000)
          {
            deduction = (fixed_salary*0.25)-19.20;
            net_pay = fixed_salary +2500-deduction;
            document.getElementById('employeeNumber').innerHTML=`Employee Number:${employee_number}`;
          document.getElementById('employeeName').innerHTML=`Employee Name:${employee_name}`;
          document.getElementById('employeeDepartment').innerHTML=`Department:${employee_department}`;
          document.getElementById('employeeHours').innerHTML=`Number of hours worked:${employee_number}`;
          document.getElementById('employeeType').innerHTML=`Employee Type:Faculty`;

          document.getElementById('employeeGrossSalary').innerHTML=`Gross Salary:$${fixed_salary}`;
          document.getElementById('employeeDeduction').innerHTML=`Deduction:$${deduction}`;
          document.getElementById('employeeNetPay').innerHTML=`Net Pay:$${net_pay}`;
            console.log("Deduction:"+deduction);
              console.log("Net Pay:"+net_pay);
          }
        //console.log(fixed_salary);

    }
    else if(qualification_code=="B")
    {
        salary_per_hour=100;
        fixed_salary = salary_per_hour*employee_hours + teaching_allowance_bachelor;
        console.log("Gross Salary:"+fixed_salary);
        if(fixed_salary>3000)
        {
          deduction = (fixed_salary*0.25)-33;
          net_pay = fixed_salary +2500 -deduction;
          document.getElementById('employeeNumber').innerHTML=`Employee Number:${employee_number}`;
          document.getElementById('employeeName').innerHTML=`Employee Name:${employee_name}`;
          document.getElementById('employeeDepartment').innerHTML=`Department:${employee_department}`;
          document.getElementById('employeeHours').innerHTML=`Number of hours worked:${employee_number}`;
          document.getElementById('employeeType').innerHTML=`Employee Type:Faculty`;

          document.getElementById('employeeGrossSalary').innerHTML=`Gross Salary:$${fixed_salary}`;
          document.getElementById('employeeDeduction').innerHTML=`Deduction:$${deduction}`;
          document.getElementById('employeeNetPay').innerHTML=`Net Pay:$${net_pay}`;
          console.log("Deduction:"+deduction);
          console.log("Net Pay:"+net_pay);
        }
        else if(fixed_salary<=3000)
          {
            deduction = (fixed_salary*0.25)-19.20;
            net_pay = fixed_salary +2500-deduction;
            document.getElementById('employeeNumber').innerHTML=`Employee Number:${employee_number}`;
          document.getElementById('employeeName').innerHTML=`Employee Name:${employee_name}`;
          document.getElementById('employeeDepartment').innerHTML=`Department:${employee_department}`;
          document.getElementById('employeeHours').innerHTML=`Number of hours worked:${employee_number}`;
          document.getElementById('employeeType').innerHTML=`Employee Type:Faculty`;

          document.getElementById('employeeGrossSalary').innerHTML=`Gross Salary:$${fixed_salary}`;
          document.getElementById('employeeDeduction').innerHTML=`Deduction:$${deduction}`;
          document.getElementById('employeeNetPay').innerHTML=`Net Pay:$${net_pay}`;
            console.log("Deduction:"+deduction);
              console.log("Net Pay:"+net_pay);
          }
      }
    }
    else if(employee_code=="R" || employee_code=="r")
    {
        console.log("Employee Type:"+" Regular");

       fixed_salary = prompt("Enter Employee's Salary");
        if(employee_hours==160 && fixed_salary>3000)
        {
        flat_fixed_salary=fixed_salary;
        
        deduction = (fixed_salary*0.25)-33;
          net_pay = parseInt(fixed_salary) +2500 -deduction;
          document.getElementById('employeeNumber').innerHTML=`Employee Number:${employee_number}`;
          document.getElementById('employeeName').innerHTML=`Employee Name:${employee_name}`;
          document.getElementById('employeeDepartment').innerHTML=`Department:${employee_department}`;
          document.getElementById('employeeHours').innerHTML=`Number of hours worked:${employee_number}`;
          document.getElementById('employeeType').innerHTML=`Employee Type:Faculty`;

          document.getElementById('employeeGrossSalary').innerHTML=`Gross Salary:$${fixed_salary}`;
          document.getElementById('employeeDeduction').innerHTML=`Deduction:$${deduction}`;
          document.getElementById('employeeNetPay').innerHTML=`Net Pay:$${net_pay}`;
          console.log("Gross Salary:"+fixed_salary);
          console.log("Deduction:"+deduction);
          console.log("Net Pay:"+net_pay);
          
        }
                else if(employee_hours==160 && fixed_salary<=3000)
          {
            flat_fixed_salary=fixed_salary;
            console.log("Gross Salary:"+fixed_salary);
            deduction = (fixed_salary*0.25)-19.20;
              net_pay = parseInt(fixed_salary) + parseFloat(2500 -deduction);
              document.getElementById('employeeNumber').innerHTML=`Employee Number:${employee_number}`;
          document.getElementById('employeeName').innerHTML=`Employee Name:${employee_name}`;
          document.getElementById('employeeDepartment').innerHTML=`Department:${employee_department}`;
          document.getElementById('employeeHours').innerHTML=`Number of hours worked:${employee_number}`;
          document.getElementById('employeeType').innerHTML=`Employee Type:Faculty`;

          document.getElementById('employeeGrossSalary').innerHTML=`Gross Salary:$${fixed_salary}`;
          document.getElementById('employeeDeduction').innerHTML=`Deduction:$${deduction}`;
          document.getElementById('employeeNetPay').innerHTML=`Net Pay:$${net_pay}`;
              console.log("Deduction:"+deduction);
              console.log("Net Pay:"+net_pay);
          }
        
      else if(employee_hours<160 && fixed_salary>3000)
      {
        hourly_rate=fixed_salary/employee_hours;
        total_salary = (hourly_rate*employee_hours).toFixed(2);
        console.log("Gross Salary:"+total_salary);
        deduction = ((total_salary*0.25)-33).toFixed(2);
          net_pay = (total_salary +2500 -deduction).toFixed(2);
          document.getElementById('employeeNumber').innerHTML=`Employee Number:${employee_number}`;
          document.getElementById('employeeName').innerHTML=`Employee Name:${employee_name}`;
          document.getElementById('employeeDepartment').innerHTML=`Department:${employee_department}`;
          document.getElementById('employeeHours').innerHTML=`Number of hours worked:${employee_number}`;
          document.getElementById('employeeType').innerHTML=`Employee Type:Faculty`;

          document.getElementById('employeeGrossSalary').innerHTML=`Gross Salary:$${total_salary}`;
          document.getElementById('employeeDeduction').innerHTML=`Deduction:$${deduction}`;
          document.getElementById('employeeNetPay').innerHTML=`Net Pay:$${net_pay}`;
          console.log("Deduction:"+deduction);
          console.log("Net Pay:"+net_pay);
      }
        else if(employee_hours<160 && fixed_salary<=3000)
          {
            hourly_rate=fixed_salary/employee_hours;
        total_salary = (hourly_rate*employee_hours).toFixed(2);
        console.log("Gross Salary:"+total_salary);
            deduction = ((total_salary*0.25)-19.20).toFixed(2);
            net_pay = (total_salary +2500-deduction).toFixed(2);
            document.getElementById('employeeNumber').innerHTML=`Employee Number:${employee_number}`;
            document.getElementById('employeeName').innerHTML=`Employee Name:${employee_name}`;
            document.getElementById('employeeDepartment').innerHTML=`Department:${employee_department}`;
            document.getElementById('employeeHours').innerHTML=`Number of hours worked:${employee_number}`;
            document.getElementById('employeeType').innerHTML=`Employee Type:Faculty`;
  
            document.getElementById('employeeGrossSalary').innerHTML=`Gross Salary:$${total_salary}`;
            document.getElementById('employeeDeduction').innerHTML=`Deduction:$${deduction}`;
            document.getElementById('employeeNetPay').innerHTML=`Net Pay:$${net_pay}`;
            console.log("Deduction:"+deduction);
              console.log("Net Pay:"+net_pay);
          }
      else if(employee_hours>160 && fixed_salary>3000)
      {
          extra_hours = employee_hours -160;
          hourly_rate = fixed_salary/160;
          total_salary = (160*hourly_rate + extra_hours*hourly_rate*2).toFixed(2);
          console.log("Gross Salary:"+total_salary);
          deduction = ((total_salary*0.25)-33).toFixed(2);
          net_pay = (total_salary +2500 -deduction).toFixed(2);
          document.getElementById('employeeNumber').innerHTML=`Employee Number:${employee_number}`;
          document.getElementById('employeeName').innerHTML=`Employee Name:${employee_name}`;
          document.getElementById('employeeDepartment').innerHTML=`Department:${employee_department}`;
          document.getElementById('employeeHours').innerHTML=`Number of hours worked:${employee_number}`;
          document.getElementById('employeeType').innerHTML=`Employee Type:Faculty`;

          document.getElementById('employeeGrossSalary').innerHTML=`Gross Salary:$${total_salary}`;
          document.getElementById('employeeDeduction').innerHTML=`Deduction:$${deduction}`;
          document.getElementById('employeeNetPay').innerHTML=`Net Pay:$${net_pay}`;
          console.log("Deduction:"+deduction);
          console.log("Net Pay:"+net_pay);
      }
        else if(employee_hours>160 && total_salary<=3000)
          {
            extra_hours = employee_hours -160;
          hourly_rate = fixed_salary/160;
          total_salary = (160*hourly_rate + extra_hours*hourly_rate*2).toFixed(2);
          console.log("Gross Salary:"+total_salary);
            deduction = ((total_salary*0.25)-19.20).toFixed(2);
            net_pay = (total_salary +2500-deduction).toFixed(2);
            document.getElementById('employeeNumber').innerHTML=`Employee Number:${employee_number}`;
            document.getElementById('employeeName').innerHTML=`Employee Name:${employee_name}`;
            document.getElementById('employeeDepartment').innerHTML=`Department:${employee_department}`;
            document.getElementById('employeeHours').innerHTML=`Number of hours worked:${employee_number}`;
            document.getElementById('employeeType').innerHTML=`Employee Type:Faculty`;
  
            document.getElementById('employeeGrossSalary').innerHTML=`Gross Salary:$${total_salary}`;
            document.getElementById('employeeDeduction').innerHTML=`Deduction:$${deduction}`;
            document.getElementById('employeeNetPay').innerHTML=`Net Pay:$${net_pay}`;
            console.log("Deduction:"+deduction);
              console.log("Net Pay:"+net_pay);
          }
      }
    }
      
    


function saveDetails(){
    let empid,name,salary,dept,skill;
    console.log('calling');
    name=document.getElementById("name").value;
    empid=document.getElementById("empid").value;
    salary=document.getElementById("salary").value;
    dept=document.getElementById("dept").value;
    skill=document.getElementById("skill").value;

    let user_data=new Array();
     user_data=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

    if(user_data.some((value)=>{return value.empid==empid})){
        alert("Already Present");
    }
    else{
        user_data.push({
            "name":name,
            "empid":empid,
            "salary":salary,
            "dept":dept,
            "skill":skill
        });
        console.log(user_data);
        localStorage.setItem("users",JSON.stringify(user_data));
       
    }

}

function viewDetails(){
    var text="<table border=1px>";
    text+="<tr><th>Name</th><th>Emp ID</th><th>Salary</th><th>Department</th><th>Skill</th></tr>";
    let user_data=JSON.parse(localStorage.getItem('users'));
    console.log(user_data);
    for(let eachObj of user_data){
        text+="<tr>";
        for(let val in eachObj){
            text+="<td>"+eachObj[val]+"</td>";
        }
        text+="</tr>";
       
    }
    text+="</table>";
    document.getElementById('b1').innerHTML=text;
}

function removeEmployee(){
    let user_data=[]=JSON.parse(localStorage.getItem('users'));
    console.log(user_data);
    console.log(user_data[0]);
    console.log(Object.values(user_data[0]));
    let eid=document.getElementById("e1").value;
    console.log(eid);
    for(let index in user_data){
    let arr=Object.values(user_data[index]);
    if(arr[1]==eid){
        removeData();
    }
    console.log(arr);
    }
    function removeData(){

    }
    
    return false;
}

function search(){
    let user_data=JSON.parse(localStorage.getItem('users'));
    let eid=document.getElementById("e1").value;
    for(let eachObj of user_data){
        console.log(eachObj);
        for(let val in eachObj){
            if(eachObj[val]==eid){
            alert('Employee is present');
            }else{
                alert('Employee is not present');
            }
        }
    }

    return false;
}
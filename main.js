// document.getElementById('issueInputForm').addEventListener('submit', submitIssue);

// function submitIssue(e) {
//   const getInputValue = id => document.getElementById(id).value;
//   const description = getInputValue('issueDescription');
//   const severity = getInputValue('issueSeverity');
//   const assignedTo = getInputValue('issueAssignedTo');
//   const id = Math.floor(Math.random() * 100000000) + '';
//   const status = 'Open';

//   const issue = { id, description, severity, assignedTo, status };
//   // console.log(issue);
//   let issues = [];
//   // console.log(issues);
//   if (localStorage.getItem('issues')) {
//     issues = JSON.parse(localStorage.getItem('issues'));
//   }
//   issues.push(issue);
//   localStorage.setItem('issues', JSON.stringify(issues));

//   document.getElementById('issueInputForm').reset();
//   totalIssue()
//   openIssue();
//   fetchIssues();
//   e.preventDefault();
// }

// const totalIssue = () => {
//   const issues = JSON.parse(localStorage.getItem('issues')) || [];
//   document.getElementById("total-issue").innerHTML = issues.length;
// }
// totalIssue();

// const openIssue = () => {
//   let openIssue = 0;
//   const issues = JSON.parse(localStorage.getItem('issues')) || [];
//   issues.forEach(issue => {
//     if (issue.status === "Open") {
//       openIssue += 1;
//       // console.log(openIssue);
//     }
//     document.getElementById('open-issue').innerHTML = openIssue;
//   });
// }
// openIssue();

// const closeIssue = (event, id) => {
//   event.preventDefault();
//   const issues = JSON.parse(localStorage.getItem('issues'));
//   const currentIssue = issues.find(issue => issue.id == id);
//   console.log(currentIssue);
//   currentIssue.status = 'Closed';
//   localStorage.setItem('issues', JSON.stringify(issues));
//   fetchIssues();
//   openIssue();
//   document.getElementById(`issue-title-${id}`).style.textDecoration = "line-through";
// }

// const deleteIssue = (event, id) => {
//   event.preventDefault();
//   const issues = JSON.parse(localStorage.getItem('issues'));
//   const remainingIssues = issues.filter(issue => issue.id != id)
//   document.getElementById(`issue-card-${id}`).style.display = "none";
//   console.log(remainingIssues);
//   localStorage.setItem('issues', JSON.stringify(remainingIssues));
//   totalIssue();
//   openIssue();
// }

// const fetchIssues = () => {
//   const issues = JSON.parse(localStorage.getItem('issues'));
//   const issuesList = document.getElementById('issuesList');
//   issuesList.innerHTML = '';
//   for (var i = 0; i < issues.length; i++) {
//     const { id, description, severity, assignedTo, status } = issues[i];

//     issuesList.innerHTML += `<div class="well" id="issue-card-${id}">
//                               <h6>Issue ID: ${id} </h6>
//                               <p><span class="label label-info"> ${status} </span></p>
//                               <h3 id="issue-title-${id}"> ${description} </h3>
//                               <p><span class="glyphicon glyphicon-time"></span> ${severity}</p>
//                               <p><span class="glyphicon glyphicon-user"></span> ${assignedTo}</p>
//                               <a href="#" onclick="closeIssue(event,${id})" class="btn btn-warning">Close</a>
//                               <a href="#" onclick="deleteIssue(event,${id})" class="btn btn-danger">Delete</a>
//                               </div>`;
//   }
// }


document.getElementById("issueInputForm").addEventListener("submit",submitIssue)

function submitIssue(event){
    const getInputValue=(id)=>document.getElementById(id).value;

    const description=getInputValue("issueDescription");
    const severity=getInputValue("issueSeverity");
    const assignedTo=getInputValue("issueAssignedTo");
    const id = Math.floor(Math.random() * 100000000) + '';
    const status="Open";

    const issue={id,description,severity,assignedTo,status};
    // console.log(issue);
    let issues=[];
    // console.log(issues);
    if(localStorage.getItem("issues")){
        // console.log(localStorage.getItem("issues"))
        issues=JSON.parse(localStorage.getItem("issues"));
        // console.log(issues);
    }
    // console.log(issue);
    issues.push(issue);
    // console.log(issues);
    localStorage.setItem("issues",JSON.stringify(issues));
    document.getElementById("issueInputForm").reset();
    totolIssue();
    openIssue();
    fetchIssues();
    event.preventDefault();
}

function totolIssue(){
    const issues=JSON.parse(localStorage.getItem("issues"));
    document.getElementById("total-issue").innerHTML=issues.length;
}
totolIssue();

function openIssue(){
    let openIssue=0;
    const issues=JSON.parse(localStorage.getItem("issues"));
    issues.forEach(issue => {
        if(issue.status=="Open"){
            openIssue += 1;
        }
        document.getElementById("open-issue").innerHTML=openIssue;
    });
}
openIssue();

function closeIssue(event,id){
    event.preventDefault();
    const issues=JSON.parse(localStorage.getItem("issues"));
    const currentIssue=issues.find(issue=>issue.id==id);
    currentIssue.status="Close";
    console.log(currentIssue.status);
    localStorage.setItem("issues",JSON.stringify(issues));
    fetchIssues();
    openIssue();
    document.getElementById(`issue-title-${id}`).style.textDecoration="line-through" 
}

function deleteIssue(event,id){
    event.preventDefault();
    const issues=JSON.parse(localStorage.getItem("issues"));
    const remainingIssues=issues.filter(issue=>issue.id!=id);
    document.getElementById(`issue-card-${id}`).style.display="none"
    localStorage.setItem("issues",JSON.stringify(remainingIssues));
    totolIssue();
    openIssue();
}

function fetchIssues(){
    const issues=JSON.parse(localStorage.getItem("issues"));
    let issuesList=document.getElementById("issuesList");
    issuesList.innerHTML= '';
    for(var i=0;i<issues.length;i++){
        const{id,description,severity,assignedTo,status}=issues[i];
           issuesList.innerHTML += `<div class="well" id="issue-card-${id}">
                              <h6>Issue ID: ${id} </h6>
                              <p><span class="label label-info"> ${status} </span></p>
                              <h3 id="issue-title-${id}"> ${description} </h3>
                              <p><span class="glyphicon glyphicon-time"></span> ${severity}</p>
                              <p><span class="glyphicon glyphicon-user"></span> ${assignedTo}</p>
                              <a href="#" onclick="closeIssue(event,${id})" class="btn btn-warning">Close</a>
                              <a href="#" onclick="deleteIssue(event,${id})" class="btn btn-danger">Delete</a>
                              </div>`
    }
}
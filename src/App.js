import logo from './logo.svg';
import './App.css';
import Coursces from './Coursces.js';
import Codegen from './Codegen.js';
import axios, { all } from "axios";
import { useState,useRef, } from 'react';
import { v4 as uuidv4 } from 'uuid';


import loading from './assets/loading.svg';

function App() {

  
  const [Data, setData] = useState([])
  const [scr, setscr] = useState(0)
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [pce, setpce] = useState(0)
  const [user, setuser] = useState("")
  const [saba, setsaba] = useState(0)
  const [uq, setuq] = useState(0)
  const [type, settype] = useState(0)
  

  const [alluploads, setalluploads] = useState([])
  const [pointupload, setpointupload] = useState([])
  const [test, settest] = useState("")

  const [ account, s_account] = useState("")
  const [ examtype, s_examtype] = useState("")
  const [ upload, s_upload] = useState("none")
  const [ subject, s_subject] = useState("")
  const [ question, s_question] = useState("")
  const [ qimg, s_qimg] = useState("")
  const [ A, _A] = useState("")
  const [ B, _B] = useState("")
  const [ C, _C] = useState("")
  const [ D, _D] = useState("")
  const [ E, _E] = useState("")
  const [ ANS, s_ANS] = useState("")
  const [ ANS2, s_ANS2] = useState("")
  const [ explanation, s_explanation] = useState("")
  const [ id, s_id] = useState("")

  const [busy1, setbusy1] = useState(0)
  const [busy2, setbusy2] = useState(0)
  const [sumary, setsumary] = useState({})

  const ca = useRef("")
  const cb = useRef("")
  const cc = useRef("")
  const cd = useRef("")
  const ce = useRef("")
  const qa1 = useRef("")
  const qa2 = useRef("")
  const te1 = useRef("")
  const te2 = useRef("")
  const us3 = useRef("")

  const c2a = useRef("")
  const c2b = useRef("")
  const c2c = useRef("")
  const c2d = useRef("")
  const c2e = useRef("")
  const q2a1 = useRef("")
  const q2a2 = useRef("")


   const Invalid = {
    "user":null,
    "password":null,
    "rejected":null,
    "approved":null,
    "paid":null,
    "unpaid":null,
    "total":null
   }
  
   function checkData() { if(Data.some(i=> i.user)===true){return(Data.find(i=> i.user))}else{return(Invalid)} }
   const s =  checkData()
   
  const _upload={
    account:account,
    examtype:examtype,
    upload:upload,
    rejected:"none",
    subject:subject,
    question:question,
    qimg:qimg,
    A:A,
    B:B,
    C:C,
    D:D,
    E:E,
    ANS:ANS,
    sn:parseInt(s.total)+1,
    explanation:explanation,
    id:id
 }
 const _upload2={
   account:account,
   examtype:examtype,
   upload:upload,
   rejected:"none",
   subject:subject,
   question:question,
   qimg:qimg,
   ANS:ANS2,
   sn:parseInt(s.total)+1,
   explanation:explanation,
   id:id
}


  const newser = {
    "user":account,
    "password":"0000",
    "rejected":0,
    "approved":0,
    "paid":0,
    "unpaid":0,
    "total":0
   }
   const Adduser = {
    "user":username,
    "password":"0000",
    "rejected":0,
    "approved":0,
    "paid":0,
    "unpaid":0,
    "total":0
   }


   const current = {
    "user":s.user,
    "password":s.password,
    "rejected":s.rejected,
    "approved":s.approved,
    "paid":s.paid,
    "unpaid":s.unpaid,
    "total":parseInt(s.total)+1
   }

  function _clear() {
    ca.current.value=""
    cb.current.value=""
    cc.current.value=""
    cd.current.value=""
    ce.current.value=""
    qa1.current.value=""
    qa2.current.value=""
    q2a1.current.value=""
    q2a2.current.value=""
    document.getElementById('subject1').value = ""
    document.getElementById('subject2').value = ""
    document.getElementById('subjectX').value = ""
    s_ANS("")
    s_ANS2("")
  }

    
  function keypress(e) {
    if(e.key === "Enter"){mainlog()}
  }

  function mainlog(){
    if(username.length<4||password.length<4){alert("plase fill the blanks")}else{
    if(username==="admin"){
      if(password==="admin"){setscr(1);setuser("Admin");setusername("");_admininitialize()}else{_login()}
    }else{_login()}
  }
}

function Upload() { 
  if(subject ===""){alert("Select subject")}else
  if(question ===""){alert("Add question")}else
  if(A ===""){alert("Add option A")}else
  if(B ===""){alert("Add option B")}else
  if(C ===""){alert("Add option C")}else
  if(D ===""){alert("Add option D")}else
  if(ANS ===""){alert("Add Answer")}else
  if(id ===""){alert("Log in again id Not found")}else{_testupload()}
}

function Upload2() { 
  if(subject ===""){alert("Select subject")}else
  if(question ===""){alert("Add question")}else
  if(ANS2 ===""){alert("Add Answer")}else
  if(id ===""){alert("Log in again id Not found")}else{_testupload2()}
}


function _admininitialize() { 
  setpce(1);
  axios.post("https://pine-butter-puppet.glitch.me/user/")
 .then(function (res){ setalluploads(res.data);setpce(0) } )
 .catch(function (error) { });
}

function _initialize() { 
  setpce(3)
  axios.post("https://pine-butter-puppet.glitch.me/user/find",{"user":username})
 .then(function (res){ if(JSON.stringify(res.data)==="[]"){ _Reinit()}else{setpce(0);setData(res.data)} } )
 .catch(function (error) { });
}
function _add() {
  if(username.length>1){
    axios.post("https://pine-butter-puppet.glitch.me/user/find",{"user":username})
   .then(function (res){ if(JSON.stringify(res.data)==="[]"){ _adduser()}else{alert("this user alredy exist")} } )
   .catch(function (error) { });}
}
function _Reinit() { 
  axios.post("https://pine-butter-puppet.glitch.me/user/add",newser)
 .then(function (res){ setpce(0);setData([newser]) } )
 .catch(function (error) { });
}


  function _login() { 
    setpce(1)
    axios.post("https://pine-butter-puppet.glitch.me/user/find",{"user":username})
   .then(function (res){ if(JSON.stringify(res.data)==="[]"){setpce(0);alert("Incorrect username or password")}else{if(password==="0000"){
    setpce(0);setData(res.data);setscr(2);s_id(uuidv4());s_qimg(Codegen());s_account(res.data[0].user)}else{setpce(0);alert("Incorrect password")} }})
   .catch(function (error) { });
  }
  
  function _adduser() { 
    setpce(1)
    axios.post("https://pine-butter-puppet.glitch.me/user/add",Adduser)
   .then(function (res){ setpce(0);us3.current.value="" })
   .catch(function (error) { })
  }
  function _testupload() { 
    setbusy1(1);_userupdate()
    axios.post("https://pine-butter-puppet.glitch.me/upload/add",_upload)
   .then(function (res){ setbusy1(0);s_id(uuidv4());s_qimg(Codegen());_clear();setuq(0) })
   .catch(function (error) { });
  }
  function _testupload2() { 
    setbusy1(1);_userupdate()
    axios.post("https://pine-butter-puppet.glitch.me/upload/add",_upload2)
   .then(function (res){ setbusy1(0);s_id(uuidv4());s_qimg(Codegen());_clear();setuq(0) })
   .catch(function (error) { });
  }
  function _getpoiint(i) { 
    setpce(1);
    axios.post("https://pine-butter-puppet.glitch.me/upload/find",{account:i})
   .then(function (res){ setpce(0);setpointupload(res.data);setscr(5) })
   .catch(function (error) { });
  }
  
  function _userupdate() { 
    setbusy2(1)
    axios.post("https://pine-butter-puppet.glitch.me/user/up",current)
   .then(function (res){ setbusy2(0);setData([current]) })
   .catch(function (error) { });
  }
  function aprooveall2(i) { 
    setbusy2(1)
    axios.post("https://pine-butter-puppet.glitch.me/user/up",i)
   .then(function (res){ setbusy2(0) })
   .catch(function (error) { });
  }
  function _approveall() { 
    setbusy1(1)
    axios.post("https://pine-butter-puppet.glitch.me/user/find",{user:pointupload[0].account})
   .then(function (res){ setbusy1(0)
    aprooveall2(
      {
        "user":res.data[0].user,
        "password":res.data[0].password,
        "rejected":res.data[0].rejected,
        "approved":pointupload.length,
        "paid":res.data[0].paid,
        "unpaid":res.data[0].unpaid,
        "total":res.data[0].total
      }
    )
    })
   .catch(function (error) { });
  }

  function reverse(i) {
    const revy = [...i].reverse()
    return(revy)
  }
  
function _rejecolor(i) {if(i ==="rejected"){return("ukey_R")}else{return("ukey")}}
function _rejetex(i) {if(i ==="rejected"){return("Rejected")}else{return("")}}
function qkwe(i){if(i===undefined){return ({display:"none"})}else{return({display:"block"})}}
function _scr(i){if(i===scr){return ({display:"block"})}else{return({display:"none"})}}
function _process(i) {if(pce==i){return({display:'block'})}else{return({display:'none'})}}
function _sabrun(i) {if(saba==i){return({display:'block'})}else{return({display:'none'})}}
function _uq(i) {if(uq==i){return({display:'block'})}else{return({display:'none'})}}
function _type(i) {if(type==i){return({display:'block'})}else{return({display:'none'})}}
function chkaprov(i) { if(i==="none"){return({display:'block'})}else{return({display:'none'})} }
function _busy() {if(busy1==1 || busy2===1){return({display:'block'})}else{return({display:'none'})}}

function runtype() { if(type===0){settype(1);/*s_subject("")*/_clear()}else{settype(0);_clear()} }

function _runuq() { setuq(0) }
function _runuq1() { setuq(1) }

function tobal() {
  const arrox = alluploads.map(i=> parseInt(i.total))
  const initialValue = 0;
  const allbal = arrox.reduce((previousValue, currentValue) => previousValue + currentValue,initialValue)
  return(allbal)
}

function toapu() {
  const arrox = alluploads.map(i=> parseInt(i.approved))
  const initialValue = 0;
  const allbal = arrox.reduce((previousValue, currentValue) => previousValue + currentValue,initialValue)
  return(allbal)
}

function fineup() { if(toapu()-aprv()<0){return("0")}else{return(toapu()-aprv())} }

function runapprove(i) { 
  const udateapprove = {
    account:i.account,
    examtype:i.examtype,
    upload:i.upload,
    rejected:"approved",
    subject:i.subject,
    question:i.question,
    qimg:i.qimg,
    A:i.A,
    B:i.B,
    C:i.C,
    D:i.D,
    E:i.E,
    ANS:i.ANS,
    sn:i.sn,
    explanation:i.explanation,
    id:i.id
  }
  
  
  setpce(1);
  axios.post("https://pine-butter-puppet.glitch.me/upload/up",udateapprove)
 .then(function (res){ setpce(0) })
 .catch(function (error) { });

}
function runreject(i) { 
  const udateapprove = {
    account:i.account,
    examtype:i.examtype,
    upload:i.upload,
    rejected:"rejected",
    subject:i.subject,
    question:i.question,
    qimg:i.qimg,
    A:i.A,
    B:i.B,
    C:i.C,
    D:i.D,
    E:i.E,
    ANS:i.ANS,
    sn:i.sn,
    explanation:i.explanation,
    id:i.id
  }
  
  
  setpce(1);
  axios.post("https://pine-butter-puppet.glitch.me/upload/up",udateapprove)
 .then(function (res){  })
 .catch(function (error) { });

 
 axios.post("https://pine-butter-puppet.glitch.me/user/find",{user:i.account})
 .then(function (res){ 
  addrejectd(
    {
      "user":res.data[0].user,
      "password":res.data[0].password,
      "rejected":parseInt(res.data[0].rejected)+1,
      "approved":res.data[0].approved,
      "paid":res.data[0].paid,
      "unpaid":res.data[0].unpaid,
      "total":res.data[0].total
    }
  )
  })
 .catch(function (error) { });

}

function addrejectd(i) { 

  axios.post("https://pine-butter-puppet.glitch.me/user/up",i)
 .then(function (res){ setpce(0) })
 .catch(function (error) { });
}

  const pre = alluploads.map(i=> i.rejected != "0" )
function aprv() { 
  
  const arrox = alluploads.map(i=> parseInt(i.rejected))
  const initialValue = 0;
  const allbal = arrox.reduce((previousValue, currentValue) => previousValue + currentValue,initialValue)
  return(allbal)
  //return(alluploads.sort(i=> i.rejected==="rejected" )) 
}


function _chk(i) {if(i===""){return({display:'none'})}else{return({display:'block'})}}
function _chki(i) {if(i === "0"){return("ita")}else{return("itared")}}

  return (
      <center id="skin" >
        {JSON.stringify(alluploads.pre)}
        <div id="init" onClick={e=> _initialize()} ></div>
        
      <div id="Overcover" style={_process(1)} >
        <div id="processing" >
          <div id="iconsize" ><div id="spin" ><img  id="img" alt="img" src={loading}/></div></div>
          <div id="pronote" >Processing</div>
        </div>
      </div>
      <div id="Overcover" style={_busy()} >
        <div id="processing" >
          <div id="iconsize" ><div id="spin" ><img  id="img" alt="img" src={loading}/></div></div>
          <div id="pronote" >Uploading</div>
        </div>
      </div>

      <div id="Overcover" style={_process(3)} >
        <div id="processing" >
          <div id="iconsize" ><div id="spin" ><img  id="img" alt="img" src={loading}/></div></div>
          <div id="pronote" >Initializing</div>
        </div>
      </div>

    <div id="box" style={_scr(0)} >
      <div>Login</div>
      <div><input placeholder="Username"  onKeyUp={e=> keypress(e)} onChange={e=> setusername(e.currentTarget.value)}/> </div>
      <div><input type="password" placeholder="Password" onKeyUp={e=> keypress(e)} onChange={e=> setpassword(e.currentTarget.value)}/> </div>
      <button  onClick={e=> mainlog()} >Login</button>
    </div>

<div style={_scr(1)} >
  <div>Admin</div>

<div id="box"  >
  <div> <button  id="ukey" onClick={e=> setscr(4)} ><div>All Uploads</div><div>{tobal()}</div></button> </div>
  <div> <button  id="ukey" onClick={e=> setscr(3)} ><div>New User</div><div>Add users</div></button> </div>
  <div> <button  id="ukey"  ><div>{fineup()}</div><div>Approved Uploads</div></button> </div>
  <div> <button  id="ukey"  ><div>{aprv()}</div><div>Marked Rejected</div></button> </div>
</div></div>

<div style={_scr(3)} >
  <div>Admin</div>

<div id="box"  >
      <div>Add user</div>
      <div><input placeholder="Username" ref={us3} onKeyUp={e=> keypress(e)} onChange={e=> setusername(e.currentTarget.value)}/> </div>
      <button  onClick={e=> _add()} >Add</button><button  onClick={e=> setscr(1)} >Back</button>
</div></div>

<div style={_scr(4)} >
  <div>Admin</div>

<div id="box2"  >
  <div><button  onClick={e=> setscr(1)} >Back</button></div>
  {alluploads.map(i=> 
  <div> <button  id="ukey" onClick={e=> {_getpoiint(i.user)}} ><div id={_chki(i.rejected)} >Rejected: {i.rejected}</div><div>Total Uploads: {i.total}</div><div>User: {i.user}</div></button> </div>)}
</div></div>

<div style={_scr(5)} >
  <div>Admin</div>

<div id="box2"  >
  
  <div style={{marginBottom:"30px"}} ><button  onClick={e=> _approveall()} >Approve All</button></div>
  <div id="aiiinbox" >
  <div style={{marginBottom:"10px"}} ><button  onClick={e=> setscr(4)} >Back</button></div>
  {reverse(pointupload).map(i=> 
  <div> 
    <button onClick={e=> {setsumary(i);setscr(6)}} id={_rejecolor(i.rejected)} ><div><span>{pointupload.findIndex(x=> x.id === i.id)+1}</span> {i.subject}</div></button> </div>)}
  </div>
</div></div>

<div style={_scr(6)} >
  <div>Admin</div>

<div id="box2"  >
  <div><div style={{marginBottom:"5px"}} >{sumary.subject}</div>
  <div id="italy" style={{color:"red"}}>{_rejetex(sumary.rejected)} </div>
  <div id="italy">{subject} Question</div>
  <div style={{marginTop:"20px",marginBottom:"10px"}} >{sumary.question}</div>

  <div id="myq" style={qkwe(sumary.A)}>A {sumary.A}</div> 
  <div id="myq" style={qkwe(sumary.B)}>B {sumary.B}</div> 
  <div id="myq" style={qkwe(sumary.C)}>C {sumary.C}</div> 
  <div id="myq" style={qkwe(sumary.D)}>D {sumary.D}</div> 
  <div id="myq" style={qkwe(sumary.E)} >E {sumary.E}</div> 
  <div id="myq2" style={{marginTop:"5px"}} >Answer {sumary.ANS}</div>
  <div id="myq" style={_chk(sumary.explanation)} ><div>Explanation</div> <div>{sumary.explanation}</div></div> 
  </div>
  <div id="anywe" style={{marginTop:"20px"}} ><button  onClick={e=> setscr(5)} >Back</button><button style={chkaprov(sumary.rejected)}  onClick={e=> {setscr(5);runreject(sumary)}} >Mark as rejected</button></div>
</div></div>

    
    <div style={_scr(2)} >
      <div>Uploads</div>
    <div>{Data.map(i=> i.user)}</div>
    
    <div id="box" style={_type(0)} >
      <div> <button  id="ukey" onClick={e=> mainlog()} ><div>0</div><div>Uploads</div></button> <button  id="ukey" onClick={e=> mainlog()} ><div>0</div><div>Rejected</div></button> <button  id="ukey" onClick={e=> mainlog()} ><div>0</div><div>Approved</div></button> </div>
      
<div ><select name="cars" id="subject" onChange={e=> setsaba(e.currentTarget.value)}>
<option value="X" > High school courses</option>
<option value="0" > College Courses</option>
<option value="1" > O Level Courses</option>
<option value="2" > A Level Courses</option>
<option value="3" > University Courses</option>
<option value="4" > Global Certification Test Programmes </option>
<option value="4" > World Current Affair</option>
<option value="6" > Genus Villa Quiz</option>
</select></div>
<div >
<select style={_sabrun("1000")} name="subjectX" id="subjectX" onChange={e=> s_subject(e.currentTarget.value)} ></select>
<select style={_sabrun("3")} name="subjectX" id="subjectX" onChange={e=> s_subject(e.currentTarget.value)} >
  <option  id="bold" value="">University Courses</option>
  <option  value="">-----------------------------------</option>
  <option  value="Accounting">Accounting</option>
  <option  value="Aerospace Engineering">Aerospace Engineering</option>
  <option  value="Agriculture">Agriculture</option>
  <option  value="Anatomy and Physiology">Anatomy and Physiology</option>
  <option  value="Anthropology">Anthropology</option>
  <option  value="Animal husbandry"> Animal husbandry</option>
  <option  value="Applied Mathematics">Applied Mathematics</option>
  <option  value="Architecture">Architecture</option>
  <option  value="Art History">Art History</option>
  <option  value="Astronomy">Astronomy</option>
  <option  value="Biochemistry">Biochemistry</option>
  <option  value="Biology">Biology</option>
  <option  value="Biomedical Engineering">Biomedical Engineering</option>
  <option  value="Business Administration">Business Administration</option>
  <option  value="Chemical Engineering">Chemical Engineering</option>
  <option  value="Chemistry">Chemistry</option>
  <option  value="Civil Engineering">Civil Engineering</option>
  <option  value="Communication Studies">Communication Studies</option>
  <option  value="Computer Science">Computer Science</option>
  <option  value="Criminal Justice">Criminal Justice</option>
  <option  value="Data Science">Data Science</option>
  <option  value="Economics">Economics</option>
  <option  value="Education">Education</option>
  <option  value="Electrical Engineering">Electrical Engineering</option>
  <option  value="English Literature">English Literature</option>
  <option  value="Environmental Science">Environmental Science</option>
  <option  value="Finance">Finance</option>
  <option  value="Fine Arts">Fine Arts</option>
  <option  value="French">French</option>
  <option  value="Geography">Geography</option>
  <option  value="Geology">Geology</option>
  <option  value="Graphic Design">Graphic Design</option>
  <option  value="Hausa">Hausa</option>
  <option  value="Health Sciences">Health Sciences</option>
  <option  value="History">History</option>
  <option  value="Hospitality Management">Hospitality Management</option>
  <option  value="Human Resources">Human Resources</option>
  <option  value="Igbo">Igbo</option>
  <option  value="Industrial Engineering">Industrial Engineering</option>
  <option  value="Information Technology">Information Technology</option>
  <option  value="International Relations">International Relations</option>
  <option  value="Journalism">Journalism</option>
  <option  value="Management">Management</option>
  <option  value="Marketing">Marketing</option>
  <option  value="Mathematics">Mathematics</option>
  <option  value="Mechanical Engineering">Mechanical Engineering</option>
  <option  value="Media Studies">Media Studies</option>
  <option  value="Music">Music</option>
  <option  value="Nursing">Nursing</option>
  <option  value="Nutrition">Nutrition</option>
  <option  value="Philosophy">Philosophy</option>
  <option  value="Physical Education">Physical Education</option>
  <option  value="Physics">Physics</option>
  <option  value="Political Science">Political Science</option>
  <option  value="Psychology">Psychology</option>
  <option  value="Public Health">Public Health</option>
  <option  value="Public Relations">Public Relations</option>
  <option  value="Sociology">Sociology</option>
  <option  value="Zoology">Zoology</option>
  <option  value="Ancient Studies">Ancient Studies</option>
  <option  value="Animal Science">Animal Science</option>
  <option  value="Arabic">Arabic</option>
  <option  value="Archaeology">Archaeology</option>
  <option  value="Astrophysics">Astrophysics</option>
  <option  value="Behavioral Science">Behavioral Science</option>
  <option  value="Biochemistry">Biochemistry</option>
  <option  value="Bioengineering">Bioengineering</option>
  <option  value="Biotechnology">Biotechnology</option>
  <option  value="Business Analytics">Business Analytics</option>
  <option  value="Chemistry Education">Chemistry Education</option>
  <option  value="Child Development">Child Development</option>
  <option  value="Chinese">Chinese</option>
  <option  value="Cognitive Science">Cognitive Science</option>
  <option  value="Communication Disorders">Communication Disorders</option>
  <option  value="Community Health">Community Health</option>
  <option  value="Comparative Literature">Comparative Literature</option>
  <option  value="Computer Engineering">Computer Engineering</option>
  <option  value="Conservation Biology">Conservation Biology</option>
  <option  value="Criminology">Criminology</option>
  <option  value="Cybersecurity">Cybersecurity</option>
  <option  value="Digital Media">Digital Media</option>
  <option  value="Earth Science">Earth Science</option>
  <option  value="Ecology">Ecology</option>
  <option  value="Electrical Engineering Technology"> Electrical Engineering Technology</option>
  <option  value="Elementary"> Elementary</option>
  <option  value="Engineering Management"> Engineering Management</option>
  <option  value="Environmental Engineering"> Environmental Engineering</option>
  <option  value="Environmental Studies"> Environmental Studies</option>
  <option  value="Food Science"> Food Science</option>
  <option  value="Forensic Science"> Forensic Science</option>
  <option  value="Game Design"> Game Design</option>
  <option  value="Genetics"> Genetics</option>
  <option  value="Health Administration"> Health Administration</option>
  <option  value="Health Education"> Health Education</option>
  <option  value="History Education"> History Education</option>
  <option  value="Hospitality and Tourism Management"> Hospitality and Tourism Management</option>
  <option  value="Human Development"> Human Development</option>
  <option  value="Human Services"> Human Services</option>
  <option  value="Industrial Design"> Industrial Design</option>
  <option  value="Information Systems"> Information Systems</option>
  <option  value="Journalism and Mass Communication"> Journalism and Mass Communication</option>
  <option  value="Legal Studies"> Legal Studies</option>
  <option  value="Marine Biology"> Marine Biology</option>
  <option  value="Marketing Communications"> Marketing Communications</option>
  <option  value="Materials Science"> Materials Science</option>
  <option  value="Mechanical Engineering Technology"> Mechanical Engineering Technology</option>
  <option  value="Medicine"> Medicine</option>
  <option  value="Medical Laboratory Science"> Medical Laboratory Science</option>
  <option  value="Microbiology"> Microbiology</option>
  <option  value="Neuroscience"> Neuroscience</option>
  <option  value="Nutrition and Dietetics"> Nutrition and Dietetics</option>
  <option  value="Petroleum Engineering"> Petroleum Engineering</option>
  <option  value="Pharmacy"> Pharmacy</option>
  <option  value="Philosophy"> Philosophy</option>
  <option  value="Plant Science"> Plant Science</option>
  <option  value="Political Science Education"> Political Science Education</option>
  <option  value="Public Administration"> Public Administration</option>
  <option  value="Respiratory Therapy"> Respiratory Therapy</option>
  <option  value="Risk Management and Insurance"> Risk Management and Insurance</option>
  <option  value="Sociology Education"> Sociology Education</option>
  <option  value="Software Engineering"> Software Engineering</option>
  <option  value="Sports Management"> Sports Management</option>
  <option  value="Veterinary Medicine"> Veterinary Medicine</option>
  <option  value="Web Design"> Web Design</option>
  <option  value="Actuarial Science"> Actuarial Science</option>
  <option  value="Agricultural Business"> Agricultural Business</option>
  <option  value="Animal science"> Animal science</option>
  <option  value="Business Economics"> Business Economics</option>
  <option  value="Yoruba"> Yoruba</option>
  </select >
  </div>

<div>
  <div><button onClick={e=> _runuq()} >Question</button> <button onClick={e=> _runuq1()} >Explanation</button> <button onClick={e=> runtype()} >Type</button> </div>
  <div id="italy" style={_uq(0)} >{subject} Question</div><div id="italy" style={_uq(1)} >Explanation</div>
  <div id="italy" >{qimg} <button id="boff" onClick={e=> navigator.clipboard.writeText(qimg)} >Copy</button></div>
  <textarea style={_uq(0)}ref={qa1} id="ikeagwulam" onChange={e=> s_question(e.currentTarget.value)} />
  <textarea style={_uq(1)}ref={qa2} id="ikeagwulam2" onChange={e=> s_explanation(e.currentTarget.value)} />
  <div style={_uq(0)}>A<input placeholder="" id="uinput" ref={ca} onChange={e=> _A(e.currentTarget.value)} /></div>
  <div style={_uq(0)}>B<input placeholder="" id="uinput" ref={cb} onChange={e=> _B(e.currentTarget.value)} /></div>
  <div style={_uq(0)}>C<input placeholder="" id="uinput" ref={cc} onChange={e=> _C(e.currentTarget.value)} /></div>
  <div style={_uq(0)}>D<input placeholder="" id="uinput" ref={cd} onChange={e=> _D(e.currentTarget.value)} /></div>
  <div style={_uq(0)}>E<input placeholder="" id="uinput" ref={ce} onChange={e=> _E(e.currentTarget.value)} /></div>

  <div  style={_uq(0)} ><select name="subject1" id="subject1" onChange={e=> s_ANS(e.currentTarget.value)} >
  <option value="">Answer</option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
  <option value="D">D</option>
  <option value="E">E</option>
</select></div>

<div>
<button onClick={e=> Upload()} id="ubut" >Upload</button>
</div>
  
</div>
    </div>
    
    <div id="box2" style={_type(1)} >
      <div> <button  id="ukey" onClick={e=> mainlog()} ><div>0</div><div>Uploads</div></button>
       <button  id="ukey" onClick={e=> mainlog()} ><div>0</div><div>Rejected</div></button> <button  id="ukey" onClick={e=> mainlog()} ><div>0</div><div>Approved</div></button> </div>
      
<div ><select name="cars" id="subject" onChange={e=> setsaba(e.currentTarget.value)}><option> High school courses</option>
<option value="0" > College Courses</option>
<option value="1" > O Level Courses</option>
<option value="2" > A Level Courses</option>
<option value="3" > University Courses</option>
<option value="4" > Global Certification Test Programmes </option>
<option value="4" > World Current Affair</option>
<option value="6" > Genus Villa Quiz</option>
</select></div>
<div >  
<select style={_sabrun("1000")} name="cars" ref={te1} id="subject" onChange={e=> s_subject(e.currentTarget.value)} ></select>
  <select style={_sabrun("3")} name="cars"  ref={te2} id="subject" onChange={e=> s_subject(e.currentTarget.value)} >
  <option  id="bold" value="">University Courses</option>
  <option  value="">-----------------------------------</option>
  <option  value="Accounting">Accounting</option>
  <option  value="Aerospace Engineering">Aerospace Engineering</option>
  <option  value="Agriculture">Agriculture</option>
  <option  value="Anatomy and Physiology">Anatomy and Physiology</option>
  <option  value="Animal husbandry"> Animal husbandry</option>
  <option  value="Anthropology">Anthropology</option>
  <option  value="Applied Mathematics">Applied Mathematics</option>
  <option  value="Architecture">Architecture</option>
  <option  value="Art History">Art History</option>
  <option  value="Astronomy">Astronomy</option>
  <option  value="Biochemistry">Biochemistry</option>
  <option  value="Biology">Biology</option>
  <option  value="Biomedical Engineering">Biomedical Engineering</option>
  <option  value="Business Administration">Business Administration</option>
  <option  value="Chemical Engineering">Chemical Engineering</option>
  <option  value="Chemistry">Chemistry</option>
  <option  value="Civil Engineering">Civil Engineering</option>
  <option  value="Communication Studies">Communication Studies</option>
  <option  value="Computer Science">Computer Science</option>
  <option  value="Criminal Justice">Criminal Justice</option>
  <option  value="Data Science">Data Science</option>
  <option  value="Economics">Economics</option>
  <option  value="Education">Education</option>
  <option  value="Electrical Engineering">Electrical Engineering</option>
  <option  value="English Literature">English Literature</option>
  <option  value="Environmental Science">Environmental Science</option>
  <option  value="Finance">Finance</option>
  <option  value="Fine Arts">Fine Arts</option>
  <option  value="French">French</option>
  <option  value="Geography">Geography</option>
  <option  value="Geology">Geology</option>
  <option  value="Graphic Design">Graphic Design</option>
  <option  value="Hausa">Hausa</option>
  <option  value="Health Sciences">Health Sciences</option>
  <option  value="History">History</option>
  <option  value="Hospitality Management">Hospitality Management</option>
  <option  value="Human Resources">Human Resources</option>
  <option  value="Igbo">Igbo</option>
  <option  value="Industrial Engineering">Industrial Engineering</option>
  <option  value="Information Technology">Information Technology</option>
  <option  value="International Relations">International Relations</option>
  <option  value="Journalism">Journalism</option>
  <option  value="Management">Management</option>
  <option  value="Marketing">Marketing</option>
  <option  value="Mathematics">Mathematics</option>
  <option  value="Mechanical Engineering">Mechanical Engineering</option>
  <option  value="Media Studies">Media Studies</option>
  <option  value="Music">Music</option>
  <option  value="Nursing">Nursing</option>
  <option  value="Nutrition">Nutrition</option>
  <option  value="Philosophy">Philosophy</option>
  <option  value="Physical Education">Physical Education</option>
  <option  value="Physics">Physics</option>
  <option  value="Political Science">Political Science</option>
  <option  value="Psychology">Psychology</option>
  <option  value="Public Health">Public Health</option>
  <option  value="Public Relations">Public Relations</option>
  <option  value="Sociology">Sociology</option>
  <option  value="Zoology">Zoology</option>
  <option  value="Ancient Studies">Ancient Studies</option>
  <option  value="Animal Science">Animal Science</option>
  <option  value="Arabic">Arabic</option>
  <option  value="Archaeology">Archaeology</option>
  <option  value="Astrophysics">Astrophysics</option>
  <option  value="Behavioral Science">Behavioral Science</option>
  <option  value="Biochemistry">Biochemistry</option>
  <option  value="Bioengineering">Bioengineering</option>
  <option  value="Biotechnology">Biotechnology</option>
  <option  value="Business Analytics">Business Analytics</option>
  <option  value="Chemistry Education">Chemistry Education</option>
  <option  value="Child Development">Child Development</option>
  <option  value="Chinese">Chinese</option>
  <option  value="Cognitive Science">Cognitive Science</option>
  <option  value="Communication Disorders">Communication Disorders</option>
  <option  value="Community Health">Community Health</option>
  <option  value="Comparative Literature">Comparative Literature</option>
  <option  value="Computer Engineering">Computer Engineering</option>
  <option  value="Conservation Biology">Conservation Biology</option>
  <option  value="Criminology">Criminology</option>
  <option  value="Cybersecurity">Cybersecurity</option>
  <option  value="Digital Media">Digital Media</option>
  <option  value="Earth Science">Earth Science</option>
  <option  value="Ecology">Ecology</option>
  <option  value="Electrical Engineering Technology"> Electrical Engineering Technology</option>
  <option  value="Elementary"> Elementary</option>
  <option  value="Engineering Management"> Engineering Management</option>
  <option  value="Environmental Engineering"> Environmental Engineering</option>
  <option  value="Environmental Studies"> Environmental Studies</option>
  <option  value="Food Science"> Food Science</option>
  <option  value="Forensic Science"> Forensic Science</option>
  <option  value="Game Design"> Game Design</option>
  <option  value="Genetics"> Genetics</option>
  <option  value="Health Administration"> Health Administration</option>
  <option  value="Health Education"> Health Education</option>
  <option  value="History Education"> History Education</option>
  <option  value="Hospitality and Tourism Management"> Hospitality and Tourism Management</option>
  <option  value="Human Development"> Human Development</option>
  <option  value="Human Services"> Human Services</option>
  <option  value="Industrial Design"> Industrial Design</option>
  <option  value="Information Systems"> Information Systems</option>
  <option  value="Journalism and Mass Communication"> Journalism and Mass Communication</option>
  <option  value="Legal Studies"> Legal Studies</option>
  <option  value="Marine Biology"> Marine Biology</option>
  <option  value="Marketing Communications"> Marketing Communications</option>
  <option  value="Materials Science"> Materials Science</option>
  <option  value="Mechanical Engineering Technology"> Mechanical Engineering Technology</option>
  <option  value="Medicine"> Medicine</option>
  <option  value="Medical Laboratory Science"> Medical Laboratory Science</option>
  <option  value="Microbiology"> Microbiology</option>
  <option  value="Neuroscience"> Neuroscience</option>
  <option  value="Nutrition and Dietetics"> Nutrition and Dietetics</option>
  <option  value="Petroleum Engineering"> Petroleum Engineering</option>
  <option  value="Pharmacy"> Pharmacy</option>
  <option  value="Philosophy"> Philosophy</option>
  <option  value="Plant Science"> Plant Science</option>
  <option  value="Political Science Education"> Political Science Education</option>
  <option  value="Public Administration"> Public Administration</option>
  <option  value="Respiratory Therapy"> Respiratory Therapy</option>
  <option  value="Risk Management and Insurance"> Risk Management and Insurance</option>
  <option  value="Sociology Education"> Sociology Education</option>
  <option  value="Software Engineering"> Software Engineering</option>
  <option  value="Sports Management"> Sports Management</option>
  <option  value="Veterinary Medicine"> Veterinary Medicine</option>
  <option  value="Web Design"> Web Design</option>
  <option  value="Actuarial Science"> Actuarial Science</option>
  <option  value="Agricultural Business"> Agricultural Business</option>
  <option  value="Animal science"> Animal science</option>
  <option  value="Business Economics"> Business Economics</option>
  <option  value="Yoruba"> Yoruba</option>

  </select >
  </div>

<div>
  <div><button onClick={e=> _runuq()} >Question</button> <button onClick={e=> _runuq1()} >Explanation</button> <button onClick={e=> runtype()} >Type</button> </div>
  <div id="italy" style={_uq(0)} >{subject} Question True / False</div><div id="italy" style={_uq(1)} >Explanation</div>
  <div id="italy"  >{qimg} <button id="boff" onClick={e=> navigator.clipboard.writeText(qimg)} >Copy</button></div>
  <textarea style={_uq(0)}ref={q2a1} id="ikeagwulam" onChange={e=> s_question(e.currentTarget.value)} />
  <textarea style={_uq(1)}ref={q2a2} id="ikeagwulam2" onChange={e=> s_question(e.currentTarget.value)} />

  <div><select name="subject2" id="subject2" onChange={e=> s_ANS2(e.currentTarget.value)} >
  <option value="">Answer</option>
  <option value="true">True</option>
  <option value="false">False</option>
</select></div>

<div>
<button onClick={e=> Upload2()} id="ubut" >Upload</button>
</div>
  
</div>
    </div>

    </div>

    <div></div> 
    </center>
  );
}

export default App;

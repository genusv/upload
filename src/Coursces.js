import React from 'react'

export default function Coursces(s_subject) {
  return (

  <select onChange={e=> s_subject(e.currentTarget.value)} >
  <option  value="">University Courses</option>
  <option  value="Accounting">Accounting</option>
  <option  value="Aerospace Engineering">Aerospace Engineering</option>
  <option  value="Agriculture">Agriculture</option>
  <option  value="Anatomy and Physiology">Anatomy and Physiology</option>
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
  )
}
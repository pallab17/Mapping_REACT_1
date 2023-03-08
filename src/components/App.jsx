import React from "react";
import Card from "./Card";
import contacts from "../contacts";

// pall argument or side dish r kache contacts pg ta ache
// i.e. pall is acting as contacts pg or contacts array
// i.e. contacts.name === pall.id 
function createCard(pall){
  return (
    <Card
    key={pall.id}
    name={pall.name}
    img={pall.imgURL}
    tel={pall.phone}
    email={pall.email}
  />

  );

}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
{/* 
  bar bar jodi card component ta ke likhi 
  tahole time waste aar secondly amra dekhte pacchi je 
  contacts pg r array ta traverse hocche ekta kore element 
  tahole jodi amra for loop type r ekta loop chaliye di then
  ei kaj ta automatically hobe mane traverse ta uatomatically hobe


map r syntax hocche
arrayname.map(function_name of the function jetate amra 
  code likhbo ekta card r jonno aar baki joto gulo card ache contact pg e ota traverse kore 
  debe map function automatically
  map fn === for loop/ any other loop fn )
 
  imp note is while using map
  ekta unique key lagbe like fingerprint password
   key={contact.id} 
   ekhane eita hocche se password

*/}
     {contacts.map(createCard)}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;

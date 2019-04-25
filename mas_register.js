"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author:  Juan Verudzco
   Date:    04.19.19
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/


window.addEventListener("load", function () {
      // run the calcCart command.
      calcCart();

      document.getElementById("regSubmit").onclick = sessionTest;

      document.getElementById("fnBox").onblur = calcCart;

      document.getElementById("lnBox").onblur = calcCart;

      document.getElementById("groupBox").onblur = calcCart;

      document.getElementById("mailBox").onblur = calcCart;

      document.getElementById("phoneBox").onblur = calcCart;

      document.getElementById("banquetBox").onblur = calcCart;

      document.getElementById("sessionBox").onchange = calcCart;

      document.getElementById("mediaCB").onclick = calcCart;
});
//The purpose of this function is to provide a validation test for the conference session selection list.
function sessionTest() {

      if (sessionBox.selectedIndex === -1) {

            sessionBox.setCustomValidity("Select a session package");

      } else {

            sessionBox.setCustomValidity("");

      }

}
// store the informatioon for later use and calculate the total cost
function calcCart() {

      sessionStorage.confName = document.forms.regForm.elements.fnBox.value + " " + document.forms.regForm.elements.lnBox.value;

      sessionStorage.confGroup = document.forms.regForm.elements.groupBox.value;

      sessionStorage.confMail = document.forms.regForm.elements.mailBox.value;

      sessionStorage.confPhone = document.forms.regForm.elements.phoneBox.value;

      sessionStorage.confBanquet = document.forms.regForm.elements.banquetBox.value;

      sessionStorage.confBanquetCost = sessionStorage.confBanquet * 55;

      var selectedIndex = document.getElementById("sessionBox").selectedIndex;

      if (sessionBox.selectedIndex !== -1) {

            sessionStorage.confSession = document.forms.regForm.elements.sessionBox[selectedIndex].text;

            sessionStorage.confSessionCost = document.forms.regForm.elements.sessionBox[selectedIndex].value;

      } else {

            sessionStorage.confSession = "";

            sessionStorage.confSessionCost = 0;

      }
      //checks if the user clicked the media pack which cost 115
      if (document.getElementById("mediaCB").onclick) {

            sessionStorage.confPack = "Yes";

            sessionStorage.confPackCost = 115;

      } else {

            sessionStorage.confPack = "No";

            sessionStorage.confPackCost = 0;

      }

      sessionStorage.confTotal = parseFloat(sessionStorage.confBanquetCost) + parseFloat(sessionStorage.confPackCost) + parseFloat(sessionStorage.confSessionCost)

      writeSessionValues();

}
// Saves the values from the form and places it to the shopping cart section
function writeSessionValues() {

      document.getElementById("regName").textContent = sessionStorage.confName;

      document.getElementById("regGroup").textContent = sessionStorage.confGroup;

      document.getElementById("regEmail").textContent = sessionStorage.confMail;

      document.getElementById("regPhone").textContent = sessionStorage.confPhone;

      document.getElementById("regSession").textContent = sessionStorage.confSession;

      document.getElementById("regBanquet").textContent = sessionStorage.confBanquet;

      document.getElementById("regPack").textContent = sessionStorage.confPack;

      document.getElementById("regTotal").textContent = "$" + sessionStorage.confTotal;

}




let hostelsFees = [
    { 
    SERIAL_NUMBER: "1", 
    HOSTELS : "NDDC HOSTEL ", 
    DEMARCATION: " ", 
    AMOUNT : "35,000.00 ", 
    
  },
  
  { 
    SERIAL_NUMBER: "2", 
    HOSTELS: " HALL 5", 
    DEMARCATION: " ", 
    AMOUNT : "25,000.00", 
     
  },
  
  { 
    SERIAL_NUMBER: "3", 
    HOSTELS : "HALL 6 ", 
    DEMARCATION: "  ", 
    AMOUNT : "40,000.00", 
     
  },
  
  { 
    SERIAL_NUMBER: "4", 
    HOSTELS : "OTHER HOSTELS", 
    DEMARCATION: " ", 
    AMOUNT : "17,000.00 ", 
    
  },
  
  { 
    SERIAL_NUMBER: "5 ", 
    HOSTELS : "FESTUS AKINGBOLA ", 
    DEMARCATION: "3RD FLOOR", 
    AMOUNT : "62,000.00 ", 
    
  },
  
  { 
    SERIAL_NUMBER: "6", 
    HOSTELS : "FESTUS AKINGBOLA ", 
    DEMARCATION: "TOP BUNK ", 
    AMOUNT : " 25,000.00", 
     
  },

  { 
    SERIAL_NUMBER: "7", 
    HOSTELS : " FESTUS AKINGBOLA ", 
    DEMARCATION: " DOWN BUNK", 
    AMOUNT : "36,000.00 ", 
    
  },
  
  { 
    SERIAL_NUMBER: "8", 
    HOSTELS : "INTERCONTINENTAL HOSTEL  ", 
    DEMARCATION: "  ", 
    AMOUNT : " 62,000.00 ", 
    
  },
  
  { 
    SERIAL_NUMBER: "9", 
    HOSTELS : "PG HOSTEL EKENHUAN  ", 
    DEMARCATION: " ", 
    AMOUNT : "50,000.00 ", 
    
  },
  
    
  { 
    SERIAL_NUMBER: "10", 
    HOSTELS : "HALL 7  ", 
    DEMARCATION: " ", 
    AMOUNT : "75,000.00 ", 
     
  },
  
  { 
    SERIAL_NUMBER: "11", 
    HOSTELS : "KEYSTONE HOSTEL   ", 
    DEMARCATION: "  ", 
    AMOUNT : " 95,000.00  ", 
    
  }
  
  ];
  
  function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  let table = document.querySelector("table");
  let data = Object.keys(hostelsFees[0]);
  //generateTableHead(table, data);
  generateTable(table, hostelsFees);
  
  
  
  
  
  
  
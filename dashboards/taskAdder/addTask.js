// Filename: dashboards/taskAdder/addTask.js
// Version 1.1

// See instructions in http://www.github.com/pashute/aidash
// in the file api/dashboards/taskAdder/addTask.dyn.md

function setTasks() { 

// List-Id consts
                  
const IdAkshav = { ord: 1, listid: "MzFob3lWVldhZ3lOT2JQQg", listname: "עכשיו" };
const IdLbitsua = { ord: 2, listid: "bVdvY2V0S1ppNkR2X01ZMA", listname: "לביצוע" };
const IdBkarov = { ord: 3, listid: "MDg1Ndg2OTY5OTkynJA2MTg2NDk6MDw", listname: "בקרוב" };
const IdBoker = { ord: 4, listid: "R2JDVUXhLXVwd1JKMFhnnQ", listname: "בוקר" };
const IdErev = { ord: 5, listid: "Yy1HUEpmTzRBbVp1UjR1YQ", listname: "ערב" };
const IdMatayshehu = { ord: 6, listid: "UFIDVmRtbUxurMfFcEC1URQ", listname: "מתישהו" };
const IdAvoda = { ord: 7, listid: "QTZ5aDUzY0FoaVRUZNfQVA", listname: "עבודה" };
const IdTizkorot = { ord: 8, listid: "ckdJNmdhcVFfV1RpNjYtcg", listname: "תזכורות" };
const IdRayonot = { ord: 9, listid: "Smk3RFBYb0NKRGNZY3ZYbg", listname: "רעיונות ושירים" };
const IdLbinosh = { ord: 10, listid: "aXI5ME5NT01CRGZjNWlsaA", listname: "לבינוש" };
const IdQniyot = { ord: 11, listid: "cE94NTdtETUdFWTJhMUpmag", listname: "קניות" };
const IdLytsia = { ord: 12, listid: "SHU1bUN2R1JkOVJqNG5DNw", listname: "לציאה" };
const IdNiqyonot = { ord: 13, listid: "M0FJaWVaR2RxU1ICNVB3NQ", listname: "נקיון" };


const tasks = [
  { listid: IdTizkorot, listname: 'תזכורות', title: 'test1 Wake up', year: 2026, month: 6, day: 26, hour: 7, minute: 0 },
  { listid: IdTizkorot, listname: 'תזכורות', title: 'test2. bla bla 1', year: 2026, month: 10, day: 7, details: 'bling blong blung' },
  { listid: IdTizkorot, listname: 'תזכורות', title: 'test3', year: 2026, month: 6, day: 26, hour: 9, minute: 0, details: 'Shower' },
  { listid: IdLbitsua, listname: 'לביצוע', title: 'test4 Pay Irena', year: 2026, month: 6, day: 27 },
  { listid: IdAkshav, listname: 'עכשיו', title: 'test 5' },
  { listid: IdAkshav, listname: 'עכשיו', title: 'test 6' },
  { listid: IdMatayshehu, listname: 'מתישהו', title: 'test 7' }
];


processTasks(tasks);

} // end of setTasks

function processTasks(tasks) {
  Logger.log(`Info: Inserting "${tasks.length}" tasks. `);
  tasks.forEach(task => {
    const { listid, listname, title, details, year, month, day, hour, minute } = task;
    const existingTasks = Tasks.Tasks.list(list).items || [];

    // Reverse logic: Check for existence first, then exit if found
    if (existingTasks.some(t => t.title === title)) {
      Logger.log(`Error: Skipped: Task with title "${title}" already exists.`);
      return;
    }

    // Happy path
    let newTask = { title };

    if (details !== undefined)
      newTask.notes = details;
    
    if (year !== undefined) {
      if (hour !== undefined) {
        var dtStr = dateTimeString(year, month, day, hour,minute); 
        var shcedStr =  "Schedule: " + dtstring;
        newTask.due = dtstring; // time will be ignored!!
        if (details === undefined)
          newTask.notes = shcedStr;
        else 
          newTask.notes += ", \n" + schedStr;
      }  
      else // hour === undefined
        newTask.due = dateTimeString(year, month, day, 12, 0) 
    }
    
    Tasks.Tasks.insert(newTask, listid);
    Logger.log(`SUCCESS: Added task "${title}" in "${listname}"`);
  });
} // end of setTasks


// --------- Helper functions --------------------

/// Helper for full date-time strings (e.g., 2026-06-26T04:00:00,000Z)
/// Notes: 
/// Automatically compensates for daylight savings time
/// Replaces hour 24 with 0
function dateTimeString(year, month, day, hour, minute) {
  if (hour == 24) hour = 0; // turn 24 into 0
  const daylight = isSummer(year, month, day, hour);
  const timeString = utcTime(hour, minute, daylight);
  const pad = (num) => String(num).padStart(2, '0');
  return `${year}-${pad(month)}-${pad(day)}${timeString}`;
}

// daylight saving
function isSummer(year, month, day, hour) {
  // 1. Calculate Start (Friday before last Sunday of March)
  const marchLastSunday = new Date(year, 2, 31);
  marchLastSunday.setDate(31 - marchLastSunday.getDay());
  const start = new Date(year, 2, marchLastSunday.getDate() - (marchLastSunday.getDay() + 1) % 7 - 1);
  start.setHours(2, 0, 0, 0);

  // 2. Calculate End (Last Sunday of October)
  const end = new Date(year, 9, 31);
  end.setDate(31 - end.getDay());
  end.setHours(2, 0, 0, 0);

  // 3. Check input date
  const date = new Date(year, month - 1, day, hour);
  return date >= start && date < end;
}

// utcTime gives israeli time at UTC. Examples: 
// utcTime(3, 15, true)  -> "T00:15:00.000Z" (Summer, UTC+3)
// utcTime(3, 15, false) -> "T01:15:00.000Z" (Winter, UTC+2)
function utcTime(hour, minute, isSummer) {
  const offset = isSummer ? 3 : 2;
  
  // Calculate UTC hour and handle day rollover if necessary
  let utcHour = hour - offset;
  
  // Handle cases where subtracting offset goes negative (previous day)
  if (utcHour < 0) {
    utcHour += 24;
  }
  
  const pad = (num) => String(num).padStart(2, '0');
  
  // Returning T00:00:00Z format as required
  return `T${pad(utcHour)}:${pad(minute)}:00.000Z`;
}
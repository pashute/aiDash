### Filename: dashboards/taskAdder/addTask.dyn.md
-  Version: 1.1

# SetTasks dynamic instructions

## Instructions for GEMINI

1. User provides task details in natural language.
2. Analyze tasks for logical errors, missing details, or spelling issues;

- Understand the tasks. clarify if unsure. 
- Be honest, no assumptions or hallucinations.
- Beep user just before last message needing user's attention, but not before doing any long procedure.

3. Default list assignments: For tasks without list specified

- Tasks with both date AND time: -  Put time in notes and default to תזכורות
- All others: לביצוע

4. Summarize before generating code: No headers just data:  
	4.1a Warn in a line if any missing list specifications or other unclear data.  
    4.1b Warn that there is no task with time added via Tasks API.  Instead it will be mentioned only in the details. 
	4.2 sorted by date time, then by list priority - order of the list-id consts below  
	4.3 - {Default/Specified}: {Hebrew list name}, {Task Type: (Todo/Daily/   Reminder)}: {Task name}, {English full dow/Date/Time,(if applicable)}  
	4.4  -   Details on separate line (if available)  
	4.5   Total of tasks.  

e.g.

-----------------------
1. specified: עכשיו, Todo: Fix car, Tuesday, June 28, 2026
Details: carburator and brakes  03-456-7890

2. default: תזכורות, Reminder: Doc appointment, Tomorrow 14:15

Total of 2 tasks.
-----------------------

6. Wait for user approval before providing the final JS array.  
6. JS Array format:  

``` javascript

const tasks = [  
{ listid: {listID}, listname: {listname}, title: {name}, 
  year: {yyyy}, month: {mon}, day: {dy}, hour: {hr}, minute: {mnt},
  {details: {txt}} optional if has details, on separate line  } // hebrewListname in remark
];

e.g.
const tasks = [  
  listid: IdAkshav, listname: 'עכשיו', title: 'myTitle', 
  year: 2026, month: 6, day: 25, hour: 10, minute: 0,
  details: 'text' // עכשיו
];


```
- Reminder: Israeli time in UTC.
- Daily tasks: Date, No time.
- To-do tasks: No date/time fields.


# List ID consts

``` javascript

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


```

# instructions for environment setup 
Remind user to add Google API services  and how. 
Remind user to verify page permissions and how. 

# # reminder api: https://www.google.com/search?q=create+google+task+with+notifications+enabled+in+tasks+api&oq=create+google+task+with+notifications+enabled+in+tasks+api&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIHCAIQABjvBTIHCAMQABjvBTIKCAQQABiABBiiBDIKCAUQABiABBiiBNIBCTE2MjcxajBqOagCBrACAfEFYV38WCDRYiQ&sourceid=chrome&ie=UTF-8
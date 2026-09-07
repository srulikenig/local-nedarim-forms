
var spreadsheetId = '1nMUF0ApcvVo725iYNBTqa0m6rFmb5XF2gbVJw4v1htE';
var sheetName = 'bogrim'; // Replace with your sheet name
var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);


function doGet(e) {
  const { zihuy, taarichLeida, ezrachut } = e.parameter;

  const res = {};
  const resRow = findRowByIdAndDate(zihuy, taarichLeida)
  if (resRow == null) {
    res.status = "error";
    res.message = "בוגר יקר!\n אם אינך מצליח להיכנס למערכת\nיש לפנות למייל a0794692127@gmail.com";

    // res.status = "success";
    // res.data = {
    //   zihuy, taarichLeida, ezrachut
    // }
  } else if (resRow == "taarichNotCorrect") {
    res.status = "error";
    res.message = "מס' הזהות אינו תואם לתאריך הלידה";
  } else {
    res.status = "success";
    res.data = resRow
  }
  return ContentService.createTextOutput(JSON.stringify(res))
}

function doPost(e) {
  try {
    const content = JSON.parse(e.postData.contents);
    const zihuy = content.ezrachut == "israel" ? content.zihuy : content.darkon
    content.zihuy = zihuy;
    let row = findRowNumberByIdAndDate(content.zihuy, content.taarichLeida)

    updateRow(content, row);
    return ContentService.createTextOutput(JSON.stringify({ status: "success", row }))
  } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", error: e }))

  }
}

function findRowByIdAndDate(id, date) {
  var data = sheet.getDataRange().getValues();

  // return data;
  for (var i = 0; i < data.length; i++) {
    if (data[i][4] == id) {
      if (formatDate(data[i][6]) == date) return rowToObj(data[i]);
      else return "taarichNotCorrect"

    }
  }
  return null;
}

function findRowNumberByIdAndDate(id, date) {

  var data = sheet.getDataRange().getValues();

  // return data;
  for (var i = 0; i < data.length; i++) {
    if (data[i][4] == id && formatDate(data[i][6]) == date) {
      return i + 1;
    }
  }
  var lastRow = sheet.getLastRow() + 1;
  return lastRow;
}

function formatDate(dateString) {
  var date = new Date(dateString);
  var day = date.getDate();
  var month = date.getMonth() + 1; // getMonth returns a 0-based month, so we add 1
  var year = date.getFullYear();

  // Ensure day and month are 2-digits by padding with 0 if necessary
  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;

  return day + '/' + month + '/' + year;
}

function rowToObj(row) {
  const obj = {};
  if (row[0]) obj.machzor = row[0];
  if (row[1]) obj.mishpacha = row[1];
  if (row[2]) obj.shem = row[2];
  if (row[3]) obj.ezrachut = row[3];
  // if (row[4]) obj.zehut = row[4];
  if (row[4]) obj.zihuy = row[4];
  if (row[5]) obj.medinaDarkon = row[5];
  if (row[6]) obj.taarichLeida = formatDate(row[6]);
  if (row[7]) obj.taarichLeidaH = row[7];
  if (row[8]) obj.shemIsha = row[8];
  if (row[9]) obj.schumYeladim = row[9];
  if (row[10]) obj.makomLimud = row[10];
  if (row[11]) obj.snifMakomLimud = row[11];
  if (row[12]) obj.country = row[12];
  if (row[13]) obj.city = row[13];
  if (row[14]) obj.rechov = row[14];
  if (row[15]) obj.shchuna = row[15];
  if (row[16]) obj.binyan = row[16];
  if (row[17]) obj.knisa = row[17];
  if (row[18]) obj.dira = row[18];
  if (row[19]) obj.koma = row[19];
  if (row[20]) obj.telephone = row[20];
  if (row[21]) obj.pelephone = row[21];
  if (row[22]) obj.pelephone2 = row[22];
  if (row[23]) obj.pelephoneIsha = row[23];
  if (row[24]) obj.email = row[24];
  if (row[25]) obj.HAmishpacha = row[25];
  if (row[26]) obj.HAshemAv = row[26];
  if (row[27]) obj.HApelephoneAv = row[27];
  if (row[28]) obj.HAshemEm = row[28];
  if (row[29]) obj.HApelephoneEm = row[29];
  if (row[30]) obj.HAtelephone = row[30];
  if (row[31]) obj.HAcountry = row[31];
  if (row[32]) obj.HAcity = row[32];
  if (row[33]) obj.HArechov = row[33];
  if (row[34]) obj.HAbinyan = row[34];
  if (row[35]) obj.HImishpacha = row[35];
  if (row[36]) obj.HIshemAv = row[36];
  if (row[37]) obj.HIpelephoneAv = row[37];
  if (row[38]) obj.HIshemEm = row[38];
  if (row[39]) obj.HIpelephoneEm = row[39];
  if (row[40]) obj.HItelephone = row[40];
  if (row[41]) obj.HIcountry = row[41];
  if (row[42]) obj.HIcity = row[42];
  if (row[43]) obj.HIrechov = row[43];
  if (row[44]) obj.HIbinyan = row[44];
  if (row[46]) obj.column1 = row[46];
  if (row[47]) obj.column2 = row[47];
  if (row[48]) obj.column3 = row[48];
  if (row[49]) obj.column4 = row[49];

  // מכירה (עמודות 51-54)
  if (row[50]) obj.mechiraBechira = row[50];
  if (row[51]) obj.mechiraHeara = row[51];
  if (row[52]) obj.mechiraZeoutBaalKartis = row[52];
  if (row[53]) obj.mechiraTaarich = row[53];

  // הצעות עבודה (עמודות 55-68)
  if (row[54]) obj.avodaMeunyan = row[54];
  if (row[55]) obj.avodaSugAvoda = row[55];
  if (row[56]) obj.avodaTchumTkurot = row[56];
  if (row[57]) obj.avodaTchumAtzmai = row[57];
  if (row[58]) obj.avodaShnotNisayonAtzmai = row[58];
  if (row[59]) obj.avodaTchumRashi = row[59];
  if (row[60]) obj.avodaYeshNisayonRashi = row[60];
  if (row[61]) obj.avodaShnotNisayonRashi = row[61];
  if (row[62]) obj.avodaMakomNisayonRashi = row[62];
  if (row[63]) obj.avodaTchumMishni = row[63];
  if (row[64]) obj.avodaYeshNisayonMishni = row[64];
  if (row[65]) obj.avodaShnotNisayonMishni = row[65];
  if (row[66]) obj.avodaMakomNisayonMishni = row[66];
  if (row[67]) obj.avodaHearot = row[67];

  return obj
}

function updateRow(content, row) {
  sheet.getRange(row, 1).setValue(content.machzor || "");
  sheet.getRange(row, 2).setValue(content.mishpacha || "");
  sheet.getRange(row, 3).setValue(content.shem || "");
  sheet.getRange(row, 4).setValue(content.ezrachut || "");
  sheet.getRange(row, 5).setValue(content.zihuy || "");
  sheet.getRange(row, 6).setValue(content.medinaDarkon || "");
  sheet.getRange(row, 7).setValue(content.taarichLeida || "");
  sheet.getRange(row, 8).setValue(content.taarichLeidaH || "");
  sheet.getRange(row, 9).setValue(content.shemIsha || "");
  sheet.getRange(row, 10).setValue(content.schumYeladim || "");
  sheet.getRange(row, 11).setValue(content.makomLimud || "");
  sheet.getRange(row, 12).setValue(content.snifMakomLimud || "");
  sheet.getRange(row, 13).setValue(content.country || "");
  sheet.getRange(row, 14).setValue(content.city || "");
  sheet.getRange(row, 15).setValue(content.rechov || "");
  sheet.getRange(row, 16).setValue(content.shchuna || "");
  sheet.getRange(row, 17).setValue(content.binyan || "");
  sheet.getRange(row, 18).setValue(content.knisa || "");
  sheet.getRange(row, 19).setValue(content.dira || "");
  sheet.getRange(row, 20).setValue(content.koma || "");
  sheet.getRange(row, 21).setValue(formatPhone(content.telephone));
  sheet.getRange(row, 22).setValue(formatPhone(content.pelephone));
  sheet.getRange(row, 23).setValue(formatPhone(content.pelephone2));
  sheet.getRange(row, 24).setValue(formatPhone(content.pelephoneIsha));
  sheet.getRange(row, 25).setValue(content.email || "");
  sheet.getRange(row, 26).setValue(content.HAmishpacha || "");
  sheet.getRange(row, 27).setValue(content.HAshemAv || "");
  sheet.getRange(row, 28).setValue(formatPhone(content.HApelephoneAv));
  sheet.getRange(row, 29).setValue(content.HAshemEm || "");
  sheet.getRange(row, 30).setValue(formatPhone(content.HApelephoneEm));
  sheet.getRange(row, 31).setValue(formatPhone(content.HAtelephone));
  sheet.getRange(row, 32).setValue(content.HAcountry || "");
  sheet.getRange(row, 33).setValue(content.HAcity || "");
  sheet.getRange(row, 34).setValue(content.HArechov || "");
  sheet.getRange(row, 35).setValue(content.HAbinyan || "");
  sheet.getRange(row, 36).setValue(content.HImishpacha || "");
  sheet.getRange(row, 37).setValue(content.HIshemAv || "");
  sheet.getRange(row, 38).setValue(formatPhone(content.HIpelephoneAv));
  sheet.getRange(row, 39).setValue(content.HIshemEm || "");
  sheet.getRange(row, 40).setValue(formatPhone(content.HIpelephoneEm));
  sheet.getRange(row, 41).setValue(formatPhone(content.HItelephone));
  sheet.getRange(row, 42).setValue(content.HIcountry || "");
  sheet.getRange(row, 43).setValue(content.HIcity || "");
  sheet.getRange(row, 44).setValue(content.HIrechov || "");
  sheet.getRange(row, 45).setValue(content.HIbinyan || "");
  sheet.getRange(row, 46).setValue(getCurrentDateTime());
  sheet.getRange(row, 47).setValue(content.column1 || "");
  sheet.getRange(row, 48).setValue(content.column2 || "");
  sheet.getRange(row, 49).setValue(content.column3 || "");
  sheet.getRange(row, 50).setValue(content.column4 || "");

  // מכירה (עמודות 51-54) - מתעדכן רק כשבוצעה רכישה, כדי לא למחוק רכישה קיימת
  if (content.mechiraBechira) {
    sheet.getRange(row, 51).setValue(content.mechiraBechira);
    sheet.getRange(row, 52).setValue(content.mechiraHeara || "");
    sheet.getRange(row, 53).setValue(content.mechiraZeoutBaalKartis || "");
    sheet.getRange(row, 54).setValue(getCurrentDateTime());
  }

  // הצעות עבודה (עמודות 55-68)
  sheet.getRange(row, 55).setValue(content.avodaMeunyan || "");
  sheet.getRange(row, 56).setValue(content.avodaSugAvoda || "");
  sheet.getRange(row, 57).setValue(content.avodaTchumTkurot || "");
  sheet.getRange(row, 58).setValue(content.avodaTchumAtzmai || "");
  sheet.getRange(row, 59).setValue(content.avodaShnotNisayonAtzmai || "");
  sheet.getRange(row, 60).setValue(content.avodaTchumRashi || "");
  sheet.getRange(row, 61).setValue(content.avodaYeshNisayonRashi || "");
  sheet.getRange(row, 62).setValue(content.avodaShnotNisayonRashi || "");
  sheet.getRange(row, 63).setValue(content.avodaMakomNisayonRashi || "");
  sheet.getRange(row, 64).setValue(content.avodaTchumMishni || "");
  sheet.getRange(row, 65).setValue(content.avodaYeshNisayonMishni || "");
  sheet.getRange(row, 66).setValue(content.avodaShnotNisayonMishni || "");
  sheet.getRange(row, 67).setValue(content.avodaMakomNisayonMishni || "");
  sheet.getRange(row, 68).setValue(content.avodaHearot || "");
}


function formatPhone(num) {
  if (!num) return ""
  return `="${num}"`
}

function getCurrentDateTime() {
  const now = new Date();
  const date = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
  const year = now.getFullYear();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${date}/${month}/${year} ${hours}:${minutes}`;
}